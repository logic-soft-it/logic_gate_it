// Logic Gate IT — stroke icon set
// Compact, consistent feather-style icons, 24x24, stroke-currentColor.

const I = ({ children, size = 24, strokeWidth = 1.6, ...rest }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...rest}
  >
    {children}
  </svg>
);

const Icon = {
  Logo: ({ size = 32 }) => (
    <img
      src="logo-mark.png"
      alt="Logic Gate IT"
      width={size}
      height={Math.round(size * 0.84)}
      style={{ display: "block", objectFit: "contain" }}
    />
  ),
  ArrowRight: (p) => <I {...p}><path d="M5 12h14M13 6l6 6-6 6"/></I>,
  ArrowUpRight: (p) => <I {...p}><path d="M7 17 17 7M9 7h8v8"/></I>,
  ShoppingCart: (p) => <I {...p}><circle cx="9" cy="20" r="1.4" fill="currentColor"/><circle cx="18" cy="20" r="1.4" fill="currentColor"/><path d="M2 3h2l2.4 12.6a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.6L21 7H6"/></I>,
  Smartphone: (p) => <I {...p}><rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M10 18h4"/></I>,
  Phone: (p) => <I {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z"/></I>,
  Menu: (p) => <I {...p}><path d="M3 6h18M3 12h18M3 18h18"/></I>,
  X: (p) => <I {...p}><path d="M18 6 6 18M6 6l12 12"/></I>,
  Check: (p) => <I {...p}><path d="m5 12 5 5L20 7"/></I>,
  Plus: (p) => <I {...p}><path d="M12 5v14M5 12h14"/></I>,
  Minus: (p) => <I {...p}><path d="M5 12h14"/></I>,
  Star: (p) => <I {...p}><path d="m12 2 3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/></I>,
  Shield: (p) => <I {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></I>,
  Bolt: (p) => <I {...p}><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z"/></I>,
  Clock: (p) => <I {...p}><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></I>,
  Sparkle: (p) => <I {...p}><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/></I>,
  Building: (p) => <I {...p}><path d="M3 22V6l9-3 9 3v16"/><path d="M9 22V12h6v10"/><path d="M3 22h18"/></I>,
  Home: (p) => <I {...p}><path d="m3 11 9-8 9 8"/><path d="M5 10v11h14V10"/></I>,
  Cpu: (p) => <I {...p}><rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/></I>,
  Cloud: (p) => <I {...p}><path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.7 1.5A4 4 0 0 0 6 19h11.5Z"/></I>,
  // Services
  Plumbing: (p) => <I {...p}><path d="M3 8h6V4M3 8v4a4 4 0 0 0 4 4h4v4M11 16h4a4 4 0 0 0 4-4V8M19 8h2V4h-6v4h4Z"/></I>,
  Electric: (p) => <I {...p}><path d="M13 2 4 14h6l-1 8 10-12h-7l1-8Z"/></I>,
  HVAC: (p) => <I {...p}><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"/></I>,
  Roofing: (p) => <I {...p}><path d="m2 12 10-8 10 8"/><path d="M5 10v10h14V10"/><path d="M10 20v-5h4v5"/></I>,
  Landscape: (p) => <I {...p}><path d="M12 22V10"/><path d="M12 10c-3 0-5-2-5-4 0 2-2 4-5 4 3 0 5 2 5 4 0-2 2-4 5-4Z"/><path d="M17 14c-2 0-3-1-3-2 0 1-1 2-3 2 2 0 3 1 3 2 0-1 1-2 3-2Z"/><path d="M3 22h18"/></I>,
  Carpentry: (p) => <I {...p}><path d="M14 7 3 18l3 3L17 10"/><path d="m13 8 4-4 4 4-4 4Z"/></I>,
  Paint: (p) => <I {...p}><path d="M4 4h12v6H4z"/><path d="M16 7h4v5h-9v4"/><rect x="9" y="16" width="4" height="5" rx="1"/></I>,
  Wrench: (p) => <I {...p}><path d="M14.7 6.3a4 4 0 0 0 5.3 5.3L21 13l-8 8a2.83 2.83 0 0 1-4-4l8-8 1.7-1.7Z"/></I>,
  Maintenance: (p) => <I {...p}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/></I>,
  Code: (p) => <I {...p}><path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/></I>,
  Mail: (p) => <I {...p}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></I>,
  MapPin: (p) => <I {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></I>,
  Globe: (p) => <I {...p}><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z"/></I>,
  Chart: (p) => <I {...p}><path d="M3 3v18h18"/><path d="m7 14 4-4 4 4 5-6"/></I>,
  WhatsApp: (p) => <I {...p}><path d="M20.5 11.5a8.5 8.5 0 1 1-15.97 4.1L3 21l5.5-1.5a8.5 8.5 0 0 0 12-8Z"/><path d="M8.5 8.5c.5-.5 1.5-.5 2 .5l.5 1.5-1 1c.5 1.5 1.5 2.5 3 3l1-1 1.5.5c1 .5 1 1.5.5 2-.5 1-2 1.5-3.5 1-2-.5-4-2.5-4.5-4.5-.5-1.5 0-3 .5-3.5Z"/></I>,
  Twitter: (p) => <I {...p}><path d="M4 4 20 20M20 4 4 20"/></I>,
  LinkedIn: (p) => <I {...p}><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 1 1 4 0v4M12 10v7"/></I>,
  Instagram: (p) => <I {...p}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6" fill="currentColor"/></I>,
  Facebook: (p) => <I {...p}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z"/></I>,
  Send: (p) => <I {...p}><path d="m22 2-7 20-4-9-9-4 20-7Z"/></I>,
  Quote: (p) => <I {...p}><path d="M7 7H4v6a4 4 0 0 0 4 4M17 7h-3v6a4 4 0 0 0 4 4"/></I>,
  Zap: (p) => <I {...p}><path d="m13 2-2 8h6l-7 12 2-8H6l7-12Z"/></I>,
  Layers: (p) => <I {...p}><path d="m12 2 10 6-10 6L2 8l10-6Z"/><path d="m2 14 10 6 10-6M2 11l10 6 10-6"/></I>,
  Users: (p) => <I {...p}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></I>,
  Headset: (p) => <I {...p}><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><path d="M4 14h3v6H5a1 1 0 0 1-1-1ZM20 14h-3v6h2a1 1 0 0 0 1-1Z"/></I>,
};

window.Icon = Icon;
