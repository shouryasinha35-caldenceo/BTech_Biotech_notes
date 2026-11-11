let currentUser = null;
let subjects = [];
let users = [];

async function init() {
  try {
    const [uRes, sRes] = await Promise.all([
      fetch('data/users.json'),
      fetch('data/subjects.json')
    ]);
    users = (await uRes.json()).users;
    subjects = (await sRes.json()).subjects;
  } catch (e) {
    users = [{userid:'demo',password:'demo123',name:'Demo',status:'active'}];
    subjects = [{id:'em1',name:'Engineering Mathematics-1',type:'Theory',icon:'∑',desc:'Calculus & DE',active:true}];
  }
  renderLogin();
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
      <div class="grid">${cards}</div>
    </div>`;
}

function openSubject(id) {
  if (id === 'em1') renderEM1();
  else alert('Content coming soon');
}

function renderEM1() {
  document.getElementById('app').innerHTML = `
    <header>
      <div>
        <div class="logo-main">IAR BTech Biotechnology</div>
        <div class="logo-sub">Engineering Mathematics-1</div>
      </div>
      <div style="display:flex;gap:1rem;align-items:center">
        <button onclick="renderHome()" style="background:none;border:1px solid #e2e8f0;padding:0.4rem 0.8rem;border-radius:6px;cursor:pointer">← Back</button>
        <div class="calden-corner">🌿 Calden Biotech</div>
      </div>
    </header>
    <div class="container">
      <div class="tabs">
        <div class="tab active" onclick="showTab('notes', this)">Notes</div>
        <div class="tab" onclick="showTab('formulas', this)">Formulas</div>
        <div class="tab" onclick="showTab('pyqs', this)">PYQs</div>
        <div class="tab" onclick="showTab('practice', this)">Practice / QB</div>
      </div>
      <div id="tabContent"></div>
    </div>`;
  showTab('notes', document.querySelector('.tab'));
}

function showTab(tab, el) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  if (el) el.classList.add('active');
  const content = document.getElementById('tabContent');
  if (tab === 'notes') content.innerHTML = getNotes();
  if (tab === 'formulas') content.innerHTML = getFormulas();
  if (tab === 'pyqs') content.innerHTML = getPYQs();
  if (tab === 'practice') content.innerHTML = getPractice();
  if (window.renderMathInElement) {
    setTimeout(() => {
      renderMathInElement(content, {
        delimiters: [
          {left: '$$', right: '$$', display: true},
          {left: '$', right: '$', display: false},
          {left: '\\(', right: '\\)', display: false},
          {left: '\\[', right: '\\]', display: true}
        ],
        throwOnError: false
      });
    }, 100);
  }
}

function getNotes() {
  return `<div class="content-section">
    <h2>Unit I: Partial Differentiation & Multivariable Calculus</h2>
    
    <h3>1.1 Limits & Continuity in Higher Dimensions</h3>
    <p>A limit \(\lim_{(x,y)\to(a,b)} f(x,y) = L\) exists only if \(f(x,y)\) approaches \(L\) along <strong>every possible path</strong> to \((a,b)\).</p>
    
    <div class="formula-box">
      <strong>Key Limit Results</strong><br>
      Direct substitution works if the function is continuous at the point.<br>
      Power rule: \(\displaystyle\lim_{x\to a}\frac{x^n-a^n}{x-a}=na^{n-1}\)<br>
      Two-path test: if two paths give different limits, the limit does not exist.
    </div>

    <h3>1.2 Partial Derivatives & Clairaut’s Theorem</h3>
    <p>To find \(f_x\), treat \(y\) as constant. To find \(f_y\), treat \(x\) as constant.</p>
    <div class="formula-box">
      \(f_x = \dfrac{\partial f}{\partial x},\quad f_y = \dfrac{\partial f}{\partial y}\)<br>
      Clairaut’s Theorem: if the mixed partials are continuous, then \(f_{xy}=f_{yx}\).
    </div>

    <h3>1.3 Chain Rule & Total Differentials</h3>
    <div class="formula-box">
      If \(z=f(x(t),y(t))\): \(\dfrac{dz}{dt}=f_x\dfrac{dx}{dt}+f_y\dfrac{dy}{dt}\)<br>
      Implicit: \(\dfrac{dy}{dx}=-\dfrac{F_x}{F_y}\)
    </div>

    <h3>1.4 Homogeneous Functions & Euler’s Theorem</h3>
    <div class="formula-box">
      \(f\) is homogeneous of degree \(n\) if \(f(tx,ty)=t^n f(x,y)\).<br>
      Euler’s theorem: \(x\dfrac{\partial u}{\partial x}+y\dfrac{\partial u}{\partial y}=nu\)
    </div>

    <h3>Units II–V (Overview from your notes)</h3>
    <ul>
      <li><strong>Unit II</strong> — Infinite series, convergence tests, Taylor & Maclaurin series</li>
      <li><strong>Unit III</strong> — Improper integrals, Beta & Gamma functions, areas & volumes of revolution</li>
      <li><strong>Unit IV</strong> — Double & triple integrals, change of order, Gradient, Divergence, Curl, Stokes/Gauss/Green theorems</li>
      <li><strong>Unit V</strong> — First & second order ODEs, Cauchy-Euler, Legendre polynomials, first-order PDEs</li>
    </ul>
    <p style="margin-top:1rem;color:#64748b">Content is structured from your full 30-page notes, formula sheet, and question bank. More detailed sections can be expanded unit by unit.</p>
  </div>`;
}

function getFormulas() {
  return `<div class="content-section">
    <h2>Master Formula Sheet (from your 10-page guide)</h2>
    
    <div class="formula-box">
      <strong>Limits</strong><br>
      \(\displaystyle\lim_{x\to a}\frac{x^n-a^n}{x-a}=na^{n-1}\)<br>
      \(\displaystyle\lim_{x\to 0}\frac{\sin kx}{x}=k\)
    </div>

    <div class="formula-box">
      <strong>Partial Derivatives</strong><br>
      \(f_x=\dfrac{\partial f}{\partial x},\quad f_y=\dfrac{\partial f}{\partial y}\)<br>
      Clairaut: \(f_{xy}=f_{yx}\) (when continuous)
    </div>

    <div class="formula-box">
      <strong>Chain Rule</strong><br>
      \(\dfrac{dz}{dt}=f_x\dfrac{dx}{dt}+f_y\dfrac{dy}{dt}\)
    </div>

    <div class="formula-box">
      <strong>Euler’s Theorem</strong><br>
      \(x u_x + y u_y = n u\) (homogeneous of degree \(n\))
    </div>

    <div class="formula-box">
      <strong>Casio fx-991ES PLUS Tip</strong><br>
      For limits: switch to RADIAN → type expression with X → CALC → enter X = 5.0001 to check.
    </div>
  </div>`;
}

function getPYQs() {
  return `<div class="content-section">
    <h2>Past Year Questions (Years Marked)</h2>

    <div class="pyq-card">
      <span class="year-tag">Mid-Sem 2024 Set B & 2025 Set B</span>
      <strong>Evaluate</strong> \(\displaystyle\lim_{x\to 5}\frac{x-5}{x^2-25}\)
      <p><strong>Solution:</strong> Factor denominator as \((x-5)(x+5)\), cancel, get \(\dfrac{1}{10}\).</p>
    </div>

    <div class="pyq-card">
      <span class="year-tag">Mid-Sem 2024/2025 & Re-Exam 2026</span>
      <strong>Continuity parameter:</strong> Find \(A\) so that<br>
      \(f(x)=\begin{cases} A+x & x<2 \\ 1+x^2 & x\ge 2 \end{cases}\) is continuous at \(x=2\).
      <p><strong>Answer:</strong> \(A=3\)</p>
    </div>

    <div class="pyq-card">
      <span class="year-tag">SEE 2024 & 2025</span>
      <strong>Partial derivatives:</strong> If \(f(x,y)=x^2+y^2+x^2y^2\), find \(f_x\) and \(f_y\).
      <p><strong>Answer:</strong> \(f_x=2x+2xy^2\), \(f_y=2y+2x^2y\)</p>
    </div>

    <div class="pyq-card">
      <span class="year-tag">Assignment & Mid-Sem</span>
      <strong>Trigonometric limit:</strong> Evaluate \(\displaystyle\lim_{x\to 0}\frac{\sin 5x}{4x}\)
      <p><strong>Answer:</strong> \(\dfrac{5}{4}\)</p>
    </div>
  </div>`;
}

function getPractice() {
  return `<div class="content-section">
    <h2>Question Bank & Extra Practice</h2>

    <div class="pyq-card">
      <strong>Practice Q1</strong><br>
      Evaluate \(\displaystyle\lim_{x\to 4}\frac{x^2-16}{x^2-3x-4}\)
      <p><strong>Answer:</strong> \(\dfrac{8}{5}\)</p>
    </div>

    <div class="pyq-card">
      <strong>Practice Q2</strong><br>
      Find \(k\) so that \(f(x)=\begin{cases} kx^2+1 & x\le 3 \\ 2x+7 & x>3 \end{cases}\) is continuous at \(x=3\).
      <p><strong>Answer:</strong> \(k=\dfrac{4}{3}\)</p>
    </div>

    <div class="pyq-card">
      <strong>Practice Q3</strong><br>
      Evaluate \(\displaystyle\lim_{x\to 0}\frac{1-\cos 4x}{x^2}\)
      <p><strong>Answer:</strong> 8</p>
    </div>

    <p style="margin-top:1rem;color:#64748b">These are taken from your EM1_SEE_QB.pdf. More practice questions can be added as interactive quizzes.</p>
  </div>`;
}
  return `<div class="content-section">
    <h2>Unit I: Partial Differentiation & Multivariable Calculus</h2>
    <h3>1.1 Limits & Continuity</h3>
    <p>For functions of two variables, the limit \(\\lim_{(x,y)\\to(a,b)} f(x,y) = L\) exists only if the function approaches L along <strong>every path</strong>.</p>
    <div class="formula-box">
      <strong>Indeterminate Form 0/0:</strong><br>
      $$\\lim_{x\\to a}\\frac{x^n - a^n}{x - a} = n a^{n-1}$$
    </div>
    <h3>1.2 Partial Derivatives</h3>
    <p>Treat the other variable as constant:</p>
    <div class="formula-box">
      $$f_x = \\frac{\\partial f}{\\partial x}, \\quad f_y = \\frac{\\partial f}{\\partial y}$$
      <br>Clairaut’s Theorem: If continuous, \(f_{xy} = f_{yx}\)
    </div>
    <h3>1.4 Euler’s Theorem</h3>
    <div class="formula-box">
      If \(u = f(x,y)\) is homogeneous of degree \(n\):<br>
      $$x\\frac{\\partial u}{\\partial x} + y\\frac{\\partial u}{\\partial y} = n u$$
    </div>
    <p><em>Full detailed notes from your 30-page guide are structured here unit-wise. More sections can be expanded.</em></p>
  </div>`;
}

function getFormulas() {
  return `<div class="content-section">
    <h2>Master Formula Sheet</h2>
    <div class="formula-box"><strong>Power Limit:</strong> $$\\lim_{x\\to a}\\frac{x^n-a^n}{x-a}=na^{n-1}$$</div>
    <div class="formula-box"><strong>Chain Rule (z=f(x(t),y(t))):</strong> $$\\frac{dz}{dt}=f_x\\frac{dx}{dt}+f_y\\frac{dy}{dt}$$</div>
    <div class="formula-box"><strong>Euler (1st order):</strong> $$x u_x + y u_y = n u$$</div>
    <div class="formula-box"><strong>Casio Tip:</strong> Use CALC with X=5.0001 to verify limits quickly.</div>
  </div>`;
}

function getPYQs() {
  return `<div class="content-section">
    <h2>Past Year Questions (with Year)</h2>
    <div class="pyq-card">
      <span class="year-tag">Mid-Sem 2024 & 2025</span>
      <strong>Evaluate</strong> \(\\lim_{x\\to 5}\\frac{x-5}{x^2-25}\)
      <p>Solution: Factor → \(\\frac{1}{x+5} = \\frac{1}{10}\)</p>
    </div>
    <div class="pyq-card">
      <span class="year-tag">Mid-Sem 2024/2025 & Re-Exam 2026</span>
      <strong>Find A</strong> such that \(f(x) = \\begin{cases} A+x & x<2 \\\\ 1+x^2 & x\\ge 2 \\end{cases}\) is continuous at x=2.
      <p>Answer: A = 3</p>
    </div>
    <div class="pyq-card">
      <span class="year-tag">SEE 2024 & 2025</span>
      <strong>If</strong> \(f(x,y)=x^2+y^2+x^2y^2\), find \(f_x\) and \(f_y\).
      <p>\(f_x=2x+2xy^2\), \(f_y=2y+2x^2y\)</p>
    </div>
  </div>`;
}

function getPractice() {
  return `<div class="content-section">
    <h2>Question Bank & Extra Practice</h2>
    <div class="pyq-card">
      <strong>Practice:</strong> Evaluate \(\\lim_{x\\to 4}\\frac{x^2-16}{x^2-3x-4}\)
      <p>Answer: \(\\frac{8}{5}\)</p>
    </div>
    <div class="pyq-card">
      <strong>Practice:</strong> Find k so that \(f(x)=\\begin{cases} kx^2+1 & x\\le 3 \\\\ 2x+7 & x>3 \\end{cases}\) is continuous at x=3.
      <p>Answer: k = 4/3</p>
    </div>
    <p>More questions from your QB can be added here as interactive quizzes.</p>
  </div>`;
}

function toggleChat() {
  const p = document.getElementById('chatPanel');
  p.style.display = p.style.display === 'flex' ? 'none' : 'flex';
}

function sendChat() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim().toLowerCase();
  if (!text) return;
  const msgs = document.getElementById('chatMessages');
  msgs.innerHTML += `<div class="msg user">${input.value}</div>`;
  input.value = '';

  let reply = "I can help with Engineering Mathematics-1. Ask about limits, partial derivatives, Euler’s theorem, chain rule, or PYQs.";

  if (text.includes('limit') || text.includes('lim')) {
    reply = "Limits in two variables require the same value along every path. Common PYQ: lim (x→5) (x-5)/(x²-25) = 1/10. Use factorization for 0/0 forms.";
  } else if (text.includes('partial') || text.includes('derivative') || text.includes('fx') || text.includes('fy')) {
    reply = "Partial derivatives: treat the other variable as constant. Clairaut’s theorem says f_xy = f_yx if continuous. Example: for f = x² + y² + x²y², f_x = 2x + 2xy².";
  } else if (text.includes('euler')) {
    reply = "Euler’s theorem: if u is homogeneous of degree n, then x·u_x + y·u_y = n·u. Verify by checking u(tx, ty) = tⁿ u(x,y).";
  } else if (text.includes('chain') || text.includes('differential')) {
    reply = "Chain rule: dz/dt = f_x dx/dt + f_y dy/dt. For implicit functions, dy/dx = -F_x / F_y.";
  } else if (text.includes('pyq') || text.includes('exam') || text.includes('question')) {
    reply = "High-yield PYQs include: continuity parameter questions (A=3, B=5), factorization limits, and partial derivatives of polynomials. Check the PYQs tab for years.";
  } else if (text.includes('formula') || text.includes('sheet')) {
    reply = "Key formulas are in the Formulas tab: power limit, chain rule, Euler’s theorem, and Casio calculator tips.";
  }

  setTimeout(() => {
    msgs.innerHTML += `<div class="msg bot">${reply}</div>`;
    msgs.scrollTop = msgs.scrollHeight;
  }, 400);
  msgs.scrollTop = msgs.scrollHeight;
}
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;
  const msgs = document.getElementById('chatMessages');
  msgs.innerHTML += `<div class="msg user">${text}</div>`;
  input.value = '';
  setTimeout(() => {
    msgs.innerHTML += `<div class="msg bot">I can help with EM-1 topics like limits, partial derivatives, Euler’s theorem, and PYQs. (Connect a free API key later for full AI responses.)</div>`;
    msgs.scrollTop = msgs.scrollHeight;
  }, 600);
  msgs.scrollTop = msgs.scrollHeight;
}

// Check saved login
if (localStorage.getItem('caldenUser')) {
  currentUser = JSON.parse(localStorage.getItem('caldenUser'));
  init().then(renderHome);
} else {
  init();
}
