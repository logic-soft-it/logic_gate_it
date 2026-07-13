// === Software Solutions, Projects, Testimonials ===

function SoftwareSolutions() {
  const features = [
    { I: "Building", t: "Property Management", d: "Unified portfolio view, work orders, tenant comms." },
    { I: "Headset",  t: "IT Support",          d: "Managed helpdesk, on-site dispatch, escalations." },
    { I: "Cloud",    t: "Cloud Infrastructure", d: "Scalable hosting, security hardening, backups." },
    { I: "Layers",   t: "CRM / ERP Integration", d: "Bi-directional sync with Yardi, AppFolio, Salesforce." },
    { I: "Wrench",   t: "Maintenance Tracking", d: "SLA dashboards, asset history, predictive alerts." },
    { I: "Chart",    t: "Reporting Dashboards", d: "Executive-ready exports & live operational metrics." },
  ];

  return (
    <section id="software" style={{
      position: "relative",
      padding: "120px 0",
      background: "linear-gradient(180deg, #0B1220 0%, #0F172A 50%, #0B1220 100%)",
      color: "#E2E8F0",
      overflow: "hidden",
    }}>
      <div className="bg-grid-dark" style={{
        position: "absolute", inset: 0,
        maskImage: "radial-gradient(ellipse 90% 70% at 50% 40%, #000 30%, transparent 80%)",
        WebkitMaskImage: "radial-gradient(ellipse 90% 70% at 50% 40%, #000 30%, transparent 80%)",
      }}/>
      <div style={{
        position: "absolute", top: "20%", right: "-10%", width: 600, height: 600,
        background: "radial-gradient(circle, rgba(37,99,235,0.5), transparent 65%)",
        filter: "blur(100px)", pointerEvents: "none",
      }}/>
      <div style={{
        position: "absolute", bottom: "10%", left: "-5%", width: 400, height: 400,
        background: "radial-gradient(circle, rgba(249,115,22,0.25), transparent 65%)",
        filter: "blur(80px)", pointerEvents: "none",
      }}/>

      <div className="container" style={{ position: "relative" }}>
        <div className="section-head">
          <div className="eyebrow eyebrow-dark" style={{ margin: "0 auto" }}><span className="dot"/> Software Solutions</div>
          <h2 style={{ color: "#fff", fontSize: "clamp(36px, 4.4vw, 56px)" }}>
            The platform that runs underneath the wrench.
          </h2>
          <p style={{ color: "rgba(203,213,225,0.8)" }}>
            Logic Gate Cloud gives property teams a single pane of glass for work orders, vendors, assets, and analytics — built by operators, for operators.
          </p>
        </div>

        {/* Dashboard mockup */}
        <DashboardMock/>

        {/* Feature grid */}
        <div style={{
          marginTop: 80,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 14,
        }}>
          {features.map((f, i) => {
            const IconCmp = Icon[f.I];
            return (
              <div key={i} className="glass" style={{
                padding: 22,
                transition: "all .25s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(96,165,250,0.4)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
                e.currentTarget.style.transform = "";
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: "rgba(96,165,250,0.12)",
                  display: "grid", placeItems: "center",
                  marginBottom: 14,
                }}><IconCmp size={20} stroke="#93C5FD"/></div>
                <div style={{ fontSize: 16, fontWeight: 600, color: "#fff" }}>{f.t}</div>
                <div style={{ fontSize: 13, color: "rgba(203,213,225,0.7)", marginTop: 4 }}>{f.d}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DashboardMock() {
  const [view, setView] = React.useState("overview");

  return (
    <div className="glass" style={{
      position: "relative",
      padding: 0, overflow: "hidden",
      boxShadow: "0 60px 120px -30px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)",
    }}>
      {/* window chrome */}
      <div style={{
        display: "flex", alignItems: "center", gap: 10,
        padding: "14px 18px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(0,0,0,0.2)",
      }}>
        <div style={{ display: "flex", gap: 6 }}>
          <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#FF5F57" }}/>
          <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#FEBC2E" }}/>
          <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#28C840" }}/>
        </div>
        <div style={{
          marginLeft: 12, padding: "4px 12px",
          background: "rgba(255,255,255,0.06)",
          borderRadius: 6,
          fontSize: 11, color: "#94A3B8", fontFamily: "var(--font-mono)",
        }}>app.logicgateit.com/operations</div>
      </div>

      <div className="dash-grid" style={{
        display: "grid",
        gridTemplateColumns: "200px 1fr",
        minHeight: 480,
      }}>
        {/* sidebar */}
        <div style={{
          background: "rgba(0,0,0,0.18)",
          borderRight: "1px solid rgba(255,255,255,0.05)",
          padding: 16,
        }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 8,
            padding: "8px 10px",
            background: "rgba(255,255,255,0.04)",
            borderRadius: 8, marginBottom: 16,
          }}>
            <Icon.Logo size={20}/>
            <span style={{ fontSize: 13, color: "#fff", fontWeight: 600 }}>Logic Gate Cloud</span>
          </div>
          {[
            { k: "overview", I: "Chart", t: "Overview" },
            { k: "tickets",  I: "Wrench", t: "Work orders", b: 7 },
            { k: "sites",    I: "Building", t: "Properties" },
            { k: "team",     I: "Users", t: "Technicians" },
            { k: "reports",  I: "Layers", t: "Reports" },
          ].map(item => {
            const IconCmp = Icon[item.I];
            const active = view === item.k;
            return (
              <button
                key={item.k}
                onClick={() => setView(item.k)}
                style={{
                  display: "flex", alignItems: "center", gap: 10,
                  width: "100%", padding: "8px 10px",
                  background: active ? "linear-gradient(90deg, rgba(37,99,235,0.25), rgba(37,99,235,0.05))" : "transparent",
                  border: "none", borderRadius: 8,
                  color: active ? "#fff" : "rgba(203,213,225,0.7)",
                  fontSize: 13, fontWeight: 500, textAlign: "left",
                  cursor: "pointer", marginBottom: 2,
                  position: "relative",
                }}
              >
                <IconCmp size={16}/> {item.t}
                {item.b ? (
                  <span style={{
                    marginLeft: "auto",
                    padding: "1px 8px", borderRadius: 999,
                    background: "var(--orange-500)", color: "#fff",
                    fontSize: 10, fontWeight: 600, fontFamily: "var(--font-mono)",
                  }}>{item.b}</span>
                ) : null}
              </button>
            );
          })}
        </div>

        {/* main */}
        <div style={{ padding: 24 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
            <div>
              <div style={{ fontSize: 12, color: "#94A3B8", fontFamily: "var(--font-mono)", letterSpacing: ".08em" }}>OPERATIONS · LIVE</div>
              <h3 style={{ color: "#fff", fontSize: 22, marginTop: 4 }}>Portfolio Overview</h3>
            </div>
            <div style={{
              display: "flex", gap: 6, padding: 4,
              background: "rgba(0,0,0,0.3)", borderRadius: 8,
              border: "1px solid rgba(255,255,255,0.06)",
            }}>
              {["24h", "7d", "30d"].map((p, i) => (
                <button key={p} style={{
                  padding: "4px 10px", border: "none",
                  borderRadius: 6, fontSize: 11,
                  background: i === 1 ? "rgba(255,255,255,0.08)" : "transparent",
                  color: i === 1 ? "#fff" : "#94A3B8",
                  fontFamily: "var(--font-mono)", cursor: "pointer",
                }}>{p}</button>
              ))}
            </div>
          </div>

          {/* KPI row */}
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
            gap: 10, marginBottom: 16,
          }}>
            {[
              { l: "Open WOs", v: "142", c: "#60A5FA" },
              { l: "SLA hit", v: "97%", c: "#34D399" },
              { l: "Avg resp", v: "28m", c: "#F97316" },
              { l: "Spend MTD", v: "$184k", c: "#A78BFA" },
            ].map(k => (
              <div key={k.l} style={{
                padding: 14, borderRadius: 10,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}>
                <div style={{ fontSize: 10, color: "#94A3B8", fontFamily: "var(--font-mono)", letterSpacing: ".08em" }}>{k.l.toUpperCase()}</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 22, color: "#fff", marginTop: 4, fontWeight: 600 }}>{k.v}</div>
                <div style={{
                  height: 3, background: "rgba(255,255,255,0.05)", borderRadius: 2,
                  marginTop: 8, overflow: "hidden",
                }}>
                  <div style={{ height: "100%", width: `${60 + (k.l.length * 3) % 30}%`, background: k.c }}/>
                </div>
              </div>
            ))}
          </div>

          {/* Chart + table */}
          <div className="dash-charts" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 14 }}>
            <div style={{
              padding: 16, borderRadius: 10,
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
                <span style={{ fontSize: 12, color: "#CBD5E1", fontWeight: 600 }}>Ticket volume by trade</span>
                <span style={{ fontSize: 10, color: "#94A3B8", fontFamily: "var(--font-mono)" }}>LAST 7 DAYS</span>
              </div>
              <svg viewBox="0 0 320 130" width="100%" height="130">
                {/* axis */}
                <line x1="0" x2="320" y1="120" y2="120" stroke="rgba(255,255,255,0.08)"/>
                {[0,1,2,3,4,5,6].map(i => {
                  const x = 10 + i * 45;
                  return (
                    <g key={i}>
                      {["#60A5FA", "#F97316", "#34D399"].map((c, j) => {
                        const h = 20 + ((i * 13 + j * 7) % 60);
                        return <rect key={j} x={x + j*10} y={120-h} width="8" height={h} rx="2" fill={c} opacity={.85}/>;
                      })}
                    </g>
                  );
                })}
              </svg>
              <div style={{ display: "flex", gap: 14, marginTop: 8, fontSize: 11, color: "#94A3B8" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 6 }}><span style={{ width: 8, height: 8, background: "#60A5FA", borderRadius: 2 }}/> HVAC</span>
                <span style={{ display: "flex", alignItems: "center", gap: 6 }}><span style={{ width: 8, height: 8, background: "#F97316", borderRadius: 2 }}/> Plumbing</span>
                <span style={{ display: "flex", alignItems: "center", gap: 6 }}><span style={{ width: 8, height: 8, background: "#34D399", borderRadius: 2 }}/> Electrical</span>
              </div>
            </div>

            <div style={{
              padding: 16, borderRadius: 10,
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}>
              <div style={{ fontSize: 12, color: "#CBD5E1", fontWeight: 600, marginBottom: 10 }}>Active jobs</div>
              {[
                { t: "WO-4421 · Boiler service", s: "In progress", c: "#60A5FA" },
                { t: "WO-4422 · Leak repair",    s: "En route",    c: "#F97316" },
                { t: "WO-4423 · Roof inspection",s: "Scheduled",   c: "#A78BFA" },
                { t: "WO-4418 · Light fixtures", s: "Closed",      c: "#34D399" },
              ].map((r, i) => (
                <div key={i} style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "9px 0",
                  borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.04)" : "none",
                }}>
                  <span style={{ fontSize: 11.5, color: "#CBD5E1", fontFamily: "var(--font-mono)" }}>{r.t}</span>
                  <span style={{
                    fontSize: 10, padding: "2px 8px", borderRadius: 999,
                    color: r.c, background: `${r.c}1a`,
                  }}>{r.s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .dash-grid { grid-template-columns: 1fr !important; }
          .dash-charts { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

/* === PROJECTS === */
const PROJECTS = [
  { t: "Riverstone Tower",        c: "Commercial · HVAC + Electrical retrofit",     tag: "Commercial",   accent: "#2563EB", span: "wide" },
  { t: "Lakeshore Residences",    c: "Residential · 84-unit maintenance program",   tag: "Residential",  accent: "#F97316", span: "tall" },
  { t: "Logic Gate Cloud Dashboard",  c: "Software · Property analytics rollout",       tag: "Software",     accent: "#A78BFA", span: "normal" },
  { t: "Cascade Logistics Park",  c: "Industrial · Roofing & landscaping",          tag: "Commercial",   accent: "#34D399", span: "normal" },
  { t: "Maple Heights Renovation",c: "Residential · Carpentry & painting",          tag: "Residential",  accent: "#F97316", span: "wide" },
  { t: "Beacon Plaza Refresh",    c: "Commercial · Full property maintenance",      tag: "Commercial",   accent: "#2563EB", span: "normal" },
];

function Projects() {
  const [filter, setFilter] = React.useState("All");
  const tags = ["All", "Commercial", "Residential", "Software"];

  const visible = filter === "All" ? PROJECTS : PROJECTS.filter(p => p.tag === filter);

  return (
    <section id="projects" className="section" style={{ background: "var(--bg)" }}>
      <div className="container">
        <div className="section-head left" style={{
          display: "flex", flexDirection: "row", justifyContent: "space-between",
          alignItems: "flex-end", maxWidth: "100%", textAlign: "left",
          flexWrap: "wrap", gap: 24,
        }}>
          <div style={{ maxWidth: 560 }}>
            <div className="eyebrow"><span className="dot"/> Recent Projects</div>
            <h2 style={{ fontSize: "clamp(32px, 3.6vw, 48px)", marginTop: 20 }}>
              From single repairs to portfolio rollouts.
            </h2>
          </div>
          <div style={{ display: "flex", gap: 6, padding: 6, background: "var(--bg-2)", borderRadius: 12, border: "1px solid var(--line)" }}>
            {tags.map(t => (
              <button key={t} onClick={() => setFilter(t)} style={{
                padding: "8px 16px", border: "none", borderRadius: 8,
                fontSize: 13, fontWeight: 500, cursor: "pointer",
                background: filter === t ? "var(--navy-900)" : "transparent",
                color: filter === t ? "#fff" : "var(--ink-2)",
                transition: "all .15s",
              }}>{t}</button>
            ))}
          </div>
        </div>

        <div className="projects-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridAutoRows: "240px",
          gap: 16,
        }}>
          {visible.map((p, i) => (
            <a key={p.t} href="#contact" className="project-card" style={{
              gridColumn: p.span === "wide" ? "span 2" : "span 1",
              gridRow: p.span === "tall" ? "span 2" : "span 1",
              position: "relative",
              borderRadius: 20, overflow: "hidden",
              border: "1px solid var(--line)",
              background: `linear-gradient(135deg, ${p.accent}15 0%, ${p.accent}05 100%)`,
              cursor: "pointer",
              transition: "all .3s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = `0 30px 60px -20px ${p.accent}40`;
              const overlay = e.currentTarget.querySelector('.proj-overlay');
              if (overlay) overlay.style.opacity = "1";
              const img = e.currentTarget.querySelector('.proj-img');
              if (img) img.style.transform = "scale(1.06)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow = "";
              const overlay = e.currentTarget.querySelector('.proj-overlay');
              if (overlay) overlay.style.opacity = "0";
              const img = e.currentTarget.querySelector('.proj-img');
              if (img) img.style.transform = "";
            }}
            >
              {/* placeholder image */}
              <div className="proj-img" style={{
                position: "absolute", inset: 0,
                background: `
                  radial-gradient(circle at 30% 20%, ${p.accent}40 0%, transparent 50%),
                  radial-gradient(circle at 70% 80%, ${p.accent}30 0%, transparent 50%),
                  repeating-linear-gradient(135deg, ${p.accent}08 0 12px, ${p.accent}14 12px 24px)
                `,
                transition: "transform .5s ease",
              }}/>

              {/* corner mono caption */}
              <div style={{
                position: "absolute", top: 16, left: 16,
                fontFamily: "var(--font-mono)", fontSize: 10,
                color: p.accent, letterSpacing: ".15em",
                textTransform: "uppercase",
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(6px)",
                padding: "4px 8px", borderRadius: 4,
              }}>[ {p.tag.toUpperCase()} · {String(i+1).padStart(2,'0')} ]</div>

              {/* hover overlay */}
              <div className="proj-overlay" style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(180deg, transparent 30%, rgba(15,23,42,0.85) 100%)",
                opacity: 0, transition: "opacity .3s",
              }}/>

              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                padding: 20,
                color: "#fff",
                background: "linear-gradient(180deg, transparent 0%, rgba(15,23,42,0.8) 60%)",
              }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 600 }}>{p.t}</div>
                <div style={{ fontSize: 13, color: "rgba(203,213,225,0.85)", marginTop: 4, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span>{p.c}</span>
                  <Icon.ArrowUpRight size={16}/>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .project-card { grid-column: span 1 !important; grid-row: span 1 !important; }
        }
        @media (max-width: 600px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* === TESTIMONIALS === */
const TESTIMONIALS = [
  {
    q: "Logic Gate IT consolidated five different vendors into one. Our maintenance spend dropped 22% in the first year and tenant satisfaction is the highest it's ever been.",
    n: "Sarah Chen",
    r: "VP Operations, Meridian Realty",
    a: "SC", c: "#2563EB",
  },
  {
    q: "We had a flooded server room at 3am. Their tech was on-site in 24 minutes and our IT team had us back online before the next business day. That's the entire pitch.",
    n: "Marcus Lee",
    r: "Facility Director, Cascade Commercial",
    a: "ML", c: "#F97316",
  },
  {
    q: "The software is genuinely good. I'm a property manager, not a software person, but their dashboard is what we open every morning. Work orders, vendor invoices, everything.",
    n: "Renee Patel",
    r: "Portfolio Manager, Arbor Capital",
    a: "RP", c: "#A78BFA",
  },
  {
    q: "Honest pricing, skilled technicians, and a team that actually answers the phone. We've extended their contract across all 38 of our properties.",
    n: "James O'Connor",
    r: "COO, Lighthouse REIT",
    a: "JO", c: "#34D399",
  },
];

function Testimonials() {
  const [idx, setIdx] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % TESTIMONIALS.length), 7000);
    return () => clearInterval(id);
  }, []);

  const t = TESTIMONIALS[idx];

  return (
    <section className="section" style={{ background: "var(--bg-2)" }}>
      <div className="container">
        <div className="section-head">
          <div className="eyebrow" style={{ margin: "0 auto" }}><span className="dot"/> Testimonials</div>
          <h2>Operators who run portfolios trust us.</h2>
          <p>Quotes from the people who measure our work in uptime and tenant complaints — the only metrics that matter.</p>
        </div>

        <div style={{ position: "relative", maxWidth: 900, margin: "0 auto" }}>
          <div style={{
            background: "#fff",
            border: "1px solid var(--line)",
            borderRadius: 28,
            padding: "56px 56px 48px",
            boxShadow: "0 30px 80px -30px rgba(15,23,42,0.18)",
            position: "relative",
            overflow: "hidden",
          }}>
            <Icon.Quote size={48} stroke="var(--blue-600)" style={{ opacity: .15, position: "absolute", top: 28, left: 28 }}/>
            <div style={{ display: "flex", gap: 4, marginBottom: 24 }}>
              {Array.from({length:5}).map((_,i) => <Icon.Star key={i} size={18} stroke="#F97316" fill="#F97316"/>)}
            </div>

            <p key={idx} style={{
              fontSize: "clamp(20px, 2.2vw, 26px)",
              fontFamily: "var(--font-display)",
              lineHeight: 1.45,
              color: "var(--navy-900)",
              fontWeight: 400,
              letterSpacing: "-0.01em",
              animation: "fadeIn .5s ease",
            }}>"{t.q}"</p>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 36, flexWrap: "wrap", gap: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{
                  width: 52, height: 52, borderRadius: "50%",
                  background: `linear-gradient(135deg, ${t.c}, ${t.c}cc)`,
                  color: "#fff", fontWeight: 600,
                  display: "grid", placeItems: "center",
                  fontFamily: "var(--font-display)", fontSize: 18,
                  boxShadow: `0 8px 20px -6px ${t.c}66`,
                }}>{t.a}</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 15 }}>{t.n}</div>
                  <div style={{ fontSize: 13, color: "var(--ink-3)" }}>{t.r}</div>
                </div>
              </div>

              <div style={{ display: "flex", gap: 8 }}>
                {TESTIMONIALS.map((_, i) => (
                  <button key={i} onClick={() => setIdx(i)} aria-label={`Go to testimonial ${i+1}`} style={{
                    width: i === idx ? 24 : 8, height: 8,
                    background: i === idx ? "var(--navy-900)" : "var(--line-2)",
                    border: "none", borderRadius: 999,
                    transition: "all .25s",
                    cursor: "pointer",
                  }}/>
                ))}
              </div>
            </div>
          </div>

          {/* Floating cards behind */}
          <div style={{
            position: "absolute", inset: -20,
            background: `
              radial-gradient(circle at 0% 50%, rgba(37,99,235,0.06), transparent 40%),
              radial-gradient(circle at 100% 50%, rgba(249,115,22,0.05), transparent 40%)
            `,
            zIndex: -1, borderRadius: 40,
          }}/>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </section>
  );
}

window.Projects = Projects;
window.Testimonials = Testimonials;
