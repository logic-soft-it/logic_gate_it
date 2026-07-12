# EmailJS Contact Forms Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Wire the Property Maintenance and Software Solutions contact forms to EmailJS so submissions arrive as structured emails using one shared template.

**Architecture:** Load `@emailjs/browser` from CDN (no build step). Keep credentials in a `EMAILJS_CONFIG` constant. Both forms are controlled React forms that call a shared `sendInquiry(params)` helper → `emailjs.send(...)`. One template (`template_me4wk3c`) distinguishes forms via `form_type`.

**Tech Stack:** React 18 (UMD + Babel), `@emailjs/browser` v4 CDN, existing CSS variables / button classes

## Global Constraints

- **Service ID:** `service_nqwt96j`
- **Public Key:** `eMjuuw6YW819vojso`
- **Template ID:** `template_me4wk3c`
- **Scope:** Contact dual forms only (not careers, not newsletter)
- **No build step:** CDN scripts only
- **Template variables:** `form_type`, `email`, `phone`, `company_name`, `property_address`, `service_needed`, `software_needed`, `timeline`, `message` (unused → `""`)
- **Required fields:** email + primary select (`service_needed` or `software_needed`); message optional
- **UX:** Sending… / disabled button; success then reset; failure keeps input + inline error
- **Spec:** `docs/superpowers/specs/2026-07-12-emailjs-contact-forms-design.md`

## File map

| File | Responsibility |
|---|---|
| `index.html` | Load EmailJS browser SDK before app scripts |
| `cta-faq-contact-footer.jsx` | `EMAILJS_CONFIG`, `sendInquiry`, controlled dual Contact forms, remove dead hidden form |

---

### Task 1: Load EmailJS CDN + add config helper

**Files:**
- Modify: `index.html`
- Modify: `cta-faq-contact-footer.jsx` (top of file, before `Contact`)
- Test: Open site in browser, confirm `window.emailjs` exists in DevTools console

**Interfaces:**
- Consumes: none
- Produces: `EMAILJS_CONFIG` object; `sendInquiry(templateParams)` → `Promise`; EmailJS initialized once

- [ ] **Step 1: Add EmailJS CDN script to `index.html`**

Insert this script **after** the React/Babel scripts and **before** the Babel JSX files (so `emailjs` is global when Contact loads):

```html
  <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4.4.1/dist/email.min.js"></script>
```

Place it just before the `</head>` closing tag (or immediately after the Babel standalone script). Example head tail:

```html
  <script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" integrity="sha384-m08KidiNqLdpJqLq95G/LEi8Qvjl/xUYll3QILypMoQ65QorJ9Lvtp2RXYGBFj1y" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4.4.1/dist/email.min.js"></script>
</head>
```

- [ ] **Step 2: Add config + send helper at the top of `cta-faq-contact-footer.jsx`**

Add **above** `function Contact()` (near other top-level helpers is fine; before Contact is required):

```jsx
const EMAILJS_CONFIG = {
  serviceId: "service_nqwt96j",
  templateId: "template_me4wk3c",
  publicKey: "eMjuuw6YW819vojso",
};

let emailjsReady = false;

function ensureEmailJs() {
  if (emailjsReady) return;
  if (!window.emailjs) {
    throw new Error("EmailJS SDK failed to load");
  }
  window.emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
  emailjsReady = true;
}

function sendInquiry(templateParams) {
  ensureEmailJs();
  return window.emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templateId,
    templateParams
  );
}

const emptyInquiry = {
  form_type: "",
  email: "",
  phone: "",
  company_name: "",
  property_address: "",
  service_needed: "",
  software_needed: "",
  timeline: "",
  message: "",
};
```

- [ ] **Step 3: Verify SDK loads**

Serve the site (e.g. open `index.html` via local static server if you use one, or Live Server). In DevTools console:

```js
typeof window.emailjs
```

Expected: `"object"` (not `"undefined"`).

- [ ] **Step 4: Commit**

```bash
git add index.html cta-faq-contact-footer.jsx
git commit -m "feat: add EmailJS CDN and contact inquiry config"
```

