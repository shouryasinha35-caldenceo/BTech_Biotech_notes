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
  const script = document.createElement('script');
  script.src = `js/subjects/${id}.js`;
  script.onload = () => {
    if (window.renderSubject) window.renderSubject();
  };
  script.onerror = () => alert('Could not load subject content.');
  document.body.appendChild(script);
}

function showTab(tab, el) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  if (el) el.classList.add('active');
  const content = document.getElementById('tabContent');
  if (!content) return;
  if (tab === 'notes' && window.getNotes) content.innerHTML = window.getNotes();
  if (tab === 'formulas' && window.getFormulas) content.innerHTML = window.getFormulas();
  if (tab === 'pyqs' && window.getPYQs) content.innerHTML = window.getPYQs();
  if (tab === 'practice' && window.getPractice) content.innerHTML = window.getPractice();
}

// Chatbot
function toggleChat() {
  const p = document.getElementById('chatPanel');
  p.style.display = p.style.display === 'flex' ? 'none' : 'flex';
}

function sendChat() {
  const input = document.getElementById('chatInput');
  const text = (input.value || '').trim();
  if (!text) return;
  const msgs = document.getElementById('chatMessages');
  msgs.innerHTML += `<div class="msg user">${text}</div>`;
  input.value = '';
  msgs.innerHTML += `<div class="msg bot" id="loading">Thinking...</div>`;
  msgs.scrollTop = msgs.scrollHeight;

  const API_KEY = "AQ.Ab8RN6KXBcj8Fm1XIS1GmsIurie_JVPuwduRcwxKXqK8pGCs-Q";

  fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{
        parts: [{
          text: `You are a helpful study assistant for BTech Biotechnology students at IAR. Focus on Engineering Mathematics-1 topics (partial differentiation, series, Beta/Gamma, multiple integrals, differential equations). Answer clearly and concisely.\n\nQuestion: ${text}`
        }]
      }]
    })
  })
  .then(res => res.json())
  .then(data => {
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't generate a response.";
    document.getElementById('loading').outerHTML = `<div class="msg bot">${reply.replace(/\n/g, '<br>')}</div>`;
    msgs.scrollTop = msgs.scrollHeight;
  })
  .catch(() => {
    document.getElementById('loading').outerHTML = `<div class="msg bot">Error connecting to AI. Try again later.</div>`;
  });
}

  setTimeout(() => {
    msgs.innerHTML += `<div class="msg bot">${reply}</div>`;
    msgs.scrollTop = msgs.scrollHeight;
  }, 400);
  msgs.scrollTop = msgs.scrollHeight;
}

init();
