/**
 * ========================================
 * ZONAENGLISH LANDING PAGE - MAIN SCRIPT
 * ========================================
 */

(function () {
  "use strict";

  /**
   * Loading Screen Handler
   * Removes loading screen after page is fully loaded
   */
  function initLoadingScreen() {
    window.addEventListener("load", function () {
      setTimeout(function () {
        const loadingScreen = document.getElementById("loading-screen");
        if (loadingScreen) {
          loadingScreen.classList.add("hidden");
          setTimeout(function () {
            loadingScreen.remove();
          }, 500);
        }
      }, 800);
    });
  }

  /**
   * Set Current Year in Footer
   */
  function setCurrentYear() {
    const yearElement = document.getElementById("year");
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }

  /**
   * Scroll Progress Bar
   * Updates progress bar width based on scroll position
   */
  function initScrollProgress() {
    const scrollProgress = document.getElementById("scroll-progress");
    if (!scrollProgress) return;

    window.addEventListener("scroll", function () {
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      scrollProgress.style.width = scrolled + "%";
    });
  }

  /**
   * Navbar Scroll Effect
   * Adds 'scrolled' class to navbar after scrolling 50px
   */
  function initNavbarScroll() {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;

    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }

  /**
   * FAQ Accordion
   * Only one FAQ item can be open at a time (radio behavior)
   */
  function initFAQAccordion() {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(function (item) {
      const question = item.querySelector(".faq-question");
      if (!question) return;

      question.addEventListener("click", function () {
        const isActive = item.classList.contains("active");

        // Close all FAQs
        faqItems.forEach(function (faq) {
          faq.classList.remove("active");
        });

        // Open clicked FAQ if it wasn't active
        if (!isActive) {
          item.classList.add("active");
        }
      });
    });
  }

  /**
   * Smooth Scroll for Anchor Links
   * Scrolls to target section with offset for fixed navbar
   */
  function initSmoothScroll() {
    const navbar = document.getElementById("navbar");

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
          const navbarHeight = navbar ? navbar.offsetHeight : 0;
          const targetPosition = target.offsetTop - navbarHeight - 20;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      });
    });
  }

  /**
   * Intersection Observer for Scroll Animations
   * Animates sections as they enter viewport
   */
  function initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll("section").forEach(function (section) {
      section.style.opacity = "0";
      section.style.transform = "translateY(30px)";
      section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(section);
    });
  }

  /**
   * Mobile Menu Toggle
   * Handles hamburger menu functionality
   */
  function initMobileMenu() {
    const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
    const navbarMenu = document.querySelector(".navbar-menu");
    const navbar = document.getElementById("navbar");

    if (!mobileMenuToggle || !navbarMenu) return;

    // Toggle menu on button click
    mobileMenuToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      navbarMenu.classList.toggle("active");
      mobileMenuToggle.textContent = navbarMenu.classList.contains("active")
        ? "✕"
        : "☰";
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
      if (navbar && !navbar.contains(e.target)) {
        navbarMenu.classList.remove("active");
        mobileMenuToggle.textContent = "☰";
      }
    });

    // Close menu when clicking on a menu item
    navbarMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navbarMenu.classList.remove("active");
        mobileMenuToggle.textContent = "☰";
      });
    });
  }

  /**
   * Button Ripple Effect
   * Material Design-style ripple animation on button click
   */
  function initButtonRipple() {
    document.querySelectorAll(".btn").forEach(function (button) {
      button.addEventListener("click", function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const ripple = document.createElement("span");
        ripple.style.cssText = `
          position: absolute;
          left: ${x}px;
          top: ${y}px;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          transform: translate(-50%, -50%);
          animation: ripple 0.6s ease-out;
        `;

        this.appendChild(ripple);
        setTimeout(function () {
          ripple.remove();
        }, 600);
      });
    });
  }

  /**
   * Add Ripple Animation CSS
   * Injects ripple keyframes into the document
   */
  function injectRippleAnimation() {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes ripple {
        to {
          width: 200px;
          height: 200px;
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Testimonial Filter/Tabs
   * Filter testimonials by category (all, parent, student)
   */
  function initTestimonialFilter() {
    const tabs = document.querySelectorAll(".testimonial-tab");
    const testimonialCards = document.querySelectorAll(".testimonial-card");

    if (tabs.length === 0 || testimonialCards.length === 0) return;

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        const category = this.getAttribute("data-category");

        // Update active tab
        tabs.forEach(function (t) {
          t.classList.remove("active");
        });
        this.classList.add("active");

        // Filter testimonial cards
        testimonialCards.forEach(function (card) {
          const cardCategory = card.getAttribute("data-category");

          if (category === "all") {
            card.style.display = "block";
            // Add fade-in animation
            card.style.animation = "fadeInUp 0.5s ease forwards";
          } else if (cardCategory === category) {
            card.style.display = "block";
            card.style.animation = "fadeInUp 0.5s ease forwards";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  }

  /**
   * Initialize All Functions
   * Called when DOM is ready
   */
  function init() {
    initLoadingScreen();
    setCurrentYear();
    initScrollProgress();
    initNavbarScroll();
    initFAQAccordion();
    initSmoothScroll();
    initScrollAnimations();
    initMobileMenu();
    initButtonRipple();
    injectRippleAnimation();
    initTestimonialFilter();
  }

  // Initialize when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
