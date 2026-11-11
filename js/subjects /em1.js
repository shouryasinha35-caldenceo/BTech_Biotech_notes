// Engineering Mathematics-1 Content
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
        <div class="tab active" onclick="showTab('notes', this)">Notes</div>
        <div class="tab" onclick="showTab('formulas', this)">Formulas</div>
        <div class="tab" onclick="showTab('pyqs', this)">PYQs</div>
        <div class="tab" onclick="showTab('practice', this)">Practice / QB</div>
      </div>
      <div id="tabContent"></div>
    </div>`;
  showTab('notes', document.querySelector('.tab'));
};

window.getNotes = function() {
  return `
    <div class="content-section">
      <h2>Unit I — Partial Differentiation & Multivariable Calculus</h2>
      
      <h3>1.1 Functions of Several Variables</h3>
      <p>In single-variable calculus, y = f(x). In multivariable calculus, z = f(x, y) takes two inputs and gives one output.</p>
      <div class="formula-box">
        <strong>Visual analogy:</strong> Think of a terrain map. Your position is (x, y) and the height of the hill at that point is z = f(x, y).<br>
        Example: f(x, y) = x² + y² forms a paraboloid (bowl shape). At (0,0) → 0; at (1,2) → 5.
      </div>

      <h3>1.2 Limits & Continuity</h3>
      <p>A limit exists only if the function approaches the same value along <strong>every path</strong>.</p>
      <div class="formula-box">
        <strong>Path test (non-existence):</strong> Substitute y = mx. If the result depends on m, the limit does not exist.<br>
        Classic example: lim (x,y)→(0,0) of xy/(x²+y²) does not exist.
      </div>
      <div class="pyq-card">
        <span class="year-tag">Mid-Sem 2024, 2025 & Re-Exam 2026</span>
        <strong>Continuity parameter:</strong> For piecewise functions, set LHL = RHL = f(c).<br>
        Example: A + x (x < 2) and 1 + x² (x ≥ 2) → A = 3.
      </div>

      <h3>1.3 Partial Derivatives</h3>
      <p>To find ∂f/∂x, treat y as constant. To find ∂f/∂y, treat x as constant.</p>
      <div class="formula-box">
        Clairaut’s Theorem: If the mixed partials are continuous, then fₓᵧ = fᵧₓ.
      </div>

      <h3>1.4 Chain Rule & Euler’s Theorem</h3>
      <div class="formula-box">
        Chain rule (z = f(x(t), y(t))): dz/dt = fₓ dx/dt + fᵧ dy/dt<br><br>
        Euler’s theorem: If u is homogeneous of degree n, then x·uₓ + y·uᵧ = n·u.
      </div>

      <h2 style="margin-top:2rem">Unit II — Infinite Series</h2>
      <div class="formula-box">
        <strong>Key tests:</strong><br>
        • n-th term: if lim aₙ ≠ 0 → diverges<br>
        • p-series: Σ 1/nᵖ converges when p > 1<br>
        • Ratio test: look at |aₙ₊₁ / aₙ|<br>
        • Geometric series: converges when |r| < 1
      </div>
      <p>Maclaurin series for eˣ = 1 + x + x²/2! + x³/3! + …</p>

      <h2 style="margin-top:2rem">Unit III — Improper Integrals & Special Functions</h2>
      <div class="formula-box">
        Gamma: Γ(n+1) = nΓ(n), &nbsp; Γ(1/2) = √π<br>
        Beta: B(m,n) = Γ(m)Γ(n)/Γ(m+n) &nbsp; and &nbsp; B(m,n) = B(n,m)
      </div>

      <h2 style="margin-top:2rem">Units IV & V (Overview)</h2>
      <ul>
        <li><strong>Unit IV</strong> — Double & triple integrals, change of order, Gradient, Divergence, Curl, Stokes/Gauss/Green theorems</li>
        <li><strong>Unit V</strong> — First & second order ODEs, Cauchy-Euler equations, Legendre polynomials, first-order PDEs</li>
      </ul>
    </div>`;
};

window.getFormulas = function() {
  return `
    <div class="content-section">
      <h2>Master Formula Sheet</h2>
      <div class="formula-box">
        <strong>Limits</strong><br>
        lim (x→a) (xⁿ − aⁿ)/(x − a) = n aⁿ⁻¹<br>
        lim (x→0) (sin kx)/x = k
      </div>
      <div class="formula-box">
        <strong>Partial Derivatives</strong><br>
        fₓ = ∂f/∂x &nbsp;&nbsp; fᵧ = ∂f/∂y<br>
        Clairaut: fₓᵧ = fᵧₓ (if continuous)
      </div>
      <div class="formula-box">
        <strong>Chain Rule</strong><br>
        dz/dt = fₓ (dx/dt) + fᵧ (dy/dt)
      </div>
      <div class="formula-box">
        <strong>Euler’s Theorem</strong><br>
        x uₓ + y uᵧ = n u
      </div>
      <div class="formula-box">
        <strong>Gradient & Directional Derivative</strong><br>
        ∇Φ = (∂Φ/∂x) i + (∂Φ/∂y) j + (∂Φ/∂z) k<br>
        Directional derivative = ∇Φ · û
      </div>
      <div class="formula-box">
        <strong>Gamma & Beta</strong><br>
        Γ(n+1) = nΓ(n) &nbsp;&nbsp; Γ(1/2) = √π<br>
        B(m,n) = Γ(m)Γ(n)/Γ(m+n)
      </div>
    </div>`;
};

window.getPYQs = function() {
  return `
    <div class="content-section">
      <h2>Past Year Questions (Years Marked)</h2>
      <div class="pyq-card">
        <span class="year-tag">Mid-Sem 2024 & 2025</span>
        <strong>Evaluate</strong> lim (x→5) (x−5)/(x²−25)
        <p><strong>Answer:</strong> 1/10</p>
      </div>
      <div class="pyq-card">
        <span class="year-tag">Mid-Sem 2024/2025 & Re-Exam 2026</span>
        <strong>Continuity:</strong> Find A so that f(x) = A+x (x<2) and 1+x² (x≥2) is continuous at x=2.
        <p><strong>Answer:</strong> A = 3</p>
      </div>
      <div class="pyq-card">
        <span class="year-tag">SEE 2024 & 2025</span>
        <strong>Partials:</strong> f(x,y) = x² + y² + x²y²
        <p><strong>Answer:</strong> fₓ = 2x + 2xy², &nbsp; fᵧ = 2y + 2x²y</p>
      </div>
      <div class="pyq-card">
        <span class="year-tag">Re-Exam 2026</span>
        <strong>Gamma:</strong> If Γ(1.8) = 0.9314, find Γ(−2.2)
        <p><strong>Answer:</strong> −2.205 (using recurrence backwards)</p>
      </div>
    </div>`;
};

window.getPractice = function() {
  return `
    <div class="content-section">
      <h2>Question Bank & Extra Practice</h2>
      <div class="pyq-card">
        <strong>Practice 1</strong><br>
        Evaluate lim (x→4) (x²−16)/(x²−3x−4)
        <p><strong>Answer:</strong> 8/5</p>
      </div>
      <div class="pyq-card">
        <strong>Practice 2</strong><br>
        Find k for continuity at x=3: kx²+1 (x≤3) and 2x+7 (x>3)
        <p><strong>Answer:</strong> k = 4/3</p>
      </div>
      <div class="pyq-card">
        <strong>Practice 3</strong><br>
        Evaluate lim (x→0) (1 − cos 4x)/x²
        <p><strong>Answer:</strong> 8</p>
      </div>
      <div class="pyq-card">
        <strong>Practice 4</strong><br>
        Verify Euler’s theorem for u = x³ + 3x²y + 3xy² + y³
        <p><strong>Hint:</strong> Degree n = 3</p>
      </div>
    </div>`;
};
