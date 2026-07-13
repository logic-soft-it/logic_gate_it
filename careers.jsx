// === Careers section: open positions + CV submission ===

const JOBS = [
  {
    id: "hvac-tech-sr",
    title: "Senior HVAC Technician",
    dept: "Field Services",
    type: "Full-time",
    location: "Portland, OR",
    salary: "$70k – $92k",
    posted: "2 days ago",
    accent: "#2563EB",
    summary: "Service, install, and troubleshoot commercial HVAC systems across our metro accounts. Lead a 2-person field crew.",
    responsibilities: [
      "Diagnose and repair commercial HVAC systems (chillers, RTUs, VRF, boilers).",
      "Perform scheduled preventative maintenance per portfolio contracts.",
      "Coordinate with property managers on scope, timing, and tenant comms.",
      "Document work in Logic Gate Cloud (asset history, photos, parts used).",
      "Mentor junior technicians and supervise apprentices on-site.",
    ],
    requirements: [
      "5+ years commercial HVAC experience",
      "EPA 608 Universal certification",
      "Valid driver's license, clean MVR",
      "Comfortable with mobile work-order software",
      "OSHA-30 (we'll cover the course if needed)",
    ],
    perks: ["Company truck", "Health + dental", "401k 4% match", "Annual tool stipend"],
  },
  {
    id: "swe-fullstack",
    title: "Full-Stack Software Engineer",
    dept: "Logic Gate Cloud",
    type: "Full-time",
    location: "Remote (US)",
    salary: "$120k – $160k",
    posted: "5 days ago",
    accent: "#A78BFA",
    summary: "Build the platform that runs underneath the wrench. React, Node, Postgres, and a real operations team using what you ship.",
    responsibilities: [
      "Ship features across the Logic Gate Cloud web app and field tech mobile experience.",
      "Own backend services for work orders, asset tracking, and reporting.",
      "Pair with operations & dispatch staff to scope and validate features.",
      "Write tests, do code review, and own production reliability for your code.",
    ],
    requirements: [
      "4+ years full-stack experience (React + Node/TypeScript)",
      "Comfortable with Postgres, REST/GraphQL, AWS basics",
      "You like building tools for non-engineers and reading their feedback closely",
      "Bonus: experience in field services, logistics, or property tech",
    ],
    perks: ["Fully remote", "Health + dental", "Equity grant", "$2k home office stipend"],
  },
  {
    id: "plumber-licensed",
    title: "Licensed Plumber",
    dept: "Field Services",
    type: "Full-time",
    location: "Seattle, WA",
    salary: "$65k – $88k",
    posted: "1 week ago",
    accent: "#F97316",
    summary: "Service residential and light commercial plumbing across our Seattle service territory. Service van provided.",
    responsibilities: [
      "Respond to scheduled and emergency plumbing calls.",
      "Diagnose, repair, and replace fixtures, drains, and water lines.",
      "Provide flat-rate quotes before work begins.",
      "Keep work-order documentation tidy and complete.",
    ],
    requirements: [
      "Active WA plumbing license (PL01 or equivalent)",
      "3+ years residential or commercial plumbing experience",
      "Customer-facing, professional, on-time",
      "Valid driver's license",
    ],
    perks: ["Service van", "Health + dental", "Paid CEUs", "Boot + tool stipend"],
  },
  {
    id: "it-support",
    title: "IT Support Specialist",
    dept: "Managed IT",
    type: "Full-time",
    location: "Portland, OR (Hybrid)",
    salary: "$58k – $72k",
    posted: "1 week ago",
    accent: "#2563EB",
    summary: "First-line and second-line IT support for our managed services clients. Tickets, dispatch, occasional on-site visits.",
    responsibilities: [
      "Triage tickets from our MSP clients across hardware, networking, M365, and SaaS apps.",
      "Escalate to senior engineers when needed, document resolution thoroughly.",
      "Make occasional on-site visits to local clients for installs and break-fix.",
      "Contribute to internal runbooks and client documentation.",
    ],
    requirements: [
      "2+ years IT support / helpdesk experience",
      "Solid M365 admin chops; Windows + macOS",
      "Networking fundamentals (DNS, DHCP, VPN, basic firewall)",
      "Bonus: CompTIA A+/Net+, Azure fundamentals, or similar",
    ],
    perks: ["Hybrid schedule", "Health + dental", "Certification budget", "401k match"],
  },
  {
    id: "ops-mgr",
    title: "Property Operations Manager",
    dept: "Operations",
    type: "Full-time",
    location: "Portland, OR",
    salary: "$95k – $125k",
    posted: "2 weeks ago",
    accent: "#34D399",
    summary: "Own the SLA for a $4M portfolio of multi-family and commercial accounts. Hire, dispatch, escalate, retain.",
    responsibilities: [
      "Be the accountable owner for a defined portfolio of client accounts.",
      "Manage day-to-day dispatch and field-team coordination.",
      "Run weekly business reviews with property managers and asset owners.",
      "Partner with the product team on Logic Gate Cloud improvements.",
    ],
    requirements: [
      "5+ years operations or property management leadership",
      "Comfortable in spreadsheets and dashboards; data-driven",
      "Calm under pressure; great at written and verbal communication",
    ],
    perks: ["Health + dental", "Equity grant", "Cell + commuter stipend", "4 weeks PTO"],
  },
  {
    id: "dispatch-coord",
    title: "Field Dispatch Coordinator",
    dept: "Operations",
    type: "Full-time",
    location: "Portland, OR",
    salary: "$52k – $64k",
    posted: "3 weeks ago",
    accent: "#F97316",
    summary: "The voice on the other end of the emergency line. Triage, dispatch, and keep the field team running on time.",
    responsibilities: [
      "Answer inbound tickets and emergency calls.",
      "Route the right technician based on skill, location, and SLA.",
      "Keep clients updated on ETA and status changes.",
      "Reconcile timesheets and job notes at end-of-shift.",
    ],
    requirements: [
      "2+ years dispatch, scheduling, or customer service",
      "Strong communicator; thrives on a busy phone day",
      "Comfortable in field-service software",
    ],
    perks: ["Health + dental", "Predictable schedule", "Internal mobility paths"],
  },
];

