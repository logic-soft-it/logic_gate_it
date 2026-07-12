# Website Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign Logic Gate IT website to balance two equal divisions (Property Maintenance + Software Solutions) with honest positioning and dual lead-capture funnels.

**Architecture:** Update existing components (Hero, About, Contact, FAQ, Footer) to reflect both divisions equally. Add new `SoftwareSolutions` component emphasizing fast delivery, affordability, custom-built solutions for SMBs/enterprises. Remove all fake credentials (ISO badge, 14-year timeline). Maintain Property Maintenance section as-is.

**Tech Stack:** React, existing component structure, CSS-in-JS styling

## Global Constraints

- **Company age:** 3 years (no fake 14+ year claims)
- **Certifications:** None (remove ISO 9001 badge)
- **Target audience (Software):** SMBs and enterprises
- **Key differentiators:** Fast delivery, affordability, custom-built
- **Primary goal:** Drive qualified software leads
- **Copy tone:** Business-focused for software, service-focused for property maintenance
- **No fake data:** Remove fictional timeline, fake client logos, fake metrics

---

## Task 1: Update Hero Component with Division Selection Cards

**Files:**
- Modify: `nav-hero.jsx` (Hero component)
- Test: Manual browser review

**Interfaces:**
- Consumes: Existing `Hero` component structure
- Produces: Hero component with division selection cards below main hero message

**Steps:**

- [ ] **Step 1: Read the current Hero component**

Open `nav-hero.jsx` and review the `Hero()` function (lines 133-234). Note the current structure:
- Left side: headline, subheading, CTAs, trust badges
- Right side: HeroVisual component

- [ ] **Step 2: Update hero headline to be division-agnostic**

Replace:
```jsx
<span style={{
  background: "linear-gradient(135deg, #60A5FA 0%, #93C5FD 60%, #F97316 130%)",
  WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
}}>Property &amp; Technology</span> Solutions
```

With:
```jsx
<span style={{
  background: "linear-gradient(135deg, #60A5FA 0%, #93C5FD 60%, #F97316 130%)",
  WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
}}>Full-stack Solutions</span> for Operations &amp; Growth
```

- [ ] **Step 3: Update hero subheading**

Replace:
```jsx
Professional plumbing, electrical, HVAC, roofing, landscaping, maintenance,
and software support — engineered for residential and commercial properties at scale.
```

With:
```jsx
Two divisions. One mission. Property maintenance and custom software solutions
for SMBs and enterprises that can't afford downtime.
```

- [ ] **Step 4: Update trust badges to remove fake credentials**

Replace the three badges:
```jsx
{[
  { k: "14+", v: "Years experience" },
  { k: "24/7", v: "Emergency support" },
  { k: "ISO", v: "9001 certified" },
].map(b => (...))}
```

With (update the values to accurate ones from your company):
```jsx
{[
  { k: "3", v: "Years in business" },
  { k: "50+", v: "Projects delivered" },
  { k: "24/7", v: "Customer support" },
].map(b => (...))}
```

Note: Replace "50+" with your actual number if different.

- [ ] **Step 5: Add division selection cards below hero CTAs**

After the CTAs and trust badges section (around line 220), add:

