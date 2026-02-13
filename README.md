# Sophie Pépin — Landing Page

Personal landing page for Sophie Pépin, Senior UX & UI Web Designer at Workleap, based in Montréal.

## Preview

A single-page portfolio site featuring:

- **Hero** with typing animation and professional photo
- **About** with animated counters (12+ years experience, 20k+ users impacted)
- **Expertise** cards (UI Design, Design Systems, Art Direction, Prototyping, Web Performance)
- **Experience** interactive timeline (Workleap, Republik, Akufen, CloudRaker)
- **Tools** grid (Figma, Adobe CC, Webflow, Storybook, etc.)
- **Contact** links (LinkedIn, Behance)

## Tech Stack

| Component | Choice |
|-----------|--------|
| HTML | HTML5 semantic |
| CSS | CSS3 + Custom Properties |
| JavaScript | Vanilla JS (ES6+) |
| Fonts | Google Fonts (Inter + JetBrains Mono) |
| Icons | Inline SVGs |
| Animations | CSS transitions + IntersectionObserver |

No frameworks, no build tools, no dependencies.

## Project Structure

```
landing-page-sophie/
├── index.html          # Main page
├── css/
│   └── styles.css      # All styles (CSS custom properties, responsive)
├── js/
│   └── main.js         # Interactions and animations
├── assets/
│   └── photo.jpg       # Professional photo
└── plan.md             # Design plan and research notes
```

## Features

- **Scroll reveal** animations via IntersectionObserver
- **Sticky navigation** with blur effect on scroll
- **Custom cursor** (desktop only)
- **Typing animation** in hero section
- **Animated counters** in About section
- **Smooth scroll** navigation between sections
- **Responsive** mobile-first design
- **Accessible** (WCAG AA, `prefers-reduced-motion` support, keyboard navigation, ARIA attributes)
- **SEO** optimized (meta tags, Open Graph, JSON-LD structured data)

## Getting Started

Open `index.html` in a browser, or serve locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## License

All rights reserved. &copy; 2026 Sophie Pépin.
