// === App root + scroll reveal + Tweaks ===

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#F97316",
  "primary": "#2563EB",
  "headlineFont": "Space Grotesk",
  "bodyFont": "DM Sans",
  "heroVariant": "default",
  "showWhatsApp": true,
  "stickyCTA": false,
  "cardStyle": "soft"
}/*EDITMODE-END*/;

function useScrollReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.is-visible)");
    if (!("IntersectionObserver" in window)) {
      els.forEach(el => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function applyTweaks(t) {
  const r = document.documentElement;
  r.style.setProperty("--blue-600", t.primary);
  r.style.setProperty("--orange-500", t.accent);
  r.style.setProperty("--font-display", `"${t.headlineFont}", ui-sans-serif, system-ui, sans-serif`);
  r.style.setProperty("--font-body", `"${t.bodyFont}", ui-sans-serif, system-ui, sans-serif`);
}

function StickyMobileCTA() {
  return (
    <div className="sticky-mobile-cta" style={{
      position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 30,
      padding: 12,
      background: "rgba(255,255,255,0.85)",
      backdropFilter: "blur(16px)",
      borderTop: "1px solid var(--line)",
      display: "none",
      gap: 8,
    }}>
      <a href="tel:+8801907080476" className="btn btn-ghost" style={{ flex: 1, justifyContent: "center" }}>
        <Icon.Phone size={14}/> Call
      </a>
      <a href="#contact" className="btn btn-primary" style={{ flex: 2, justifyContent: "center" }}>
        Get free quote
      </a>
      <style>{`
        @media (max-width: 720px) {
          .sticky-mobile-cta { display: flex !important; }
        }
      `}</style>
    </div>
  );
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [openJob, setOpenJob] = React.useState(null);
  const [maintOpen, setMaintOpen] = React.useState(false);
  const [maintSub, setMaintSub] = React.useState(null);

  React.useEffect(() => { applyTweaks(t); }, [t]);

  useScrollReveal();

  const openMaintenance = (sub = null) => {
    setMaintSub(sub);
    setMaintOpen(true);
  };

  return (
    <>
      <Nav/>
      <main>
        <Hero/>
        <Divisions onOpenMaintenance={() => openMaintenance(null)}/>
        <Services onPickSub={(sub) => openMaintenance(sub)}/>
        <TrustedBy/>
        <WhyChooseUs/>
        <About/>
        <SoftwareSolutions/>
        {/* <Projects/> */}
        {/* <Testimonials/> */}
        <EmergencyCTA/>
        {/* <Careers onOpenJob={setOpenJob}/> */}
        <FAQ/>
        <Contact/>
      </main>
      <Footer/>
      {openJob && <JobModal job={openJob} onClose={() => setOpenJob(null)}/>}
      <MaintenanceModal open={maintOpen} initialSub={maintSub} onClose={() => setMaintOpen(false)}/>

      {t.showWhatsApp && <WhatsAppFloat/>}
      {t.stickyCTA && <StickyMobileCTA/>}

      <TweaksPanel title="Tweaks">
        <TweakSection label="Brand">
          <TweakColor
            label="Primary"
            value={t.primary}
            onChange={v => setTweak("primary", v)}
            options={["#2563EB", "#0F766E", "#7C3AED", "#0F172A"]}
          />
          <TweakColor
            label="Accent"
            value={t.accent}
            onChange={v => setTweak("accent", v)}
            options={["#F97316", "#EF4444", "#F59E0B", "#10B981"]}
          />
        </TweakSection>
        <TweakSection label="Type">
          <TweakSelect
            label="Headline font"
            value={t.headlineFont}
            onChange={v => setTweak("headlineFont", v)}
            options={["Space Grotesk", "DM Sans", "JetBrains Mono"]}
          />
          <TweakSelect
            label="Body font"
            value={t.bodyFont}
            onChange={v => setTweak("bodyFont", v)}
            options={["DM Sans", "Space Grotesk"]}
          />
        </TweakSection>
        <TweakSection label="Layout">
          <TweakToggle
            label="WhatsApp float"
            value={t.showWhatsApp}
            onChange={v => setTweak("showWhatsApp", v)}
          />
          <TweakToggle
            label="Sticky mobile CTA"
            value={t.stickyCTA}
            onChange={v => setTweak("stickyCTA", v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
