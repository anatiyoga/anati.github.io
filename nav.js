/* ============================================
   ANATI — Shared Components
   nav.js — inject nav & footer on every page
   ============================================ */

(function () {
  const path = window.location.pathname;
  const page = path.split('/').pop() || 'index.html';

  function isActive(href) {
    if (href === 'index.html' && (page === '' || page === 'index.html')) return 'active';
    if (href !== 'index.html' && page === href) return 'active';
    return '';
  }

  /* ---- SVG Logo green (nav) ---- */
  const logoGreen = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4000 4000" aria-label="ANATI logo" style="height:48px;width:auto"><style>.lg{fill:#87927e}</style><path class="lg" d="M2163.19,1647.29c-29.44,29.69-75.86,51.41-110.68,75.13-163.52,111.4-323.41,248.65-414.16,427.68l-35.5,1.13,337.52-882.22c23.67-58.92,96.88-76.21,138.79-25.1,36.59,85.78,79.69,172.21,111.41,260.21,20.13,55.84,15.11,100.3-27.39,143.17ZM1696.42,1997.04c22.47-22.34,41.42-48.72,63.11-72.11,67.68-73.02,152.9-143.22,234.38-200.44,45.3-31.81,150.95-84.85,170.62-132.74,10.09-24.56,8.51-40.08.71-64.81-26.02-82.5-76.35-167.03-103.55-250.37-23.68-46.57-74.74-41.54-92.72,5.86l-272.55,714.62Z"/><path class="lg" d="M2449.74,2151.25h-35.39l-190.87-470.16c-60.09,67.53-145.31,104.47-211.12,165.5-76.3,70.75-126.58,173.05-84.61,276.81,3.91,9.67,10.45,18.06,13.86,27.85h-37.92c-9.85-28.87-20.86-56.06-22.86-87.11-8.82-137.17,90.01-230.99,191.44-304.26,59.75-43.16,131.33-76.31,156.27-152.18l221.2,543.55Z"/><path class="lg" d="M2062.04,1856.27c51.34-3.08,38.96,82.06-11.53,60.92-32.64-13.66-21.13-58.96,11.53-60.92Z"/><path class="lg" d="M1454.82,2564.96l-81.53-210.9-81.17,210.9h-25.73l94.22-244.6h25.37l94.58,244.6h-25.73Z"/><path class="lg" d="M1632.74,2565.32v-245.32h24.64l184.08,208.72v-208.72h24.28v245.32h-24.28l-184.08-210.17v210.17h-24.64Z"/><path class="lg" d="M2204.55,2564.96l-81.53-210.9-81.17,210.9h-25.73l94.21-244.6h25.37l94.58,244.6h-25.73Z"/><path class="lg" d="M2440.09,2564.96v-222.49h-89.5v-22.1h202.92v22.1h-89.87v222.49h-23.55Z"/><path class="lg" d="M2708.97,2564.96v-244.6h24.64v244.6h-24.64Z"/></svg>`;

  /* ---- SVG Logo white (footer) ---- */
  const logoWhite = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4000 4000" aria-label="ANATI logo" style="height:96px;width:auto"><style>.lw{fill:#fff}</style><path class="lw" d="M2166.18,1600.67c-29.44,29.69-75.86,51.41-110.68,75.13-163.52,111.4-323.41,248.65-414.16,427.68l-35.5,1.13,337.52-882.22c23.67-58.92,96.88-76.21,138.79-25.1,36.59,85.78,79.69,172.21,111.41,260.21,20.13,55.84,15.11,100.3-27.39,143.17ZM1699.4,1950.42c22.47-22.34,41.42-48.72,63.11-72.11,67.68-73.02,152.9-143.22,234.38-200.44,45.3-31.81,150.95-84.85,170.62-132.74,10.09-24.56,8.51-40.08.71-64.81-26.02-82.5-76.35-167.03-103.55-250.37-23.68-46.57-74.74-41.54-92.72,5.86l-272.55,714.62Z"/><path class="lw" d="M2452.73,2104.63h-35.39l-190.87-470.16c-60.09,67.53-145.31,104.47-211.12,165.5-76.3,70.75-126.58,173.05-84.61,276.81,3.91,9.67,10.45,18.06,13.86,27.85h-37.92c-9.85-28.87-20.86-56.06-22.86-87.11-8.82-137.17,90.01-230.99,191.44-304.26,59.75-43.16,131.33-76.31,156.27-152.18l221.2,543.55Z"/><path class="lw" d="M2065.02,1809.65c51.34-3.08,38.96,82.06-11.53,60.92-32.64-13.66-21.13-58.96,11.53-60.92Z"/><path class="lw" d="M1457.81,2518.34l-81.53-210.9-81.17,210.9h-25.73l94.22-244.6h25.37l94.58,244.6h-25.73Z"/><path class="lw" d="M1635.73,2518.7v-245.32h24.64l184.08,208.72v-208.72h24.28v245.32h-24.28l-184.08-210.17v210.17h-24.64Z"/><path class="lw" d="M2207.53,2518.34l-81.53-210.9-81.17,210.9h-25.73l94.21-244.6h25.37l94.58,244.6h-25.73Z"/><path class="lw" d="M2443.07,2518.34v-222.49h-89.5v-22.1h202.92v22.1h-89.87v222.49h-23.55Z"/><path class="lw" d="M2711.95,2518.34v-244.6h24.64v244.6h-24.64Z"/></svg>`;

  /* ---- Critical CSS ---- */
  const navCSS = `<style id="anati-nav-css">
    nav.anati-nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
      height: 72px;
      background: rgba(250, 248, 244, 0.95);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(135,146,126,0.2);
    }
    .anati-nav-inner {
      max-width: 1200px; margin: 0 auto; padding: 0 40px;
      height: 100%; display: flex; align-items: center; justify-content: space-between;
    }
    .anati-nav-logo {
      display: flex; align-items: center; gap: 10px;
      text-decoration: none; flex-shrink: 0;
    }
    .anati-nav-logo-text {
      font-family: 'Jost', sans-serif;
      font-size: 1rem; font-weight: 500;
      letter-spacing: 0.18em; text-transform: uppercase;
      color: #87927e;
    }
    .anati-nav-links {
      display: flex; align-items: center; gap: 36px;
      list-style: none; margin: 0; padding: 0;
    }
    .anati-nav-links a {
      font-family: 'Jost', sans-serif;
      font-size: 0.78rem; font-weight: 400;
      letter-spacing: 0.09em; text-transform: uppercase;
      color: #5a5a56; text-decoration: none;
      position: relative; transition: color 0.3s;
    }
    .anati-nav-links a::after {
      content: ''; position: absolute; bottom: -3px; left: 0;
      width: 0; height: 1px; background: #87927e; transition: width 0.3s;
    }
    .anati-nav-links a:hover,
    .anati-nav-links a.active { color: #6b7563; }
    .anati-nav-links a:hover::after,
    .anati-nav-links a.active::after { width: 100%; }
    .anati-nav-social { display: flex; align-items: center; gap: 14px; }
    .anati-nav-social a {
      color: #8a8a84; display: flex; align-items: center;
      transition: color 0.3s; text-decoration: none;
    }
    .anati-nav-social a:hover { color: #87927e; }
    .anati-nav-toggle {
      display: none; flex-direction: column; gap: 5px;
      cursor: pointer; background: none; border: none; padding: 4px;
    }
    .anati-nav-toggle span {
      display: block; width: 22px; height: 1px; background: #2c2c2a;
    }
    .anati-mobile-menu {
      display: none; position: fixed; top: 72px; left: 0; right: 0; z-index: 999;
      background: rgba(250,248,244,0.98); backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(135,146,126,0.2);
      flex-direction: column; padding: 20px 40px; gap: 18px;
    }
    .anati-mobile-menu.open { display: flex; }
    .anati-mobile-menu a {
      font-family: 'Jost', sans-serif;
      font-size: 0.85rem; letter-spacing: 0.09em; text-transform: uppercase;
      color: #5a5a56; text-decoration: none;
    }
    @media (max-width: 768px) {
      .anati-nav-links { display: none !important; }
      .anati-nav-toggle { display: flex; }
      .anati-nav-inner { padding: 0 24px; }
    }
  </style>`;

  /* ---- NAV HTML ---- */
  const navHTML = `
  ${navCSS}
  <nav class="anati-nav" role="navigation" aria-label="Main navigation">
    <div class="anati-nav-inner">
      <a href="index.html" class="anati-nav-logo" aria-label="ANATI Home">
        ${logoGreen}
        <span class="anati-nav-logo-text">ANATI</span>
      </a>
      <ul class="anati-nav-links">
        <li><a href="index.html" class="${isActive('index.html')}">Home</a></li>
        <li><a href="writings.html" class="${isActive('writings.html')}">Writings</a></li>
        <li><a href="about.html" class="${isActive('about.html')}">About</a></li>
        <li><a href="journal.html" class="${isActive('journal.html')}">Journal</a></li>
        <li><a href="contact.html" class="${isActive('contact.html')}">Contact</a></li>
      </ul>
      <div class="anati-nav-social">
        <a href="https://www.instagram.com/anatiyoga/" aria-label="Instagram" target="_blank" rel="noopener">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
        </a>
        <a href="https://x.com/AnatiYoga" aria-label="X" target="_blank" rel="noopener">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
        </a>
        <a href="https://www.youtube.com/@anatiyoga" aria-label="YouTube" target="_blank" rel="noopener">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" stroke-linejoin="round"/></svg>
        </a>
        <button class="anati-nav-toggle" id="anatiNavToggle" aria-label="Open menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </nav>
  <div class="anati-mobile-menu" id="anatiMobileMenu">
    <a href="index.html" class="${isActive('index.html')}">Home</a>
    <a href="writings.html" class="${isActive('writings.html')}">Writings</a>
    <a href="about.html" class="${isActive('about.html')}">About</a>
    <a href="journal.html" class="${isActive('journal.html')}">Journal</a>
    <a href="contact.html" class="${isActive('contact.html')}">Contact</a>
  </div>`;

  /* ---- FOOTER HTML ---- */
  const footerHTML = `
  <footer style="background:#3d4438;color:rgba(255,255,255,0.6);padding:48px 0 32px;font-family:'Jost',sans-serif;">
    <div style="max-width:1200px;margin:0 auto;padding:0 40px;">
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:48px;padding-bottom:32px;border-bottom:1px solid rgba(255,255,255,0.1);margin-bottom:32px;">

        <div>
          <div style="margin-bottom:12px;">${logoWhite}</div>
          <p style="font-family:'Cormorant Garamond',Georgia,serif;font-style:italic;font-size:1rem;color:rgba(255,255,255,0.4);margin-top:8px;">Journey to Infinity</p>
        </div>

        <div>
          <p style="font-size:0.7rem;font-weight:500;letter-spacing:0.15em;text-transform:uppercase;color:rgba(255,255,255,0.4);margin-bottom:16px;">Navigate</p>
          <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:10px;">
            <li><a href="index.html" style="font-size:0.875rem;color:rgba(255,255,255,0.6);text-decoration:none;">Home</a></li>
            <li><a href="writings.html" style="font-size:0.875rem;color:rgba(255,255,255,0.6);text-decoration:none;">Writings</a></li>
            <li><a href="about.html" style="font-size:0.875rem;color:rgba(255,255,255,0.6);text-decoration:none;">About</a></li>
            <li><a href="journal.html" style="font-size:0.875rem;color:rgba(255,255,255,0.6);text-decoration:none;">Journal</a></li>
            <li><a href="contact.html" style="font-size:0.875rem;color:rgba(255,255,255,0.6);text-decoration:none;">Contact</a></li>
          </ul>
        </div>

        <div>
          <p style="font-family:'Cormorant Garamond',Georgia,serif;font-size:1.1rem;font-style:italic;color:rgba(255,255,255,0.5);line-height:1.7;">"The quieter you become,<br>the more you are able to hear."</p>
        </div>

      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px;">
        <p style="font-size:0.75rem;color:rgba(255,255,255,0.3);">© 2026 ANATI. All rights reserved.</p>
        <div style="display:flex;gap:16px;">
          <a href="https://www.instagram.com/anatiyoga/" aria-label="Instagram" target="_blank" rel="noopener" style="color:rgba(255,255,255,0.4);display:flex;align-items:center;text-decoration:none;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
          </a>
          <a href="https://x.com/AnatiYoga" aria-label="X" target="_blank" rel="noopener" style="color:rgba(255,255,255,0.4);display:flex;align-items:center;text-decoration:none;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
          </a>
          <a href="https://www.youtube.com/@anatiyoga" aria-label="YouTube" target="_blank" rel="noopener" style="color:rgba(255,255,255,0.4);display:flex;align-items:center;text-decoration:none;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" stroke-linejoin="round"/></svg>
          </a>
        </div>
      </div>
    </div>
  </footer>`;

  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  const toggle = document.getElementById('anatiNavToggle');
  const mobileMenu = document.getElementById('anatiMobileMenu');
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', function () {
      mobileMenu.classList.toggle('open');
    });
    document.addEventListener('click', function (e) {
      if (!toggle.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('open');
      }
    });
  }
})();