function Careers({ onOpenJob }) {
  const [filter, setFilter] = React.useState("All");
  const depts = ["All", ...Array.from(new Set(JOBS.map(j => j.dept)))];
  const visible = filter === "All" ? JOBS : JOBS.filter(j => j.dept === filter);

  return (
    <section id="careers" className="section" style={{ background: "var(--bg)" }}>
      <div className="container">
        <div className="section-head left" style={{
          display: "flex", flexDirection: "row", justifyContent: "space-between",
          alignItems: "flex-end", maxWidth: "100%", textAlign: "left",
          flexWrap: "wrap", gap: 24, marginBottom: 48,
        }}>
          <div style={{ maxWidth: 560 }}>
            <div className="eyebrow"><span className="dot"/> Careers</div>
            <h2 style={{ fontSize: "clamp(32px, 3.6vw, 48px)", marginTop: 20 }}>
              Build the company that runs your city.
            </h2>
            <p style={{ color: "var(--ink-2)", marginTop: 16, fontSize: 17 }}>
              We hire for craft — in the field and in the cloud. Below are the openings we're actively interviewing for.
            </p>
          </div>

          <div style={{ display: "flex", gap: 4, padding: 4, background: "var(--bg-2)", borderRadius: 12, border: "1px solid var(--line)", flexWrap: "wrap" }}>
            {depts.map(d => (
              <button key={d} onClick={() => setFilter(d)} style={{
                padding: "8px 14px", border: "none", borderRadius: 8,
                fontSize: 13, fontWeight: 500, cursor: "pointer",
                background: filter === d ? "var(--navy-900)" : "transparent",
                color: filter === d ? "#fff" : "var(--ink-2)",
                transition: "all .15s",
              }}>{d}</button>
            ))}
          </div>
        </div>

        {/* Stats strip */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: 0,
          padding: "24px 0",
          marginBottom: 32,
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
        }}>
          {[
            { k: visible.length, v: "Open roles" },
            { k: "200+", v: "Teammates" },
            { k: "14", v: "Metros" },
            { k: "4.8 ★", v: "Glassdoor rating" },
          ].map((s, i) => (
            <div key={i} style={{
              padding: "0 24px",
              borderLeft: i > 0 ? "1px solid var(--line)" : "none",
            }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 600, letterSpacing: "-0.02em" }}>{s.k}</div>
              <div style={{ fontSize: 13, color: "var(--ink-3)", marginTop: 2 }}>{s.v}</div>
            </div>
          ))}
        </div>

        {/* Job listings */}
        <div style={{ display: "grid", gap: 12 }}>
          {visible.map(j => (
            <button
              key={j.id}
              onClick={() => onOpenJob(j)}
              className="job-row"
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1.6fr 1fr 1fr 1fr auto",
                gap: 24,
                alignItems: "center",
                padding: "22px 28px",
                background: "#fff",
                border: "1px solid var(--line)",
                borderRadius: 16,
                cursor: "pointer",
                textAlign: "left",
                transition: "all .2s ease",
                width: "100%",
                fontFamily: "inherit",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = j.accent;
                e.currentTarget.style.boxShadow = `0 12px 30px -16px ${j.accent}55`;
                e.currentTarget.style.transform = "translateY(-2px)";
                const arr = e.currentTarget.querySelector(".job-arr");
                if (arr) { arr.style.background = j.accent; arr.style.color = "#fff"; arr.style.transform = "translateX(4px)"; }
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "var(--line)";
                e.currentTarget.style.boxShadow = "";
                e.currentTarget.style.transform = "";
                const arr = e.currentTarget.querySelector(".job-arr");
                if (arr) { arr.style.background = "var(--bg-3)"; arr.style.color = "var(--ink-2)"; arr.style.transform = ""; }
              }}
            >
              <span style={{
                width: 4, height: 44,
                borderRadius: 2,
                background: j.accent,
              }}/>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 600, color: "var(--navy-900)" }}>{j.title}</div>
                <div style={{ fontSize: 13, color: "var(--ink-3)", marginTop: 4 }}>{j.dept} · {j.summary.slice(0, 60)}…</div>
              </div>
              <div style={{ fontSize: 13, color: "var(--ink-2)", display: "flex", alignItems: "center", gap: 8 }}>
                <Icon.MapPin size={14}/> {j.location}
              </div>
              <div style={{
                fontSize: 12, color: "var(--ink-2)",
                display: "inline-flex", alignItems: "center", gap: 6,
                padding: "4px 10px",
                background: "var(--bg-2)",
                border: "1px solid var(--line)",
                borderRadius: 999,
                width: "fit-content",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.04em",
              }}>{j.type}</div>
              <div style={{ fontSize: 13, fontWeight: 500, color: "var(--navy-900)", fontFamily: "var(--font-mono)" }}>{j.salary}</div>
              <span className="job-arr" style={{
                width: 38, height: 38, borderRadius: 10,
                background: "var(--bg-3)", color: "var(--ink-2)",
                display: "grid", placeItems: "center",
                transition: "all .25s ease",
              }}><Icon.ArrowRight size={16}/></span>
            </button>
          ))}
        </div>

        {/* General application CTA */}
        <div style={{
          marginTop: 32,
          padding: 28,
          background: "linear-gradient(135deg, var(--navy-900) 0%, #1E293B 100%)",
          color: "#fff",
          borderRadius: 20,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: 24, flexWrap: "wrap",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: "-50%", right: "-10%",
            width: 400, height: 400, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(37,99,235,0.3), transparent 60%)",
            filter: "blur(60px)",
          }}/>
          <div style={{ position: "relative", maxWidth: 560 }}>
            <h3 style={{ fontSize: 22, color: "#fff" }}>Don't see your role?</h3>
            <p style={{ fontSize: 15, color: "rgba(203,213,225,0.8)", marginTop: 6 }}>
              Send us your CV anyway. We hire opportunistically when we meet someone exceptional — trade, IT, ops, or otherwise.
            </p>
          </div>
          <button
            onClick={() => onOpenJob({ id: "general", title: "General Application", dept: "Open application", type: "Any", location: "Anywhere", salary: "—", summary: "Tell us about yourself and what kind of role would fit.", responsibilities: [], requirements: [], perks: [], accent: "#F97316" })}
            className="btn btn-orange" style={{ position: "relative" }}
          >
            Submit your CV <Icon.Send size={14}/>
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 1000px) {
          .job-row { grid-template-columns: auto 1fr auto !important; row-gap: 12px !important; }
          .job-row > :nth-child(3),
          .job-row > :nth-child(4),
          .job-row > :nth-child(5) { grid-column: span 1 !important; }
          .job-row > :nth-child(3) { grid-column: 2 / 4 !important; grid-row: 2 !important; }
          .job-row > :nth-child(4) { grid-column: 2 !important; grid-row: 3 !important; }
          .job-row > :nth-child(5) { grid-column: 3 !important; grid-row: 3 !important; justify-self: end; }
        }
        @media (max-width: 600px) {
          .job-row { padding: 20px !important; gap: 16px !important; }
        }
      `}</style>
    </section>
  );
}

/* === Job Detail Modal with application form === */
function JobModal({ job, onClose }) {
  const [tab, setTab] = React.useState("description");
  const [form, setForm] = React.useState({
    name: "", email: "", phone: "", linkedin: "",
    cover: "", cv: null, cvName: "",
  });
  const [submitted, setSubmitted] = React.useState(false);
  const [dragOver, setDragOver] = React.useState(false);

  React.useEffect(() => {
    const onKey = e => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!job) return null;

  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));
  const handleFile = file => {
    if (!file) return;
    setForm(f => ({ ...f, cv: file, cvName: file.name }));
  };
  const submit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 100,
        background: "rgba(11,18,32,0.7)",
        backdropFilter: "blur(8px)",
        display: "grid", placeItems: "center",
        padding: 24,
        animation: "fadeIn .2s ease",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: 24,
          maxWidth: 880, width: "100%",
          maxHeight: "90vh",
          display: "flex", flexDirection: "column",
          boxShadow: "0 40px 100px -20px rgba(0,0,0,0.5)",
          overflow: "hidden",
          animation: "popIn .25s ease",
        }}
      >
        {/* Header */}
        <div className="modal-header" style={{
          padding: "28px 32px",
          borderBottom: "1px solid var(--line)",
          background: `linear-gradient(135deg, ${job.accent}10 0%, transparent 60%)`,
          position: "relative",
        }}>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              position: "absolute", top: 20, right: 20,
              width: 36, height: 36, borderRadius: 10,
              background: "var(--bg-2)", border: "1px solid var(--line)",
              display: "grid", placeItems: "center", cursor: "pointer",
              color: "var(--ink-2)",
            }}
          ><Icon.X size={18}/></button>

          <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".1em",
              padding: "4px 10px", borderRadius: 999,
              background: `${job.accent}18`, color: job.accent,
              textTransform: "uppercase",
            }}>{job.dept}</span>
            {job.id !== "general" && (
              <>
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".1em",
                  padding: "4px 10px", borderRadius: 999,
                  background: "var(--bg-2)", border: "1px solid var(--line)",
                  color: "var(--ink-2)", textTransform: "uppercase",
                }}>{job.type}</span>
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".1em",
                  padding: "4px 10px", borderRadius: 999,
                  background: "var(--bg-2)", border: "1px solid var(--line)",
                  color: "var(--ink-2)", textTransform: "uppercase",
                }}>Posted {job.posted || "recently"}</span>
              </>
            )}
          </div>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 3vw, 32px)", color: "var(--navy-900)", paddingRight: 48 }}>
            {job.title}
          </h3>
          {job.id !== "general" && (
            <div style={{ display: "flex", gap: 24, marginTop: 12, flexWrap: "wrap", fontSize: 14, color: "var(--ink-2)" }}>
              <span style={{ display: "flex", alignItems: "center", gap: 6 }}><Icon.MapPin size={14}/> {job.location}</span>
              <span style={{ display: "flex", alignItems: "center", gap: 6 }}><Icon.Chart size={14}/> {job.salary}</span>
              <span style={{ display: "flex", alignItems: "center", gap: 6 }}><Icon.Clock size={14}/> {job.type}</span>
            </div>
          )}

          {/* Tabs */}
          {job.id !== "general" && (
            <div style={{ display: "flex", gap: 4, marginTop: 24, borderBottom: "1px solid var(--line)", marginBottom: -28, marginLeft: -32, marginRight: -32, paddingLeft: 32, paddingRight: 32 }}>
              {[
                { k: "description", l: "Job description" },
                { k: "apply", l: "Apply now" },
              ].map(t => {
                const active = tab === t.k;
                return (
                  <button key={t.k} onClick={() => setTab(t.k)} style={{
                    padding: "12px 16px",
                    background: "transparent",
                    border: "none",
                    borderBottom: active ? `2px solid ${job.accent}` : "2px solid transparent",
                    color: active ? "var(--navy-900)" : "var(--ink-3)",
                    fontWeight: active ? 600 : 500,
                    fontSize: 14,
                    cursor: "pointer",
                    marginBottom: -1,
                  }}>{t.l}</button>
                );
              })}
            </div>
          )}
        </div>

        {/* Body */}
        <div className="modal-body" style={{ flex: 1, overflow: "auto", padding: "32px" }}>
          {(tab === "description" && job.id !== "general") ? (
            <JobDescription job={job} onApply={() => setTab("apply")}/>
          ) : (
            !submitted ? (
              <form onSubmit={submit} style={{ display: "grid", gap: 20 }}>
                <div>
                  <h4 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 600 }}>
                    {job.id === "general" ? "Tell us about yourself" : `Apply for ${job.title}`}
                  </h4>
                  <p style={{ fontSize: 14, color: "var(--ink-2)", marginTop: 6 }}>
                    Drop your CV and we'll get back to you within 5 business days.
                  </p>
                </div>

                {/* CV upload */}
                <div
                  onDragOver={e => { e.preventDefault(); setDragOver(true); }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={e => {
                    e.preventDefault();
                    setDragOver(false);
                    handleFile(e.dataTransfer.files[0]);
                  }}
                  style={{
                    border: `2px dashed ${dragOver ? job.accent : "var(--line-2)"}`,
                    background: dragOver ? `${job.accent}08` : "var(--bg-2)",
                    borderRadius: 14,
                    padding: 28,
                    textAlign: "center",
                    transition: "all .2s",
                    cursor: "pointer",
                  }}
                  onClick={() => document.getElementById("cv-input").click()}
                >
                  <input
                    id="cv-input"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    style={{ display: "none" }}
                    onChange={e => handleFile(e.target.files[0])}
                  />
                  {form.cvName ? (
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
                      <div style={{
                        width: 44, height: 44, borderRadius: 10,
                        background: `${job.accent}20`,
                        display: "grid", placeItems: "center",
                        color: job.accent,
                      }}><Icon.Check size={22}/></div>
                      <div style={{ textAlign: "left" }}>
                        <div style={{ fontWeight: 600, fontSize: 15 }}>{form.cvName}</div>
                        <div style={{ fontSize: 12, color: "var(--ink-3)" }}>Click to replace</div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div style={{
                        width: 48, height: 48, borderRadius: 12,
                        background: "#fff",
                        border: "1px solid var(--line)",
                        display: "grid", placeItems: "center",
                        margin: "0 auto 12px",
                        color: "var(--ink-2)",
                      }}><Icon.Send size={20}/></div>
                      <div style={{ fontSize: 15, fontWeight: 500, color: "var(--navy-900)" }}>
                        Drop your CV here or <span style={{ color: job.accent }}>browse</span>
                      </div>
                      <div style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 4, fontFamily: "var(--font-mono)" }}>
                        PDF, DOC, DOCX · Max 10MB
                      </div>
                    </>
                  )}
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="job-form-grid">
                  <Field label="Full name" v={form.name} onChange={set("name")} placeholder="Your name" required/>
                  <Field label="Email" v={form.email} onChange={set("email")} placeholder="you@email.com" type="email" required/>
                  <Field label="Phone" v={form.phone} onChange={set("phone")} placeholder="(555) 555-5555"/>
                  <Field label="LinkedIn (optional)" v={form.linkedin} onChange={set("linkedin")} placeholder="linkedin.com/in/…"/>
                  <Field label={job.id === "general" ? "What kind of role are you looking for?" : "Why are you a fit for this role?"} v={form.cover} onChange={set("cover")} placeholder="A few sentences is plenty." textarea full/>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap", paddingTop: 8 }}>
                  <div style={{ fontSize: 12, color: "var(--ink-3)", display: "flex", alignItems: "center", gap: 8 }}>
                    <Icon.Shield size={14}/> We'll only use your details to evaluate this application.
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ background: job.accent, boxShadow: `0 8px 20px -6px ${job.accent}80` }}>
                    Submit application <Icon.Send size={14}/>
                  </button>
                </div>
              </form>
            ) : (
              <div style={{ padding: "40px 0", textAlign: "center" }}>
                <div style={{
                  width: 72, height: 72, borderRadius: "50%",
                  background: "linear-gradient(135deg, #22C55E, #16A34A)",
                  display: "grid", placeItems: "center",
                  margin: "0 auto 20px",
                  boxShadow: "0 12px 30px -10px rgba(34,197,94,0.5)",
                }}><Icon.Check size={32} stroke="#fff" strokeWidth={2.5}/></div>
                <h3 style={{ fontSize: 26 }}>Thanks, {form.name || "there"}!</h3>
                <p style={{ color: "var(--ink-2)", marginTop: 8, maxWidth: 440, marginInline: "auto" }}>
                  Your application for <strong style={{ color: "var(--navy-900)" }}>{job.title}</strong> has been received.
                  We'll review it and be in touch within 5 business days.
                </p>
                <button onClick={onClose} className="btn btn-ghost" style={{ marginTop: 24 }}>Close</button>
              </div>
            )
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .job-form-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .modal-header { padding: 18px 20px !important; }
          .modal-body { padding: 20px !important; }
        }
      `}</style>
    </div>
  );
}

