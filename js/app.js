// Calden Biotech Study Portal - Main App
let currentUser = null;
let subjects = [];
let users = [];

async function init() {
  try {
    const [uRes, sRes] = await Promise.all([
      fetch('data/users.json'),
      fetch('data/subjects.json')
    ]);
    users = (await uRes.json()).users || [];
    subjects = (await sRes.json()).subjects || [];
  } catch (e) {
    console.warn('Using fallback data');
    users = [{userid:'demo',password:'demo123',name:'Demo Student',status:'active'}];
    subjects = [{id:'em1',name:'Engineering Mathematics-1',type:'Theory',icon:'∑',desc:'Calculus & Differential Equations',active:true}];
  }
  if (localStorage.getItem('caldenUser')) {
    currentUser = JSON.parse(localStorage.getItem('caldenUser'));
    renderHome();
  } else {
    renderLogin();
  }
}

function renderLogin() {
  document.getElementById('app').innerHTML = `
    <div class="login-wrap">
      <div class="login-card">
        <h1>IAR BTech Biotechnology</h1>
        <p style="color:#64748b;margin-bottom:1.5rem">Study Portal</p>
        <input id="uid" placeholder="User ID" />
        <input id="pwd" type="password" placeholder="Password" />
        <button class="primary" onclick="doLogin()">Login</button>
        <div style="margin-top:1.5rem;font-size:0.85rem;color:#64748b">
          Calden Biotech<br>Powered by Shourya Sinha
        </div>
      </div>
    </div>`;
}

function doLogin() {
  const uid = document.getElementById('uid').value.trim();
  const pwd = document.getElementById('pwd').value;
  const user = users.find(u => u.userid === uid && u.password === pwd && u.status === 'active');
  if (user) {
    currentUser = user;
    localStorage.setItem('caldenUser', JSON.stringify(user));
    renderHome();
  } else {
    alert('Invalid User ID or Password');
  }
}

function renderHome() {
  const cards = subjects.filter(s => s.active).map(s => `
    <div class="card" onclick="openSubject('${s.id}')">
      <div class="card-icon">${s.icon || '📚'}</div>
      <h3>${s.name}</h3>
      <p style="color:#64748b;font-size:0.9rem;margin:0.5rem 0">${s.desc || ''}</p>
      <span class="badge">${s.type}</span>
    </div>`).join('');

  document.getElementById('app').innerHTML = `
    <header>
      <div>
        <div class="logo-main">IAR BTech Biotechnology</div>
        <div class="logo-sub">Study Portal</div>
      </div>
      <div class="calden-corner">🌿 Calden Biotech</div>
    </header>
    <div class="container">
      <div class="about-box">
        <h2>About</h2>
        <p>It is a website created by Calden Biotech CEO and Founder Shourya Sinha. It is a study portal for BTech Biotechnology 2026 batch for various semester exams.</p>
      </div>
      <h2 style="margin-bottom:1rem">Subjects</h2>
      <div class="grid">${cards || '<p>No subjects available yet.</p>'}</div>
    </div>`;
}

function openSubject(id) {
  if (id === 'em1') {
    loadSubject('em1');
  } else {
    alert('Content for this subject is coming soon.');
  }
}

async function loadSubject(id) {
  if (id === 'em1') {
    await loadEM1FromJSON();
    return;
  }

  // Keep old method for other subjects later
  const script = document.createElement('script');
  script.src = `js/subjects/${id}.js`;
  script.onload = () => {
    if (window.renderSubject) window.renderSubject();
  };
  script.onerror = () => alert('Could not load subject content.');
  document.body.appendChild(script);
}

async function loadEM1FromJSON() {
  try {
    const res = await fetch('js/EM1/EM1_Unit1.json');
    const data = await res.json();

    document.getElementById('app').innerHTML = `
      <header>
        <div>
          <div class="logo-main">IAR BTech Biotechnology</div>
          <div class="logo-sub">Engineering Mathematics-1</div>
        </div>
        <div class="calden-corner">Calden Biotech</div>
      </header>
      <div class="container">
        <button onclick="renderHome()" style="margin-bottom:1rem">← Back to Subjects</button>
        <h1>${data.unit}: ${data.title}</h1>
        <div id="topics"></div>
      </div>
    `;

    const topicsDiv = document.getElementById('topics');
    data.topics.forEach(topic => {
      topicsDiv.innerHTML += `
        <div class="topic-card" style="background:#1e293b;border-radius:12px;padding:1.5rem;margin-bottom:1.5rem;border:1px solid #334155;">
          <h2 style="color:#38bdf8;margin-top:0;">${topic.id} ${topic.title}</h2>
          <div class="explanation">${topic.explanation}</div>
          <h3>Questions</h3>
          ${topic.questions.map(q => `
            <div class="q-item" style="background:#0f172a;padding:0.8rem;margin:0.5rem 0;border-radius:8px;">
              <strong>${q.type} (${q.marks} marks)</strong><br>
              ${q.question}
              ${q.solution ? `<details style="margin-top:0.5rem;color:#94a3b8;"><summary>Solution</summary>${q.solution}</details>` : ''}
            </div>
          `).join('')}
        </div>
      `;
    });
  } catch (err) {
    console.error(err);
    alert('Failed to load EM-1 content. Check if js/EM1/EM1_Unit1.json exists.');
  }
}

function showTab(tab, el) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  if (el) el.classList.add('active');
  const content = document.getElementById('tabContent');
  if (!content) return;

  if (tab === 'notes' && window.courseNotes) {
    content.innerHTML = window.courseNotes.map(unit => `
      <div class="unit">
        <h3>${unit.title}</h3>
        ${unit.sections.map(s => `<h4>${s.title}</h4>${s.content}`).join('')}
      </div>
    `).join('');
  }
  if (tab === 'formulas' && window.formulaDeck) {
    content.innerHTML = window.formulaDeck.map(f => `
      <div class="formula-card">
        <h4>${f.title}</h4>
        <div class="formula">$${f.formula}$</div>
        <p><strong>When to use:</strong> ${f.whenToUse}</p>
        <p>${f.explanation}</p>
        <p><em>${f.calcTip}</em></p>
      </div>
    `).join('');
  }
  if ((tab === 'pyqs' || tab === 'practice') && window.questionBank) {
    const list = window.questionBank.filter(q => 
      tab === 'pyqs' ? q.type === 'PYQ' : true
    );
    content.innerHTML = list.map(q => `
      <div class="q-card">
        <div class="q-meta">${q.type} · ${q.marks} marks · Unit ${q.unit} · ${q.topic}</div>
        <div class="q-text">${q.question}</div>
        <div class="q-sol">${q.solution}</div>
      </div>
    `).join('');
  }
}

init();
