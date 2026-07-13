// === Maintenance drilldown modal ===
// Step 1: show the 3 sub-categories (Preservation / Maintenance / Renovation)
// Step 2: click a sub → show the relevant service cards, with a back arrow.

function MaintenanceModal({ open, onClose, initialSub = null }) {
  const [activeSub, setActiveSub] = React.useState(initialSub);

  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === "Escape") {
        if (activeSub) setActiveSub(null);
        else onClose();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, activeSub, onClose]);

  // Reset to the requested entry point whenever the modal reopens
  React.useEffect(() => {
    if (open) setActiveSub(initialSub);
  }, [open, initialSub]);

  if (!open) return null;

  const sub = activeSub
    ? window.MAINTENANCE_SUBS.find(s => s.key === activeSub)
    : null;
  const filteredServices = sub
    ? window.MAINTENANCE_SERVICES.filter(s => s.subs?.includes(sub.key))
    : [];

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 100,
        background: "rgba(11,18,32,0.72)",
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
          maxWidth: 1100, width: "100%",
          maxHeight: "90vh",
          display: "flex", flexDirection: "column",
          boxShadow: "0 40px 100px -20px rgba(0,0,0,0.5)",
          overflow: "hidden",
          animation: "popIn .25s ease",
        }}
      >
        {/* Header */}
        <div className="modal-header" style={{
          padding: "24px 32px",
          borderBottom: "1px solid var(--line)",
          background: `linear-gradient(135deg, ${sub ? sub.accent + "12" : "#2563EB12"} 0%, transparent 60%)`,
          position: "relative",
          display: "flex", alignItems: "center", gap: 16,
        }}>
          {activeSub && (
            <button
              onClick={() => setActiveSub(null)}
              aria-label="Back to categories"
              style={{
                width: 40, height: 40, borderRadius: 10,
                background: "#fff", border: "1px solid var(--line)",
                display: "grid", placeItems: "center", cursor: "pointer",
                color: "var(--ink-2)",
                transition: "all .2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--navy-900)"; e.currentTarget.style.color = "var(--navy-900)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--line)"; e.currentTarget.style.color = "var(--ink-2)"; }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>
            </button>
          )}

          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 8,
              fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em",
              color: sub ? sub.accent : "#2563EB",
              textTransform: "uppercase",
              marginBottom: 4,
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: "50%",
                background: sub ? sub.accent : "#2563EB",
                boxShadow: `0 0 0 4px ${(sub ? sub.accent : "#2563EB")}22`,
              }}/>
              {sub ? `Division 01 · ${sub.title}` : "Division 01 · Property Maintenance"}
            </div>
            <h3 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(22px, 2.6vw, 30px)",
              color: "var(--navy-900)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}>
              {sub ? sub.title : "What are you looking for?"}
            </h3>
            {!sub && (
              <p style={{ fontSize: 14, color: "var(--ink-2)", marginTop: 4 }}>
                Pick a category to see the services we offer under it.
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              width: 40, height: 40, borderRadius: 10,
              background: "var(--bg-2)", border: "1px solid var(--line)",
              display: "grid", placeItems: "center", cursor: "pointer",
              color: "var(--ink-2)",
              flexShrink: 0,
            }}
          ><Icon.X size={18}/></button>
        </div>

        {/* Body */}
        <div className="modal-body" style={{ flex: 1, overflow: "auto", padding: "32px" }}>
          {!sub ? (
            <SubCategoryGrid onPick={setActiveSub}/>
          ) : (
            <ServicesForSub sub={sub} services={filteredServices}/>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes popIn { from { opacity: 0; transform: translateY(12px) scale(.98); } to { opacity: 1; transform: none; } }
        @media (max-width: 640px) {
          .modal-header { padding: 18px 20px !important; }
          .modal-body { padding: 20px !important; }
        }
      `}</style>
    </div>
  );
}

function SubCategoryGrid({ onPick }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: 16,
    }}>
      {window.MAINTENANCE_SUBS.map(sub => {
        const IconCmp = Icon[sub.I];
        return (
          <button
            key={sub.key}
            onClick={() => onPick(sub.key)}
            style={{
              position: "relative",
              textAlign: "left",
              padding: 28,
              borderRadius: 20,
              background: `linear-gradient(135deg, #fff 0%, ${sub.accent}08 100%)`,
              border: "1px solid var(--line)",
              cursor: "pointer",
              transition: "all .25s ease",
              fontFamily: "inherit",
              overflow: "hidden",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = `0 20px 50px -20px ${sub.accent}55`;
              e.currentTarget.style.borderColor = `${sub.accent}55`;
              const arr = e.currentTarget.querySelector(".sub-arr");
              if (arr) { arr.style.background = sub.accent; arr.style.color = "#fff"; arr.style.transform = "translate(4px, -4px)"; }
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow = "";
              e.currentTarget.style.borderColor = "var(--line)";
              const arr = e.currentTarget.querySelector(".sub-arr");
              if (arr) { arr.style.background = "var(--bg-3)"; arr.style.color = "var(--ink-2)"; arr.style.transform = ""; }
            }}
          >
            <div style={{
              position: "absolute", top: -50, right: -50, width: 200, height: 200,
              background: `radial-gradient(circle, ${sub.accent}20, transparent 70%)`,
              filter: "blur(20px)", borderRadius: "50%",
              pointerEvents: "none",
            }}/>
            <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div style={{
                width: 56, height: 56, borderRadius: 14,
                background: `linear-gradient(135deg, ${sub.accent}, ${sub.accent}cc)`,
                display: "grid", placeItems: "center", color: "#fff",
                boxShadow: `0 10px 24px -10px ${sub.accent}80`,
              }}><IconCmp size={26} stroke="#fff"/></div>
              <span className="sub-arr" style={{
                width: 36, height: 36, borderRadius: 10,
                background: "var(--bg-3)", color: "var(--ink-2)",
                display: "grid", placeItems: "center",
                transition: "all .25s ease",
              }}><Icon.ArrowUpRight size={16}/></span>
            </div>
            <div style={{
              fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em",
              color: sub.accent, textTransform: "uppercase",
              marginTop: 24, marginBottom: 6,
            }} dangerouslySetInnerHTML={{ __html: sub.short }}/>
            <h4 style={{
              fontFamily: "var(--font-display)",
              fontSize: 22, fontWeight: 600,
              color: "var(--navy-900)",
            }}>{sub.title}</h4>
            <p style={{
              marginTop: 10, fontSize: 14, lineHeight: 1.55,
              color: "var(--ink-2)",
            }}>{sub.desc}</p>
            <div style={{
              marginTop: 18, paddingTop: 14,
              borderTop: "1px dashed var(--line)",
              fontSize: 12, color: "var(--ink-3)",
              display: "flex", justifyContent: "space-between", alignItems: "center",
              fontFamily: "var(--font-mono)", letterSpacing: ".04em",
            }}>
              <span>
                {window.MAINTENANCE_SERVICES.filter(s => s.subs?.includes(sub.key)).length} SERVICES
              </span>
              <span style={{ color: sub.accent, fontWeight: 500 }}>VIEW ALL →</span>
            </div>
          </button>
        );
      })}
    </div>
  );
}

function ServicesForSub({ sub, services }) {
  if (!services.length) {
    return <p style={{ color: "var(--ink-2)" }}>No services yet — get in touch and we'll scope it for you.</p>;
  }
  return (
    <>
      <p style={{
        fontSize: 15, color: "var(--ink-2)", lineHeight: 1.6,
        marginBottom: 24, maxWidth: 720,
      }}>{sub.desc}</p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: 14,
      }}>
        {services.map(s => (
          <window.ServiceCard key={s.key} s={s} variant="light"/>
        ))}
      </div>

      <div style={{
        marginTop: 28, paddingTop: 20,
        borderTop: "1px solid var(--line)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        gap: 16, flexWrap: "wrap",
      }}>
        <div style={{ fontSize: 13, color: "var(--ink-3)" }}>
          Don't see what you need? We custom-scope work across every trade.
        </div>
        <a href="#contact" className="btn btn-primary btn-sm" style={{
          background: sub.accent,
          boxShadow: `0 8px 20px -6px ${sub.accent}80`,
        }}>
          Request a quote <Icon.ArrowRight size={14}/>
        </a>
      </div>
    </>
  );
}

window.MaintenanceModal = MaintenanceModal;
window.SubCategoryGrid = SubCategoryGrid;
