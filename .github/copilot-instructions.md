# ZonaEnglish Landing Page - AI Agent Instructions

## Project Overview
This is a single-page marketing landing page for ZonaEnglish, an Indonesian educational ecosystem. The entire site is contained in one self-contained HTML file (`zonaneglish-ultimate-landing-page.html`) with embedded CSS and JavaScript.

## Architecture

### Single-File Structure
- **Everything is in one file**: All HTML, CSS (in `<style>` tags), and JavaScript (in `<script>` tags) live in `zonaneglish-ultimate-landing-page.html`
- **No build process**: Direct browser rendering, no compilation or bundling required
- **No dependencies**: Zero external libraries - vanilla JavaScript, native CSS, no frameworks

### Content Language
- **Indonesian (Bahasa Indonesia)**: All copy, headings, and UI text are in Indonesian
- **Target audience**: Muslim Indonesian parents seeking English education for their children
- When editing content, maintain Indonesian language and cultural context (Islamic values, local references)

### CSS Architecture
- **CSS Custom Properties**: Design system defined in `:root` selector
  - Color palette: `--green-dark`, `--green-main`, `--green-soft`, `--gold`, `--orange`, `--bg`, `--text-main`, `--text-light`
  - Shadow system: `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-xl`
- **Mobile-first responsive**: Three breakpoints
  - Desktop: default (1200px container max-width)
  - Tablet: `@media (max-width: 1024px)`
  - Mobile: `@media (max-width: 768px)`
  - Small mobile: `@media (max-width: 480px)`
- **Animation patterns**: Use CSS animations (`@keyframes`) extensively for visual polish
  - Entry animations: `fadeInUp`, `fadeIn`
  - Continuous animations: `float`, `rotate`, `pulse`, `spin`

### JavaScript Functionality
All JavaScript is vanilla JS in a single `<script>` tag at bottom of `<body>`:
- **Loading screen**: Removed after 800ms on `window.load`
- **Scroll progress bar**: Updates width based on scroll percentage
- **Navbar effects**: Adds `.scrolled` class after 50px scroll
- **FAQ accordion**: Toggle `.active` class on FAQ items
- **Mobile menu**: Toggle `.active` class with hamburger button
- **Smooth scroll**: Native `window.scrollTo()` with offset for fixed navbar
- **Intersection Observer**: Fade-in sections as they enter viewport
- **Ripple effects**: Dynamic button click animations

## Key Patterns

### Component Structure
Each major section follows this pattern:
```html
<section id="section-id">
  <div class="section-header">
    <div class="section-kicker">Small Label</div>
    <h2 class="section-title">
      <span class="icon">🎯</span>Section Title
    </h2>
  </div>
  <!-- Section content -->
</section>
```

### Reusable Component Classes
- **Cards**: `.feature-card`, `.stat-card`, `.testimonial-card`
- **Grid layouts**: `.feature-grid`, `.stats-row`, `.testimonial-grid`, `.two-col`
- **Numbered lists**: `.numbered-section` with `.numbered-item` (auto-counters)
- **Comparison rows**: `.comparison-row` with three-column grid
- **Highlight boxes**: `.highlight-box` for callout content

### Button System
- `.btn` base class + modifier classes
- `.btn-primary`: Gold background (CTA style)
- `.btn-secondary`: Transparent with border (secondary action)
- Hover effects include `transform: translateY()` and enhanced shadows

### WhatsApp Integration
- **Floating button**: `.whatsapp-float` fixed bottom-right
- **CTA links**: All point to WhatsApp with pre-filled messages in format:
  ```
  https://wa.me/6282188080688?text=Assalamu%27alaikum,%20[message]
  ```

## Content Editing Guidelines

### Data-Driven Content
The page showcases research data and statistics:
- **95% retention rate**: Core metric mentioned throughout
- **8 years of research** (2015–2024): Foundation credibility
- **10% → 27% → 95% progression**: Three-phase research evolution
- When editing, preserve these key numbers and their context

### Section Navigation
Navbar links use hash anchors:
- `#masalah` - Problem statement
- `#riset` - Research data
- `#ekosistem` - 7 pillars ecosystem
- `#hasil` - Results for children
- `#testimoni` - Testimonials
- `#faq` - FAQ accordion
- `#daftar` - Final CTA

### Cultural Sensitivity
- Maintain Islamic greetings: "Assalamu'alaikum" in WhatsApp messages
- Content emphasizes halal/Muslim-safe curriculum adaptation
- References to prayer (shalat) and Islamic values

## Development Workflow

### Editing the Page
1. **Direct HTML editing**: Open `zonaneglish-ultimate-landing-page.html` in editor
2. **CSS changes**: Modify `<style>` blocks (two style tags: main styles + loading styles)
3. **JavaScript changes**: Edit inline `<script>` tag at bottom
4. **Testing**: Open file directly in browser (no server required)

### Adding New Sections
1. Copy existing section structure with appropriate grid/card classes
2. Maintain consistent `.section-header` format with icon + title
3. Update navbar with new anchor if needed
4. Add scroll observer for animation (sections auto-observe on load)

### Performance Considerations
- **Loading screen**: Prevents FOUC (Flash of Unstyled Content)
- **Intersection Observer**: Animates sections only when visible
- **CSS animations on GPU**: Use `transform` and `opacity` for smooth 60fps
- **Debounce scroll events**: Progress bar uses direct scroll handler (acceptable for single element)

## Common Tasks

### Update Colors
Modify CSS custom properties in `:root`:
```css
:root {
  --green-main: #10b981;  /* Primary brand color */
  --gold: #facc15;        /* Accent/CTA color */
}
```

### Add New FAQ
Insert new `.faq-item` in `.faq-container`:
```html
<div class="faq-item">
  <button class="faq-question">
    <span>Question text?</span>
    <span class="faq-icon">▼</span>
  </button>
  <div class="faq-answer">
    <p>Answer text.</p>
  </div>
</div>
```
JavaScript automatically binds click handlers.

### Update WhatsApp Number
Replace `6282188080688` throughout the file (appears in footer, floating button, CTA buttons).

### Modify Responsive Breakpoints
Adjust media queries in CSS (search for `@media`). Mobile menu activates at 768px.

## Testing Checklist
- [ ] Desktop: Hero section, all sections visible with proper spacing
- [ ] Mobile: Hamburger menu works, cards stack vertically
- [ ] FAQ accordion: Only one item open at a time
- [ ] Smooth scroll: Navbar links scroll to correct position with offset
- [ ] WhatsApp links: Open with correct pre-filled messages
- [ ] Loading screen: Dismisses after ~800ms
- [ ] Scroll progress bar: Fills from 0-100% on scroll

## File Management
- **Main file**: `zonaneglish-ultimate-landing-page.html` (2062 lines)
- **No assets folder**: All SVG/icons are inline or emoji
- **No config files**: No package.json, webpack, or build tools
- To deploy: Upload single HTML file to any static hosting
