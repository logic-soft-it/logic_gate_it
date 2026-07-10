# Logic Gate IT — Integrated Property & Technology Solutions

A modern, responsive website for Logic Gate IT showcasing integrated property management and IT infrastructure solutions.

## Features

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Interactive Components** - Modal dialogs for maintenance services and job applications
- **Service Categories** - Browse and filter maintenance services by category
- **Project Portfolio** - Showcase completed projects with descriptions
- **Careers Section** - View job listings and apply online with CV upload
- **Testimonials** - Rotating testimonials carousel
- **FAQ Accordion** - Expandable FAQ section
- **Contact Form** - Direct contact form with validation
- **Live Customization** - Tweaks panel for real-time color and font adjustments
- **WhatsApp Integration** - Floating WhatsApp contact button
- **Scroll Animations** - Smooth reveal animations on scroll
- **Dark Mode Ready** - Glass-morphism effects and modern visual design

## Technologies Used

- **React 18** - UI component framework (loaded via CDN)
- **Babel** - JSX transpilation (via CDN)
- **CSS3** - Modern styling with CSS variables and animations
- **Vanilla JavaScript** - Interactive features and state management

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- VS Code (recommended for development)
- Python 3.x (for running local server)

### Installation

1. Clone or download the project:
   ```bash
   git clone <repository-url>
   cd logic_gate_it
   ```

2. No npm install needed! All dependencies are loaded from CDN.

### Running the Project

#### Option 1: VS Code (Recommended)
1. Open the project in VS Code
2. Press `F5` to launch with the configured local server
3. Browser will open automatically to `http://localhost:8000`

#### Option 2: Manual Server
```bash
cd /path/to/logic_gate_it
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

#### Option 3: Live Server Extension
1. Install the Live Server extension in VS Code
2. Right-click `index.html` and select "Open with Live Server"

## Project Structure

```
logic_gate_it/
├── index.html                      # Main entry point
├── styles.css                      # Design system and global styles
├── app.jsx                         # Root React component
├── icons.jsx                       # SVG icon components
├── nav-hero.jsx                    # Navigation and hero section
├── services-why-about.jsx          # Services, "Why Choose Us", About
├── saas-projects-testimonials.jsx  # Software, projects, testimonials
├── cta-faq-contact-footer.jsx      # CTA, FAQ, contact, footer
├── maintenance-modal.jsx           # Service selection modal
├── careers.jsx                     # Careers section
├── tweaks-panel.jsx                # Live customization panel
├── logo-mark.png                   # Brand logo
├── uploads/                        # Assets directory
├── .vscode/
│   ├── launch.json                 # VS Code debugger configuration
│   └── tasks.json                  # VS Code tasks
└── README.md                       # This file
```

## Customization

### Tweaks Panel

The website includes a live customization panel (bottom-right corner) where you can:

- **Brand Colors**
  - Primary color (default: #2563EB - Blue)
  - Accent color (default: #F97316 - Orange)

- **Typography**
  - Headline font (Space Grotesk, DM Sans, JetBrains Mono)
  - Body font (DM Sans, Space Grotesk)

- **Layout Options**
  - Toggle WhatsApp floating button
  - Toggle sticky mobile CTA

### Design System

The CSS uses CSS variables for easy customization:

```css
:root {
  --navy-950: #0B1220;
  --navy-900: #0F172A;
  --blue-600: #2563EB;
  --orange-500: #F97316;
  /* ... more variables */
}
```

Edit `styles.css` to customize the design system globally.

## Key Sections

### Navigation
- Fixed sticky header with logo and navigation links
- Responsive mobile menu
- Phone contact link
- "Get Free Quote" CTA button

### Hero Section
- Large headline with call-to-action buttons
- Background with subtle aurora glow effects

### Services
- Service category cards with icons
- Clickable cards open maintenance modal
- Hover animations and transitions

### Software Solutions
- Feature showcase with icon and description
- Dashboard preview with key metrics

### Projects Portfolio
- Grid layout of completed projects
- Project cards with descriptions

### Careers
- Job listings with filtering and search
- Click to open job detail modal
- CV upload and application form
- Position information (salary, location, type)

### FAQ
- Expandable accordion items
- Smooth animations on expand/collapse

### Contact Section
- Contact form with fields for name, email, phone, message
- Contact information sidebar
- Map embed placeholder

### Footer
- Multi-column layout
- Quick links by category
- Contact information
- Social media links placeholder

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- CDN-hosted React and Babel (no build step required)
- Optimized CSS with modern browser features
- Smooth scroll behavior
- Efficient DOM updates via React

## Development Notes

### Adding New Sections

1. Create a new `.jsx` file in the project root
2. Import it in `index.html`:
   ```html
   <script type="text/babel" src="your-component.jsx"></script>
   ```
3. Add the component to the App in `app.jsx`

### Modifying Styles

- Global styles: Edit `styles.css`
- Component-specific styles: Use inline `style` props in JSX files
- Design tokens: Update CSS variables in `:root` in `styles.css`

### Component API

All components use React hooks and functional components:

```jsx
function MyComponent() {
  const [state, setState] = React.useState(initialValue);
  
  React.useEffect(() => {
    // Side effects
  }, [dependencies]);
  
  return (
    <div>Component JSX</div>
  );
}
```

## Debugging

- **VS Code Debugger**: Use F5 to launch with built-in Chrome debugging
- **Browser DevTools**: Press F12 in any browser for inspection
- **Console Logging**: Use `console.log()` in React components

## Deployment

### Static Hosting (Netlify, Vercel, GitHub Pages)

Simply push the project to a repository and connect to your hosting service. No build step needed!

### Traditional Web Server

Copy all files to your web server's public directory. The server must serve `index.html` correctly.

### Docker (Optional)

```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY . .
EXPOSE 8000
CMD ["python", "-m", "http.server", "8000"]
```

## Troubleshooting

### React not loading
- Check browser console for errors
- Verify CDN links in `index.html` are accessible
- Ensure JavaScript is enabled in browser

### Styling issues
- Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Check that `styles.css` is loading (Network tab in DevTools)
- Verify CSS variable overrides in browser inspector

### Server won't start
- Check if port 8000 is already in use: `lsof -i :8000`
- Try a different port: `python3 -m http.server 9000`

### Mobile responsiveness issues
- Check viewport meta tag in `index.html`
- Test in browser device emulation (DevTools)
- Verify media queries in `styles.css`

## License

Proprietary - Logic Gate IT

## Support

For questions or issues, contact: hello@logicgateit.com

## Changelog

### v1.0.0
- Initial release
- Complete React-based website implementation
- All sections and interactive features
- Tweaks panel for customization
- Mobile responsive design
