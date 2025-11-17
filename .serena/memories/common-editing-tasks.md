# Common Editing Tasks - Quick Reference

## Task 1: Update Brand Colors

**Location**: CSS `:root` selector (inside first `<style>` tag, around line 11-24)

```css
:root {
  --green-dark: #064e3b; /* Headings, dark elements */
  --green-main: #10b981; /* Primary brand color */
  --green-soft: #ecfdf5; /* Light backgrounds */
  --gold: #facc15; /* CTA buttons, accents */
  --orange: #f97316; /* Secondary accent */
  --bg: #f8fafc; /* Page background */
  --text-main: #0f172a; /* Body text */
  --text-light: #6b7280; /* Secondary text */
}
```

**Impact**: Changes affect entire site via CSS custom properties.

## Task 2: Add New FAQ Item

**Location**: Inside `.faq-container` (section#faq, around line 1800-1900)

**Template:**

```html
<div class="faq-item">
  <button class="faq-question">
    <span>Pertanyaan baru Anda?</span>
    <span class="faq-icon">▼</span>
  </button>
  <div class="faq-answer">
    <p>Jawaban lengkap di sini. Bisa multiple paragraphs.</p>
    <p>Paragraph kedua jika perlu.</p>
  </div>
</div>
```

**Notes**:

- JavaScript auto-binds click handlers
- Only one FAQ open at a time (accordion behavior)
- Maintain Indonesian language dan Islamic context

## Task 3: Update WhatsApp Phone Number

**Search for**: `6282188080688` (appears 5x in file)

**Locations:**

1. Floating button link (around line 2010)
2. Hero CTA button (around line 940)
3. Final CTA buttons (around line 1950-1960)
4. Footer text (around line 2000)
5. Footer link (around line 2000)

**Format**: Keep as `6282188080688` (country code + number, no formatting)

## Task 4: Add New Testimonial

**Location**: Inside `.testimonial-grid` (section#testimoni, around line 1750)

**Template:**

```html
<div class="testimonial-card">
  <div class="testimonial-quote">"</div>
  <p class="testimonial-text">
    "Testimonial text here. Keep it authentic and specific to ZonaEnglish
    experience."
  </p>
  <div class="testimonial-author">
    <div class="testimonial-avatar">IN</div>
    <div class="testimonial-info">
      <h4>Nama Lengkap</h4>
      <p>Orang Tua Siswa Kelas X</p>
    </div>
  </div>
</div>
```

**Notes**:

- Avatar uses initials (2 letters, uppercase)
- Keep testimonials authentic (avoid marketing speak)
- Include specific class level (TK, SD Kelas X, SMP, SMA)

## Task 5: Add New Feature Card

**Location**: Inside `.feature-grid` (various sections)

**Template:**

```html
<div class="feature-card">
  <h3><span>🎯</span> Feature Title</h3>
  <p>
    Clear, concise description of the feature or benefit. Focus on outcomes for
    the child/parent.
  </p>
</div>
```

**Notes**:

- Choose appropriate emoji for visual context
- Keep descriptions 2-3 sentences max
- Focus on benefits, not features

## Task 6: Update Statistics

**Location**: Look for `.stat-card` elements (various sections)

**Template:**

```html
<div class="stat-card">
  <span class="stat-number">95%</span>
  <span class="stat-label">Descriptive label here</span>
</div>
```

**Critical**: DON'T change core research data without approval:

- 95% retention
- 8 years research
- 10% → 27% → 95% progression
- 3-7x faster learning

## Task 7: Modify Responsive Breakpoints

**Location**: `@media` queries in CSS (search for "@media", around lines 1500+)

**Current breakpoints:**

- `@media (max-width: 1024px)` - Tablet
- `@media (max-width: 768px)` - Mobile (hamburger menu activates here)
- `@media (max-width: 480px)` - Small mobile

**Common adjustments:**

- Font sizes: Reduce by 0.2-0.5rem for mobile
- Padding: Reduce by 20-50% for mobile
- Grid columns: Change to `1fr` for stacking
- Button widths: `width: 100%` for full-width mobile buttons

## Task 8: Add New Section

**Steps:**

1. Copy existing `<section>` structure as template
2. Add unique `id="new-section-id"`
3. Update section header (kicker + title + icon)
4. Add content using existing patterns (cards, grids, etc.)
5. Add navbar link: `<li><a href="#new-section-id">Label</a></li>`
6. Intersection Observer auto-observes new sections (no JS changes needed)

**Template:**

```html
<section id="new-section">
  <div class="section-header">
    <div class="section-kicker">Category Label</div>
    <h2 class="section-title"><span class="icon">🎯</span>Section Title</h2>
  </div>

  <p>Introduction paragraph...</p>

  <!-- Use existing patterns: feature-grid, stats-row, two-col, etc. -->
  <div class="feature-grid">
    <!-- Cards here -->
  </div>
</section>
```

## Task 9: Update Loading Screen Duration

**Location**: JavaScript at bottom of file (around line 2045)

```javascript
setTimeout(() => {
  loadingScreen.classList.add("hidden");
  // ...
}, 800); // Change this number (milliseconds)
```

**Notes**: 800ms adalah balance antara smooth experience dan tidak terlalu lama.

## Task 10: Modify Shadow System

**Location**: CSS `:root` selector (around line 20-23)

```css
:root {
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
  --shadow-lg: 0 10px 25px rgba(15, 23, 42, 0.1);
  --shadow-xl: 0 20px 40px rgba(15, 23, 42, 0.15);
}
```

**Usage:**

- `--shadow-sm`: Subtle elevation (highlight boxes)
- `--shadow-md`: Cards at rest, navbar
- `--shadow-lg`: Sections, elevated cards
- `--shadow-xl`: Final CTA, hover states

**Impact**: Affects entire site's depth/elevation system.