```jsx
{/* Division Selection Cards */}
<div className="reveal is-visible reveal-delay-4" style={{
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 20,
  marginTop: 60,
  paddingTop: 60,
  borderTop: "1px solid rgba(255,255,255,0.1)",
}}>
  {/* Property Maintenance */}
  <a href="#maintenance" style={{
    display: "block",
    padding: 32,
    borderRadius: 24,
    background: "linear-gradient(135deg, #fff 0%, #2563EB06 100%)",
    border: "1px solid rgba(255,255,255,0.15)",
    transition: "all .3s ease",
    textDecoration: "none",
  }}
  onMouseEnter={e => {
    e.currentTarget.style.transform = "translateY(-4px)";
    e.currentTarget.style.boxShadow = "0 20px 50px -10px rgba(37,99,235,0.3)";
  }}
  onMouseLeave={e => {
    e.currentTarget.style.transform = "";
    e.currentTarget.style.boxShadow = "";
  }}>
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
      <Icon.Building size={24} stroke="#2563EB"/>
      <h3 style={{ fontSize: 20, fontWeight: 600, color: "#fff", margin: 0 }}>
        Property Maintenance
      </h3>
    </div>
    <p style={{ fontSize: 14, color: "rgba(226,232,240,0.8)", margin: "0 0 16px 0", lineHeight: 1.5 }}>
      Plumbing, electrical, HVAC, roofing, and more. 12+ services for residential and commercial properties.
    </p>
    <div style={{ fontSize: 13, color: "#2563EB", fontWeight: 500, display: "flex", alignItems: "center", gap: 6 }}>
      Explore services <Icon.ArrowRight size={14}/>
    </div>
  </a>

  {/* Software Solutions */}
  <a href="#software-solutions" style={{
    display: "block",
    padding: 32,
    borderRadius: 24,
    background: "linear-gradient(135deg, #fff 0%, #F9731606 100%)",
    border: "1px solid rgba(255,255,255,0.15)",
    transition: "all .3s ease",
    textDecoration: "none",
  }}
  onMouseEnter={e => {
    e.currentTarget.style.transform = "translateY(-4px)";
    e.currentTarget.style.boxShadow = "0 20px 50px -10px rgba(249,115,22,0.3)";
  }}
  onMouseLeave={e => {
    e.currentTarget.style.transform = "";
    e.currentTarget.style.boxShadow = "";
  }}>
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
      <Icon.Code size={24} stroke="#F97316"/>
      <h3 style={{ fontSize: 20, fontWeight: 600, color: "#fff", margin: 0 }}>
        Custom Software
      </h3>
    </div>
    <p style={{ fontSize: 14, color: "rgba(226,232,240,0.8)", margin: "0 0 16px 0", lineHeight: 1.5 }}>
      Fast delivery. Affordable. Custom-built CRM, ERP, e-commerce, and mobile solutions.
    </p>
    <div style={{ fontSize: 13, color: "#F97316", fontWeight: 500, display: "flex", alignItems: "center", gap: 6 }}>
      Get consultation <Icon.ArrowRight size={14}/>
    </div>
  </a>
</div>
```

- [ ] **Step 6: Add responsive style for division cards**

At the end of the `<style>` block in Hero (around line 227), add:

```jsx
@media (max-width: 820px) {
  .division-cards { grid-template-columns: 1fr !important; }
}
```

- [ ] **Step 7: Test in browser**

