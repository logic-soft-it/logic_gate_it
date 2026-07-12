# EmailJS Contact Forms — Design Spec

**Date:** 2026-07-12  
**Status:** Approved  
**Scope:** Property Maintenance + Software Solutions contact forms only

## Goal

Wire both website contact forms to EmailJS so submissions arrive in the business inbox as structured emails, without adding a backend or build step.

## Credentials

| Key | Value |
|---|---|
| Service ID | `service_nqwt96j` |
| Public Key | `eMjuuw6YW819vojso` |
| Template ID | `template_me4wk3c` |

## Architecture

- Load `@emailjs/browser` from CDN in `index.html` (matches existing React/Babel CDN setup).
- Keep Service ID, Public Key, and Template ID in a shared config object used by the Contact component.
- Initialize EmailJS once with the Public Key (on app load or first Contact mount).
- Both forms are controlled React forms and call `emailjs.send(serviceId, templateId, params)` on submit.
- One shared EmailJS template; forms distinguish themselves via `form_type`.

## Forms in scope

1. **Property Maintenance** — address, service needed, email, phone, message  
2. **Software Solutions** — software needed, company name, email, timeline, message  

Out of scope: careers application form, footer newsletter signup.

## Template variables

| Variable | Property form | Software form |
|---|---|---|
| `form_type` | `Property Maintenance` | `Software Solutions` |
| `email` | Contact Email | Contact Email |
| `phone` | Phone | `""` |
| `property_address` | Property Address | `""` |
| `service_needed` | Service Needed | `""` |
| `software_needed` | `""` | What software do you need? |
| `company_name` | `""` | Company Name |
| `timeline` | `""` | Project Timeline |
| `message` | Details / Message | Details / Message |

Unused fields are sent as empty strings so the shared template always resolves.

### EmailJS template settings

- **To Email:** business inbox (configured in EmailJS dashboard)
- **From Name:** `Logic Gate IT Website`
- **Reply To:** `{{email}}`
- **Subject:** `[{{form_type}}] New inquiry from {{email}}`

### Suggested template body (HTML)

```html
<div style="font-family: Arial, Helvetica, sans-serif; max-width: 600px; margin: 0 auto; color: #0f172a;">
  <div style="background: #0B1F3A; color: #fff; padding: 20px 24px;">
    <h1 style="margin: 0; font-size: 20px;">New website inquiry</h1>
    <p style="margin: 8px 0 0; opacity: 0.85;">{{form_type}}</p>
  </div>

  <div style="padding: 24px; border: 1px solid #e2e8f0; border-top: none;">
    <p style="margin: 0 0 16px;"><strong>From:</strong> {{email}}</p>
    <p style="margin: 0 0 16px;"><strong>Phone:</strong> {{phone}}</p>
    <p style="margin: 0 0 16px;"><strong>Company:</strong> {{company_name}}</p>

    <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />

    <p style="margin: 0 0 12px;"><strong>Property address:</strong> {{property_address}}</p>
    <p style="margin: 0 0 12px;"><strong>Service needed:</strong> {{service_needed}}</p>
    <p style="margin: 0 0 12px;"><strong>Software needed:</strong> {{software_needed}}</p>
    <p style="margin: 0 0 12px;"><strong>Timeline:</strong> {{timeline}}</p>

    <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />

    <p style="margin: 0 0 8px;"><strong>Message</strong></p>
    <p style="margin: 0; white-space: pre-wrap;">{{message}}</p>
  </div>

  <p style="font-size: 12px; color: #64748b; padding: 12px 0;">
    Sent from the Logic Gate IT contact form.
  </p>
</div>
```

## UX & error handling

- Submit button shows **Sending…** and is disabled while the request is in flight.
- On success: show a brief “Thanks!” confirmation, then reset that form’s fields.
- On failure: show an inline error; preserve user input so they can retry.
- Required: email + primary select for each form (`service_needed` or `software_needed`). Message is optional.
- Remove the old hidden single-form block once dual forms are wired.

## Files to change

- `index.html` — add EmailJS CDN script
- `cta-faq-contact-footer.jsx` — controlled dual forms, submit handlers, loading/success/error UI; remove obsolete hidden form
- Optional: small config constant colocated in Contact or `app.jsx`

## Non-goals

- Auto-reply to the visitor
- Careers / newsletter EmailJS integration
- Server-side secrets or env files (Public Key is client-safe by EmailJS design; restrict domain in EmailJS dashboard)

## Success criteria

- Submitting either form delivers an email matching the shared template
- Reply-to on the email is the visitor’s address
- Failed sends do not clear the form
- Site still works with no build step
