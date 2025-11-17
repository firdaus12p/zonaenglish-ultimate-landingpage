# JavaScript Functionality Reference

## Core Features (Vanilla JS)

### 1. Loading Screen

```javascript
window.addEventListener("load", () => {
  setTimeout(() => {
    loadingScreen.classList.add("hidden");
    // Remove after fade out
  }, 800);
});
```

- Prevents FOUC (Flash of Unstyled Content)
- Fades out after 800ms
- Removes element dan loading styles dari DOM

### 2. Scroll Progress Bar

```javascript
window.addEventListener("scroll", () => {
  const scrolled = (window.scrollY / windowHeight) * 100;
  scrollProgress.style.width = scrolled + "%";
});
```

- Updates width dari 0-100% based on scroll position
- No throttle/debounce (acceptable untuk single element)

### 3. Navbar Scroll Effect

```javascript
if (window.scrollY > 50) {
  navbar.classList.add("scrolled");
}
```

- Adds `.scrolled` class setelah scroll 50px
- CSS handles style changes (enhanced shadow, opacity)

### 4. FAQ Accordion

```javascript
// Close all FAQs
faqItems.forEach((faq) => faq.classList.remove("active"));
// Open clicked FAQ if it wasn't active
if (!isActive) {
  item.classList.add("active");
}
```

- Only one FAQ open at a time (radio behavior)
- CSS handles max-height transition untuk smooth expand/collapse
- Icon rotates 180° when active

### 5. Mobile Menu

```javascript
navbarMenu.classList.toggle("active");
mobileMenuToggle.textContent = navbarMenu.classList.contains("active")
  ? "✕"
  : "☰";
```

- Toggle `.active` class untuk show/hide
- Changes hamburger icon ☰ ↔ ✕
- Click outside closes menu (document event listener)
- Menu links close menu on click

### 6. Smooth Scroll

```javascript
const targetPosition = target.offsetTop - navbarHeight - 20;
window.scrollTo({ top: targetPosition, behavior: "smooth" });
```

- All `a[href^="#"]` links scroll smoothly
- Calculates offset untuk fixed navbar (height + 20px padding)
- Native browser API, no jQuery needed

### 7. Intersection Observer (Scroll Animations)

```javascript
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
);

document.querySelectorAll("section").forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(30px)";
  observer.observe(section);
});
```

- Animates sections as they enter viewport
- 10% threshold dengan -50px bottom margin
- GPU-accelerated (opacity + transform)
- All sections auto-observed on page load

### 8. Ripple Effect (Button Animation)

```javascript
button.addEventListener("click", function (e) {
  const rect = this.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const ripple = document.createElement("span");
  ripple.style.cssText = `position: absolute; left: ${x}px; top: ${y}px; ...`;
  this.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
});
```

- Material Design-style ripple pada semua `.btn` elements
- Creates temporary span element di click position
- CSS animation expands ripple, removes after 600ms
- Dynamic injection, no pre-rendered elements needed

### 9. Current Year (Footer)

```javascript
document.getElementById("year").textContent = new Date().getFullYear();
```

- Auto-updates copyright year
- Simple DOM manipulation

## Event Listeners Summary

- `window.load` - Loading screen removal
- `window.scroll` - Progress bar + navbar scroll effect
- `.faq-question click` - FAQ accordion toggle
- `#mobile-menu-toggle click` - Mobile menu toggle
- `document click` - Close mobile menu when clicking outside
- `.navbar-menu a click` - Close menu on link click
- `a[href^="#"] click` - Smooth scroll to sections
- `.btn click` - Ripple effect animation
- `IntersectionObserver` - Section fade-in animations

## No External Libraries

- No jQuery, no Lodash, no animation libraries
- Pure vanilla JavaScript dengan modern APIs
- IE11 not supported (uses IntersectionObserver, arrow functions, template literals)
- Target browsers: Modern evergreen browsers (Chrome, Firefox, Safari, Edge)