---

### Task 2: Wire controlled dual forms + EmailJS submit

**Files:**
- Modify: `cta-faq-contact-footer.jsx` (`Contact` function and its markup)
- Test: Manual form fill + Network tab / inbox check

**Interfaces:**
- Consumes: `sendInquiry(templateParams)`, `emptyInquiry`, `EMAILJS_CONFIG`
- Produces: Working Property + Software forms with loading / success / error UX; dead hidden form removed

- [ ] **Step 1: Replace the entire `Contact` function**

Replace `function Contact() { ... }` (through its closing `}`) with:

```jsx
function Contact() {
  const inputStyle = {
    width: "100%", padding: "10px 14px", borderRadius: 8,
    border: "1px solid var(--line)", fontSize: 14,
    fontFamily: "var(--font-body)",
  };
  const labelStyle = {
    display: "block", fontSize: 14, fontWeight: 500, marginBottom: 6,
  };

  const [property, setProperty] = React.useState({
    property_address: "",
    service_needed: "",
    email: "",
    phone: "",
    message: "",
  });
  const [software, setSoftware] = React.useState({
    software_needed: "",
    company_name: "",
    email: "",
    timeline: "",
    message: "",
  });

  const [status, setStatus] = React.useState({
    property: "idle", // idle | sending | success | error
    software: "idle",
  });
  const [errors, setErrors] = React.useState({ property: "", software: "" });

  const setProp = (k) => (e) => setProperty((f) => ({ ...f, [k]: e.target.value }));
  const setSoft = (k) => (e) => setSoftware((f) => ({ ...f, [k]: e.target.value }));

  const submitProperty = async (e) => {
    e.preventDefault();
    setErrors((err) => ({ ...err, property: "" }));
    setStatus((s) => ({ ...s, property: "sending" }));
    try {
      await sendInquiry({
        ...emptyInquiry,
        form_type: "Property Maintenance",
        email: property.email.trim(),
        phone: property.phone.trim(),
        property_address: property.property_address.trim(),
        service_needed: property.service_needed,
        message: property.message.trim(),
      });
      setStatus((s) => ({ ...s, property: "success" }));
      setProperty({
        property_address: "",
        service_needed: "",
        email: "",
        phone: "",
        message: "",
      });
      setTimeout(() => setStatus((s) => ({ ...s, property: "idle" })), 4000);
    } catch (err) {
      console.error(err);
      setStatus((s) => ({ ...s, property: "error" }));
      setErrors((er) => ({
        ...er,
        property: "Couldn't send — try again or email us at hello@logicgateit.com",
      }));
    }
  };

  const submitSoftware = async (e) => {
    e.preventDefault();
    setErrors((err) => ({ ...err, software: "" }));
    setStatus((s) => ({ ...s, software: "sending" }));
    try {
      await sendInquiry({
        ...emptyInquiry,
        form_type: "Software Solutions",
        email: software.email.trim(),
        company_name: software.company_name.trim(),
        software_needed: software.software_needed,
        timeline: software.timeline,
        message: software.message.trim(),
      });
      setStatus((s) => ({ ...s, software: "success" }));
      setSoftware({
        software_needed: "",
        company_name: "",
        email: "",
        timeline: "",
        message: "",
      });
      setTimeout(() => setStatus((s) => ({ ...s, software: "idle" })), 4000);
    } catch (err) {
      console.error(err);
      setStatus((s) => ({ ...s, software: "error" }));
      setErrors((er) => ({
        ...er,
        software: "Couldn't send — try again or email us at hello@logicgateit.com",
      }));
    }
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
          {/* LEFT: Property Maintenance */}
          <div style={{ position: "relative" }}>
            <h3 style={{ fontSize: 22, fontWeight: 600, color: "var(--navy-900)", marginBottom: 20 }}>
              Property Maintenance
            </h3>
            <form onSubmit={submitProperty} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label style={labelStyle}>Property Address</label>
                <input
                  type="text"
                  placeholder="123 Main St, City, State"
                  value={property.property_address}
                  onChange={setProp("property_address")}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Service Needed</label>
                <select
                  required
                  value={property.service_needed}
                  onChange={setProp("service_needed")}
                  style={inputStyle}
                >
                  <option value="">Select a service...</option>
                  <option>Plumbing</option>
                  <option>Electrical</option>
                  <option>HVAC</option>
                  <option>Roofing</option>
                  <option>Landscaping</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Contact Email</label>
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={property.email}
                  onChange={setProp("email")}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Phone</label>
                <input
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={property.phone}
                  onChange={setProp("phone")}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Details / Message</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about the property and what you need..."
                  value={property.message}
                  onChange={setProp("message")}
                  style={{ ...inputStyle, resize: "vertical" }}
                />
              </div>
              {errors.property && (
                <p style={{ margin: 0, fontSize: 13, color: "#DC2626" }}>{errors.property}</p>
              )}
              <button
                type="submit"
                className="btn btn-primary"
                disabled={status.property === "sending"}
                style={{ marginTop: 8 }}
              >
                {status.property === "sending"
                  ? "Sending…"
                  : status.property === "success"
                    ? <><Icon.Check size={16}/> Sent — talk soon</>
                    : <>Schedule Consultation <Icon.ArrowRight size={16}/></>}
              </button>
            </form>
            {status.property === "success" && (
              <div style={{
                position: "absolute", inset: 0,
                background: "rgba(255,255,255,0.94)",
                borderRadius: 12,
                display: "grid", placeItems: "center",
              }}>
                <div style={{ textAlign: "center", padding: 24 }}>
                  <h3 style={{ fontSize: 22, marginBottom: 8 }}>Thanks!</h3>
                  <p style={{ color: "var(--ink-2)", margin: 0 }}>We'll be in touch shortly.</p>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: Software Solutions */}
          <div style={{ position: "relative" }}>
            <h3 style={{ fontSize: 22, fontWeight: 600, color: "var(--navy-900)", marginBottom: 20 }}>
              Custom Software Solutions
            </h3>
            <form onSubmit={submitSoftware} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label style={labelStyle}>What software do you need?</label>
                <select
                  required
                  value={software.software_needed}
                  onChange={setSoft("software_needed")}
                  style={inputStyle}
                >
                  <option value="">Select a solution...</option>
                  <option>Custom CRM</option>
                  <option>ERP Solutions</option>
                  <option>E-commerce</option>
                  <option>Mobile App</option>
                  <option>Custom Software</option>
                  <option>Cybersecurity</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Company Name</label>
                <input
                  type="text"
                  placeholder="Your Company"
                  value={software.company_name}
                  onChange={setSoft("company_name")}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Contact Email</label>
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={software.email}
                  onChange={setSoft("email")}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Project Timeline</label>
                <select
                  value={software.timeline}
                  onChange={setSoft("timeline")}
                  style={inputStyle}
                >
                  <option value="">Select timeline...</option>
                  <option>ASAP (1-2 weeks)</option>
                  <option>Within a month</option>
                  <option>Within 3 months</option>
                  <option>6+ months</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Details / Message</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about the project..."
                  value={software.message}
                  onChange={setSoft("message")}
                  style={{ ...inputStyle, resize: "vertical" }}
                />
              </div>
              {errors.software && (
                <p style={{ margin: 0, fontSize: 13, color: "#DC2626" }}>{errors.software}</p>
              )}
              <button
                type="submit"
                className="btn btn-primary"
                disabled={status.software === "sending"}
                style={{ marginTop: 8 }}
              >
                {status.software === "sending"
                  ? "Sending…"
                  : status.software === "success"
                    ? <><Icon.Check size={16}/> Sent — talk soon</>
                    : <>Request Consultation <Icon.ArrowRight size={16}/></>}
              </button>
            </form>
            {status.software === "success" && (
              <div style={{
                position: "absolute", inset: 0,
                background: "rgba(255,255,255,0.94)",
                borderRadius: 12,
                display: "grid", placeItems: "center",
              }}>
                <div style={{ textAlign: "center", padding: 24 }}>
                  <h3 style={{ fontSize: 22, marginBottom: 8 }}>Thanks!</h3>
                  <p style={{ color: "var(--ink-2)", margin: 0 }}>We'll be in touch shortly.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-forms { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
```

