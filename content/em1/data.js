/* ===================================================================
   Engineering Mathematics-1 — Complete Study Material
   Calden Biotech | IAR BTech Biotechnology
   Based on official notes, formula sheet, and question bank
   =================================================================== */

const EM1_DATA = {
  name: "Engineering Mathematics-1",
  code: "EM201T / NEM201T",
  description: "Partial differentiation, multivariable calculus, infinite series, improper integrals, Beta & Gamma functions, multiple integrals, vector calculus, and ordinary & partial differential equations.",

  sections: [
    {
      id: "u1",
      title: "Unit I — Partial Differentiation & Multivariable Calculus",
      topics: [
        {
          title: "1.1 Functions of Several Variables",
          content: `
            <p>In single-variable calculus you studied y = f(x). In multivariable calculus, a function z = f(x, y) takes <strong>two independent inputs</strong> and produces one output.</p>
            <div class="formula-box">
              <strong>Visual Analogy:</strong> Imagine a terrain map. Your position on the ground is (x, y), and the altitude (height of the hill) at that exact spot is z = f(x, y).<br><br>
              <strong>3D Surface:</strong> While y = f(x) draws a 2D curve, z = f(x, y) draws a 3D surface floating in space.<br><br>
              <strong>Domain & Range:</strong> The domain is a 2D region in the xy-plane. The range is the set of all resulting z-values.
            </div>
            <div class="pyq-card">
              <strong>Example:</strong> f(x, y) = x² + y²<br>
              • At (0, 0): f = 0<br>
              • At (1, 2): f = 1 + 4 = 5<br>
              • Graphically this forms a paraboloid (bowl shape).
            </div>`
        },
        {
          title: "1.2 Limits & Continuity in Higher Dimensions",
          content: `
            <p>In 2D calculus you approach a point from only two directions (left or right). In 3D you can approach along <strong>infinitely many paths</strong>.</p>
            <div class="formula-box">
              <strong>Definition:</strong> lim<sub>(x,y)→(a,b)</sub> f(x,y) = L exists if and only if f approaches L along <em>every</em> path to (a,b).<br><br>
              <strong>Path Test Algorithm (to prove non-existence):</strong><br>
              1. Substitute y = mx into the limit.<br>
              2. Simplify. If m remains in the final answer, the limit depends on the slope.<br>
              3. Conclude the limit does not exist.
            </div>
            <div class="pyq-card">
              <strong>Worked Example:</strong> Evaluate lim<sub>(x,y)→(0,0)</sub> xy/(x²+y²)<br>
              Let y = mx → limit = m/(1+m²)<br>
              • Along y = x (m=1): 1/2<br>
              • Along y = 2x (m=2): 2/5<br>
              Different values → <strong>limit does not exist</strong>.
            </div>
            <div class="pyq-card">
              <span class="year-tag">Mid-Sem 2024, 2025 & Re-Exam 2026</span>
              <strong>Piecewise Continuity Rule:</strong> Continuous at x = c if LHL = RHL = f(c).<br><br>
              <strong>PYQ 1:</strong> f(x) = A + x (x < 2) and 1 + x² (x ≥ 2). Find A.<br>
              LHL = A + 2, RHL = 5 → A = 3.<br><br>
              <strong>PYQ 2 (Re-Exam 2026):</strong> f(x) = 2x² + 3 (x ≤ 2) and 3x + B (x > 2). Find B.<br>
              f(2) = 11, RHL = 6 + B → B = 5.
            </div>`
        },
        {
          title: "1.3 Partial Derivatives & Clairaut’s Theorem",
          content: `
            <p>When differentiating z = f(x, y):</p>
            <ul>
              <li><strong>∂f/∂x (fₓ):</strong> Treat x as the variable, hold y completely constant.</li>
              <li><strong>∂f/∂y (fᵧ):</strong> Treat y as the variable, hold x completely constant.</li>
            </ul>
            <div class="formula-box">
              <strong>Clairaut’s Theorem:</strong> If f and its partial derivatives are continuous, then the order of mixed partials does not matter:<br>
              ∂²f/∂x∂y = ∂²f/∂y∂x &nbsp; or &nbsp; f<sub>xy</sub> = f<sub>yx</sub>
            </div>
            <div class="pyq-card">
              <span class="year-tag">Repeated in 5 exam papers</span>
              <strong>PYQ:</strong> f(x,y) = x² + y² + x²y². Find first-order partials.<br>
              ∂f/∂x = 2x + 2xy² &nbsp;&nbsp; ∂f/∂y = 2y + 2x²y<br><br>
              <strong>SEE 2024/25:</strong> f(x,y) = 6x² + 13xy + 4y²<br>
              ∂f/∂x = 12x + 13y &nbsp;&nbsp; ∂f/∂y = 13x + 8y
            </div>`
        },
        {
          title: "1.4 Multivariable Chain Rule & Total Differentials",
          content: `
            <div class="formula-box">
              <strong>Case 1 (single parameter):</strong> z = f(x(t), y(t))<br>
              dz/dt = (∂f/∂x)(dx/dt) + (∂f/∂y)(dy/dt)<br><br>
              <strong>Case 2 (two parameters):</strong> x = u + v, y = u − v<br>
              ∂z/∂u = ∂f/∂x + ∂f/∂y &nbsp;&nbsp; ∂z/∂v = ∂f/∂x − ∂f/∂y
            </div>
            <div class="pyq-card">
              <span class="year-tag">Mid-Sem 2025 & 2026</span>
              <strong>Total Differential Coefficient:</strong> du/dx = ∂u/∂x + (∂u/∂y)(dy/dx)<br>
              Example: u = x²y with constraint x² + xy + y² = 1.
            </div>`
        },
        {
          title: "1.5 Homogeneous Functions & Euler’s Theorem",
          content: `
            <p><strong>Definition:</strong> f(x, y) is homogeneous of degree n if f(tx, ty) = tⁿ f(x, y).</p>
            <div class="formula-box">
              <strong>Euler’s Theorem:</strong> If u is homogeneous of degree n, then<br>
              x (∂u/∂x) + y (∂u/∂y) = n u
            </div>
            <div class="pyq-card">
              <strong>Proof outline:</strong> Write u = xⁿ F(y/x). Differentiate partially, multiply by x and y, and add. The extra terms cancel.
            </div>`
        },
        {
          title: "1.6 Gradient, Directional Derivatives & Extrema",
          content: `
            <div class="formula-box">
              <strong>Gradient:</strong> ∇Φ = (∂Φ/∂x)i + (∂Φ/∂y)j + (∂Φ/∂z)k<br>
              <strong>Directional Derivative:</strong> D<sub>u</sub>f = ∇f · û where û = v/|v|<br>
              <strong>Maximum rate of change</strong> occurs in the direction of ∇Φ and equals |∇Φ|.
            </div>
            <div class="pyq-card">
              <span class="year-tag">SEE 2024, 2025 & Re-Exam 2026</span>
              Φ = 3x²y − y³z² at (1, −2, −1) → ∇Φ = −12i − 9j − 16k
            </div>
            <div class="formula-box">
              <strong>Extrema Classification:</strong><br>
              Find critical points (fₓ = 0, fᵧ = 0).<br>
              D = fₓₓ fᵧᵧ − (fₓᵧ)²<br>
              • D > 0 and fₓₓ > 0 → Relative Minimum<br>
              • D > 0 and fₓₓ < 0 → Relative Maximum<br>
              • D < 0 → Saddle Point<br>
              • D = 0 → Test inconclusive
            </div>`
        }
      ]
    },
    {
      id: "u2",
      title: "Unit II — Infinite Series, Convergence Tests & Expansions",
      topics: [
        {
          title: "2.1 Sequences & Infinite Series",
          content: `
            <p>An infinite series is Σ aₙ from n=1 to ∞. It <strong>converges</strong> if the partial sums approach a finite limit; otherwise it <strong>diverges</strong>.</p>`
        },
        {
          title: "2.2 Master Convergence Tests",
          content: `
            <div class="formula-box">
              <strong>n-th Term Test:</strong> If lim aₙ ≠ 0 → diverges immediately.<br>
              <strong>Geometric Series:</strong> Σ arⁿ converges if |r| < 1 (sum = a/(1−r)).<br>
              <strong>p-Series:</strong> Σ 1/nᵖ converges if p > 1; diverges if p ≤ 1.<br>
              <strong>Ratio Test:</strong> L = lim |aₙ₊₁/aₙ|; converges if L < 1, diverges if L > 1.<br>
              <strong>Root Test:</strong> L = lim ( |aₙ| )^(1/n); same rules as ratio test.<br>
              <strong>Leibniz Test (Alternating):</strong> Converges if bₙ₊₁ ≤ bₙ and lim bₙ = 0.
            </div>`
        },
        {
          title: "2.3 Taylor & Maclaurin Series",
          content: `
            <div class="formula-box">
              <strong>Maclaurin series (at x=0):</strong><br>
              f(x) = f(0) + f'(0)x + f''(0)x²/2! + f'''(0)x³/3! + …<br><br>
              <strong>Standard expansions:</strong><br>
              eˣ = 1 + x + x²/2! + x³/3! + …<br>
              sin x = x − x³/3! + x⁵/5! − …<br>
              cos x = 1 − x²/2! + x⁴/4! − …<br>
              ln(1+x) = x − x²/2 + x³/3 − … &nbsp; (−1 < x ≤ 1)
            </div>`
        }
      ]
    },
    {
      id: "u3",
      title: "Unit III — Improper Integrals, Beta & Gamma Functions",
      topics: [
        {
          title: "3.1 Improper Integrals",
          content: `
            <div class="formula-box">
              <strong>Type 1 (Infinite limits):</strong> At least one limit is ±∞.<br>
              Example: ∫ from 1 to ∞ of 1/x² dx = 1 (convergent).<br><br>
              <strong>Type 2 (Unbounded integrand):</strong> Function goes to ±∞ inside the interval.<br>
              Example: ∫ from 0 to 1 of 1/√x dx = 2 (convergent).
            </div>`
        },
        {
          title: "3.2 Beta & Gamma Functions",
          content: `
            <div class="formula-box">
              <strong>Gamma:</strong> Γ(n) = ∫ from 0 to ∞ of xⁿ⁻¹ e⁻ˣ dx &nbsp; (n > 0)<br>
              Recurrence: Γ(n+1) = nΓ(n) = n! (for positive integers)<br>
              Half-integer: Γ(1/2) = √π<br><br>
              <strong>Beta:</strong> B(m,n) = ∫ from 0 to 1 of xᵐ⁻¹ (1−x)ⁿ⁻¹ dx<br>
              Symmetry: B(m,n) = B(n,m)<br>
              Relation: B(m,n) = Γ(m)Γ(n)/Γ(m+n)
            </div>
            <div class="pyq-card">
              <span class="year-tag">Re-Exam 2026</span>
              Γ(5/2) = 3√π / 4<br>
              If Γ(1.8) = 0.9314, then Γ(−2.2) ≈ −2.205
            </div>`
        },
        {
          title: "3.3 Volume of Solids of Revolution",
          content: `
            <div class="formula-box">
              Disk method (about x-axis): V = π ∫ [y(x)]² dx<br>
              Cylindrical shell (about y-axis): V = 2π ∫ x · y(x) dx
            </div>
            <div class="pyq-card">
              <span class="year-tag">SEE 2024, 2025 & Re-Exam 2026</span>
              Region y = x² from x=1 to 3 revolved about y-axis → V = 40π
            </div>`
        }
      ]
    },
    {
      id: "u4",
      title: "Unit IV — Multiple Integrals & Vector Calculus",
      topics: [
        {
          title: "4.1 Double & Triple Integrals",
          content: `
            <p><strong>Golden Rule:</strong> Work from the innermost integral outward. Treat outer variables as constant while integrating.</p>
            <div class="pyq-card">
              <span class="year-tag">SEE 2024 & 2025</span>
              ∫₀¹ ∫₀² y² x dy dx = 4/3<br>
              Triple integral example evaluates to 26.
            </div>`
        },
        {
          title: "4.2 Polar Coordinates & Vector Calculus",
          content: `
            <div class="formula-box">
              Polar: x = r cos θ, y = r sin θ, x² + y² = r²<br>
              Gradient, Divergence, Curl; Line/surface/volume integrals;<br>
              Stokes, Gauss and Green theorems (statements and applications).
            </div>`
        }
      ]
    },
    {
      id: "u5",
      title: "Unit V — Ordinary & Partial Differential Equations",
      topics: [
        {
          title: "5.1 First & Second Order ODEs",
          content: `
            <ul>
              <li>First-order linear DEs — integrating factor method</li>
              <li>Second-order linear DEs with constant coefficients</li>
              <li>Cauchy-Euler equations</li>
              <li>Power series solutions & Legendre polynomials</li>
            </ul>`
        },
        {
          title: "5.2 First-Order PDEs",
          content: `<p>Linear and non-linear first-order partial differential equations, including standard forms and solution methods.</p>`
        }
      ]
    }
  ],

  formulas: [
    { name: "Power Limit", formula: "lim (x→a) (xⁿ − aⁿ)/(x − a) = n aⁿ⁻¹" },
    { name: "Sine Limit", formula: "lim (x→0) sin(kx)/x = k" },
    { name: "Partial Derivatives", formula: "fₓ = ∂f/∂x , fᵧ = ∂f/∂y" },
    { name: "Clairaut", formula: "fₓᵧ = fᵧₓ (when continuous)" },
    { name: "Chain Rule", formula: "dz/dt = fₓ dx/dt + fᵧ dy/dt" },
    { name: "Euler’s Theorem", formula: "x uₓ + y uᵧ = n u" },
    { name: "Gradient", formula: "∇Φ = Φₓ i + Φᵧ j + Φ_z k" },
    { name: "Directional Derivative", formula: "Dᵤf = ∇f · û" },
    { name: "Extrema Discriminant", formula: "D = fₓₓ fᵧᵧ − (fₓᵧ)²" },
    { name: "Maclaurin eˣ", formula: "eˣ = Σ xⁿ / n!" },
    { name: "p-Series", formula: "Σ 1/nᵖ converges for p > 1" },
    { name: "Gamma Recurrence", formula: "Γ(n+1) = n Γ(n)" },
    { name: "Gamma Half", formula: "Γ(1/2) = √π" },
    { name: "Beta-Gamma", formula: "B(m,n) = Γ(m)Γ(n)/Γ(m+n)" },
    { name: "Volume (Shell)", formula: "V = 2π ∫ x y dx" }
  ],

  pyqs: [
    { year: "Mid-Sem 2024 & 2025", q: "Evaluate lim (x→5) (x−5)/(x²−25)", a: "1/10" },
    { year: "Mid-Sem 2024/25 & Re-Exam 2026", q: "Find A for continuity at x=2: A+x (x<2), 1+x² (x≥2)", a: "A = 3" },
    { year: "Re-Exam 2026", q: "Find B for continuity: 2x²+3 (x≤2), 3x+B (x>2)", a: "B = 5" },
    { year: "SEE 2024 & 2025", q: "Partials of f(x,y) = x² + y² + x²y²", a: "fₓ = 2x+2xy² , fᵧ = 2y+2x²y" },
    { year: "SEE 2024/25 & Re-Exam 2026", q: "∇Φ of 3x²y − y³z² at (1,−2,−1)", a: "−12i −9j −16k" },
    { year: "SEE 2024 & 2025", q: "Evaluate Σᵢ₌₁⁴ (2n + 3)", a: "32" },
    { year: "Re-Exam 2026", q: "Find Γ(5/2)", a: "3√π / 4" },
    { year: "SEE 2024/25 & Re-Exam 2026", q: "Volume of y=x² from 1 to 3 about y-axis", a: "40π" }
  ],

  quiz: [
    { q: "lim (x,y)→(0,0) of xy/(x²+y²)", options: ["0", "1", "Does not exist", "1/2"], answer: 2, explain: "Path test gives different values along different lines." },
    { q: "For continuity at x=2 of A+x and 1+x², A equals", options: ["1", "2", "3", "5"], answer: 2, explain: "LHL = A+2 = 5 → A=3." },
    { q: "Clairaut’s theorem states", options: ["fₓ=fᵧ", "fₓᵧ=fᵧₓ if continuous", "fₓₓ=fᵧᵧ", "None"], answer: 1, explain: "Mixed partials are equal when continuous." },
    { q: "Euler’s theorem applies to functions that are", options: ["Continuous", "Homogeneous", "Linear", "Periodic"], answer: 1, explain: "Homogeneous of degree n satisfy the Euler identity." },
    { q: "Γ(1/2) equals", options: ["1", "π", "√π", "2"], answer: 2, explain: "Standard result." },
    { q: "p-series Σ 1/nᵖ converges when", options: ["p<1", "p=1", "p>1", "always"], answer: 2, explain: "Converges for p>1; diverges for p≤1." },
    { q: "Maximum rate of change of a scalar field occurs in the direction of", options: ["Unit vector", "Gradient", "Curl", "Divergence"], answer: 1, explain: "The gradient points in the direction of steepest ascent." },
    { q: "For relative minimum, the discriminant D must satisfy", options: ["D<0", "D>0 and fₓₓ>0", "D>0 and fₓₓ<0", "D=0"], answer: 1, explain: "D>0 and fₓₓ>0 indicates a local minimum." },
    { q: "Maclaurin series for eˣ begins with", options: ["1 + x + x²/2 + …", "x − x³/6 + …", "1 − x²/2 + …", "x + x²/2 + …"], answer: 0, explain: "eˣ = Σ xⁿ/n!." },
    { q: "Beta function satisfies B(m,n) =", options: ["B(n,m)", "Γ(m)+Γ(n)", "m+n", "None"], answer: 0, explain: "Beta is symmetric: B(m,n)=B(n,m)." },
    { q: "Type 1 improper integral has", options: ["Finite limits", "At least one infinite limit", "Discontinuity inside", "None"], answer: 1, explain: "Type 1 has infinite limits of integration." },
    { q: "The integrating factor for dy/dx + P(x)y = Q(x) is", options: ["e^{∫P dx}", "e^{∫Q dx}", "∫P dx", "1/P"], answer: 0, explain: "Standard integrating factor for first-order linear DE." },
    { q: "Cauchy-Euler equation has the form", options: ["ax²y'' + bxy' + cy = 0", "y'' + y = 0", "y' + y = 0", "None"], answer: 0, explain: "Variable coefficients that are powers of x." },
    { q: "Green's theorem relates", options: ["Line and double integrals", "Surface and triple integrals", "Line and surface integrals", "None"], answer: 0, explain: "Green's theorem connects circulation and double integral of curl." },
    { q: "For f(x,y)=x³+y³−3xy, the point (0,0) is a", options: ["Minimum", "Maximum", "Saddle point", "Inconclusive"], answer: 2, explain: "Discriminant D = −9 < 0 → saddle." },
    { q: "lim (x→0) (1−cos 4x)/x² equals", options: ["0", "4", "8", "16"], answer: 2, explain: "Use 1−cos θ = 2 sin²(θ/2) or L'Hôpital." },
    { q: "The series Σ n/2ⁿ", options: ["Diverges", "Converges", "Oscillates", "Cannot say"], answer: 1, explain: "Ratio test gives L=1/2 < 1 → converges." },
    { q: "∂/∂x of ln(x²+y²) is", options: ["2x/(x²+y²)", "2y/(x²+y²)", "1/(x²+y²)", "x/(x²+y²)"], answer: 0, explain: "Chain rule on logarithm." },
    { q: "Volume of revolution of y=x² from 1 to 3 about y-axis is", options: ["20π", "40π", "60π", "80π"], answer: 1, explain: "Shell method: 2π ∫ x·x² dx from 1 to 3 = 40π." }
  ]
};