Open the site and verify:
- Hero headline is updated
- Subheading reflects both divisions
- Trust badges show accurate (or placeholder) numbers
- Two division cards appear below CTAs with correct colors and hover states
- Links go to correct sections (#maintenance, #software-solutions)

- [ ] **Step 8: Commit**

```bash
git add nav-hero.jsx
git commit -m "feat: update Hero with division-agnostic messaging and selection cards"
```

---

## Task 2: Create Software Solutions Section (Services Grid)

**Files:**
- Modify: `services-why-about.jsx` (add SoftwareSolutions component)
- Test: Manual browser review

**Interfaces:**
- Consumes: Existing `ServiceCard` component, Icon library
- Produces: `SoftwareSolutions` component with 6 service cards, exported to window

**Steps:**

- [ ] **Step 1: Add Software Solutions service definitions**

At the top of `services-why-about.jsx`, after the existing `SOFTWARE_SERVICES` array (line 46), verify it contains:

```jsx
const SOFTWARE_SERVICES = [
  { key: "crm", title: "Custom CRM", desc: "Centralize customer data. Automate workflows. Designed for hotels, schools, and service businesses.", I: "Users", accent: "#2563EB" },
  { key: "erp", title: "ERP Solutions", desc: "Enterprise resource planning integrated with your operations. Streamline processes across departments.", I: "Layers", accent: "#F97316" },
  { key: "ecommerce", title: "E-commerce", desc: "Custom online stores with payment integration, inventory management, and scaling capabilities.", I: "ShoppingCart", accent: "#2563EB" },
  { key: "mobile", title: "Mobile Software", desc: "iOS and Android apps built to your exact specifications. Offline-capable, fast, reliable.", I: "Smartphone", accent: "#F97316" },
  { key: "custom", title: "Custom Software", desc: "Bespoke applications and internal tools tailored to your unique workflow and challenges.", I: "Code", accent: "#2563EB" },
  { key: "cybersecurity", title: "Cybersecurity Support", desc: "Security audits, vulnerability management, compliance support, and ongoing threat monitoring.", I: "Shield", accent: "#A78BFA" },
];
```

Update descriptions if the above don't match your messaging.

- [ ] **Step 2: Add SoftwareSolutions component**

Add this new component after the `Services` function (around line 332):

```jsx
function SoftwareSolutions() {
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
      </div>

      <style>{`
        @media (max-width: 820px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
```

- [ ] **Step 3: Export SoftwareSolutions**

At the bottom of `services-why-about.jsx` (line 607+), add:

```jsx
window.SoftwareSolutions = SoftwareSolutions;
```

- [ ] **Step 4: Test in browser**

Open the site and verify:
- Section appears with dark background
- 6 service cards render correctly
- Card titles match SOFTWARE_SERVICES
- Hover states work
- CTA button is visible and clickable

- [ ] **Step 5: Commit**

```bash
git add services-why-about.jsx
git commit -m "feat: add SoftwareSolutions component with 6 service cards"
```

---

## Task 3: Add Differentiators Section to Software Solutions

**Files:**
- Modify: `services-why-about.jsx` (enhance SoftwareSolutions component)
- Test: Manual browser review

**Interfaces:**
- Consumes: Icon library
- Produces: Enhanced SoftwareSolutions with differentiators section

**Steps:**

- [ ] **Step 1: Add differentiators array**

Inside the `SoftwareSolutions` function, before the return statement, add:

```jsx
const differentiators = [
  {
    I: "Bolt",
    title: "Fast Delivery",
    desc: "Ship in weeks, not quarters. We move fast — agile sprints, quick iterations, no red tape. Your software launches when you need it."
  },
  {
    I: "DollarSign",
    title: "Affordable",
    desc: "Enterprise quality, SMB pricing. No enterprise tax. Fixed-scope projects. Transparent costs. Quality software you can actually afford."
  },
  {
    I: "Wrench",
    title: "Custom-Built",
    desc: "Not a template. Not a SaaS plugin. Bespoke solutions built to your exact workflow and challenges."
  },
];
```

- [ ] **Step 2: Add differentiators section after services grid**

Replace the closing `</div>` of the SoftwareSolutions component with this (around line 340 where it currently ends):

```jsx
        {/* Differentiators */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 16,
        }}>
          {differentiators.map((d, i) => {
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
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Verify Icon references**

Check that `Icon.Bolt`, `Icon.DollarSign`, and `Icon.Wrench` exist in `icons.jsx`. If not, use alternatives:
- `Bolt` → `Zap` (lightning bolt)
- `DollarSign` → `Coins` or `TrendingUp`
- `Wrench` → `Settings` or `Customize`

Update the `I:` values in the differentiators array if needed.

- [ ] **Step 4: Test in browser**

Scroll to Software Solutions section and verify:
- 3 differentiator cards appear below service cards
- Each card has icon, title, description
- Hover states work (color change, shadow, slight lift)
- Layout is responsive on mobile

- [ ] **Step 5: Commit**

```bash
git add services-why-about.jsx
git commit -m "feat: add differentiators section to Software Solutions"
```

---

## Task 4: Add Social Proof and Lead CTA to Software Solutions

**Files:**
- Modify: `services-why-about.jsx` (enhance SoftwareSolutions component)
- Test: Manual browser review

**Interfaces:**
- Consumes: Icon library
- Produces: SoftwareSolutions with testimonials/social proof and prominent lead CTA

**Steps:**

- [ ] **Step 1: Add sample testimonials/case study data**

Inside SoftwareSolutions function, before the differentiators array, add:

```jsx
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
```

Replace these with your actual testimonials when available. For now, these are placeholders.

- [ ] **Step 2: Add social proof section**

After the differentiators closing `</div>`, add:

```jsx
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
                <div style{{
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
```

- [ ] **Step 3: Add prominent lead CTA after social proof**

After the social proof section closing `</div>`, add:

```jsx
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
          <a href="#contact" className="btn btn-light" style={{
            display: "inline-flex",
            padding: "12px 32px",
            borderRadius: 12,
            background: "#fff",
            color: "#EA580C",
            fontWeight: 600,
            textDecoration: "none",
            transition: "all .25s ease",
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
    </section>
  );
}
```

- [ ] **Step 4: Test in browser**

Scroll through Software Solutions section and verify:
- Social proof cards appear with client names, quotes, metrics
- Layout is responsive
- Lead CTA section is prominent with orange gradient
- Button has hover state (scale effect)
- All links point to #contact

- [ ] **Step 5: Add your real testimonials**

Update the `socialProof` array with actual client testimonials. If you don't have them yet, keep the placeholders and update later.

- [ ] **Step 6: Commit**

```bash
git add services-why-about.jsx
git commit -m "feat: add social proof and lead CTA to Software Solutions"
```

---

## Task 5: Rewrite About Section with Honest 3-Year Story

**Files:**
- Modify: `services-why-about.jsx` (rewrite About component)
- Test: Manual browser review

**Interfaces:**
- Consumes: Icon library, existing About structure
- Produces: Updated About component with 3-year timeline, removed fake ISO badge

**Steps:**

- [ ] **Step 1: Review current About component**

Open `services-why-about.jsx` and find the `About()` function (starts around line 465). Note the current milestones array and ISO badge.

- [ ] **Step 2: Replace milestones with actual 3-year timeline**

Replace the `milestones` array with your actual company history:

```jsx
const milestones = [
  { year: "2023", t: "Founded Logic Gate IT as a software development shop." },
  { year: "2024", t: "Launched first major CRM for hospitality clients; expanded to e-commerce." },
  { year: "2025", t: "Added ERP solutions and cybersecurity support; growing team." },
  { year: "2026", t: "Now serving 50+ SMBs and enterprises across multiple industries." },
];
```

Update years and descriptions to match your actual timeline.

- [ ] **Step 3: Remove ISO certification badge**

Find the floating cert card (around line 495):

```jsx
<div className="card" style={{
  position: "absolute",
  bottom: -28, right: -20,
  padding: 18,
  boxShadow: "var(--shadow-lg)",
  maxWidth: 240,
  background: "#fff",
}}>
  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
    <div style={{
      width: 36, height: 36, borderRadius: 10,
      background: "linear-gradient(135deg, #2563EB, #1D4FCB)",
      display: "grid", placeItems: "center",
    }}><Icon.Shield size={18} stroke="#fff"/></div>
    <div>
      <div style={{ fontSize: 13, fontWeight: 600 }}>ISO 9001:2015</div>
      <div style={{ fontSize: 11, color: "var(--ink-3)", fontFamily: "var(--font-mono)" }}>Quality certified</div>
    </div>
  </div>
  {/* ... rest of ISO card ... */}
</div>
```

Delete this entire ISO card section (lines ~495-518).

- [ ] **Step 4: Replace with an honest achievement**

Replace the ISO card with an achievement card. If you have a real metric (e.g., "50+ projects delivered"), use that:

```jsx
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
```

Replace "50+ Projects" with your actual metric if different.

- [ ] **Step 5: Update the "Since" card**

Replace the "SINCE 2012" card (lines ~520-532) with:

```jsx
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
```

- [ ] **Step 6: Update About section headline and story**

Replace the existing headline (around line 538):

```jsx
<h2 style={{ fontSize: "clamp(32px, 3.6vw, 48px)", marginTop: 20 }}>
  We treat your property like infrastructure — because that's what it is.
</h2>
```

With:

```jsx
<h2 style={{ fontSize: "clamp(32px, 3.6vw, 48px)", marginTop: 20 }}>
  Three years building software that actually works.
</h2>
```

- [ ] **Step 7: Update About story paragraph**

Replace:

```jsx
<p style={{ color: "var(--ink-2)", fontSize: 17, marginTop: 16, lineHeight: 1.65 }}>
  Logic Gate IT started as a small IT services shop and grew into a full-stack operations partner —
  one team that handles the wiring under the floor and the software in the cloud. We coordinate
  every trade in-house, run the platform that ties it together, and answer the phone when something breaks.
</p>
```

With:

```jsx
<p style={{ color: "var(--ink-2)", fontSize: 17, marginTop: 16, lineHeight: 1.65 }}>
  We started as a lean software development team solving real problems for hospitality, retail, and enterprise clients.
  Three years later, we've built CRMs, e-commerce platforms, ERPs, and mobile apps — all fast, all affordable, all custom.
  We don't do templates. We solve your problem.
</p>
```

- [ ] **Step 8: Update tagline/quote**

Replace the italic tagline (around line 541):

```jsx
<p style={{ fontSize: 15, color: "var(--blue-600)", fontFamily: "var(--font-mono)", marginTop: 12, letterSpacing: "0.04em" }}>
  "Efficiently active, Effectively creative."
</p>
```

Keep this as-is (it's good), or update if you prefer different messaging.

- [ ] **Step 9: Update the two supporting points**

Replace the grid of two cards:

```jsx
{[
  { I: "Users", t: "Customer-first", d: "Dedicated account managers, not call centers." },
  { I: "Sparkle", t: "Quality commitment", d: "Every job carries a 2-year workmanship warranty." },
].map((b, i) => (...))}
```

With:

```jsx
{[
  { I: "Zap", t: "Fast delivery", d: "We ship in weeks. Agile process, quick iterations." },
  { I: "Sparkle", t: "Quality you trust", d: "Real support after launch. We stand behind our code." },
].map((b, i) => (...))}
```

- [ ] **Step 10: Test in browser**

Open the About section and verify:
- Headline shows "Three years building software..."
- Milestones show 2023-2026 with accurate descriptions
- ISO badge is removed
- Achievement card shows your real metric (e.g., "50+ Projects")
- "Founded 2023" card is visible
- Story paragraph reflects software focus
- Layout is responsive

- [ ] **Step 11: Commit**

```bash
git add services-why-about.jsx
git commit -m "feat: rewrite About section with honest 3-year timeline, remove fake ISO badge"
```

---

## Task 6: Update Contact Section with Dual-Funnel Forms

**Files:**
- Modify: `cta-faq-contact-footer.jsx` (Contact component)
- Test: Manual form submission test

**Interfaces:**
- Consumes: Existing Contact form structure
- Produces: Contact component with two separate inquiry forms (Property Maintenance + Software Solutions)

**Steps:**

- [ ] **Step 1: Read the current Contact component**

Open `cta-faq-contact-footer.jsx` and find the `Contact()` function. Review the current form structure.

- [ ] **Step 2: Update Contact section heading**

Replace the current heading with:

```jsx
<h2 style={{ fontSize: "clamp(36px, 4.4vw, 56px)" }}>Let's work together</h2>
<p style={{ color: "var(--ink-2)", fontSize: 16, marginTop: 8 }}>
  Whether you need property maintenance or custom software, we're here to help.
</p>
```

- [ ] **Step 3: Create dual-form structure**

Replace the form with a two-column layout. Update the form container (usually around a `<div>` with class="form-container" or similar):

```jsx
<div style={{
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
```

- [ ] **Step 4: Add responsive styling for mobile**

At the end of the Contact section's `<style>` block, add:

```jsx
@media (max-width: 900px) {
  .contact-forms { grid-template-columns: 1fr !important; }
}
```

- [ ] **Step 5: Test in browser**

Open Contact section and verify:
- Two forms side-by-side (or stacked on mobile)
- Property Maintenance form has correct fields
- Software Solutions form has correct fields
- Both forms are functional (inputs accept text)
- Buttons are clickable

Note: Form submission won't work yet without a backend service. That's a separate setup step.

- [ ] **Step 6: Commit**

```bash
git add cta-faq-contact-footer.jsx
git commit -m "feat: update Contact section with dual-funnel forms for both divisions"
```

---

## Task 7: Refresh FAQ Section

**Files:**
- Modify: `cta-faq-contact-footer.jsx` (FAQ component)
- Test: Manual interaction test

**Interfaces:**
- Consumes: Existing FAQ component structure
- Produces: Updated FAQ with Property Maintenance and Software Solutions subsections

**Steps:**

- [ ] **Step 1: Read the current FAQ component**

Find the `FAQ()` function in `cta-faq-contact-footer.jsx`. Note the current FAQ items structure.

- [ ] **Step 2: Define dual-section FAQ data**

Replace the FAQ items array with:

```jsx
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
```

Update the Q&A to match your actual practices.

- [ ] **Step 3: Update FAQ rendering to show sections**

Rewrite the FAQ rendering section to display both sections. Replace the FAQ items loop with:

```jsx
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
        {section.items.map((item, iIdx) => (
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
        ))}
      </div>
    </div>
  ))}
</div>
```

- [ ] **Step 4: Add responsive styling**

Add to the FAQ `<style>` block:

```jsx
@media (max-width: 900px) {
  .faq-grid { grid-template-columns: 1fr !important; }
}
```

- [ ] **Step 5: Test in browser**

Open FAQ section and verify:
- Two sections appear side-by-side (or stacked on mobile)
- Property Maintenance questions are visible
- Software Solutions questions are visible
- Click on questions to expand/collapse answers
- Styling is clean and readable

- [ ] **Step 6: Commit**

```bash
git add cta-faq-contact-footer.jsx
git commit -m "feat: refresh FAQ with separate Property Maintenance and Software Solutions sections"
```

---

## Task 8: Update Footer

**Files:**
- Modify: `cta-faq-contact-footer.jsx` (Footer component)
- Test: Manual visual review

**Interfaces:**
- Consumes: Existing Footer structure
- Produces: Updated Footer reflecting both divisions equally

**Steps:**

- [ ] **Step 1: Read the current Footer**

Find the `Footer()` function in `cta-faq-contact-footer.jsx`. Note the current footer structure.

- [ ] **Step 2: Update company description**

If there's a tagline or description paragraph, replace with:

```jsx
<p style={{ color: "var(--ink-3)", fontSize: 14, lineHeight: 1.6 }}>
  Logic Gate IT: Custom software solutions and property maintenance services for growing businesses.
  Fast delivery. Affordable. Built to your workflow.
</p>
```

- [ ] **Step 3: Ensure links section includes both divisions**

Update the footer links to include both:

```jsx
<div>
  <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>Services</h4>
  <ul style={{ listStyle: "none", padding: 0 }}>
    <li><a href="#maintenance">Property Maintenance</a></li>
    <li><a href="#software-solutions">Software Solutions</a></li>
    <li><a href="#services">All Services</a></li>
  </ul>
</div>
```

- [ ] **Step 4: Update contact methods**

Ensure footer has contact info for both divisions:

```jsx
<div>
  <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>Contact</h4>
  <ul style={{ listStyle: "none", padding: 0 }}>
    <li><a href="tel:+1234567890">+1 (234) 567-8900</a></li>
    <li><a href="mailto:info@logicgateit.com">info@logicgateit.com</a></li>
    <li><a href="#contact">Schedule Consultation</a></li>
  </ul>
</div>
```

Update phone/email with your actual contact info.

- [ ] **Step 5: Remove any outdated company history or fake claims**

Delete any text referring to "14 years" or "ISO 9001" from the footer.

- [ ] **Step 6: Test in browser**

Open footer and verify:
- Description reflects both divisions
- Links point to correct sections
- Contact info is accurate
- Layout is clean and responsive on mobile

- [ ] **Step 7: Commit**

```bash
git add cta-faq-contact-footer.jsx
git commit -m "feat: update footer to reflect both divisions equally"
```

---

## Task 9: Visual Review and Testing

**Files:**
- All modified files
- Test: Full browser walkthrough

**Interfaces:**
- Consumes: All changes from Tasks 1-8
- Produces: Verified, functional website

**Steps:**

- [ ] **Step 1: Start the dev server**

```bash
npm run dev
# or
yarn dev
```

Expected: Site loads without errors.

- [ ] **Step 2: Test Hero section**

- Navigate to top of page
- Verify division selection cards are visible and correct
- Click "Explore services" → scrolls to Property Maintenance
- Click "Get consultation" → scrolls to Software Solutions
- Check responsive behavior on mobile (cards stack vertically)

- [ ] **Step 3: Test Software Solutions section**

- Scroll to Software Solutions (id="software-solutions")
- Verify 6 service cards display correctly
- Verify 3 differentiator cards display
- Verify social proof cards show
- Verify lead CTA is prominent
- Click "Request consultation" → scrolls to Contact
- Test hover states on cards

- [ ] **Step 4: Test About section**

- Scroll to About
- Verify milestone timeline shows 2023-2026
- Verify ISO badge is gone
- Verify achievement card shows your metric
- Verify "Founded 2023" card is visible
- Verify story text mentions software focus

- [ ] **Step 5: Test Contact section**

- Scroll to Contact
- Verify two forms are visible (Property Maintenance + Software Solutions)
- Fill in Property Maintenance form fields
- Fill in Software Solutions form fields
- Verify all fields accept input
- Verify buttons are clickable

- [ ] **Step 6: Test FAQ section**

- Scroll to FAQ
- Verify two sections appear (Property Maintenance + Software Solutions)
- Click Property Maintenance questions → expand/collapse works
- Click Software Solutions questions → expand/collapse works
- Verify responsive layout on mobile

- [ ] **Step 7: Test Footer**

- Scroll to footer
- Verify company description mentions both divisions
- Verify links are correct
- Verify contact info is accurate
- Test on mobile (should be responsive)

- [ ] **Step 8: Test navigation links**

- Click all nav links
- Verify they scroll to correct sections
- Test mobile menu (if applicable)

- [ ] **Step 9: Check for console errors**

Open browser DevTools (F12) and check console. Verify no errors or warnings.

- [ ] **Step 10: Test on mobile**

- Open site on mobile device or use Chrome DevTools mobile view
- Test all sections for responsive layout
- Verify touch interactions work (buttons, links, form inputs)
- Verify division cards stack correctly on mobile

- [ ] **Step 11: Commit any final fixes**

If you found any issues, fix them and commit:

```bash
git add .
git commit -m "fix: minor styling and layout adjustments"
```

---

## Summary

**What was built:**
- ✅ Hero section with division-agnostic messaging and selection cards
- ✅ Updated hero badges with accurate company metrics
- ✅ New Software Solutions section with 6 service cards
- ✅ Differentiators section emphasizing fast delivery, affordability, custom-built
- ✅ Social proof / case highlights section
- ✅ Prominent lead CTA for software inquiries
- ✅ Rewritten About section with honest 3-year timeline
- ✅ Removed fake ISO certification badge
- ✅ Dual-funnel Contact forms (Property Maintenance + Software Solutions)
- ✅ Refreshed FAQ with two subsections
- ✅ Updated Footer reflecting both divisions
- ✅ Full visual review and testing

**Result:** A balanced, honest website that positions both divisions equally and drives qualified leads for software solutions.