**Important:** Delete the old hidden single-form block and the unused `form` / `submitted` / `set` / `submit` state that belonged to it. Do not leave dead code after Contact.

Keep existing `Field` / `SelectField` helpers in the file if careers or other code still uses them; only remove them if nothing references them after this change (grep the file first).

- [ ] **Step 2: Confirm `Icon.Check` and `Icon.ArrowRight` exist**

In `icons.jsx`, verify both icons are exported. If `Icon.Check` is missing, use an existing check-like icon already used in the old Contact success overlay, or fall back to text-only success button label: `Sent — talk soon`.

- [ ] **Step 3: Smoke-test in the browser**

1. Reload the page; open `#contact`.
2. Property form: leave Service blank → submit should be blocked by HTML `required`.
3. Fill Service + Email + Message → submit → button shows **Sending…** → success overlay → fields clear.
4. Software form: fill Software + Email → same success path.
5. In Network tab, request to `api.emailjs.com` should return 200.
6. Check inbox for email with subject like `[Property Maintenance] New inquiry from …` and Reply-To = visitor email.

- [ ] **Step 4: Commit**

```bash
git add cta-faq-contact-footer.jsx
git commit -m "feat: wire dual contact forms to EmailJS"
```

---

### Task 3: End-to-end verification + EmailJS dashboard checklist

