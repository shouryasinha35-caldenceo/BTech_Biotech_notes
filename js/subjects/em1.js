// EM-1 Renderer — loads data.js and displays content + quiz
window.renderSubject = function() {
  const script = document.createElement('script');
  script.src = 'content/em1/data.js';
  script.onload = () => renderEM1Content();
  script.onerror = () => alert('Could not load EM-1 data.');
  document.body.appendChild(script);
};

function renderEM1Content() {
  const d = EM1_DATA;
  document.getElementById('app').innerHTML = `
    <header>
      <div>
        <div class="logo-main">IAR BTech Biotechnology</div>
        <div class="logo-sub">${d.name}</div>
      </div>
      <div style="display:flex;gap:1rem;align-items:center">
        <button onclick="location.reload()" style="background:none;border:1px solid #e2e8f0;padding:0.4rem 0.8rem;border-radius:6px;cursor:pointer">← Back</button>
        <div class="calden-corner">🌿 Calden Biotech</div>
      </div>
    </header>
    <div class="container">
      <div class="tabs">
        <div class="tab active" onclick="showEMTab('notes', this)">Notes</div>
        <div class="tab" onclick="showEMTab('formulas', this)">Formulas</div>
        <div class="tab" onclick="showEMTab('pyqs', this)">PYQs</div>
        <div class="tab" onclick="showEMTab('quiz', this)">Quiz</div>
      </div>
      <div id="tabContent"></div>
    </div>`;
  showEMTab('notes', document.querySelector('.tab'));
}

function showEMTab(tab, el) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  if (el) el.classList.add('active');
  const c = document.getElementById('tabContent');
  const d = EM1_DATA;

  if (tab === 'notes') {
    c.innerHTML = d.sections.map(sec => `
      <div class="content-section" style="margin-bottom:1.5rem">
        <h2>${sec.title}</h2>
        ${sec.topics.map(t => `<h3>${t.title}</h3>${t.content}`).join('')}
      </div>`).join('');
  }
  else if (tab === 'formulas') {
    c.innerHTML = `<div class="content-section"><h2>Master Formula Sheet</h2>
      ${d.formulas.map(f => `<div class="formula-box"><strong>${f.name}</strong><br>${f.formula}</div>`).join('')}
    </div>`;
  }
  else if (tab === 'pyqs') {
    c.innerHTML = `<div class="content-section"><h2>Past Year Questions</h2>
      ${d.pyqs.map(p => `<div class="pyq-card"><span class="year-tag">${p.year}</span><strong>${p.q}</strong><p><strong>Answer:</strong> ${p.a}</p></div>`).join('')}
    </div>`;
  }
  else if (tab === 'quiz') {
    renderQuiz(c);
  }
}

function renderQuiz(container) {
  const questions = EM1_DATA.quiz;
  let html = `<div class="content-section"><h2>Interactive Quiz</h2><div id="quizArea">`;
  questions.forEach((q, i) => {
    html += `
      <div class="pyq-card" style="margin-bottom:1rem">
        <strong>Q${i+1}. ${q.q}</strong>
        <div style="margin-top:0.5rem">
          ${q.options.map((opt, j) => `
            <label style="display:block;margin:0.3rem 0;cursor:pointer">
              <input type="radio" name="q${i}" value="${j}" onchange="checkAnswer(${i}, ${j})"> ${opt}
            </label>`).join('')}
        </div>
        <div id="explain${i}" style="margin-top:0.5rem;display:none;color:#0f766e;font-size:0.9rem"></div>
      </div>`;
  });
  html += `</div></div>`;
  container.innerHTML = html;
}

window.checkAnswer = function(qIndex, selected) {
  const q = EM1_DATA.quiz[qIndex];
  const el = document.getElementById('explain' + qIndex);
  el.style.display = 'block';
  if (selected === q.answer) {
    el.innerHTML = `✅ Correct! ${q.explain}`;
    el.style.color = '#059669';
  } else {
    el.innerHTML = `❌ Incorrect. Correct answer: ${q.options[q.answer]}. ${q.explain}`;
    el.style.color = '#dc2626';
  }
};
