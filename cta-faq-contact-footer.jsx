// === Emergency CTA, FAQ, Contact, Footer, WhatsApp Float ===

function EmergencyCTA() {
  return (
    <section id="emergency" style={{
      position: "relative",
      padding: "80px 0",
      overflow: "hidden",
    }}>
      <div className="container">
        <div style={{
          position: "relative",
          background: "linear-gradient(135deg, #F97316 0%, #EA580C 60%, #C2410C 100%)",
          borderRadius: 32,
          padding: "72px 56px",
          overflow: "hidden",
          color: "#fff",
        }}>
          {/* deco shapes */}
          <div style={{
            position: "absolute", top: -100, right: -50,
            width: 400, height: 400, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,255,255,0.18), transparent 60%)",
            filter: "blur(20px)",
          }}/>
          <div className="bg-grid-dark" style={{
            position: "absolute", inset: 0,
            opacity: .35,
            maskImage: "radial-gradient(ellipse 60% 80% at 30% 50%, #000 30%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 60% 80% at 30% 50%, #000 30%, transparent 80%)",
          }}/>

          <div className="cta-grid" style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gap: 48,
            alignItems: "center",
          }}>
            <div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "6px 12px",
                background: "rgba(255,255,255,0.18)",
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: 999,
                fontFamily: "var(--font-mono)", fontSize: 12,
                letterSpacing: ".12em", textTransform: "uppercase",
                color: "#fff",
              }}>
                <span style={{
                  width: 8, height: 8, borderRadius: "50%", background: "#fff",
                  animation: "pulseFast 1.5s ease-in-out infinite",
                }}/> 24 / 7 Emergency Line
              </div>
              <h2 style={{
                fontSize: "clamp(36px, 5vw, 60px)",
                marginTop: 20, color: "#fff",
                fontWeight: 600,
              }}>Need immediate assistance?</h2>
              <p style={{
                fontSize: 19, color: "rgba(255,255,255,0.85)",
                marginTop: 16, maxWidth: 540,
              }}>
                Burst pipe? Power out? HVAC failing on a 90° day? Our emergency dispatch routes
                a licensed technician to your door — typically within 30 minutes.
              </p>
              <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
                <a href="tel:+8801907060476" className="btn btn-white" style={{ fontWeight: 600 }}>
                  <Icon.Phone size={16}/> Call 01907060476
                </a>
                <a href="#contact" className="btn" style={{
                  background: "rgba(255,255,255,0.12)", color: "#fff",
                  border: "1px solid rgba(255,255,255,0.3)",
                  backdropFilter: "blur(10px)",
                }}>
                  Request Emergency Service <Icon.ArrowRight size={14}/>
                </a>
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <div className="glass" style={{
                padding: 24,
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.25)",
                color: "#fff",
              }}>
                <div style={{ fontSize: 11, fontFamily: "var(--font-mono)", letterSpacing: ".12em", opacity: .8 }}>LIVE DISPATCH</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 56, fontWeight: 600, lineHeight: 1, marginTop: 8 }}>28<span style={{ fontSize: 24, opacity: .8 }}>min</span></div>
                <div style={{ fontSize: 14, opacity: .85, marginTop: 4 }}>average response · last 30 days</div>

                <div style={{ marginTop: 24, display: "grid", gap: 10 }}>
                  {[
                    { l: "Available now", v: "14 techs" },
                    { l: "Active incidents", v: "3" },
                    { l: "Coverage", v: "24/7/365" },
                  ].map(r => (
                    <div key={r.l} style={{
                      display: "flex", justifyContent: "space-between",
                      padding: "10px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.15)",
                      fontSize: 13,
                    }}>
                      <span style={{ opacity: .85 }}>{r.l}</span>
                      <span style={{ fontFamily: "var(--font-mono)", fontWeight: 500 }}>{r.v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulseFast {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,255,255,0.7); }
          50% { box-shadow: 0 0 0 8px rgba(255,255,255,0); }
        }
        @media (max-width: 820px) {
          .cta-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* === FAQ === */
const faqItems = [
  {
    section: "Property Maintenance",
    items: [
      { q: "What's your emergency response time?", a: "We aim for 24-28 minutes on average across our service territory. Call us anytime." },
      { q: "Do you service my area?", a: "We operate across multiple regions. Contact us to confirm service availability at your location." },
      { q: "How is pricing structured?", a: "We provide flat-rate quotes before any work begins. No surprise invoices or time-and-material surprises." },
      { q: "Do you offer maintenance contracts?", a: "Yes. We offer preventative maintenance plans that reduce reactive calls by an average of 41% in year one." },
      { q: "What trades do you cover?", a: "Plumbing, electrical, HVAC, roofing, landscaping, carpentry, painting, appliance repair, and more. See our full service list." },
    ]
  },
  {
    section: "Software Solutions",
    items: [
      { q: "How long does a project take?", a: "Depends on scope. Most projects ship in 4-12 weeks. We move fast — agile sprints, quick iterations." },
      { q: "What's your development process?", a: "We follow agile methodology: discovery → design → sprint-based development → testing → launch → ongoing support." },
      { q: "How is pricing structured?", a: "Fixed-scope projects with transparent pricing. We quote upfront. No hidden fees or surprise invoices." },
      { q: "Do you provide support after launch?", a: "Yes. We offer ongoing support packages. You're not on your own after we ship." },
      { q: "What technologies do you use?", a: "We use modern stacks: React, Node.js, Python, mobile frameworks (iOS/Android), cloud hosting (AWS/Azure), and more." },
      { q: "Can you integrate with existing systems?", a: "Yes. We specialize in bi-directional sync and API integrations with common platforms like Salesforce, QuickBooks, and more." },
    ]
  },
];

function FAQ() {
  const [open, setOpen] = React.useState({});
  const toggleOpen = (sectionIdx, itemIdx) => {
    const key = `${sectionIdx}-${itemIdx}`;
    setOpen(o => ({ ...o, [key]: !o[key] }));
  };

  return (
    <section className="section" style={{ background: "var(--bg)" }}>
      <div className="container">
        <div className="section-head">
          <div className="eyebrow" style={{ margin: "0 auto" }}><span className="dot"/> Questions</div>
          <h2>Frequently asked.</h2>
          <p>Questions about either division? Our team will give you a real answer — usually within the same business day.</p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
          marginTop: 40,
        }}>
          {faqItems.map((section, sIdx) => (
            <div key={sIdx}>
              <h3 style={{
                fontSize: 20,
                fontWeight: 600,
                color: "var(--navy-900)",
                marginBottom: 24,
              }}>
                {section.section}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {section.items.map((item, iIdx) => {
                  const isOpen = open[`${sIdx}-${iIdx}`];
                  return (
                    <details key={iIdx} style={{
                      border: "1px solid var(--line)",
                      borderRadius: 12,
                      padding: 16,
                      cursor: "pointer",
                    }}>
                      <summary style={{
                        fontSize: 15,
                        fontWeight: 600,
                        color: "var(--navy-900)",
                        outline: "none",
                      }}>
                        {item.q}
                      </summary>
                      <p style={{
                        fontSize: 14,
                        color: "var(--ink-2)",
                        marginTop: 12,
                        lineHeight: 1.6,
                      }}>
                        {item.a}
                      </p>
                    </details>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .faq-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* === CONTACT === */
function Contact() {
  const [form, setForm] = React.useState({ name: "", email: "", phone: "", service: "Plumbing", message: "" });
  const [submitted, setSubmitted] = React.useState(false);

  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));
  const submit = e => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section" style={{ background: "var(--bg-2)" }}>
      <div className="container">
        <div className="section-head left" style={{ textAlign: "left", maxWidth: 720 }}>
          <div className="eyebrow"><span className="dot"/> Contact</div>
          <h2 style={{ fontSize: "clamp(36px, 4.4vw, 56px)" }}>Let's work together</h2>
          <p>Whether you need property maintenance or custom software, we're here to help.</p>
        </div>

        <div className="contact-forms" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
          marginTop: 40,
        }}>
          {/* LEFT: Property Maintenance Form */}
          <div>
            <h3 style={{ fontSize: 22, fontWeight: 600, color: "var(--navy-900)", marginBottom: 20 }}>
              Property Maintenance
            </h3>
            <form style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label style={{ display: "block", fontSize: 14, fontWeight: 500, marginBottom: 6 }}>
                  Property Address
                </label>
                <input type="text" placeholder="123 Main St, City, State" style={{
                  width: "100%", padding: "10px 14px", borderRadius: 8,
                  border: "1px solid var(--line)", fontSize: 14,
                  fontFamily: "var(--font-body)",
                }}/>
              </div>
              <div>
                <label style={{ display: "block", fontSize: 14, fontWeight: 500, marginBottom: 6 }}>
                  Service Needed
                </label>
                <select style={{
                  width: "100%", padding: "10px 14px", borderRadius: 8,
                  border: "1px solid var(--line)", fontSize: 14,
                  fontFamily: "var(--font-body)",
                }}>
                  <option>Select a service...</option>
                  <option>Plumbing</option>
                  <option>Electrical</option>
                  <option>HVAC</option>
                  <option>Roofing</option>
                  <option>Landscaping</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label style={{ display: "block", fontSize: 14, fontWeight: 500, marginBottom: 6 }}>
                  Contact Email
                </label>
                <input type="email" placeholder="you@company.com" style={{
                  width: "100%", padding: "10px 14px", borderRadius: 8,
                  border: "1px solid var(--line)", fontSize: 14,
                  fontFamily: "var(--font-body)",
                }}/>
              </div>
              <div>
                <label style={{ display: "block", fontSize: 14, fontWeight: 500, marginBottom: 6 }}>
                  Phone
                </label>
                <input type="tel" placeholder="(555) 123-4567" style={{
                  width: "100%", padding: "10px 14px", borderRadius: 8,
                  border: "1px solid var(--line)", fontSize: 14,
                  fontFamily: "var(--font-body)",
                }}/>
              </div>
              <button type="submit" className="btn btn-primary" style={{
                marginTop: 8,
              }}>
                Schedule Consultation <Icon.ArrowRight size={16}/>
              </button>
            </form>
          </div>

          {/* RIGHT: Software Solutions Form */}
          <div>
            <h3 style={{ fontSize: 22, fontWeight: 600, color: "var(--navy-900)", marginBottom: 20 }}>
              Custom Software Solutions
            </h3>
            <form style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label style={{ display: "block", fontSize: 14, fontWeight: 500, marginBottom: 6 }}>
                  What software do you need?
                </label>
                <select style={{
                  width: "100%", padding: "10px 14px", borderRadius: 8,
                  border: "1px solid var(--line)", fontSize: 14,
                  fontFamily: "var(--font-body)",
                }}>
                  <option>Select a solution...</option>
                  <option>Custom CRM</option>
                  <option>ERP Solutions</option>
                  <option>E-commerce</option>
                  <option>Mobile App</option>
                  <option>Custom Software</option>
                  <option>Cybersecurity</option>
                </select>
              </div>
              <div>
                <label style={{ display: "block", fontSize: 14, fontWeight: 500, marginBottom: 6 }}>
                  Company Name
                </label>
                <input type="text" placeholder="Your Company" style={{
                  width: "100%", padding: "10px 14px", borderRadius: 8,
                  border: "1px solid var(--line)", fontSize: 14,
                  fontFamily: "var(--font-body)",
                }}/>
              </div>
              <div>
                <label style={{ display: "block", fontSize: 14, fontWeight: 500, marginBottom: 6 }}>
                  Contact Email
                </label>
                <input type="email" placeholder="you@company.com" style={{
                  width: "100%", padding: "10px 14px", borderRadius: 8,
                  border: "1px solid var(--line)", fontSize: 14,
                  fontFamily: "var(--font-body)",
                }}/>
              </div>
              <div>
                <label style={{ display: "block", fontSize: 14, fontWeight: 500, marginBottom: 6 }}>
                  Project Timeline
                </label>
                <select style={{
                  width: "100%", padding: "10px 14px", borderRadius: 8,
                  border: "1px solid var(--line)", fontSize: 14,
                  fontFamily: "var(--font-body)",
                }}>
                  <option>Select timeline...</option>
                  <option>ASAP (1-2 weeks)</option>
                  <option>Within a month</option>
                  <option>Within 3 months</option>
                  <option>6+ months</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary" style={{
                marginTop: 8,
              }}>
                Request Consultation <Icon.ArrowRight size={16}/>
              </button>
            </form>
          </div>
        </div>

        {/* Old form structure kept for reference but commented out */}
        <form onSubmit={submit} className="card" style={{
          padding: 36,
          background: "#fff",
          position: "relative",
          display: "none",
        }}>
            <div className="form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <Field label="Full name" v={form.name} onChange={set("name")} placeholder="Your name" required/>
              <Field label="Email"     v={form.email} onChange={set("email")} placeholder="you@company.com" type="email" required/>
              <Field label="Phone"     v={form.phone} onChange={set("phone")} placeholder="(555) 555-5555"/>
              <SelectField label="Service type" v={form.service} onChange={set("service")} options={[
                "Plumbing","Electrical","HVAC","Roofing","Landscaping","Carpentry","Painting","Appliance Repair","Property Maintenance","Software Support","Other"
              ]}/>
              <Field label="Message" v={form.message} onChange={set("message")} placeholder="Tell us about your property and what you need..." textarea full required/>
            </div>

            <div style={{
              marginTop: 24, display: "flex", justifyContent: "space-between",
              alignItems: "center", gap: 16, flexWrap: "wrap",
            }}>
              <div style={{ fontSize: 12, color: "var(--ink-3)", display: "flex", alignItems: "center", gap: 8 }}>
                <Icon.Shield size={14}/> We respond within 1 business hour. Your details stay private.
              </div>
              <button type="submit" className="btn btn-primary" disabled={submitted}>
                {submitted ? <><Icon.Check size={14}/> Sent — talk soon</> : <>Send message <Icon.Send size={14}/></>}
              </button>
            </div>

            {submitted && (
              <div style={{
                position: "absolute", inset: 0,
                background: "rgba(255,255,255,0.94)",
                backdropFilter: "blur(6px)",
                borderRadius: "var(--radius-lg)",
                display: "grid", placeItems: "center",
                animation: "fadeIn .3s ease",
              }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{
                    width: 64, height: 64, borderRadius: "50%",
                    background: "linear-gradient(135deg, #22C55E, #16A34A)",
                    display: "grid", placeItems: "center",
                    margin: "0 auto 16px",
                    boxShadow: "0 10px 30px -10px rgba(34,197,94,0.5)",
                  }}><Icon.Check size={28} stroke="#fff" strokeWidth={2.5}/></div>
                  <h3 style={{ fontSize: 24 }}>Thanks, {form.name || "there"}!</h3>
                  <p style={{ color: "var(--ink-2)", marginTop: 8 }}>We'll be in touch shortly.</p>
                </div>
              </div>
            )}
          </form>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function Field({ label, v, onChange, placeholder, type = "text", required, textarea, full }) {
  return (
    <label style={{ display: "block", gridColumn: full ? "span 2" : "auto" }}>
      <span style={{
        fontSize: 12, fontFamily: "var(--font-mono)", letterSpacing: ".08em",
        textTransform: "uppercase", color: "var(--ink-3)",
        display: "block", marginBottom: 8,
      }}>{label}{required && <span style={{ color: "var(--orange-500)" }}> *</span>}</span>
      {textarea ? (
        <textarea
          value={v} onChange={onChange} placeholder={placeholder} required={required}
          rows={5}
          style={inputStyle}
        />
      ) : (
        <input
          type={type} value={v} onChange={onChange} placeholder={placeholder} required={required}
          style={inputStyle}
        />
      )}
    </label>
  );
}

function SelectField({ label, v, onChange, options }) {
  return (
    <label style={{ display: "block" }}>
      <span style={{
        fontSize: 12, fontFamily: "var(--font-mono)", letterSpacing: ".08em",
        textTransform: "uppercase", color: "var(--ink-3)",
        display: "block", marginBottom: 8,
      }}>{label}</span>
      <div style={{ position: "relative" }}>
        <select value={v} onChange={onChange} style={{
          ...inputStyle, appearance: "none", paddingRight: 36,
        }}>
          {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
        <span style={{
          position: "absolute", right: 14, top: "50%",
          transform: "translateY(-50%)", pointerEvents: "none",
          color: "var(--ink-3)",
        }}>▾</span>
      </div>
    </label>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  fontSize: 15,
  fontFamily: "inherit",
  color: "var(--navy-900)",
  background: "var(--bg-2)",
  border: "1px solid var(--line)",
  borderRadius: 10,
  outline: "none",
  transition: "border-color .15s, background .15s",
  resize: "vertical",
};

/* === FOOTER === */
function Footer() {
  return (
    <footer style={{
      background: "linear-gradient(180deg, #0F172A 0%, #0B1220 100%)",
      color: "#CBD5E1",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
        width: 600, height: 200,
        background: "radial-gradient(ellipse, rgba(37,99,235,0.25), transparent 70%)",
        filter: "blur(60px)",
      }}/>
      <div className="container" style={{ position: "relative", padding: "80px 32px 32px" }}>
        <div className="footer-grid" style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr",
          gap: 48,
          paddingBottom: 56,
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#fff" }}>
              <Icon.Logo size={32}/>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 20 }}>Logic Gate IT</span>
            </div>
            <p style={{ marginTop: 12, fontSize: 13, color: "var(--blue-400)", fontFamily: "var(--font-mono)", letterSpacing: "0.04em" }}>
              Efficiently active, Effectively creative.
            </p>
            <p style={{ marginTop: 16, fontSize: 14.5, color: "rgba(203,213,225,0.7)", maxWidth: 320, lineHeight: 1.6 }}>
              Custom software solutions and property maintenance services for growing businesses. Fast delivery. Affordable. Built to your workflow.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
              {[
                { I: "LinkedIn", h: "#" },
                { I: "Twitter",  h: "#" },
                { I: "Facebook", h: "#" },
                { I: "Instagram",h: "#" },
              ].map(s => {
                const IconCmp = Icon[s.I];
                return (
                  <a key={s.I} href={s.h} aria-label={s.I} style={{
                    width: 38, height: 38, borderRadius: 10,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "grid", placeItems: "center",
                    color: "rgba(203,213,225,0.8)",
                    transition: "all .2s",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "var(--blue-600)";
                    e.currentTarget.style.borderColor = "var(--blue-600)";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.color = "rgba(203,213,225,0.8)";
                  }}
                  ><IconCmp size={16}/></a>
                );
              })}
            </div>
          </div>

          <FooterCol title="Company" links={["About","Contact"]}/>
          <FooterCol title="Solutions" links={["Property Maintenance","Software Solutions","Services","Contact"]}/>

          <div>
            <div style={{ fontSize: 13, fontFamily: "var(--font-mono)", letterSpacing: ".12em", color: "rgba(148,163,184,0.7)", textTransform: "uppercase", marginBottom: 16 }}>Stay in touch</div>
            <p style={{ fontSize: 14, color: "rgba(203,213,225,0.75)", marginBottom: 16 }}>
              Quarterly updates on property operations, new service areas, and product releases.
            </p>
            <form onSubmit={e => e.preventDefault()} style={{
              display: "flex", gap: 8,
              padding: 6,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: 12,
            }}>
              <input type="email" placeholder="you@company.com" style={{
                flex: 1, padding: "8px 12px", border: "none", outline: "none",
                background: "transparent", color: "#fff", fontSize: 14, fontFamily: "inherit",
              }}/>
              <button type="submit" className="btn btn-primary btn-sm" style={{ padding: "8px 14px" }}>
                <Icon.ArrowRight size={14}/>
              </button>
            </form>
            <div style={{ marginTop: 20, display: "grid", gap: 10 }}>
              <a href="tel:+8801907060476" style={{ padding: 14, background: "rgba(249,115,22,0.08)", border: "1px solid rgba(249,115,22,0.2)", borderRadius: 10, display: "flex", alignItems: "center", gap: 10 }}>
                <Icon.Phone size={16} stroke="#F97316"/>
                <div>
                  <div style={{ fontSize: 11, color: "rgba(251,146,60,0.9)", fontFamily: "var(--font-mono)", letterSpacing: ".08em" }}>PHONE</div>
                  <div style={{ fontSize: 14, color: "#fff", fontWeight: 600 }}>01907060476</div>
                </div>
              </a>
              <a href="mailto:info@logicgateit.com" style={{ padding: 14, background: "rgba(37,99,235,0.10)", border: "1px solid rgba(37,99,235,0.25)", borderRadius: 10, display: "flex", alignItems: "center", gap: 10 }}>
                <Icon.Mail size={16} stroke="#60A5FA"/>
                <div>
                  <div style={{ fontSize: 11, color: "rgba(147,197,253,0.9)", fontFamily: "var(--font-mono)", letterSpacing: ".08em" }}>EMAIL</div>
                  <div style={{ fontSize: 14, color: "#fff", fontWeight: 600 }}>info@logicgateit.com</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          paddingTop: 24, flexWrap: "wrap", gap: 16,
          fontSize: 13, color: "rgba(148,163,184,0.6)",
        }}>
          <div>© 2026 Logic Gate IT Property &amp; Technology Solutions. All rights reserved.</div>
          <div style={{ display: "flex", gap: 24 }}>
            <a href="#" style={{ color: "rgba(148,163,184,0.7)" }}>Privacy</a>
            <a href="#" style={{ color: "rgba(148,163,184,0.7)" }}>Terms</a>
            <a href="#" style={{ color: "rgba(148,163,184,0.7)" }}>Licenses</a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <div style={{ fontSize: 13, fontFamily: "var(--font-mono)", letterSpacing: ".12em", color: "rgba(148,163,184,0.7)", textTransform: "uppercase", marginBottom: 16 }}>{title}</div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
        {links.map(l => (
          <li key={l}><a href="#" style={{ fontSize: 14, color: "rgba(203,213,225,0.85)", transition: "color .15s" }}
            onMouseEnter={e => e.currentTarget.style.color = "#fff"}
            onMouseLeave={e => e.currentTarget.style.color = "rgba(203,213,225,0.85)"}
          >{l}</a></li>
        ))}
      </ul>
    </div>
  );
}

/* === Floating WhatsApp === */
function WhatsAppFloat() {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{
      position: "fixed", bottom: 24, right: 24, zIndex: 40,
      display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12,
    }}>
      {open && (
        <div style={{
          width: 280, padding: 16,
          background: "#fff",
          border: "1px solid var(--line)",
          borderRadius: 18,
          boxShadow: "0 20px 60px -10px rgba(0,0,0,0.2)",
          animation: "popIn .25s ease",
        }}>
          <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 12 }}>
            <div style={{
              width: 40, height: 40, borderRadius: "50%",
              background: "linear-gradient(135deg, #25D366, #128C7E)",
              display: "grid", placeItems: "center", color: "#fff",
            }}><Icon.WhatsApp size={20}/></div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>Logic Gate IT Support</div>
              <div style={{ fontSize: 12, color: "#16A34A", display: "flex", alignItems: "center", gap: 6 }}>
                <span className="live-dot" style={{ width: 6, height: 6 }}/> Online now
              </div>
            </div>
          </div>
          <p style={{ fontSize: 13, color: "var(--ink-2)", lineHeight: 1.5 }}>
            Hi! Need help with a property? Send us a WhatsApp and a real human will reply in minutes.
          </p>
          <a href="https://wa.me/8801907060476" target="_blank" rel="noopener noreferrer" className="btn btn-sm" style={{
            marginTop: 12, width: "100%",
            background: "#25D366", color: "#fff",
            justifyContent: "center",
          }}>Start chat <Icon.ArrowRight size={14}/></a>
        </div>
      )}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="Open WhatsApp chat"
        style={{
          width: 56, height: 56, borderRadius: "50%",
          background: "linear-gradient(135deg, #25D366, #128C7E)",
          border: "none",
          color: "#fff",
          display: "grid", placeItems: "center",
          boxShadow: "0 12px 30px -8px rgba(37,211,102,0.6)",
          cursor: "pointer",
          transition: "transform .2s",
        }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.06)"}
        onMouseLeave={e => e.currentTarget.style.transform = ""}
      >
        {open ? <Icon.X size={22}/> : <Icon.WhatsApp size={26}/>}
      </button>

      <style>{`
        @keyframes popIn {
          from { opacity: 0; transform: translateY(10px) scale(.96); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  );
}

window.EmergencyCTA = EmergencyCTA;
window.FAQ = FAQ;
window.Contact = Contact;
window.Footer = Footer;
window.WhatsAppFloat = WhatsAppFloat;
