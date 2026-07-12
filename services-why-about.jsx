// === Services (split: Maintenance & Software), Why Choose Us, About ===

const MAINTENANCE_SERVICES = [
  { key: "plumbing",    title: "Plumbing",             desc: "Repairs, installation, leak detection, and emergency response for residential & commercial pipework.", I: "Plumbing",    accent: "#2563EB", subs: ["maintenance", "renovation"] },
  { key: "electrical",  title: "Electrical",           desc: "Licensed electricians for wiring, panels, lighting, EV charging, and code-compliant installations.",      I: "Electric",    accent: "#F97316", subs: ["maintenance", "renovation"] },
  { key: "hvac",        title: "HVAC",                 desc: "Heating, ventilation, AC service & preventative maintenance plans with IoT monitoring.",                    I: "HVAC",        accent: "#2563EB", subs: ["maintenance", "preservation"] },
  { key: "roofing",     title: "Roofing",              desc: "Inspection, repair, and full replacement — flat, pitched, metal, and commercial membrane systems.",        I: "Roofing",     accent: "#0F172A", subs: ["preservation", "renovation"] },
  { key: "landscape",   title: "Landscaping",          desc: "Grounds keeping, irrigation, seasonal cleanup, and full landscape design for properties at scale.",        I: "Landscape",   accent: "#2563EB", subs: ["preservation", "maintenance"] },
  { key: "carpentry",   title: "Carpentry",            desc: "Framing, finish carpentry, custom millwork, tenant build-outs, and structural repairs.",                   I: "Carpentry",   accent: "#F97316", subs: ["renovation"] },
  { key: "painting",    title: "Painting",             desc: "Interior & exterior painting, surface prep, coatings, and on-brand color systems for portfolios.",         I: "Paint",       accent: "#2563EB", subs: ["preservation", "renovation"] },
  { key: "appliance",   title: "Appliance Repair",     desc: "Same-day diagnostics for refrigeration, laundry, and commercial kitchen equipment.",                       I: "Wrench",      accent: "#0F172A", subs: ["maintenance"] },
  { key: "maintenance", title: "Property Maintenance", desc: "Turnkey plans — preventative, reactive, and seasonal — with one accountable point of contact.",            I: "Maintenance", accent: "#2563EB", subs: ["maintenance", "preservation"] },
  { key: "securing",    title: "Securing & Boarding",  desc: "Lock changes, window boarding, hazard remediation, and pool securing for vacant properties.",               I: "Shield",      accent: "#0F172A", subs: ["preservation"] },
  { key: "debris",      title: "Debris Removal",       desc: "Interior debris removal, exterior trash-out, and bio-hazard cleanup with disposal documentation.",          I: "Wrench",      accent: "#2563EB", subs: ["preservation"] },
  { key: "winterize",   title: "Winterization",        desc: "Pipe draining, antifreeze treatment, HVAC shutoff, and seasonal inspection of vacant assets.",              I: "HVAC",        accent: "#2563EB", subs: ["preservation"] },
  { key: "remodel",     title: "Full Renovation",      desc: "End-to-end kitchen, bath, and unit turnover renovations — coordinated across all trades.",                  I: "Building",    accent: "#F97316", subs: ["renovation"] },
];

const MAINTENANCE_SUBS = [
  {
    key: "preservation",
    title: "Property Preservation",
    short: "Protect &amp; secure",
    desc: "Preserve vacant, distressed, or seasonal properties — securing, winterizing, and stabilizing them against weather and wear.",
    I: "Shield",
    accent: "#0F172A",
  },
  {
    key: "maintenance",
    title: "Property Maintenance",
    short: "Keep it running",
    desc: "Day-to-day upkeep of occupied properties — recurring service plans plus reactive repairs across every trade.",
    I: "Maintenance",
    accent: "#2563EB",
  },
  {
    key: "renovation",
    title: "Property Renovation",
    short: "Improve &amp; upgrade",
    desc: "Upgrade, remodel, and turn over units — full-scope renovations coordinated across every trade we operate.",
    I: "Building",
    accent: "#F97316",
  },
];

