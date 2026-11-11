window.renderSubject = function() {
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
    <div class="container">
      <div class="tabs">
        <div class="tab active" onclick="loadPDF('EM1_SEE_Notes.pdf', this)">Notes</div>
        <div class="tab" onclick="loadPDF('EM1_SEE_Formula.pdf', this)">Formulas</div>
        <div class="tab" onclick="loadPDF('EM1_SEE_QB.pdf', this)">Question Bank</div>
      </div>
      <div id="tabContent" style="margin-top:1rem;">
        <iframe id="pdfFrame" src="content/em1/EM1_SEE_Notes.pdf" width="100%" height="800px" style="border:1px solid #e2e8f0;border-radius:8px;"></iframe>
      </div>
    </div>`;
};

function loadPDF(filename, el) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  if (el) el.classList.add('active');
  document.getElementById('pdfFrame').src = `content/em1/${filename}`;
}
