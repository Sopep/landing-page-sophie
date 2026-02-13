/* ============================================
   Sophie Pépin — Landing Page JavaScript
   ============================================ */

(function () {
  'use strict';

  // ---- Scroll Reveal (IntersectionObserver) ----
  function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      reveals.forEach(function (el) { el.classList.add('revealed'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var delay = parseInt(getComputedStyle(entry.target).getPropertyValue('--delay') || '0', 10);
          setTimeout(function () {
            entry.target.classList.add('revealed');
          }, delay * 120);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(function (el) { observer.observe(el); });
  }

  // ---- Sticky Navigation ----
  function initNavigation() {
    var nav = document.getElementById('nav');
    var toggle = document.getElementById('navToggle');
    var links = document.getElementById('navLinks');
    var navItems = links ? links.querySelectorAll('.nav__link') : [];

    // Scroll effect
    var lastScroll = 0;
    window.addEventListener('scroll', function () {
      var scrollY = window.scrollY;
      if (scrollY > 50) {
        nav.classList.add('nav--scrolled');
      } else {
        nav.classList.remove('nav--scrolled');
      }
      lastScroll = scrollY;
    }, { passive: true });

    // Mobile toggle
    if (toggle && links) {
      toggle.addEventListener('click', function () {
        var isOpen = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!isOpen));
        links.classList.toggle('nav__links--open');
        document.body.style.overflow = isOpen ? '' : 'hidden';
      });

      // Close menu on link click
      navItems.forEach(function (link) {
        link.addEventListener('click', function () {
          toggle.setAttribute('aria-expanded', 'false');
          links.classList.remove('nav__links--open');
          document.body.style.overflow = '';
        });
      });
    }

    // Active section tracking
    var sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', function () {
      var scrollY = window.scrollY + 120;
      sections.forEach(function (section) {
        var top = section.offsetTop;
        var height = section.offsetHeight;
        var id = section.getAttribute('id');
        var link = document.querySelector('.nav__link[href="#' + id + '"]');
        if (link) {
          if (scrollY >= top && scrollY < top + height) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        }
      });
    }, { passive: true });
  }

  // ---- Typing Animation ----
  function initTypingAnimation() {
    var element = document.getElementById('typedText');
    if (!element) return;

    var words = ['Designer', 'Web Designer', 'Thinker', 'Problem Solver', 'Creator'];
    var wordIndex = 0;
    var charIndex = 0;
    var isDeleting = false;
    var typeSpeed = 100;

    function type() {
      var current = words[wordIndex];

      if (isDeleting) {
        element.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
      } else {
        element.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
      }

      if (!isDeleting && charIndex === current.length) {
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 400; // Pause before next word
      }

      setTimeout(type, typeSpeed);
    }

    // Start after a short delay
    setTimeout(type, 800);
  }

  // ---- Counter Animation ----
  function initCounters() {
    var counters = document.querySelectorAll('.stat__number[data-target]');
    if (!counters.length) return;

    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var target = parseInt(el.getAttribute('data-target'), 10);

          if (prefersReducedMotion) {
            el.textContent = target;
          } else {
            animateCounter(el, target);
          }
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (c) { observer.observe(c); });
  }

  function animateCounter(el, target) {
    var duration = 1500;
    var start = 0;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out cubic
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target;
      }
    }

    requestAnimationFrame(step);
  }

  // ---- Timeline Line Fill ----
  function initTimelineFill() {
    var fill = document.getElementById('timelineFill');
    var timeline = fill ? fill.closest('.timeline') : null;
    if (!fill || !timeline) return;

    window.addEventListener('scroll', function () {
      var rect = timeline.getBoundingClientRect();
      var windowHeight = window.innerHeight;
      var timelineTop = rect.top;
      var timelineHeight = rect.height;

      if (timelineTop < windowHeight && timelineTop + timelineHeight > 0) {
        var progress = (windowHeight - timelineTop) / (windowHeight + timelineHeight);
        var percentage = Math.min(Math.max(progress * 100, 0), 100);
        fill.style.height = percentage + '%';
      }
    }, { passive: true });
  }

  // ---- Custom Cursor ----
  function initCustomCursor() {
    var dot = document.querySelector('.cursor__dot');
    var ring = document.querySelector('.cursor__ring');
    var cursor = document.getElementById('cursor');
    if (!dot || !ring || !cursor) return;

    // Only on devices with fine pointer (no touch)
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    var mouseX = 0, mouseY = 0;
    var ringX = 0, ringY = 0;

    document.addEventListener('mousemove', function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + 'px';
      dot.style.top = mouseY + 'px';
    });

    // Smooth ring follow
    function animateRing() {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.left = ringX + 'px';
      ring.style.top = ringY + 'px';
      requestAnimationFrame(animateRing);
    }
    animateRing();

    // Hover effect on interactive elements
    var interactiveElements = document.querySelectorAll('a, button, .skill-card, .tool-item, .contact-link, .stat, .value-card, .timeline__content');
    interactiveElements.forEach(function (el) {
      el.addEventListener('mouseenter', function () {
        cursor.classList.add('cursor--hover');
      });
      el.addEventListener('mouseleave', function () {
        cursor.classList.remove('cursor--hover');
      });
    });

    // Hide cursor when leaving window
    document.addEventListener('mouseleave', function () {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    });
    document.addEventListener('mouseenter', function () {
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    });
  }

  // ---- Smooth Scroll for anchor links ----
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var href = this.getAttribute('href');
        if (href === '#') return;

        var target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          var navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height'), 10) || 72;
          var targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight;
          window.scrollTo({ top: targetTop, behavior: 'smooth' });
        }
      });
    });
  }

  // ---- Parallax on hero visual ----
  function initParallax() {
    var visual = document.querySelector('.hero__visual');
    if (!visual) return;

    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    window.addEventListener('scroll', function () {
      var scrollY = window.scrollY;
      if (scrollY < window.innerHeight) {
        visual.style.transform = 'translateY(' + (scrollY * 0.08) + 'px)';
      }
    }, { passive: true });
  }

  // ---- Initialize everything ----
  function init() {
    initScrollReveal();
    initNavigation();
    initTypingAnimation();
    initCounters();
    initTimelineFill();
    initCustomCursor();
    initSmoothScroll();
    initParallax();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
