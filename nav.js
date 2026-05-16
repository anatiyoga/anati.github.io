/* ============================================
   ANATI — Shared Components
   nav.js — inject nav & footer on every page
   ============================================ */

(function () {
  /* ---- Detect current page for active link ---- */
  const path = window.location.pathname;
  const page = path.split('/').pop() || 'index.html';

  function isActive(href) {
    if (href === 'index.html' && (page === '' || page === 'index.html')) return 'active';
    if (href !== 'index.html' && page === href) return 'active';
    return '';
  }

  /* ---- SVG Logo (green on light backgrounds) ---- */
  const logoGreen = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4000 4000" aria-label="ANATI logo">
    <style>.lg{fill:#87927e}</style>
    <path class="lg" d="M2163.19,1647.29c-29.44,29.69-75.86,51.41-110.68,75.13-163.52,111.4-323.41,248.65-414.16,427.68l-35.5,1.13,337.52-882.22c23.67-58.92,96.88-76.21,138.79-25.1,36.59,85.78,79.69,172.21,111.41,260.21,20.13,55.84,15.11,100.3-27.39,143.17ZM1696.42,1997.04c22.47-22.34,41.42-48.72,63.11-72.11,67.68-73.02,152.9-143.22,234.38-200.44,45.3-31.81,150.95-84.85,170.62-132.74,10.09-24.56,8.51-40.08.71-64.81-26.02-82.5-76.35-167.03-103.55-250.37-23.68-46.57-74.74-41.54-92.72,5.86l-272.55,714.62Z"/>
    <path class="lg" d="M2449.74,2151.25h-35.39l-190.87-470.16c-60.09,67.53-145.31,104.47-211.12,165.5-76.3,70.75-126.58,173.05-84.61,276.81,3.91,9.67,10.45,18.06,13.86,27.85h-37.92c-9.85-28.87-20.86-56.06-22.86-87.11-8.82-137.17,90.01-230.99,191.44-304.26,59.75-43.16,131.33-76.31,156.27-152.18l221.2,543.55Z"/>
    <path class="lg" d="M2062.04,1856.27c51.34-3.08,38.96,82.06-11.53,60.92-32.64-13.66-21.13-58.96,11.53-60.92Z"/>
    <path class="lg" d="M1454.82,2564.96l-81.53-210.9-81.17,210.9h-25.73l94.22-244.6h25.37l94.58,244.6h-25.73Z"/>
    <path class="lg" d="M1632.74,2565.32v-245.32h24.64l184.08,208.72v-208.72h24.28v245.32h-24.28l-184.08-210.17v210.17h-24.64Z"/>
    <path class="lg" d="M2204.55,2564.96l-81.53-210.9-81.17,210.9h-25.73l94.21-244.6h25.37l94.58,244.6h-25.73Z"/>
    <path class="lg" d="M2440.09,2564.96v-222.49h-89.5v-22.1h202.92v22.1h-89.87v222.49h-23.55Z"/>
    <path class="lg" d="M2708.97,2564.96v-244.6h24.64v244.6h-24.64Z"/>
  </svg>`;

  /* ---- SVG Logo (white on dark backgrounds) ---- */
  const logoWhite = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4000 4000" aria-label="ANATI logo">
    <style>.lw{fill:#fff}</style>
    <path class="lw" d="M2166.18,1600.67c-29.44,29.69-75.86,51.41-110.68,75.13-163.52,111.4-323.41,248.65-414.16,427.68l-35.5,1.13,337.52-882.22c23.67-58.92,96.88-76.21,138.79-25.1,36.59,85.78,79.69,172.21,111.41,260.21,20.13,55.84,15.11,100.3-27.39,143.17ZM1699.4,1950.42c22.47-22.34,41.42-48.72,63.11-72.11,67.68-73.02,152.9-143.22,234.38-200.44,45.3-31.81,150.95-84.85,170.62-132.74,10.09-24.56,8.51-40.08.71-64.81-26.02-82.5-76.35-167.03-103.55-250.37-23.68-46.57-74.74-41.54-92.72,5.86l-272.55,714.62Z"/>
    <path class="lw" d="M2452.73,2104.63h-35.39l-190.87-470.16c-60.09,67.53-145.31,104.47-211.12,165.5-76.3,70.75-126.58,173.05-84.61,276.81,3.91,9.67,10.45,18.06,13.86,27.85h-37.92c-9.85-28.87-20.86-56.06-22.86-87.11-8.82-137.17,90.01-230.99,191.44-304.26,59.75-43.16,131.33-76.31,156.27-152.18l221.2,543.55Z"/>
    <path class="lw" d="M2065.02,1809.65c51.34-3.08,38.96,82.06-11.53,60.92-32.64-13.66-21.13-58.96,11.53-60.92Z"/>
    <path class="lw" d="M1457.81,2518.34l-81.53-210.9-81.17,210.9h-25.73l94.22-244.6h25.37l94.58,244.6h-25.73Z"/>
    <path class="lw" d="M1635.73,2518.7v-245.32h24.64l184.08,208.72v-208.72h24.28v245.32h-24.28l-184.08-210.17v210.17h-24.64Z"/>
    <path class="lw" d="M2207.53,2518.34l-81.53-210.9-81.17,210.9h-25.73l94.21-244.6h25.37l94.58,244.6h-25.73Z"/>
    <path class="lw" d="M2443.07,2518.34v-222.49h-89.5v-22.1h202.92v22.1h-89.87v222.49h-23.55Z"/>
    <path class="lw" d="M2711.95,2518.34v-244.6h24.64v244.6h-24.64Z"/>
  </svg>`;

  /* ---- NAV HTML ---- */
  const navHTML = `
  <nav>
    <div class="nav-inner">
      <a href="index.html" class="nav-logo" aria-label="ANATI Home">
        ${logoGreen}
      </a>
      <ul class="nav-links" id="navLinks">
        <li><a href="index.html" class="${isActive('index.html')}">Home</a></li>
        <li><a href="writings.html" class="${isActive('writings.html')}">Writings</a></li>
        <li><a href="about.html" class="${isActive('about.html')}">About</a></li>
        <li><a href="journal.html" class="${isActive('journal.html')}">Journal</a></li>
        <li><a href="contact.html" class="${isActive('contact.html')}">Contact</a></li>
      </ul>
      <div class="nav-social">
        <a href="#" aria-label="Instagram" title="Instagram">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
        </a>
        <a href="#" aria-label="X / Twitter" title="X">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
        </a>
        <a href="#" aria-label="YouTube" title="YouTube">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" stroke-linejoin="round"/></svg>
        </a>
        <button class="nav-toggle" id="navToggle" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </nav>`;

  /* ---- FOOTER HTML ---- */
  const footerHTML = `
  <footer>
    <div class="footer-inner">
      <div class="footer-top">
        <div>
          <div class="footer-logo">${logoWhite}</div>
          <p class="footer-tagline">Journey to Infinity</p>
        </div>
        <nav class="footer-nav" aria-label="Footer navigation">
          <h4>Navigate</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="writings.html">Writings</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="journal.html">Journal</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav>
        <div>
          <p class="footer-quote">"The quieter you become,<br>the more you are able to hear."</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="footer-copy">© 2024 ANATI. All rights reserved.</p>
        <div class="footer-social">
          <a href="#" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
          </a>
          <a href="#" aria-label="X">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
          </a>
          <a href="#" aria-label="YouTube">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" stroke-linejoin="round"/></svg>
          </a>
        </div>
      </div>
    </div>
  </footer>`;

  /* ---- Inject ---- */
  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  /* ---- Mobile toggle ---- */
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });
  }
})();