const SOFTWARE_SERVICES = [
  { key: "crm", title: "Custom CRM", desc: "Centralize customer data. Automate workflows. Designed for hotels, schools, and service businesses.", I: "Users", accent: "#2563EB" },
  { key: "erp", title: "ERP Solutions", desc: "Enterprise resource planning integrated with your operations. Streamline processes across departments.", I: "Layers", accent: "#F97316" },
  { key: "ecommerce", title: "E-commerce", desc: "Custom online stores with payment integration, inventory management, and scaling capabilities.", I: "ShoppingCart", accent: "#2563EB" },
  { key: "mobile", title: "Mobile Software", desc: "iOS and Android apps built to your exact specifications. Offline-capable, fast, reliable.", I: "Smartphone", accent: "#F97316" },
  { key: "custom", title: "Custom Software", desc: "Bespoke applications and internal tools tailored to your unique workflow and challenges.", I: "Code", accent: "#2563EB" },
  { key: "cybersecurity", title: "Cybersecurity Support", desc: "Security audits, vulnerability management, compliance support, and ongoing threat monitoring.", I: "Shield", accent: "#A78BFA" },
];

function ServiceCard({ s, variant = "light" }) {
  const IconCmp = Icon[s.I];
  const isDark = variant === "dark";
  return (
    <a href="#contact" className="service-card" style={{
      position: "relative",
      background: isDark
        ? "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)"
        : "linear-gradient(180deg, #fff 0%, #FAFBFC 100%)",
      border: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid var(--line)",
      borderRadius: 20,
      padding: 28,
      overflow: "hidden",
      transition: "all .25s ease",
      display: "block",
      backdropFilter: isDark ? "blur(10px)" : "none",
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = "translateY(-6px)";
      e.currentTarget.style.boxShadow = isDark
        ? `0 20px 50px -20px ${s.accent}66, 0 0 0 1px ${s.accent}40`
        : "0 20px 50px -20px rgba(15,23,42,0.2)";
      e.currentTarget.style.borderColor = isDark ? `${s.accent}66` : "var(--line-2)";
      const arrow = e.currentTarget.querySelector('.svc-arrow');
      if (arrow) arrow.style.transform = "translate(4px, -4px)";
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = "";
      e.currentTarget.style.boxShadow = "";
      e.currentTarget.style.borderColor = isDark ? "rgba(255,255,255,0.08)" : "var(--line)";
      const arrow = e.currentTarget.querySelector('.svc-arrow');
      if (arrow) arrow.style.transform = "";
    }}
    >
      <div style={{
        position: "absolute", inset: -1,
        background: `radial-gradient(circle at top right, ${s.accent}${isDark ? '25' : '15'}, transparent 60%)`,
        pointerEvents: "none",
      }}/>
      <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{
          width: 52, height: 52, borderRadius: 14,
          background: `linear-gradient(135deg, ${s.accent}, ${s.accent}dd)`,
          display: "grid", placeItems: "center",
          color: "#fff",
          boxShadow: `0 10px 24px -10px ${s.accent}80`,
        }}>
          <IconCmp size={24} stroke="#fff"/>
        </div>
        <span className="svc-arrow" style={{
          width: 36, height: 36, borderRadius: 10,
          background: isDark ? "rgba(255,255,255,0.06)" : "var(--bg-3)",
          display: "grid", placeItems: "center",
          color: isDark ? "rgba(226,232,240,0.85)" : "var(--ink-2)",
          transition: "transform .25s ease",
        }}>
          <Icon.ArrowUpRight size={16}/>
        </span>
      </div>
      <h3 style={{
        position: "relative", marginTop: 24, fontSize: 22, fontWeight: 600,
        color: isDark ? "#fff" : "var(--navy-900)",
      }}>{s.title}</h3>
      <p style={{
        position: "relative", marginTop: 8, fontSize: 14.5, lineHeight: 1.55,
        color: isDark ? "rgba(203,213,225,0.75)" : "var(--ink-2)",
      }}>{s.desc}</p>
      <div style={{
        position: "relative",
        marginTop: 20, paddingTop: 16,
        borderTop: isDark ? "1px dashed rgba(255,255,255,0.10)" : "1px dashed var(--line)",
        display: "flex", alignItems: "center", gap: 8,
        fontSize: 13, fontWeight: 500,
        color: isDark ? "#93C5FD" : "var(--blue-600)",
        fontFamily: "var(--font-mono)", letterSpacing: ".04em",
      }}>
        LEARN MORE <Icon.ArrowRight size={14}/>
      </div>
    </a>
  );
}

