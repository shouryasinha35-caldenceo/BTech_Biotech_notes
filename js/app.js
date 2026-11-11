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

  const lower = text.toLowerCase();
  let reply = "Ask me about limits, partial derivatives, Euler’s theorem, chain rule, series, Beta/Gamma, or PYQs from Engineering Mathematics-1.";

  if (lower.includes('limit') || lower.includes('lim')) {
    reply = "For two-variable limits, the limit must be the same along every path. Classic example: lim (x,y)→(0,0) of xy/(x²+y²) does not exist (path test). Common PYQ: lim (x→5) (x-5)/(x²-25) = 1/10.";
  } else if (lower.includes('partial') || lower.includes('fx') || lower.includes('fy')) {
    reply = "Partial derivatives: treat the other variable as constant. Clairaut’s theorem says mixed partials are equal if continuous. Example: for f = x² + y² + x²y², fx = 2x + 2xy² and fy = 2y + 2x²y.";
  } else if (lower.includes('euler')) {
    reply = "Euler’s theorem: if u is homogeneous of degree n, then x·ux + y·uy = n·u. Check homogeneity by substituting (tx, ty) and seeing if you get tⁿ times the original function.";
  } else if (lower.includes('chain') || lower.includes('total differential')) {
    reply = "Chain rule: dz/dt = fx·dx/dt + fy·dy/dt. For constrained problems, find dy/dx from the constraint using implicit differentiation, then substitute.";
  } else if (lower.includes('beta') || lower.includes('gamma')) {
    reply = "Gamma: Γ(n+1) = nΓ(n), and Γ(1/2) = √π. Beta: B(m,n) = Γ(m)Γ(n)/Γ(m+n) and B(m,n) = B(n,m).";
  } else if (lower.includes('series') || lower.includes('taylor') || lower.includes('maclaurin')) {
    reply = "Maclaurin series for eˣ = 1 + x + x²/2! + x³/3! + ... . p-series 1/nᵖ converges when p > 1. Ratio test: look at |aₙ₊₁/aₙ|.";
  } else if (lower.includes('pyq') || lower.includes('exam') || lower.includes('question')) {
    reply = "High-yield topics: continuity parameter problems (A=3, B=5), factorization limits, partial derivatives of polynomials, and Euler’s theorem verification. Check the PYQs tab for years.";
  }

  setTimeout(() => {
    msgs.innerHTML += `<div class="msg bot">${reply}</div>`;
    msgs.scrollTop = msgs.scrollHeight;
  }, 400);
  msgs.scrollTop = msgs.scrollHeight;
}

init();
