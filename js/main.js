/* ============================================
   Body & Foot Massage Spa Daytona — Main JS
   Mobile menu, nav dropdown, FAQ accordion
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {
  // --- Mobile Menu ---
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.main-nav');
  var overlay = document.querySelector('.nav-overlay');

  function closeMenu() {
    if (toggle) toggle.classList.remove('active');
    if (nav) nav.classList.remove('open');
    if (overlay) overlay.classList.remove('show');
    document.body.style.overflow = '';
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('active');
      nav.classList.toggle('open');
      if (overlay) overlay.classList.toggle('show');
      document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
    });

    if (overlay) {
      overlay.addEventListener('click', closeMenu);
    }

    // Close menu when clicking a regular nav link (not dropdown labels)
    nav.querySelectorAll('a:not(.nav-dropdown-label)').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }

  // --- Services Dropdown ---
  document.querySelectorAll('.nav-dropdown-label').forEach(function (label) {
    label.addEventListener('click', function (e) {
      e.preventDefault();
      var dropdown = label.closest('.nav-dropdown');
      var isOpen = dropdown.classList.contains('open');

      // Close all dropdowns first
      document.querySelectorAll('.nav-dropdown').forEach(function (d) {
        d.classList.remove('open');
      });

      // Toggle this one
      if (!isOpen) {
        dropdown.classList.add('open');
      }
    });
  });

  // Close dropdown when clicking outside (desktop)
  document.addEventListener('click', function (e) {
    if (window.innerWidth >= 992 && !e.target.closest('.nav-dropdown')) {
      document.querySelectorAll('.nav-dropdown').forEach(function (d) {
        d.classList.remove('open');
      });
    }
  });

  // --- FAQ Accordion ---
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq-item');
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(function (el) {
        el.classList.remove('open');
      });
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var headerH = document.querySelector('.site-header').offsetHeight || 70;
        var y = target.getBoundingClientRect().top + window.pageYOffset - headerH - 10;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });

  // --- Header shadow on scroll ---
  var header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
      } else {
        header.style.boxShadow = 'none';
      }
    });
  }
});
