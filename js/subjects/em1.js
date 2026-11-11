window.renderSubject = function() {
  // Load the interactive app
  const script = document.createElement('script');
  script.src = 'js/em1-complete-interactive-app-v2.js';
  script.onload = () => {
    document.getElementById('app').innerHTML = `
      <header>
        <div>
          <div class="logo-main">IAR BTech Biotechnology</div>
          <div class="logo-sub">Engineering Mathematics-1</div>
        </div>
        <div style="display:flex;gap:1rem;align-items:center">
          <button onclick="location.reload()" style="background:none;border:1px solid #e2e8f0;padding:0.4rem 0.8rem;border-radius:6px;cursor:pointer">← Back</button>
          <div class="calden-corner">🌿 Calden Biotech</div>
        </div>
      </header>
      <div id="em1-portal"></div>
    `;
    if (window.EM1App) {
      EM1App.initDOMController('em1-portal');
    }
  };
  document.body.appendChild(script);
};
