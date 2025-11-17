# Pola Komponen dan Reusable Classes

## Struktur Section Standard

Setiap section mengikuti pattern konsisten:

```html
<section id="section-id">
  <div class="section-header">
    <div class="section-kicker">Small Label</div>
    <h2 class="section-title"><span class="icon">🎯</span>Section Title</h2>
  </div>
  <!-- Section content -->
</section>
```

## Card Components

- `.feature-card` - For features/benefits (gradient background, hover lift)
- `.stat-card` - For statistics (green gradient, white text, rotating background)
- `.testimonial-card` - For testimonials (white bg, quote mark, avatar)

## Layout Components

- `.feature-grid` - Auto-fit grid (min 300px columns)
- `.stats-row` - Auto-fit grid (min 200px columns)
- `.testimonial-grid` - Auto-fit grid (min 320px columns)
- `.two-col` - 2 column grid (1.2fr 1fr ratio)
- `.comparison-row` - 3 column grid (label → arrow → result)

## Numbered Lists

- `.numbered-section` - Container with counter-reset
- `.numbered-item` - Auto-numbered items dengan CSS counter
- Angka muncul sebagai circle badge dengan gradient green

## Highlight Boxes

- `.highlight-box` - Callout content dengan border-left green
- Icon 💡 di top-right sebagai pseudo-element
- Gradient background (white → green-soft)

## Button System

- `.btn` - Base class dengan ripple effect
- `.btn-primary` - Gold background untuk CTA utama
- `.btn-secondary` - Transparent dengan border untuk secondary action
- Hover: `translateY(-3px)` dan enhanced shadow

## Animation Classes

Entry animations (via Intersection Observer):

- Sections: `opacity: 0` → `opacity: 1` + `translateY(30px)` → `translateY(0)`
- Hero elements: `fadeInUp` keyframe dengan staggered delay

Continuous animations:

- `.float` - Vertical floating motion
- `.rotate` - 360° rotation
- `.pulse` - Scale breathing effect
- `.spin` - Loading spinner rotation

## Color System (CSS Custom Properties)

Primary colors:

- `--green-dark: #064e3b` - Headings, dark elements
- `--green-main: #10b981` - Primary brand, links, accents
- `--green-soft: #ecfdf5` - Backgrounds, soft areas
- `--gold: #facc15` - CTA buttons, highlights
- `--orange: #f97316` - Secondary accent

Neutral colors:

- `--bg: #f8fafc` - Page background
- `--text-main: #0f172a` - Body text
- `--text-light: #6b7280` - Secondary text

Shadow system:

- `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-xl` - Elevation hierarchy

## Responsive Patterns

Desktop-first dengan mobile overrides:

- Desktop: Default styles (1200px container)
- `@media (max-width: 1024px)`: Tablet adjustments
- `@media (max-width: 768px)`: Mobile menu, stacked layouts, smaller text
- `@media (max-width: 480px)`: Extra small text, full-width elements

Mobile menu pattern:

- `.navbar-menu.active` - Display flex untuk show menu
- `.mobile-menu-toggle` - Hamburger ☰ / close ✕ toggle
- JavaScript handles click outside untuk close menu
