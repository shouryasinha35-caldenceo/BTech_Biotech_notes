/* Engineering Mathematics-1 — Full Content
   Calden Biotech Study Portal
*/

const EM1_DATA = {
  name: "Engineering Mathematics-1",
  code: "EM201T",
  description: "Partial differentiation, multivariable calculus, infinite series, improper integrals, Beta & Gamma functions, multiple integrals, vector calculus, and differential equations.",

  sections: [
    {
      id: "u1",
      title: "Unit I — Partial Differentiation & Multivariable Calculus",
      topics: [
        {
          title: "1.1 Functions of Several Variables",
          content: `
            <p>In multivariable calculus, z = f(x, y) takes two independent inputs and produces one output.</p>
            <div class="formula-box">
              <strong>Visual analogy:</strong> Terrain map — (x, y) is position, z is height.<br>
              Example: f(x, y) = x² + y² forms a paraboloid. At (0,0) → 0; at (1,2) → 5.
            </div>`
        },
        {
          title: "1.2 Limits & Continuity",
          content: `
            <p>A limit exists only if the function approaches the same value along every path.</p>
            <div class="formula-box">
              <strong>Path test:</strong> Substitute y = mx. If result depends on m, limit does not exist.<br>
              Example: lim (x,y)→(0,0) xy/(x²+y²) does not exist.
            </div>
            <div class="pyq-card">
              <span class="year-tag">Mid-Sem 2024/25 & Re-Exam 2026</span>
              Piecewise continuity: LHL = RHL = f(c).<br>
              f(x) = A+x (x<2), 1+x² (x≥2) → A = 3.
            </div>`
        },
        {
          title: "1.3 Partial Derivatives",
          content: `
            <p>Treat the other variable as constant.</p>
            <div class="formula-box">Clairaut’s Theorem: f<sub>xy</sub> = f<sub>yx</sub> if continuous.</div>
            <div class="pyq-card">
              <span class="year-tag">SEE 2024 & 2025</span>
              f(x,y) = x² + y² + x²y² → fₓ = 2x + 2xy², fᵧ = 2y + 2x²y
            </div>`
        },
        {
          title: "1.4 Chain Rule & Euler’s Theorem",
          content: `
            <div class="formula-box">
              Chain rule: dz/dt = fₓ dx/dt + fᵧ dy/dt<br>
              Euler: If homogeneous of degree n, then x uₓ + y uᵧ = n u
            </div>`
        },
        {
          title: "1.5 Gradient & Extrema",
          content: `
            <div class="formula-box">
              ∇Φ = Φₓ i + Φᵧ j + Φ_z k<br>
              Extrema: D = fₓₓ fᵧᵧ − (fₓᵧ)²<br>
              D>0 & fₓₓ>0 → min; D>0 & fₓₓ<0 → max; D<0 → saddle
            </div>`
        }
      ]
    },
    {
      id: "u2",
      title: "Unit II — Infinite Series",
      topics: [
        {
          title: "Convergence Tests",
          content: `
            <div class="formula-box">
              • n-th term: lim aₙ ≠ 0 → diverges<br>
              • p-series: converges when p > 1<br>
              • Geometric: converges when |r| < 1<br>
              • Ratio test: L = lim |aₙ₊₁/aₙ|; converges if L < 1
            </div>
            <p>Maclaurin for eˣ = 1 + x + x²/2! + x³/3! + …</p>`
        }
      ]
    },
    {
      id: "u3",
      title: "Unit III — Improper Integrals & Special Functions",
      topics: [
        {
          title: "Gamma & Beta Functions",
          content: `
            <div class="formula-box">
              Γ(n+1) = nΓ(n), &nbsp; Γ(1/2) = √π<br>
              B(m,n) = Γ(m)Γ(n)/Γ(m+n) &nbsp; and &nbsp; B(m,n) = B(n,m)
            </div>
            <div class="pyq-card">
              <span class="year-tag">Re-Exam 2026</span>
              Γ(5/2) = 3√π / 4
            </div>`
        }
      ]
    },
    {
      id: "u4",
      title: "Unit IV — Multiple Integrals & Vector Calculus",
      topics: [
        {
          title: "Double & Triple Integrals",
          content: `<p>Evaluate from innermost integral outward. Polar: x = r cos θ, y = r sin θ.</p>`
        }
      ]
    },
    {
      id: "u5",
      title: "Unit V — Differential Equations",
      topics: [
        {
          title: "ODEs & PDEs",
          content: `<p>First & second order linear DEs, Cauchy-Euler, Legendre polynomials, first-order PDEs.</p>`
        }
      ]
    }
  ],

  formulas: [
    { name: "Power Limit", formula: "lim (x→a) (xⁿ−aⁿ)/(x−a) = n aⁿ⁻¹" },
    { name: "Partial Derivatives", formula: "fₓ = ∂f/∂x, fᵧ = ∂f/∂y" },
    { name: "Chain Rule", formula: "dz/dt = fₓ dx/dt + fᵧ dy/dt" },
    { name: "Euler’s Theorem", formula: "x uₓ + y uᵧ = n u" },
    { name: "Gradient", formula: "∇Φ = Φₓ i + Φᵧ j + Φ_z k" },
    { name: "Gamma", formula: "Γ(n+1) = nΓ(n), Γ(1/2)=√π" },
    { name: "Beta", formula: "B(m,n) = Γ(m)Γ(n)/Γ(m+n)" }
  ],

  pyqs: [
    { year: "Mid-Sem 2024 & 2025", q: "Evaluate lim (x→5) (x−5)/(x²−25)", a: "1/10" },
    { year: "Mid-Sem 2024/25 & Re-Exam 2026", q: "Find A for continuity at x=2 (A+x and 1+x²)", a: "A = 3" },
    { year: "SEE 2024 & 2025", q: "Partials of f = x² + y² + x²y²", a: "fₓ=2x+2xy², fᵧ=2y+2x²y" },
    { year: "SEE 2024/25 & Re-Exam 2026", q: "∇Φ of 3x²y − y³z² at (1,−2,−1)", a: "−12i −9j −16k" },
    { year: "Re-Exam 2026", q: "Γ(5/2)", a: "3√π/4" }
  ],

  quiz: [
    {
      q: "The limit lim (x,y)→(0,0) of xy/(x²+y²)",
      options: ["Equals 0", "Equals 1", "Does not exist", "Equals 1/2"],
      answer: 2,
      explain: "Path test gives different values along different lines."
    },
    {
      q: "For continuity of f(x)=A+x (x<2) and 1+x² (x≥2) at x=2, A equals",
      options: ["1", "2", "3", "5"],
      answer: 2,
      explain: "LHL = A+2, RHL = 5 → A=3."
    },
    {
      q: "Clairaut’s theorem states that",
      options: ["fₓ = fᵧ", "fₓᵧ = fᵧₓ (if continuous)", "fₓₓ = fᵧᵧ", "None"],
      answer: 1,
      explain: "Mixed partials are equal when continuous."
    },
    {
      q: "Euler’s theorem applies to functions that are",
      options: ["Continuous", "Homogeneous", "Differentiable", "Linear"],
      answer: 1,
      explain: "Homogeneous functions of degree n satisfy x uₓ + y uᵧ = n u."
    },
    {
      q: "Γ(1/2) equals",
      options: ["1", "π", "√π", "2"],
      answer: 2,
      explain: "Standard result: Γ(1/2) = √π."
    },
    {
      q: "p-series Σ 1/nᵖ converges when",
      options: ["p < 1", "p = 1", "p > 1", "p ≥ 0"],
      answer: 2,
      explain: "Converges for p > 1; diverges for p ≤ 1."
    }
  ]
};
