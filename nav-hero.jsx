// === Nav, Hero, TrustedBy ===

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Software", href: "#software" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 50,
        transition: "all .25s ease",
        background: scrolled ? "rgba(15,23,42,0.72)" : "rgba(15,23,42,0)",
        backdropFilter: scrolled ? "saturate(180%) blur(18px)" : "none",
        WebkitBackdropFilter: scrolled ? "saturate(180%) blur(18px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
      }}
    >
      <div className="container" style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: scrolled ? "14px 32px" : "20px 32px",
        transition: "padding .25s ease",
      }}>
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: 10, color: "#fff" }}>
          <Icon.Logo size={32}/>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 19, letterSpacing: "-0.01em" }}>
            Logic Gate IT
          </span>
        </a>

        <nav className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} style={{
              color: "rgba(226,232,240,0.78)",
              fontSize: 14, fontWeight: 500,
              padding: "8px 14px", borderRadius: 8,
              transition: "color .15s, background .15s",
            }}
            onMouseEnter={e => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "rgba(226,232,240,0.78)"; e.currentTarget.style.background = "transparent"; }}
            >{l.label}</a>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <a href="tel:+18005551234" className="phone-link" style={{
            display: "flex", alignItems: "center", gap: 8,
            color: "rgba(226,232,240,0.85)", fontSize: 14, fontWeight: 500,
            padding: "8px 12px",
          }}>
            <Icon.Phone size={16}/> <span className="phone-text">1-800-555-LGIT</span>
          </a>
          <a href="#contact" className="btn btn-primary btn-sm">
            Get Free Quote <Icon.ArrowRight size={14}/>
          </a>
          <button
            aria-label="Open menu"
            className="nav-burger"
            onClick={() => setOpen(true)}
            style={{
              display: "none", background: "transparent",
              border: "1px solid rgba(255,255,255,0.15)", color: "#fff",
              borderRadius: 8, padding: 8,
            }}
          ><Icon.Menu size={20}/></button>
        </div>
      </div>

      {open && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 60,
          background: "rgba(15,23,42,0.96)",
          backdropFilter: "blur(16px)",
          padding: "24px",
          display: "flex", flexDirection: "column",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#fff" }}>
              <Icon.Logo size={28}/>
              <strong style={{ fontFamily: "var(--font-display)" }}>Logic Gate IT</strong>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close" style={{
              background: "transparent", border: "1px solid rgba(255,255,255,0.15)",
              color: "#fff", borderRadius: 8, padding: 8,
            }}><Icon.X size={20}/></button>
          </div>
          <nav style={{ display: "flex", flexDirection: "column", gap: 4, marginTop: 32 }}>
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
                color: "#E2E8F0", fontSize: 24, fontFamily: "var(--font-display)",
                padding: "16px 0", borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}>{l.label}</a>
            ))}
          </nav>
          <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary" style={{ marginTop: 24 }}>
            Get Free Quote <Icon.ArrowRight size={16}/>
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 980px) {
          .nav-desktop { display: none !important; }
          .nav-burger { display: inline-flex !important; }
          .phone-link { display: none !important; }
        }
        @media (max-width: 560px) {
          .btn.btn-sm.btn-primary span.hide-sm { display: none; }
        }
      `}</style>
    </header>
  );
}

/* === HERO === */
function Hero() {
  return (
    <section id="top" style={{
      position: "relative",
      paddingTop: 160, paddingBottom: 120,
      background: "linear-gradient(180deg, #0B1220 0%, #0F172A 60%, #0F172A 100%)",
      color: "#E2E8F0",
      overflow: "hidden",
    }}>
      {/* Background grid + glows */}
      <div className="bg-grid-dark" style={{
        position: "absolute", inset: 0,
        maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, #000 30%, transparent 80%)",
        WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, #000 30%, transparent 80%)",
      }}/>
      <div style={{
        position: "absolute", top: -120, left: "-10%", width: 540, height: 540,
        background: "radial-gradient(circle, #2563EB 0%, transparent 65%)",
        filter: "blur(80px)", opacity: .45, pointerEvents: "none",
      }}/>
      <div style={{
        position: "absolute", bottom: -160, right: "-8%", width: 480, height: 480,
        background: "radial-gradient(circle, #F97316 0%, transparent 65%)",
        filter: "blur(80px)", opacity: .25, pointerEvents: "none",
      }}/>

      <div className="container" style={{ position: "relative" }}>
        <div className="hero-grid" style={{
          display: "grid",
          gridTemplateColumns: "1.05fr 1fr",
          gap: 56, alignItems: "center",
        }}>
          {/* LEFT */}
          <div>
            <div className="eyebrow eyebrow-dark reveal is-visible">
              <span className="dot"/> Property Maintenance × Technology
            </div>
            <h1 className="reveal is-visible reveal-delay-1" style={{
              fontSize: "clamp(40px, 5.8vw, 78px)",
              marginTop: 24,
              color: "#fff",
              fontWeight: 600,
            }}>
              Integrated <span style={{
                background: "linear-gradient(135deg, #60A5FA 0%, #93C5FD 60%, #F97316 130%)",
                WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
              }}>Property &amp; Technology</span> Solutions
            </h1>
            <p className="reveal is-visible reveal-delay-2" style={{
              marginTop: 24, fontSize: 19, lineHeight: 1.6,
              color: "rgba(203,213,225,0.85)", maxWidth: 560,
            }}>
              Professional plumbing, electrical, HVAC, roofing, landscaping, maintenance,
              and software support — engineered for residential and commercial properties at scale.
            </p>

            <div className="reveal is-visible reveal-delay-3" style={{
              display: "flex", gap: 12, marginTop: 36, flexWrap: "wrap",
            }}>
              <a href="#contact" className="btn btn-primary">
                Get Free Quote <Icon.ArrowRight size={16}/>
              </a>
              <a href="#emergency" className="btn btn-ghost-dark">
                <Icon.Headset size={16}/> Emergency Support
              </a>
            </div>

            {/* Trust badges */}
            <div className="reveal is-visible reveal-delay-3" style={{
              display: "flex", gap: 24, marginTop: 48, flexWrap: "wrap",
              paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.08)",
            }}>
              {[
                { k: "14+", v: "Years experience" },
                { k: "24/7", v: "Emergency support" },
                { k: "ISO", v: "9001 certified" },
              ].map(b => (
                <div key={b.k}>
                  <div style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 28, fontWeight: 600, color: "#fff",
                    letterSpacing: "-0.02em",
                  }}>{b.k}</div>
                  <div style={{ fontSize: 13, color: "rgba(148,163,184,0.85)" }}>{b.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — composed dashboard mock */}
          <HeroVisual/>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}

function HeroVisual() {
  const [tick, setTick] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setTick(t => (t + 1) % 60), 1000);
    return () => clearInterval(id);
  }, []);

  // Spark-line data
  const points = Array.from({ length: 24 }, (_, i) => {
    const v = 30 + 18 * Math.sin(i / 3 + tick / 6) + (i / 24) * 14;
    return [i * (240 / 23), 80 - v / 1.4];
  });
  const path = points.map((p, i) => (i === 0 ? `M ${p[0]} ${p[1]}` : `L ${p[0]} ${p[1]}`)).join(" ");

  return (
    <div className="reveal is-visible reveal-delay-2" style={{
      position: "relative",
      minHeight: 540,
      perspective: 1200,
    }}>
      {/* Main dashboard card */}
      <div className="glass" style={{
        position: "absolute",
        right: 0, top: 30,
        width: "92%", maxWidth: 520,
        padding: 22,
        transform: "rotateX(4deg) rotateY(-6deg)",
        boxShadow: "0 40px 80px -20px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Icon.Building size={16} stroke="#93C5FD"/>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#E2E8F0" }}>Property Operations</span>
          </div>
          <span style={{ fontSize: 11, color: "#94A3B8", display: "flex", alignItems: "center", gap: 6, fontFamily: "var(--font-mono)" }}>
            <span className="live-dot"/> LIVE
          </span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
          <Stat label="Active sites" value="142" delta="+8"/>
          <Stat label="Open tickets" value="07" delta="-3" good/>
        </div>

        {/* Chart */}
        <div style={{
          background: "rgba(15,23,42,0.6)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 14, padding: 14,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
            <span style={{ fontSize: 11, color: "#94A3B8", fontFamily: "var(--font-mono)", letterSpacing: ".1em" }}>RESPONSE TIME · 24H</span>
            <span style={{ fontSize: 11, color: "#34D399" }}>▲ 12% faster</span>
          </div>
          <svg viewBox="0 0 240 80" width="100%" height="80">
            <defs>
              <linearGradient id="spark-area" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="#3B82F6" stopOpacity=".35"/>
                <stop offset="1" stopColor="#3B82F6" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path d={`${path} L 240 80 L 0 80 Z`} fill="url(#spark-area)"/>
            <path d={path} fill="none" stroke="#60A5FA" strokeWidth="1.6"/>
          </svg>
        </div>

        {/* Service rows */}
        <div style={{ marginTop: 14, display: "grid", gap: 8 }}>
          {[
            { c: "#60A5FA", t: "HVAC service · Building A · Floor 12", s: "In progress" },
            { c: "#F97316", t: "Plumbing call · 4521 Pine St", s: "Tech assigned" },
            { c: "#34D399", t: "Electrical inspection complete", s: "Closed" },
          ].map((r,i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 10,
              padding: "10px 12px",
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.05)",
              borderRadius: 10,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: r.c, boxShadow: `0 0 0 4px ${r.c}22` }}/>
              <span style={{ fontSize: 12, color: "#CBD5E1", flex: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{r.t}</span>
              <span style={{ fontSize: 10, color: "#94A3B8", fontFamily: "var(--font-mono)" }}>{r.s}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating ticket card */}
      <div className="glass" style={{
        position: "absolute", top: 0, left: 0,
        padding: "14px 18px", display: "flex", gap: 12, alignItems: "center",
        transform: "rotateY(8deg) rotateX(-2deg)",
        boxShadow: "0 20px 50px -10px rgba(0,0,0,0.4)",
        animation: "float 6s ease-in-out infinite",
      }}>
        <div style={{
          width: 40, height: 40, borderRadius: 10,
          background: "linear-gradient(135deg, #F97316, #EA580C)",
          display: "grid", placeItems: "center",
          boxShadow: "0 8px 20px -6px rgba(249,115,22,.5)",
        }}>
          <Icon.Bolt size={20} stroke="#fff"/>
        </div>
        <div>
          <div style={{ fontSize: 11, color: "#94A3B8", fontFamily: "var(--font-mono)", letterSpacing: ".08em" }}>EMERGENCY · 02:14</div>
          <div style={{ fontSize: 13, color: "#fff", fontWeight: 600 }}>Tech dispatched · ETA 8 min</div>
        </div>
      </div>

      {/* Floating tech card */}
      <div className="glass" style={{
        position: "absolute", bottom: 20, left: 10,
        padding: "12px 16px",
        display: "flex", gap: 10, alignItems: "center",
        transform: "rotateY(8deg) rotateX(4deg)",
        boxShadow: "0 20px 50px -10px rgba(0,0,0,0.4)",
        animation: "float 7s ease-in-out infinite reverse",
      }}>
        <div style={{ display: "flex" }}>
          {["#60A5FA", "#F97316", "#34D399"].map((c, i) => (
            <div key={i} style={{
              width: 28, height: 28, borderRadius: "50%",
              background: c, marginLeft: i ? -8 : 0,
              border: "2px solid #0F172A",
              fontFamily: "var(--font-mono)", fontSize: 11, color: "#fff",
              display: "grid", placeItems: "center", fontWeight: 600,
            }}>{["JK","ML","RP"][i]}</div>
          ))}
        </div>
        <div>
          <div style={{ fontSize: 13, color: "#fff", fontWeight: 600 }}>12 techs online</div>
          <div style={{ fontSize: 11, color: "#94A3B8" }}>across 4 regions</div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: rotateY(8deg) rotateX(-2deg) translateY(0); }
          50% { transform: rotateY(8deg) rotateX(-2deg) translateY(-10px); }
        }
      `}</style>
    </div>
  );
}

