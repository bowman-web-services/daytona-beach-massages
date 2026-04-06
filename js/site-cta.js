/* ============================================
   Site CTA — Talk to AI, Mailing List, Mobile Bar
   ============================================ */
(function () {
  'use strict';

  // --- Talk to AI button handler ---
  function initTalkToAI() {
    document.querySelectorAll('[data-action="talk-to-ai"]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        // Try to open the Telnyx widget via shadow DOM
        var telnyxEl = document.querySelector('telnyx-ai-agent');
        if (telnyxEl && telnyxEl.shadowRoot) {
          var telnyxBtn = telnyxEl.shadowRoot.querySelector('button');
          if (telnyxBtn) {
            telnyxBtn.click();
            return;
          }
        }
        // Fallback: try common selectors
        var fallbackBtn = document.querySelector('.telnyx-widget-trigger')
          || document.querySelector('[class*="telnyx"] button');
        if (fallbackBtn) {
          fallbackBtn.click();
          return;
        }
        // Final fallback: show tooltip pointing to bottom-right
        var tooltip = document.getElementById('ai-tooltip');
        if (!tooltip) {
          tooltip = document.createElement('div');
          tooltip.id = 'ai-tooltip';
          tooltip.innerHTML = 'Look for the <strong>chat bubble</strong> in the bottom-right corner \u2192';
          tooltip.style.cssText = 'position:fixed;bottom:80px;right:20px;background:#1a1714;color:#f0e6d3;padding:12px 18px;border-radius:8px;font-size:14px;z-index:10000;box-shadow:0 4px 20px rgba(0,0,0,0.4);border:1px solid rgba(201,169,110,0.3);animation:fadeIn 0.3s ease;max-width:260px;';
          document.body.appendChild(tooltip);
          setTimeout(function () { if (tooltip.parentNode) tooltip.remove(); }, 4000);
        }
      });
    });
  }

  // --- Mailing List Form Handler ---
  function initMailingList() {
    var form = document.querySelector('form[name="mailing-list"]');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var formEl = this;
      var submitBtn = formEl.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
      }

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(formEl)).toString()
      }).then(function () {
        formEl.style.display = 'none';
        var success = document.getElementById('signup-thanks');
        if (success) {
          success.style.display = 'block';
        }
      }).catch(function () {
        alert('Something went wrong. Please call us at (386) 281-3248');
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Sign Up';
        }
      });
    });
  }

  // Init on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initTalkToAI();
      initMailingList();
    });
  } else {
    initTalkToAI();
    initMailingList();
  }
})();