/* === DIVISIONS — top-of-page overlap === */
function Divisions({ onOpenMaintenance }) {
  const pillars = [
    {
      k: "maintenance",
      tag: "Division 01",
      title: "Property Maintenance",
      desc: "Plumbing, electrical, HVAC, roofing — every trade in-house, across preservation, maintenance, and renovation.",
      count: "3 categories",
      accent: "#2563EB",
      action: "scroll",
      href: "#maintenance",
      I: "Building",
    },
    {
      k: "software",
      tag: "Division 02",
      title: "Technology & IT",
      desc: "Managed IT, cloud, custom software, and helpdesk — the platform side of the same business.",
      count: "6 services",
      accent: "#F97316",
      action: "scroll",
      href: "#technology",
      I: "Cpu",
    },
  ];

  const handleClick = (p, e) => {
    if (p.action === "modal") {
      e.preventDefault();
      onOpenMaintenance && onOpenMaintenance();
    }
  };

  return (
    <section style={{
      position: "relative",
      marginTop: -96,
      zIndex: 5,
      paddingBottom: 80,
    }}>
      <div className="container">
        <div className="pillars-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
        }}>
          {pillars.map(p => {
            const IconCmp = Icon[p.I];
            return (
              <a key={p.k} href={p.href || "#"} onClick={e => handleClick(p, e)} className="pillar-card" style={{
                position: "relative",
                padding: 32,
                borderRadius: 24,
                background: `linear-gradient(135deg, #fff 0%, ${p.accent}06 100%)`,
                border: "1px solid var(--line)",
                boxShadow: "0 24px 60px -28px rgba(15,23,42,0.35), 0 4px 12px -4px rgba(15,23,42,0.08)",
                overflow: "hidden",
                transition: "all .3s ease",
                display: "block",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = `0 32px 70px -24px ${p.accent}55, 0 6px 16px -4px rgba(15,23,42,0.12)`;
                e.currentTarget.style.borderColor = `${p.accent}55`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "0 24px 60px -28px rgba(15,23,42,0.35), 0 4px 12px -4px rgba(15,23,42,0.08)";
                e.currentTarget.style.borderColor = "var(--line)";
              }}>
                <div style={{
                  position: "absolute", top: -60, right: -60,
                  width: 240, height: 240, borderRadius: "50%",
                  background: `radial-gradient(circle, ${p.accent}22, transparent 70%)`,
                  filter: "blur(20px)",
                  pointerEvents: "none",
                }}/>
                <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <span style={{
                    fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em",
                    color: p.accent, textTransform: "uppercase",
                    padding: "5px 10px", borderRadius: 999,
                    background: `${p.accent}14`, border: `1px solid ${p.accent}30`,
                  }}>{p.tag}</span>
                  <div style={{
                    width: 64, height: 64, borderRadius: 16,
                    background: `linear-gradient(135deg, ${p.accent}, ${p.accent}cc)`,
                    display: "grid", placeItems: "center", color: "#fff",
                    boxShadow: `0 12px 28px -12px ${p.accent}80`,
                  }}><IconCmp size={30} stroke="#fff"/></div>
                </div>
                <h3 style={{
                  position: "relative", marginTop: 28,
                  fontSize: "clamp(26px, 2.8vw, 34px)", fontWeight: 600,
                  color: "var(--navy-900)",
                }}>{p.title}</h3>
                <p style={{
                  position: "relative", marginTop: 10, maxWidth: 440,
                  fontSize: 15.5, color: "var(--ink-2)", lineHeight: 1.6,
                }}>{p.desc}</p>
                <div style={{
                  position: "relative", marginTop: 24, display: "flex",
                  alignItems: "center", justifyContent: "space-between",
                  paddingTop: 18, borderTop: "1px solid var(--line)",
                }}>
                  <span style={{
                    fontFamily: "var(--font-mono)", fontSize: 12,
                    color: "var(--ink-3)", letterSpacing: ".08em",
                  }}>{p.count.toUpperCase()}</span>
                  <span style={{
                    fontSize: 13, fontWeight: 500, color: p.accent,
                    display: "inline-flex", alignItems: "center", gap: 8,
                  }}>Explore division <Icon.ArrowRight size={14}/></span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
      <style>{`
        @media (max-width: 820px) {
          .pillars-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function Services({ onPickSub }) {
  return (
    <section id="services" className="section" style={{ background: "var(--bg)", paddingTop: 32, paddingBottom: 80 }}>
      <div className="container">
        {/* === Division 01: Maintenance === */}
        <DivisionHeader
          id="maintenance"
          tag="Division 01"
          title="Property Maintenance"
          subtitle="Three service lines — preservation, maintenance, and renovation. Pick one to see what's covered."
          accent="#2563EB"
        />
        {window.SubCategoryGrid
          ? <window.SubCategoryGrid onPick={onPickSub}/>
          : null}
      </div>

      {/* === Division 02: Software (dark band) === */}
      <div id="technology" style={{
        position: "relative",
        marginTop: 80,
        padding: "96px 0",
        background: "linear-gradient(180deg, #0F172A 0%, #0B1220 100%)",
        color: "#E2E8F0",
        overflow: "hidden",
      }}>
        <div className="bg-grid-dark" style={{
          position: "absolute", inset: 0,
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 80%)",
        }}/>
        <div style={{
          position: "absolute", top: "10%", right: "-10%", width: 500, height: 500,
          background: "radial-gradient(circle, rgba(249,115,22,0.25), transparent 65%)",
          filter: "blur(90px)", pointerEvents: "none",
        }}/>
        <div style={{
          position: "absolute", bottom: "-10%", left: "-5%", width: 400, height: 400,
          background: "radial-gradient(circle, rgba(37,99,235,0.30), transparent 65%)",
          filter: "blur(80px)", pointerEvents: "none",
        }}/>
        <div className="container" style={{ position: "relative" }}>
          <DivisionHeader
            tag="Division 02"
            title="Technology & IT Services"
            subtitle="Managed IT, cloud infrastructure, custom software, and helpdesk — built and run by the same operations team."
            accent="#F97316"
            variant="dark"
          />
          <div className="services-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 16,
          }}>
            {SOFTWARE_SERVICES.map(s => <ServiceCard key={s.key} s={s} variant="dark"/>)}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .pillars-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function DivisionHeader({ id, tag, title, subtitle, accent, variant = "light" }) {
  const isDark = variant === "dark";
  return (
    <div id={id} style={{
      display: "flex", alignItems: "flex-end", justifyContent: "space-between",
      gap: 32, flexWrap: "wrap", marginBottom: 40,
      paddingBottom: 24,
      borderBottom: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid var(--line)",
    }}>
      <div style={{ maxWidth: 640 }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          padding: "5px 12px", borderRadius: 999,
          background: isDark ? `${accent}1a` : `${accent}10`,
          border: `1px solid ${accent}35`,
          color: accent,
          fontFamily: "var(--font-mono)", fontSize: 11,
          letterSpacing: ".14em", textTransform: "uppercase",
          marginBottom: 16,
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: "50%",
            background: accent, boxShadow: `0 0 0 4px ${accent}33`,
          }}/>
          {tag}
        </div>
        <h3 style={{
          fontSize: "clamp(28px, 3.4vw, 42px)",
          fontWeight: 600, letterSpacing: "-0.02em",
          color: isDark ? "#fff" : "var(--navy-900)",
        }}>{title}</h3>
        <p style={{
          marginTop: 10, fontSize: 16, lineHeight: 1.6,
          color: isDark ? "rgba(203,213,225,0.8)" : "var(--ink-2)",
        }}>{subtitle}</p>
      </div>
      <a href="#contact" className={isDark ? "btn btn-ghost-dark btn-sm" : "btn btn-ghost btn-sm"}>
        Talk to this team <Icon.ArrowRight size={14}/>
      </a>
    </div>
  );
}

/* === SOFTWARE SOLUTIONS === */
function SoftwareSolutions() {
  const socialProof = [
    {
      client: "Hotel Chain (Miami)",
      quote: "Custom CRM improved booking efficiency 40% in first month.",
      metric: "40% efficiency gain"
    },
    {
      client: "Retail E-commerce",
      quote: "Launched full e-commerce platform in 6 weeks; now processing 500+ orders/day.",
      metric: "500+ orders/day"
    },
  ];

  return (
    <section id="software-solutions" style={{
      position: "relative",
      padding: "96px 0",
      background: "linear-gradient(180deg, #0F172A 0%, #0B1220 100%)",
      color: "#E2E8F0",
      overflow: "hidden",
    }}>
      {/* Background grid + glows */}
      <div className="bg-grid-dark" style={{
        position: "absolute", inset: 0,
        maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 80%)",
        WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 80%)",
      }}/>
      <div style={{
        position: "absolute", top: "10%", right: "-10%", width: 500, height: 500,
        background: "radial-gradient(circle, rgba(249,115,22,0.25), transparent 65%)",
        filter: "blur(90px)", pointerEvents: "none",
      }}/>
      <div style={{
        position: "absolute", bottom: "-10%", left: "-5%", width: 400, height: 400,
        background: "radial-gradient(circle, rgba(37,99,235,0.30), transparent 65%)",
        filter: "blur(80px)", pointerEvents: "none",
      }}/>

      <div className="container" style={{ position: "relative" }}>
        {/* Header */}
        <div style={{
          display: "flex", alignItems: "flex-end", justifyContent: "space-between",
          gap: 32, flexWrap: "wrap", marginBottom: 40,
          paddingBottom: 24,
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}>
          <div style={{ maxWidth: 640 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "5px 12px", borderRadius: 999,
              background: "#F9731620",
              border: "1px solid #F9731655",
              color: "#F97316",
              fontFamily: "var(--font-mono)", fontSize: 11,
              letterSpacing: ".14em", textTransform: "uppercase",
              marginBottom: 16,
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: "50%",
                background: "#F97316", boxShadow: "0 0 0 4px #F9731633",
              }}/>
              Division 02
            </div>
            <h2 style={{
              fontSize: "clamp(32px, 3.6vw, 48px)",
              fontWeight: 600, letterSpacing: "-0.02em",
              color: "#fff", marginBottom: 10,
            }}>Custom Software Solutions</h2>
            <p style={{
              fontSize: 16, lineHeight: 1.6,
              color: "rgba(203,213,225,0.8)",
            }}>
              Fast delivery. Affordable. Custom-built. We build the software your business actually needs.
            </p>
          </div>
          <a href="#contact" className="btn btn-ghost-dark btn-sm">
            Request consultation <Icon.ArrowRight size={14}/>
          </a>
        </div>

        {/* Services Grid */}
        <div className="services-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 16,
          marginBottom: 80,
        }}>
          {SOFTWARE_SERVICES.map(s => <ServiceCard key={s.key} s={s} variant="dark"/>)}
        </div>

        {/* Differentiators */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 16,
        }}>
          {[
            {
              I: "Zap",
              title: "Fast Delivery",
              desc: "Ship in weeks, not quarters. We move fast — agile sprints, quick iterations, no red tape. Your software launches when you need it."
            },
            {
              I: "Chart",
              title: "Affordable",
              desc: "Enterprise quality, SMB pricing. No enterprise tax. Fixed-scope projects. Transparent costs. Quality software you can actually afford."
            },
            {
              I: "Wrench",
              title: "Custom-Built",
              desc: "Not a template. Not a SaaS plugin. Bespoke solutions built to your exact workflow and challenges."
            },
          ].map((d, i) => {
            const IconCmp = Icon[d.I];
            return (
              <div key={i} style={{
                position: "relative",
                padding: 28,
                borderRadius: 20,
                background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
                transition: "all .3s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(249,115,22,0.5)";
                e.currentTarget.style.boxShadow = "0 0 0 1px rgba(249,115,22,0.2), 0 0 60px -10px rgba(249,115,22,0.3)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.boxShadow = "";
                e.currentTarget.style.transform = "";
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: "rgba(249,115,22,0.15)",
                  border: "1px solid rgba(249,115,22,0.25)",
                  display: "grid", placeItems: "center",
                  marginBottom: 20,
                }}>
                  <IconCmp size={22} stroke="#FBBF24"/>
                </div>
                <h3 style={{ fontSize: 20, color: "#fff", fontWeight: 600 }}>{d.title}</h3>
                <p style={{ marginTop: 8, fontSize: 14.5, color: "rgba(203,213,225,0.75)" }}>{d.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Social Proof */}
        <div style={{
          marginTop: 80,
          paddingTop: 80,
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}>
          <div style={{
            textAlign: "center", marginBottom: 40,
          }}>
            <h3 style={{
              fontSize: "clamp(28px, 3.2vw, 40px)",
              fontWeight: 600,
              color: "#fff",
              marginBottom: 12,
            }}>Real Results</h3>
            <p style={{
              fontSize: 16,
              color: "rgba(203,213,225,0.8)",
              maxWidth: 600,
              margin: "0 auto",
            }}>
              We deliver results. Here's what our clients are seeing.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 16,
          }}>
            {socialProof.map((sp, i) => (
              <div key={i} style={{
                position: "relative",
                padding: 28,
                borderRadius: 20,
                background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
              }}>
                <div style={{
                  fontSize: 14,
                  color: "#93C5FD",
                  fontWeight: 600,
                  marginBottom: 12,
                }}>{sp.client}</div>
                <p style={{
                  fontSize: 14.5,
                  color: "rgba(226,232,240,0.9)",
                  lineHeight: 1.6,
                  marginBottom: 16,
                }}>"{sp.quote}"</p>
                <div style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#FBBF24",
                  fontFamily: "var(--font-display)",
                }}>{sp.metric}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Lead CTA */}
        <div style={{
          marginTop: 80,
          padding: "48px 32px",
          borderRadius: 24,
          background: "linear-gradient(135deg, #F97316 0%, #EA580C 100%)",
          textAlign: "center",
        }}>
          <h3 style={{
            fontSize: "clamp(24px, 2.8vw, 36px)",
            fontWeight: 600,
            color: "#fff",
            marginBottom: 12,
          }}>Ready to build your software?</h3>
          <p style={{
            fontSize: 16,
            color: "rgba(255,255,255,0.9)",
            marginBottom: 24,
            maxWidth: 600,
            margin: "0 auto 24px",
          }}>
            Let's talk about your project. Free consultation, no obligation.
          </p>
          <a href="#contact" style={{
            display: "inline-flex",
            padding: "12px 32px",
            borderRadius: 12,
            background: "#fff",
            color: "#EA580C",
            fontWeight: 600,
            textDecoration: "none",
            transition: "all .25s ease",
            alignItems: "center",
            gap: 8,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "";
          }}>
            Get free consultation <Icon.ArrowRight size={16}/>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* === WHY CHOOSE US (dark) === */
function WhyChooseUs() {
  const items = [
    { I: "Shield",  title: "Licensed Professionals", desc: "Every technician carries trade licenses, OSHA certifications, and is bonded & insured." },
    { I: "Bolt",    title: "Fast Emergency Response", desc: "Average 28-minute on-site response across our service territory — round the clock." },
    { I: "Chart",   title: "Transparent Pricing", desc: "Flat-rate quotes before work begins. No surprise invoices, no time-and-material gotchas." },
    { I: "Cpu",     title: "Modern Technology", desc: "IoT-monitored equipment, real-time job tracking, and a portfolio dashboard your team actually uses." },
    { I: "Building",title: "Residential & Commercial", desc: "From single-family homes to multi-site commercial portfolios — same level of service." },
    { I: "Maintenance", title: "Reliable Maintenance Plans", desc: "Preventative programs that reduce reactive calls by an average of 41% in the first year." },
  ];

  return (
    <section style={{
      position: "relative",
      padding: "120px 0",
      background: "linear-gradient(180deg, #0F172A 0%, #0B1220 100%)",
      color: "#E2E8F0",
      overflow: "hidden",
    }}>
      <div className="bg-grid-dark" style={{
        position: "absolute", inset: 0,
        maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 80%)",
        WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 80%)",
      }}/>
      <div style={{
        position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)",
        width: 700, height: 300,
        background: "radial-gradient(ellipse, rgba(37,99,235,0.35), transparent 70%)",
        filter: "blur(60px)", pointerEvents: "none",
      }}/>

      <div className="container" style={{ position: "relative" }}>
        <div className="section-head">
          <div className="eyebrow eyebrow-dark" style={{ margin: "0 auto" }}><span className="dot"/> Why Logic Gate IT</div>
          <h2 style={{ color: "#fff", fontSize: "clamp(36px, 4.4vw, 56px)" }}>Built for portfolios that can't afford downtime.</h2>
          <p style={{ color: "rgba(203,213,225,0.8)" }}>The fundamentals of a great service company — paired with the operational discipline of modern SaaS.</p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 16,
        }}>
          {items.map((it, i) => {
            const IconCmp = Icon[it.I];
            return (
              <div key={i} className="why-card" style={{
                position: "relative",
                padding: 28,
                borderRadius: 20,
                background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
                transition: "all .3s ease",
                overflow: "hidden",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(96,165,250,0.5)";
                e.currentTarget.style.boxShadow = "0 0 0 1px rgba(96,165,250,0.2), 0 0 60px -10px rgba(37,99,235,0.4)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.boxShadow = "";
                e.currentTarget.style.transform = "";
              }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: "rgba(37,99,235,0.15)",
                  border: "1px solid rgba(96,165,250,0.25)",
                  display: "grid", placeItems: "center",
                  marginBottom: 20,
                }}>
                  <IconCmp size={22} stroke="#93C5FD"/>
                </div>
                <h3 style={{ fontSize: 20, color: "#fff", fontWeight: 600 }}>{it.title}</h3>
                <p style={{ marginTop: 8, fontSize: 14.5, color: "rgba(203,213,225,0.75)" }}>{it.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* === ABOUT === */
function About() {
  const milestones = [
    { year: "2023", t: "Founded Logic Gate IT as a software development shop." },
    { year: "2024", t: "Launched first major CRM for hospitality clients; expanded to e-commerce." },
    { year: "2025", t: "Added ERP solutions and cybersecurity support; growing team." },
    { year: "2026", t: "Now serving 50+ SMBs and enterprises across multiple industries." },
  ];

  return (
    <section id="about" className="section" style={{ background: "var(--bg-2)" }}>
      <div className="container">
        <div className="about-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}>
          {/* LEFT — team image placeholder + cards */}
          <div style={{ position: "relative" }}>
            <div className="placeholder" style={{
              aspectRatio: "4/5",
              borderRadius: 24,
              fontSize: 13,
            }}>
              [ TEAM PHOTO ]<br/>
              <span style={{ opacity: .5, marginTop: 6 }}>Logic Gate IT technicians on-site, 4:5</span>
            </div>

            {/* Achievement card */}
            <div className="card" style={{
              position: "absolute",
              bottom: -28, right: -20,
              padding: 18,
              boxShadow: "var(--shadow-lg)",
              maxWidth: 240,
              background: "#fff",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: "linear-gradient(135deg, #F97316, #EA580C)",
                  display: "grid", placeItems: "center",
                }}><Icon.Sparkle size={18} stroke="#fff"/></div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>50+ Projects</div>
                  <div style={{ fontSize: 11, color: "var(--ink-3)", fontFamily: "var(--font-mono)" }}>Delivered</div>
                </div>
              </div>
              <div style={{ fontSize: 11, color: "var(--ink-3)" }}>Trusted by SMBs & enterprises</div>
            </div>

            <div className="card" style={{
              position: "absolute",
              top: -20, left: -16,
              padding: 14,
              boxShadow: "var(--shadow-lg)",
              background: "var(--navy-900)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.08)",
            }}>
              <div style={{ fontSize: 11, color: "rgba(148,163,184,0.8)", fontFamily: "var(--font-mono)", letterSpacing: ".08em" }}>FOUNDED 2023</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600, marginTop: 2 }}>3 years</div>
              <div style={{ fontSize: 11, color: "rgba(148,163,184,0.8)" }}>of building great software</div>
            </div>
          </div>

          {/* RIGHT — story */}
          <div>
            <div className="eyebrow"><span className="dot"/> About Logic Gate IT</div>
            <h2 style={{ fontSize: "clamp(32px, 3.6vw, 48px)", marginTop: 20 }}>
              Three years building software that actually works.
            </h2>
            <p style={{ fontSize: 15, color: "var(--blue-600)", fontFamily: "var(--font-mono)", marginTop: 12, letterSpacing: "0.04em" }}>
              "Efficiently active, Effectively creative."
            </p>
            <p style={{ color: "var(--ink-2)", fontSize: 17, marginTop: 16, lineHeight: 1.65 }}>
              We started as a lean software development team solving real problems for hospitality, retail, and enterprise clients.
              Three years later, we've built CRMs, e-commerce platforms, ERPs, and mobile apps — all fast, all affordable, all custom.
              We don't do templates. We solve your problem.
            </p>

            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16,
              marginTop: 32,
            }}>
              {[
                { I: "Zap", t: "Fast delivery", d: "We ship in weeks. Agile process, quick iterations." },
                { I: "Sparkle", t: "Quality you trust", d: "Real support after launch. We stand behind our code." },
              ].map((b, i) => {
                const IconCmp = Icon[b.I];
                return (
                  <div key={i} style={{
                    padding: 18, borderRadius: 14,
                    background: "#fff", border: "1px solid var(--line)",
                  }}>
                    <IconCmp size={20} stroke="var(--blue-600)"/>
                    <div style={{ fontWeight: 600, marginTop: 10, fontSize: 15 }}>{b.t}</div>
                    <div style={{ fontSize: 13, color: "var(--ink-2)", marginTop: 2 }}>{b.d}</div>
                  </div>
                );
              })}
            </div>

            {/* Timeline */}
            <div style={{ marginTop: 40 }}>
              <div style={{ fontSize: 12, fontFamily: "var(--font-mono)", letterSpacing: ".12em", color: "var(--ink-3)", textTransform: "uppercase", marginBottom: 20 }}>
                Milestones
              </div>
              <div style={{ position: "relative", paddingLeft: 22 }}>
                <div style={{ position: "absolute", left: 5, top: 6, bottom: 6, width: 2, background: "var(--line-2)" }}/>
                {milestones.map((m, i) => (
                  <div key={i} style={{ position: "relative", marginBottom: 16, display: "flex", gap: 16, alignItems: "baseline" }}>
                    <span style={{
                      position: "absolute", left: -22, top: 6,
                      width: 12, height: 12, borderRadius: "50%",
                      background: i === milestones.length - 1 ? "var(--orange-500)" : "var(--blue-600)",
                      border: "2px solid var(--bg-2)",
                      boxShadow: `0 0 0 3px ${i === milestones.length - 1 ? 'rgba(249,115,22,.2)' : 'rgba(37,99,235,.18)'}`,
                    }}/>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 500, color: "var(--navy-900)", minWidth: 50 }}>{m.year}</span>
                    <span style={{ fontSize: 14.5, color: "var(--ink-2)" }}>{m.t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 64px !important; }
        }
      `}</style>
    </section>
  );
}

window.Divisions = Divisions;
window.Services = Services;
window.SoftwareSolutions = SoftwareSolutions;
window.WhyChooseUs = WhyChooseUs;
window.About = About;
window.MAINTENANCE_SERVICES = MAINTENANCE_SERVICES;
window.MAINTENANCE_SUBS = MAINTENANCE_SUBS;
window.ServiceCard = ServiceCard;