function Stat({ label, value, delta, good }) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.06)",
      borderRadius: 12, padding: "12px 14px",
    }}>
      <div style={{ fontSize: 11, color: "#94A3B8", fontFamily: "var(--font-mono)", letterSpacing: ".08em" }}>{label.toUpperCase()}</div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginTop: 4 }}>
        <span style={{ fontSize: 24, fontFamily: "var(--font-display)", color: "#fff", fontWeight: 600 }}>{value}</span>
        <span style={{ fontSize: 11, color: good ? "#34D399" : "#60A5FA", fontFamily: "var(--font-mono)" }}>{delta}</span>
      </div>
    </div>
  );
}

/* === TRUSTED BY === */
function TrustedBy() {
  const stats = [
    { k: "500+", v: "Projects completed", i: <Icon.Layers size={22} stroke="#2563EB"/> },
    { k: "24 / 7", v: "Emergency response", i: <Icon.Clock size={22} stroke="#2563EB"/> },
    { k: "98%", v: "Client retention", i: <Icon.Sparkle size={22} stroke="#2563EB"/> },
    { k: "< 30m", v: "Avg. response time", i: <Icon.Zap size={22} stroke="#2563EB"/> },
  ];

  const logos = [
    "Meridian Realty", "Cascade Commercial", "Northwind Group",
    "Arbor Capital", "Lighthouse REIT", "Pacific Holdings",
    "Crestpoint Living", "Beacon Industrial",
  ];

  return (
    <section className="section-tight" style={{ background: "var(--bg-2)", borderBottom: "1px solid var(--line)" }}>
      <div className="container">
        <p style={{
          textAlign: "center", color: "var(--ink-3)",
          fontFamily: "var(--font-mono)", fontSize: 12,
          letterSpacing: ".18em", textTransform: "uppercase",
          marginBottom: 32,
        }}>Trusted by 200+ property managers, REITs &amp; facility teams</p>

        <div className="marquee" style={{ marginBottom: 64 }}>
          <div className="marquee-track">
            {[...logos, ...logos].map((l, i) => (
              <div key={i} style={{
                fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 500,
                color: "var(--ink-3)", whiteSpace: "nowrap",
                display: "flex", alignItems: "center", gap: 10,
              }}>
                <span style={{
                  width: 10, height: 10, borderRadius: 2,
                  background: i % 3 === 0 ? "var(--blue-600)" : i % 3 === 1 ? "var(--orange-500)" : "var(--navy-900)",
                  opacity: .7,
                }}/>
                {l}
              </div>
            ))}
          </div>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16,
        }}>
          {stats.map((s, i) => (
            <div key={i} className="card" style={{
              padding: 28,
              background: "#fff",
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: "rgba(37,99,235,0.08)",
                display: "grid", placeItems: "center",
                marginBottom: 20,
              }}>{s.i}</div>
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: 40, fontWeight: 600,
                letterSpacing: "-0.02em",
                color: "var(--navy-900)",
              }}>{s.k}</div>
              <div style={{ fontSize: 14, color: "var(--ink-2)", marginTop: 4 }}>{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Nav = Nav;
window.Hero = Hero;
window.TrustedBy = TrustedBy;