function JobDescription({ job, onApply }) {
  return (
    <div style={{ display: "grid", gap: 28 }}>
      <p style={{ fontSize: 16, color: "var(--ink-2)", lineHeight: 1.65 }}>{job.summary}</p>

      <Block title="What you'll do" items={job.responsibilities}/>
      <Block title="What we're looking for" items={job.requirements}/>

      {job.perks?.length > 0 && (
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: ".12em", color: "var(--ink-3)", textTransform: "uppercase", marginBottom: 12 }}>Perks &amp; benefits</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {job.perks.map(p => (
              <span key={p} style={{
                padding: "6px 12px",
                background: "var(--bg-2)",
                border: "1px solid var(--line)",
                borderRadius: 999,
                fontSize: 13, color: "var(--ink-2)",
              }}>{p}</span>
            ))}
          </div>
        </div>
      )}

      <div style={{ display: "flex", gap: 12, paddingTop: 16, borderTop: "1px solid var(--line)" }}>
        <button onClick={onApply} className="btn btn-primary" style={{ background: job.accent, boxShadow: `0 8px 20px -6px ${job.accent}80` }}>
          Apply for this role <Icon.ArrowRight size={14}/>
        </button>
        <a href="mailto:careers@logicgateit.com" className="btn btn-ghost">
          Email a referral
        </a>
      </div>
    </div>
  );
}

function Block({ title, items }) {
  if (!items?.length) return null;
  return (
    <div>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: ".12em", color: "var(--ink-3)", textTransform: "uppercase", marginBottom: 12 }}>
        {title}
      </div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
        {items.map((it, i) => (
          <li key={i} style={{ display: "flex", gap: 12, fontSize: 15, color: "var(--ink)", lineHeight: 1.55 }}>
            <span style={{
              flexShrink: 0,
              width: 22, height: 22, borderRadius: 6,
              background: "rgba(37,99,235,0.08)",
              color: "var(--blue-600)",
              display: "grid", placeItems: "center",
              marginTop: 1,
            }}><Icon.Check size={14}/></span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

window.Careers = Careers;
window.JobModal = JobModal;