**Files:**
- None (verification only)
- Optional doc touch: update README Contact section one line if it still says forms are non-functional

**Interfaces:**
- Consumes: Live forms from Task 2; EmailJS dashboard template `template_me4wk3c`
- Produces: Confirmed working lead path

- [ ] **Step 1: Confirm EmailJS template settings in dashboard**

In EmailJS → Email Templates → `template_me4wk3c`:

| Setting | Expected |
|---|---|
| To Email | Business inbox |
| Reply To | `{{email}}` |
| Subject | `[{{form_type}}] New inquiry from {{email}}` |
| Variables | All nine listed in Global Constraints |

If the HTML body is still the EmailJS default, paste the HTML from the design spec section “Suggested template body (HTML)”.

- [ ] **Step 2: Restrict allowed origins (security)**

In EmailJS → Account → Security (or Domains): add the production domain (and `localhost` if testing locally). Do not skip this — the Public Key is visible in client code.

- [ ] **Step 3: Failure-path check**

Temporarily break the Template ID in `EMAILJS_CONFIG` (e.g. `template_bad`), reload, submit Property form:

Expected: inline red error, fields **not** cleared, button re-enabled after failure.

Restore `template_me4wk3c` afterward.

- [ ] **Step 4: Mobile layout check**

Resize to &lt;900px width. Both forms stack in one column. Inputs remain usable; success overlay covers only its form column.

- [ ] **Step 5: Commit only if README was updated**

```bash
# only if README changed
git add README.md
git commit -m "docs: note EmailJS-powered contact forms"
```

If no README change, skip this commit.

---

## Spec coverage checklist

| Spec requirement | Task |
|---|---|
| CDN EmailJS load | Task 1 |
| Config with Service / Public / Template IDs | Task 1 |
| Shared template + `form_type` | Task 2 |
| Property form fields + message | Task 2 |
| Software form fields + message | Task 2 |
| Loading / success / error UX | Task 2 |
| Remove old hidden form | Task 2 |
| Empty unused template vars | Task 2 (`emptyInquiry`) |
| Domain restriction / template HTML | Task 3 |
| No careers/newsletter scope creep | Out of plan |

## Execution handoff

Plan complete. Choose how to implement:

1. **Subagent-Driven (recommended)** — fresh subagent per task, review between tasks  
2. **Inline Execution** — run tasks in this session with checkpoints
