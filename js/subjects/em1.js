// Engineering Mathematics-1 — Full Content
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
      <p>In multivariable calculus, z = f(x, y) takes two independent inputs and produces one output. Visually, this is like a terrain map where (x, y) is your position and z is the height.</p>
      <div class="formula-box">
        Example: f(x, y) = x² + y² forms a paraboloid. At (0,0) the value is 0; at (1,2) the value is 5.
      </div>

      <h3>1.2 Limits & Continuity in Higher Dimensions</h3>
      <p>A limit lim (x,y)→(a,b) f(x,y) = L exists only if the function approaches L along <strong>every possible path</strong>.</p>
      <div class="formula-box">
        <strong>Path test for non-existence:</strong> Substitute y = mx. If the result depends on the slope m, the limit does not exist.<br>
        Classic example: lim (x,y)→(0,0) of xy/(x²+y²) does not exist.
      </div>
      <div class="pyq-card">
        <span class="year-tag">Mid-Sem 2024, 2025 & Re-Exam 2026</span>
        <strong>Continuity of piecewise functions:</strong> Set LHL = RHL = f(c).<br>
        Example: A + x (x < 2) and 1 + x² (x ≥ 2) is continuous at x = 2 when A = 3.
      </div>

      <h3>1.3 Partial Derivatives & Clairaut’s Theorem</h3>
      <p>To find ∂f/∂x, treat y as a constant. To find ∂f/∂y, treat x as a constant.</p>
      <div class="formula-box">
        Clairaut’s Theorem: If the mixed partials are continuous, then ∂²f/∂x∂y = ∂²f/∂y∂x.
      </div>
      <div class="pyq-card">
        <span class="year-tag">SEE 2024 & 2025</span>
        For f(x,y) = x² + y² + x²y²:<br>
        ∂f/∂x = 2x + 2xy² &nbsp;&nbsp; ∂f/∂y = 2y + 2x²y
      </div>

      <h3>1.4 Chain Rule & Total Differentials</h3>
      <div class="formula-box">
        If z = f(x(t), y(t)): dz/dt = (∂f/∂x)(dx/dt) + (∂f/∂y)(dy/dt)<br>
        Implicit differentiation: dy/dx = −(∂F/∂x)/(∂F/∂y)
      </div>

      <h3>1.5 Homogeneous Functions & Euler’s Theorem</h3>
      <p>A function is homogeneous of degree n if f(tx, ty) = tⁿ f(x, y).</p>
      <div class="formula-box">
        Euler’s theorem: x (∂u/∂x) + y (∂u/∂y) = n u
      </div>

      <h3>1.6 Gradient, Directional Derivatives & Extrema</h3>
      <div class="formula-box">
        Gradient: ∇Φ = (∂Φ/∂x)i + (∂Φ/∂y)j + (∂Φ/∂z)k<br>
        Directional derivative: Dᵤf = ∇f · û<br>
        Extrema test: D = fₓₓ fᵧᵧ − (fₓᵧ)²<br>
        • D > 0 and fₓₓ > 0 → Relative minimum<br>
        • D > 0 and fₓₓ < 0 → Relative maximum<br>
        • D < 0 → Saddle point
      </div>

      <h2 style="margin-top:2.5rem">Unit II — Infinite Series & Expansions</h2>
      <div class="formula-box">
        <strong>Convergence tests:</strong><br>
        • n-th term test: if lim aₙ ≠ 0 → diverges<br>
        • p-series Σ 1/nᵖ converges when p > 1<br>
        • Geometric series Σ arⁿ converges when |r| < 1<br>
        • Ratio test: L = lim |aₙ₊₁/aₙ|; converges if L < 1
      </div>
      <p><strong>Maclaurin series for eˣ:</strong> 1 + x + x²/2! + x³/3! + …</p>
      <p>Standard expansions: sin x, cos x, ln(1+x), 1/(1−x)</p>

      <h2 style="margin-top:2.5rem">Unit III — Improper Integrals & Special Functions</h2>
      <div class="formula-box">
        <strong>Type 1:</strong> At least one limit is ±∞<br>
        <strong>Type 2:</strong> Integrand becomes infinite inside the interval<br><br>
        <strong>Gamma:</strong> Γ(n+1) = nΓ(n), &nbsp; Γ(1/2) = √π<br>
        <strong>Beta:</strong> B(m,n) = Γ(m)Γ(n)/Γ(m+n) &nbsp; and &nbsp; B(m,n) = B(n,m)
      </div>
      <div class="pyq-card">
        <span class="year-tag">Re-Exam 2026</span>
        Γ(5/2) = 3√π / 4
      </div>

      <h2 style="margin-top:2.5rem">Unit IV — Multiple Integrals & Vector Calculus</h2>
      <p>Evaluate double and triple integrals from the innermost integral outward. Polar conversion: x = r cos θ, y = r sin θ, x² + y² = r².</p>
      <div class="formula-box">
        Gradient, Divergence, Curl; Line, surface and volume integrals; Stokes, Gauss and Green theorems (statements).
      </div>

      <h2 style="margin-top:2.5rem">Unit V — Ordinary & Partial Differential Equations</h2>
      <ul>
        <li>First-order linear DEs (integrating factor)</li>
        <li>Second-order linear DEs with constant coefficients</li>
        <li>Cauchy-Euler equations</li>
        <li>Power series solutions & Legendre polynomials</li>
        <li>First-order PDEs (including non-linear forms)</li>
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
        lim (x→0) sin(kx)/x = k
      </div>

      <div class="formula-box">
        <strong>Partial Derivatives</strong><br>
        fₓ = ∂f/∂x &nbsp;&nbsp; fᵧ = ∂f/∂y<br>
        Clairaut: fₓᵧ = fᵧₓ (continuous case)
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
        ∇Φ = Φₓ i + Φᵧ j + Φ_z k<br>
        Dᵤf = ∇f · û &nbsp;&nbsp; Max rate = |∇f|
      </div>

      <div class="formula-box">
        <strong>Extrema Discriminant</strong><br>
        D = fₓₓ fᵧᵧ − (fₓᵧ)²
      </div>

      <div class="formula-box">
        <strong>Series</strong><br>
        eˣ = Σ xⁿ / n! &nbsp;&nbsp; (all x)<br>
        p-series converges for p > 1
      </div>

      <div class="formula-box">
        <strong>Gamma & Beta</strong><br>
        Γ(n+1) = n Γ(n) &nbsp;&nbsp; Γ(1/2) = √π<br>
        B(m,n) = Γ(m)Γ(n) / Γ(m+n)
      </div>

      <div class="formula-box">
        <strong>Volume of Revolution</strong><br>
        Disk (about x-axis): V = π ∫ [y]² dx<br>
        Shell (about y-axis): V = 2π ∫ x y dx
      </div>
    </div>`;
};

window.getPYQs = function() {
  return `
    <div class="content-section">
      <h2>Past Year Questions (Years Marked)</h2>

      <div class="pyq-card">
        <span class="year-tag">Mid-Sem 2024 & 2025</span>
        Evaluate lim (x→5) (x−5)/(x²−25)
        <p><strong>Answer:</strong> 1/10</p>
      </div>

      <div class="pyq-card">
        <span class="year-tag">Mid-Sem 2024/2025 & Re-Exam 2026</span>
        Find A for continuity at x=2: A+x (x<2), 1+x² (x≥2)
        <p><strong>Answer:</strong> A = 3</p>
      </div>

      <div class="pyq-card">
        <span class="year-tag">SEE 2024 & 2025</span>
        Partial derivatives of f(x,y) = x² + y² + x²y²
        <p><strong>Answer:</strong> fₓ = 2x + 2xy², fᵧ = 2y + 2x²y</p>
      </div>

      <div class="pyq-card">
        <span class="year-tag">SEE 2024, 2025 & Re-Exam 2026</span>
        Gradient of Φ = 3x²y − y³z² at (1, −2, −1)
        <p><strong>Answer:</strong> −12i − 9j − 16k</p>
      </div>

      <div class="pyq-card">
        <span class="year-tag">SEE 2024 & 2025</span>
        Evaluate Σ from i=1 to 4 of (2n + 3)
        <p><strong>Answer:</strong> 32</p>
      </div>

      <div class="pyq-card">
        <span class="year-tag">Re-Exam 2026</span>
        If Γ(1.8) = 0.9314, find Γ(−2.2)
        <p><strong>Answer:</strong> −2.205</p>
      </div>

      <div class="pyq-card">
        <span class="year-tag">SEE 2024, 2025 & Re-Exam 2026</span>
        Volume of solid generated by y = x² from x=1 to 3 revolved about y-axis
        <p><strong>Answer:</strong> 40π</p>
      </div>
    </div>`;
};

window.getPractice = function() {
  return `
    <div class="content-section">
      <h2>Question Bank & Extra Practice</h2>

      <div class="pyq-card">
        <strong>Limits</strong><br>
        Evaluate lim (x→4) (x²−16)/(x²−3x−4)
        <p><strong>Answer:</strong> 8/5</p>
      </div>

      <div class="pyq-card">
        <strong>Continuity</strong><br>
        Find k so that kx²+1 (x≤3) and 2x+7 (x>3) is continuous at x=3
        <p><strong>Answer:</strong> k = 4/3</p>
      </div>

      <div class="pyq-card">
        <strong>Partials</strong><br>
        Find ∂u/∂x and ∂u/∂y for u = ln(x² + y²)
        <p><strong>Answer:</strong> 2x/(x²+y²) and 2y/(x²+y²)</p>
      </div>

      <div class="pyq-card">
        <strong>Euler</strong><br>
        Verify Euler’s theorem for u = x³ + 3x²y + 3xy² + y³
        <p><strong>Hint:</strong> Homogeneous of degree 3</p>
      </div>

      <div class="pyq-card">
        <strong>Extrema</strong><br>
        Classify critical points of f(x,y) = x³ + y³ − 3xy
        <p><strong>Answer:</strong> (0,0) saddle; (1,1) relative minimum</p>
      </div>

      <div class="pyq-card">
        <strong>Series</strong><br>
        Test convergence of Σ n / 2ⁿ using ratio test
        <p><strong>Answer:</strong> Converges (L = 1/2 < 1)</p>
      </div>

      <div class="pyq-card">
        <strong>Improper Integrals</strong><br>
        Evaluate ∫ from 1 to ∞ of dx/x²
        <p><strong>Answer:</strong> 1 (convergent)</p>
      </div>

      <div class="pyq-card">
        <strong>Gamma</strong><br>
        Find Γ(5/2)
        <p><strong>Answer:</strong> 3√π / 4</p>
      </div>
    </div>`;
};
