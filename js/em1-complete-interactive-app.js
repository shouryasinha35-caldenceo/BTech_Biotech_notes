/**
 * Engineering Mathematics I (EM201T / NEM201T) - Master Interactive Application & Data File
 * Complete Syllabus Notes, Formula Deck, Topic-Wise PYQs & Extra Practice, and Interactive UI Engine
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.EM1App = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {

  // =========================================================================
  // 1. COURSE METADATA & FULL SYLLABUS NOTES
  // =========================================================================
  const courseNotes = {
    subject: "Engineering Mathematics I",
    code: "EM201T / NEM201T",
    institute: "Institute of Advanced Research",
    units: [
      {
        id: 1,
        title: "Unit I: Partial Differentiation, Multivariable Calculus & Extrema",
        topics: [
          {
            name: "Multivariable Limits & Continuity",
            summary: "Calculus in 2D/3D. Limits depend on directional paths. Use 2D path test y = mx to prove non-existence if limit depends on m.",
            examTip: "Boundary parameter solver: set LHL = RHL at boundary points (e.g., A+2 = 5 => A = 3)."
          },
          {
            name: "Partial Derivatives & Clairaut's Theorem",
            summary: "Differentiating f(x,y) keeping other variable constant. Clairaut's Theorem states f_xy = f_yx for continuous second partials.",
            examTip: "Always calculate f_x and f_y first when dealing with higher partials."
          },
          {
            name: "Composite Functions & Multivariable Chain Rule",
            summary: "dz/dt = (dz/dx)(dx/dt) + (dz/dy)(dy/dt). Implicit differentiation dy/dx = -Fx/Fy.",
            examTip: "Used in total differential coefficient problems like x^2 + xy + y^2 = 1."
          },
          {
            name: "Homogeneous Functions & Euler's Theorem",
            summary: "f(tx,ty) = t^n f(x,y). First Euler identity: x*u_x + y*u_y = n*u. Second Euler identity: x^2*u_xx + 2xy*u_xy + y^2*u_yy = n(n-1)u.",
            examTip: "If u = tan^(-1)(f(x,y)), use x*u_x + y*u_y = n * g(u) / g'(u)."
          },
          {
            name: "Gradient Vectors & Directional Derivatives",
            summary: "Gradient grad(Phi) = i*Phi_x + j*Phi_y + k*Phi_z. Directional derivative = grad(f) dot (u_hat).",
            examTip: "Maximum rate of change equals magnitude |grad(f)| in the direction of grad(f)."
          },
          {
            name: "Tangents, Normals & Relative Extrema",
            summary: "Critical points: f_x = 0, f_y = 0. Discriminant Delta = AC - B^2 where A=f_xx, B=f_xy, C=f_yy. If Delta > 0 and A > 0 => Min; Delta > 0 and A < 0 => Max; Delta < 0 => Saddle point.",
            examTip: "Relative extrema question on f(x,y) = 6x^2 + 10y^2 + 2x - 3y + 15 has critical point (-1/6, 3/20)."
          }
        ]
      },
      {
        id: 2,
        title: "Unit II: Infinite Series & Expansions",
        topics: [
          {
            name: "Convergence Tests",
            summary: "n-th term test, Geometric series (r < 1), p-series (p > 1), Ratio test (L < 1 => Conv), Root test, Leibniz test for alternating series.",
            examTip: "D'Alembert Ratio Test is primary for factorial/exponential series."
          },
          {
            name: "Power & Maclaurin/Taylor Series",
            summary: "f(x) = f(0) + f'(0)x + f''(0)x^2/2! + f'''(0)x^3/3! + ... Standard expansions: e^x, sin x, cos x, ln(1+x), 1/(1-x).",
            examTip: "Radius of convergence R = lim |c_n / c_{n+1}|."
          }
        ]
      },
      {
        id: 3,
        title: "Unit III: Improper Integrals, Special Functions & Revolutions",
        topics: [
          {
            name: "Improper Integrals",
            summary: "Type 1: Infinite limits [a, infinity). Type 2: Unbounded integrand at boundary/interior.",
            examTip: "Evaluate using limits lim_{b -> infty} int_a^b f(x)dx."
          },
          {
            name: "Beta & Gamma Functions",
            summary: "Gamma(n+1) = n*Gamma(n), Gamma(1/2) = sqrt(pi). Gamma(n) = Gamma(n+1)/n for negative non-integers. Beta(m,n) = Gamma(m)Gamma(n)/Gamma(m+n). Beta symmetry: Beta(m,n) = Beta(n,m).",
            examTip: "Gamma(-2.2) = Gamma(-1.2)/(-2.2) = Gamma(-0.2)/((-2.2)*(-1.2)) = Gamma(0.8)/((-2.2)*(-1.2)*(-0.2))."
          },
          {
            name: "Volume & Surface Area of Solids of Revolution",
            summary: "Volume about y-axis: V = 2*pi * int x * y dx (Cylindrical shell method). Volume about x-axis: V = pi * int y^2 dx (Disk method).",
            examTip: "y = x^2 over [1,3] revolved about y-axis yields V = 2*pi * int_1^3 x^3 dx = 40*pi."
          }
        ]
      },
      {
        id: 4,
        title: "Unit IV: Multiple Integration & Vector Calculus",
        topics: [
          {
            name: "Double & Triple Integrals",
            summary: "Iterated integrals over 2D/3D domains. Polar coordinate substitution: x = r*cos(theta), y = r*sin(theta), dx*dy = r*dr*d(theta).",
            examTip: "Triple integral int_0^2 int_1^3 int_1^2 x*y^2*z dz dy dx = 26."
          },
          {
            name: "Enclosed Areas via Double Integration",
            summary: "Area = int int dx dy. Ellipse (x^2/a^2 + y^2/b^2 = 1) Area = pi*a*b. Parabola-Line Area = 9/2. Polar circles r = 2sin(theta), r = 4sin(theta) Area = 3*pi.",
            examTip: "10-Marker Section C favorite in SEE exams!"
          },
          {
            name: "Vector Calculus: Divergence, Curl & Theorems",
            summary: "Divergence div(F) = grad dot F (Solenoidal if div = 0). Curl curl(F) = grad x F (Irrotational if curl = 0). Green's, Stokes', and Gauss's Divergence Theorems.",
            examTip: "Line integral of grad(f) is path independent."
          }
        ]
      },
      {
        id: 5,
        title: "Unit V: Ordinary & Partial Differential Equations",
        topics: [
          {
            name: "1st & 2nd Order Linear ODEs",
            summary: "1st order: dy/dx + P y = Q => IF = e^(int P dx), y*(IF) = int Q*(IF) dx + C. 2nd order: y = y_CF + y_PI.",
            examTip: "Auxiliary equation roots determine CF form."
          },
          {
            name: "Cauchy-Euler & Legendre Polynomials",
            summary: "x^2 y'' + a x y' + b y = 0 => substitute x = e^z => z = ln x. Legendre polynomials P_n(x), Rodrigues' formula.",
            examTip: "Orthogonality: int_{-1}^1 P_m(x) P_n(x) dx = 0 if m != n, and 2/(2n+1) if m = n."
          },
          {
            name: "Partial Differential Equations (PDEs)",
            summary: "Lagrange 1st order linear PDE: P p + Q q = R => dx/P = dy/Q = dz/R. Charpit method for non-linear 1st order PDEs.",
            examTip: "Form general solution Phi(u,v) = 0 from independent constants u=c1, v=c2."
          }
        ]
      }
    ]
  };

  // =========================================================================
  // 2. FORMULA DECK
  // =========================================================================
  const formulaDeck = [
    {
      id: "f1",
      unitId: 1,
      title: "Boundary Continuity Condition",
      latex: "\lim_{x \to c^-} f(x) = \lim_{x \to c^+} f(x) = f(c)",
      explanation: "Equate left-hand and right-hand limits at boundary point x = c to solve for unknown parameter A or B.",
      calcTip: "Use CALC mode on CASIO fx-991ES PLUS with x = c - 0.0001 and x = c + 0.0001."
    },
    {
      id: "f2",
      unitId: 1,
      title: "First-Order Euler's Theorem",
      latex: "x \frac{\partial u}{\partial x} + y \frac{\partial u}{\partial y} = n u",
      explanation: "Applies to homogeneous functions u(x,y) of degree n where f(tx,ty) = t^n f(x,y).",
      calcTip: "Check degree n by substituting t*x and t*y into all terms."
    },
    {
      id: "f3",
      unitId: 1,
      title: "Directional Derivative",
      latex: "D_{\hat{\mathbf{u}}} f = \nabla f \cdot \hat{\mathbf{u}} = \left( \frac{\partial f}{\partial x}\mathbf{i} + \frac{\partial f}{\partial y}\mathbf{j} + \frac{\partial f}{\partial z}\mathbf{k} \right) \cdot \frac{\mathbf{a}}{|\mathbf{a}|}",
      explanation: "Rate of change of f at a point in direction of vector a. Max rate of change is |grad(f)|.",
      calcTip: "Use VECTOR mode on CASIO fx-991ES PLUS: VctA (grad f) dot VctB (unit vector)."
    },
    {
      id: "f4",
      unitId: 1,
      title: "Relative Extrema Discriminant",
      latex: "\Delta = A C - B^2 \quad \text{where } A = f_{xx}, B = f_{xy}, C = f_{yy}",
      explanation: "Delta > 0 and A > 0 => Rel Min; Delta > 0 and A < 0 => Rel Max; Delta < 0 => Saddle Point.",
      calcTip: "First solve f_x = 0 and f_y = 0 simultaneously for critical points."
    },
    {
      id: "f5",
      unitId: 2,
      title: "Maclaurin Series Expansion",
      latex: "f(x) = f(0) + f'(0)x + \frac{f''(0)}{2!} x^2 + \frac{f'''(0)}{3!} x^3 + \dots",
      explanation: "Standard expansions: e^x = 1+x+x^2/2!+..., sin(x) = x - x^3/3! + x^5/5! - ...",
      calcTip: "Substitute x=0 into successive derivatives."
    },
    {
      id: "f6",
      unitId: 3,
      title: "Beta-Gamma Relation",
      latex: "B(m,n) = \frac{\Gamma(m)\Gamma(n)}{\Gamma(m+n)}, \quad \Gamma\left(\frac{1}{2}\right) = \sqrt{\pi}, \quad \Gamma(n+1) = n\Gamma(n)",
      explanation: "Converts Beta integrals into Gamma functions. Beta(m,n) is symmetric: Beta(m,n) = Beta(n,m).",
      calcTip: "For negative Gamma(n), use Gamma(n) = Gamma(n+1)/n repeatedly until argument is positive."
    },
    {
      id: "f7",
      unitId: 3,
      title: "Cylindrical Shell Volume of Revolution",
      latex: "V = 2\pi \int_a^b x \cdot f(x) \, dx",
      explanation: "Volume generated when region y = f(x) over [a,b] is revolved around the y-axis.",
      calcTip: "For y = x^2 on [1,3], V = 2*pi * int_1^3 x^3 dx = 2*pi * [x^4/4]_1^3 = 40*pi."
    },
    {
      id: "f8",
      unitId: 4,
      title: "Polar Double Integral Substitution",
      latex: "\iint_R f(x,y) \, dx dx = \iint_{R'} f(r\cos\theta, r\sin\theta) \cdot r \, dr \, d\theta",
      explanation: "Jacobian transformation element dx*dy = r*dr*d(theta).",
      calcTip: "Area of polar circles r = 2sin(theta) to r = 4sin(theta) is int_{0}^{pi} int_{2sin\theta}^{4sin\theta} r dr d\theta = 3*pi."
    },
    {
      id: "f9",
      unitId: 4,
      title: "Divergence and Curl",
      latex: "\text{div } \mathbf{F} = \nabla \cdot \mathbf{F}, \quad \text{curl } \mathbf{F} = \nabla \times \mathbf{F}",
      explanation: "Vector field F is Solenoidal if div(F) = 0, Irrotational if curl(F) = 0.",
      calcTip: "Curl = 0 implies F is conservative (F = grad Phi)."
    },
    {
      id: "f10",
      unitId: 5,
      title: "1st Order Linear Differential Equation",
      latex: "\frac{dy}{dx} + P(x) y = Q(x) \implies \text{IF} = e^{\int P(x) dx}, \quad y \cdot (\text{IF}) = \int Q(x) \cdot (\text{IF}) \, dx + C",
      explanation: "Standard solution method for 1st order linear ODEs.",
      calcTip: "Be careful with sign of P(x) when computing IF."
    }
  ];

  // =========================================================================
  // 3. COMPLETE QUESTION BANK (PYQs + EXTRA PRACTICE)
  // =========================================================================
  const questionBank = [
    // --- UNIT I ---
    {
      id: "q1_1",
      unitId: 1,
      type: "mcq",
      category: "PYQ",
      examTag: "Mid-Sem 2024 / 2025 / 2026",
      topic: "Limits & Indeterminate Forms",
      question: "Evaluate the limit: \(\lim_{x \to 5} \frac{x - 5}{x^2 - 25}\)",
      options: ["0.1 (1/10)", "0.2 (1/5)", "0", "Undefined"],
      correctAnswerIndex: 0,
      solution: "Factorize denominator: (x - 5)(x + 5). Cancel (x - 5) => lim_{x -> 5} [1 / (x + 5)] = 1/10 = 0.1.",
      calcTip: "CASIO fx-991ES PLUS: Type (X-5)/(X^2-25), press CALC, enter X = 5.0001 -> 0.09999 ≈ 0.1."
    },
    {
      id: "q1_2",
      unitId: 1,
      type: "mcq",
      category: "PYQ",
      examTag: "Mid-Sem 2026",
      topic: "Asymptotic Infinity Limits",
      question: "Evaluate the limit: \(\lim_{x \to \infty} \frac{x - 5x^2}{x^2 - 22x}\)",
      options: ["-5", "5", "-1/22", "0"],
      correctAnswerIndex: 0,
      solution: "Divide numerator and denominator by highest power x^2: lim_{x -> infty} (1/x - 5) / (1 - 22/x) = -5 / 1 = -5.",
      calcTip: "CASIO fx-991ES PLUS: Press CALC, enter X = 99999 -> -4.999... ≈ -5."
    },
    {
      id: "q1_3",
      unitId: 1,
      type: "short",
      category: "PYQ",
      examTag: "Mid-Sem 2024 / 2025 / 2026",
      topic: "Boundary Continuity Parameter",
      question: "Find constant A so that \(f(x) = \begin{cases} A + x & x < 2 \\ 1 + x^2 & x \ge 2 \end{cases}\) is continuous at \(x = 2\).",
      solution: "LHL = lim_{x -> 2^-} (A + x) = A + 2. RHL = f(2) = 1 + (2)^2 = 5. Equating LHL = RHL => A + 2 = 5 => A = 3.",
      answer: "A = 3"
    },
    {
      id: "q1_4",
      unitId: 1,
      type: "short",
      category: "PYQ",
      examTag: "Mid-Sem 2024 / 2025 / 2026, SEE 2024 / 2025",
      topic: "Partials Matrix",
      question: "Find first-order partial derivatives \(\frac{\partial f}{\partial x}\) and \(\frac{\partial f}{\partial y}\) for \(f(x,y) = x^2 + y^2 + x^2y^2\).",
      solution: "f_x = d/dx(x^2 + y^2 + x^2y^2) = 2x + 2xy^2. f_y = d/dy(x^2 + y^2 + x^2y^2) = 2y + 2x^2y.",
      answer: "f_x = 2x + 2xy^2, f_y = 2y + 2x^2y"
    },
    {
      id: "q1_5",
      unitId: 1,
      type: "descriptive",
      category: "PYQ",
      examTag: "SEE 2024 / 2025, Re-Exam 2026",
      topic: "Gradient Vectors",
      question: "Calculate gradient \(\nabla \Phi\) for \(\Phi(x,y,z) = 3x^2y - y^3z^2\) at point \((1, -2, -1)\).",
      solution: "grad(Phi) = (6xy) i + (3x^2 - 3y^2z^2) j - (2y^3z) k. Substitute (1, -2, -1): grad(Phi) = 6(1)(-2) i + (3(1) - 3(4)(1)) j - (2(-8)(-1)) k = -12 i - 9 j - 16 k.",
      answer: "-12 i - 9 j - 16 k"
    },
    {
      id: "q1_6",
      unitId: 1,
      type: "descriptive",
      category: "PYQ",
      examTag: "SEE 2024 / 2025, Re-Exam 2026",
      topic: "Relative Extrema Classification",
      question: "Find and classify critical points of \(f(x,y) = 6x^2 + 10y^2 + 2x - 3y + 15\).",
      solution: "f_x = 12x + 2 = 0 => x = -1/6. f_y = 20y - 3 = 0 => y = 3/20. Critical point: (-1/6, 3/20). Second partials: A = f_xx = 12, B = f_xy = 0, C = f_yy = 20. Delta = AC - B^2 = 12*20 - 0 = 240 > 0. Since Delta > 0 and A = 12 > 0, the point is a Relative Minimum.",
      answer: "Relative Minimum at (-1/6, 3/20)"
    },
    {
      id: "q1_ex1",
      unitId: 1,
      type: "extra",
      category: "Extra Practice",
      examTag: "Extra Practice",
      topic: "Limits & Indeterminate Forms",
      question: "Evaluate \(\lim_{x \to 0} \frac{1 - \cos 4x}{x^2}\).",
      solution: "Use identity 1 - cos(4x) = 2 sin^2(2x). lim_{x -> 0} [2 sin^2(2x) / x^2] = 2 * lim_{x -> 0} [sin(2x)/x]^2 = 2 * (2)^2 = 8.",
      answer: "8"
    },
    {
      id: "q1_ex2",
      unitId: 1,
      type: "extra",
      category: "Extra Practice",
      examTag: "Extra Practice",
      topic: "Directional Derivative",
      question: "Find the directional derivative of \(f(x,y,z) = x^2 y z + 4 x z^2\) at \((1, -1, 1)\) in the direction of \(\mathbf{a} = 2\mathbf{i} - \mathbf{j} - 2\mathbf{k}\).",
      solution: "grad(f) = (2xyz + 4z^2) i + (x^2z) j + (x^2y + 8xz) k. At (1,-1,1): grad(f) = 2 i + 1 j + 7 k. Unit vector u_hat = (2 i - 1 j - 2 k) / sqrt(4+1+4) = (2 i - 1 j - 2 k) / 3. Directional derivative = (2*2 + 1*(-1) + 7*(-2)) / 3 = (4 - 1 - 14) / 3 = -11/3.",
      answer: "-11/3"
    },

    // --- UNIT II ---
    {
      id: "q2_1",
      unitId: 2,
      type: "short",
      category: "PYQ",
      examTag: "SEE 2024 / 2025",
      topic: "Series Summations",
      question: "Evaluate the finite series summation: \(\sum_{n=1}^4 (2n + 3)\).",
      solution: "For n=1: 5. For n=2: 7. For n=3: 9. For n=4: 11. Total sum = 5 + 7 + 9 + 11 = 32.",
      answer: "32"
    },
    {
      id: "q2_2",
      unitId: 2,
      type: "descriptive",
      category: "PYQ",
      examTag: "Mid-Sem 2026",
      topic: "Maclaurin Series Expansion",
      question: "Derive Maclaurin expansion for \(f(x) = e^x\) up to \(x^4\).",
      solution: "f(0)=1, f'(0)=1, f''(0)=1, f'''(0)=1, f''''(0)=1. Maclaurin formula: e^x = 1 + x + x^2/2! + x^3/3! + x^4/4! + ... = 1 + x + x^2/2 + x^3/6 + x^4/24 + ...",
      answer: "1 + x + x^2/2 + x^3/6 + x^4/24 + ..."
    },
    {
      id: "q2_ex1",
      unitId: 2,
      type: "extra",
      category: "Extra Practice",
      examTag: "Extra Practice",
      topic: "Convergence Tests",
      question: "Test for convergence: \(\sum_{n=1}^\infty \frac{n}{2^n}\).",
      solution: "Use D'Alembert Ratio Test: a_n = n/2^n, a_{n+1} = (n+1)/2^{n+1}. lim_{n -> infty} |a_{n+1}/a_n| = lim [(n+1)/n * 1/2] = 1/2 < 1. Since L = 1/2 < 1, series CONVERGES.",
      answer: "Convergent (Ratio Test L = 1/2)"
    },

    // --- UNIT III ---
    {
      id: "q3_1",
      unitId: 3,
      type: "descriptive",
      category: "PYQ",
      examTag: "Re-Exam 2026",
      topic: "Gamma Function Evaluation",
      question: "Given \(\Gamma(1.8) = 0.9314\), evaluate \(\Gamma(-2.2)\).",
      solution: "Gamma(n) = Gamma(n+1)/n. Gamma(-0.2) = Gamma(0.8)/(-0.2). Gamma(-1.2) = Gamma(-0.2)/(-1.2). Gamma(-2.2) = Gamma(-1.2)/(-2.2) = Gamma(0.8) / [(-2.2)*(-1.2)*(-0.2)] = 0.9314 / (-0.528) = -1.764.",
      answer: "-1.764 (approx -14.418 depending on Gamma(0.8) precision)"
    },
    {
      id: "q3_2",
      unitId: 3,
      type: "heavy_hitter",
      category: "PYQ",
      examTag: "SEE 2024 / 2025, Re-Exam 2026",
      topic: "Volume of Revolution",
      question: "Find the volume generated by revolving region bounded by \(y = x^2\) over \([1,3]\) about the \(y\)-axis.",
      solution: "Cylindrical shell formula: V = 2*pi * int_1^3 x * (x^2) dx = 2*pi * int_1^3 x^3 dx = 2*pi * [x^4/4]_1^3 = 2*pi * (81/4 - 1/4) = 2*pi * (80/4) = 40*pi.",
      answer: "40*pi"
    },
    {
      id: "q3_ex1",
      unitId: 3,
      type: "extra",
      category: "Extra Practice",
      examTag: "Extra Practice",
      topic: "Beta Function Integrals",
      question: "Evaluate using Beta function: \(\int_0^{\pi/2} \sin^5\theta \cos^3\theta \, d\theta\).",
      solution: "Formula: int_0^{pi/2} sin^(2m-1)x cos^(2n-1)x dx = (1/2)*Beta(m,n). 2m-1 = 5 => m = 3. 2n-1 = 3 => n = 2. Integral = (1/2)*Beta(3,2) = (1/2)*[Gamma(3)Gamma(2)/Gamma(5)] = (1/2)*[2!*1!/4!] = 2 / (2 * 24) = 1/24.",
      answer: "1/24"
    },

    // --- UNIT IV ---
    {
      id: "q4_1",
      unitId: 4,
      type: "heavy_hitter",
      category: "PYQ",
      examTag: "SEE 2024 / 2025",
      topic: "Triple Integration",
      question: "Evaluate 3D triple integral: \(\int_0^2 \int_1^3 \int_1^2 x y^2 z \, dz \, dy \, dx\).",
      solution: "Separable integral: [int_0^2 x dx] * [int_1^3 y^2 dy] * [int_1^2 z dz] = [x^2/2]_0^2 * [y^3/3]_1^3 * [z^2/2]_1^2 = [2] * [(27-1)/3] * [(4-1)/2] = 2 * (26/3) * (3/2) = 26.",
      answer: "26"
    },
    {
      id: "q4_2",
      unitId: 4,
      type: "heavy_hitter",
      category: "PYQ",
      examTag: "SEE 2024 / 2025",
      topic: "Area of Ellipse by Double Integration",
      question: "Find total area of ellipse \(\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1\) using double integration.",
      solution: "Quadrant 1 Area = int_0^a int_0^{b*sqrt(1 - x^2/a^2)} dy dx = b int_0^a sqrt(1 - x^2/a^2) dx = (pi*a*b)/4. Total Area = 4 * (pi*a*b)/4 = pi*a*b.",
      answer: "pi * a * b"
    },
    {
      id: "q4_3",
      unitId: 4,
      type: "heavy_hitter",
      category: "PYQ",
      examTag: "SEE 2024 / 2025, Re-Exam 2026",
      topic: "Polar Double Integral Area",
      question: "Find area bounded between polar circles \(r = 2\sin\theta\) and \(r = 4\sin\theta\).",
      solution: "Area = int_0^pi int_{2sin\theta}^{4sin\theta} r dr d\theta = int_0^pi [(16sin^2\theta - 4sin^2\theta)/2] d\theta = 6 int_0^pi sin^2\theta d\theta = 6 * (pi/2) = 3*pi.",
      answer: "3 * pi"
    },
    {
      id: "q4_ex1",
      unitId: 4,
      type: "extra",
      category: "Extra Practice",
      examTag: "Extra Practice",
      topic: "Changing Order of Integration",
      question: "Change order of integration and evaluate: \(\int_0^1 \int_y^1 e^{x^2} \, dx \, dy\).",
      solution: "Region: 0 <= y <= x <= 1. Changing order: int_0^1 int_0^x e^{x^2} dy dx = int_0^1 x e^{x^2} dx = [1/2 * e^{x^2}]_0^1 = (e - 1)/2.",
      answer: "(e - 1) / 2"
    },

    // --- UNIT V ---
    {
      id: "q5_1",
      unitId: 5,
      type: "descriptive",
      category: "PYQ",
      examTag: "Mid-Sem 2025",
      topic: "1st Order Linear ODE",
      question: "Solve linear ODE: \(\frac{dy}{dx} + 2x y = 2x\).",
      solution: "P(x) = 2x, Q(x) = 2x. IF = e^(int 2x dx) = e^(x^2). Solution: y * e^(x^2) = int 2x e^(x^2) dx = e^(x^2) + C => y = 1 + C * e^(-x^2).",
      answer: "y = 1 + C * e^(-x^2)"
    },
    {
      id: "q5_ex1",
      unitId: 5,
      type: "extra",
      category: "Extra Practice",
      examTag: "Extra Practice",
      topic: "Cauchy-Euler ODEs",
      question: "Solve Cauchy-Euler ODE: \(x^2 \frac{d^2y}{dx^2} - 3 x \frac{dy}{dx} + 4 y = 0\).",
      solution: "Substitute x = e^z. Equation becomes D(D-1)y - 3Dy + 4y = 0 => (D^2 - 4D + 4)y = 0. Auxiliary equation: (m - 2)^2 = 0 => m = 2, 2 (repeated). y = (C1 + C2 z) e^(2z) = (C1 + C2 ln x) x^2.",
      answer: "y = (C1 + C2 ln x) x^2"
    }
  ];

  // =========================================================================
  // 4. INTERACTIVE ENGINE & UI CONTROLLER LOGIC
  // =========================================================================
  class EM1InteractiveController {
    constructor() {
      this.state = {
        activeUnit: 'all',
        activeCategory: 'all',
        userScore: 0,
        answeredCount: 0,
        userAnswers: {}
      };
    }

    getFilteredQuestions(unitId = 'all', category = 'all') {
      return questionBank.filter(q => {
        const matchUnit = unitId === 'all' || q.unitId === parseInt(unitId);
        const matchCat = category === 'all' || q.category === category || (category === 'PYQ' && q.category === 'PYQ');
        return matchUnit && matchCat;
      });
    }

    checkMcqAnswer(questionId, selectedOptionIndex) {
      const q = questionBank.find(item => item.id === questionId);
      if (!q || q.type !== 'mcq') return null;

      const isCorrect = selectedOptionIndex === q.correctAnswerIndex;
      if (!this.state.userAnswers[questionId]) {
        this.state.answeredCount++;
        if (isCorrect) this.state.userScore++;
        this.state.userAnswers[questionId] = { selected: selectedOptionIndex, correct: isCorrect };
      }
      return { isCorrect, correctAnswer: q.options[q.correctAnswerIndex], solution: q.solution, calcTip: q.calcTip };
    }

    // Dynamic HTML Injector for local SPA testing
    initDOMController(containerId) {
      const container = document.getElementById(containerId);
      if (!container) return;

      container.innerHTML = `
        <div style="font-family: Arial, sans-serif; max-width: 900px; margin: 0 auto; padding: 20px; color: #1e293b;">
          <header style="background: linear-gradient(135deg, #1e3a8a, #3b82f6); color: white; padding: 24px; borderRadius: 12px; margin-bottom: 24px;">
            <h1 style="margin: 0; font-size: 26px;">Engineering Mathematics I - Interactive Portal</h1>
            <p style="margin: 8px 0 0 0; opacity: 0.9;">EM201T / NEM201T • Master Question Bank & Formula Deck</p>
          </header>

          <div style="display: flex; gap: 12px; margin-bottom: 20px; flex-wrap: wrap;">
            <button id="btn-tab-notes" style="padding: 10px 16px; background: #2563eb; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">📚 Syllabus Notes</button>
            <button id="btn-tab-formulas" style="padding: 10px 16px; background: #e2e8f0; color: #1e293b; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">⚡ Formulas & Shortcuts</button>
            <button id="btn-tab-questions" style="padding: 10px 16px; background: #e2e8f0; color: #1e293b; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">📝 Topic-Wise PYQs & Practice</button>
          </div>

          <div id="portal-content-area" style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 20px; border-radius: 12px;">
            <p style="color: #64748b;">Loading content area...</p>
          </div>
        </div>
      `;

      this.renderNotesTab();
      this.attachTabEvents();
    }

    attachTabEvents() {
      const btnNotes = document.getElementById('btn-tab-notes');
      const btnFormulas = document.getElementById('btn-tab-formulas');
      const btnQuestions = document.getElementById('btn-tab-questions');

      if (btnNotes) btnNotes.onclick = () => { this.setActiveTab(btnNotes); this.renderNotesTab(); };
      if (btnFormulas) btnFormulas.onclick = () => { this.setActiveTab(btnFormulas); this.renderFormulasTab(); };
      if (btnQuestions) btnQuestions.onclick = () => { this.setActiveTab(btnQuestions); this.renderQuestionsTab(); };
    }

    setActiveTab(activeBtn) {
      ['btn-tab-notes', 'btn-tab-formulas', 'btn-tab-questions'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
          btn.style.background = '#e2e8f0';
          btn.style.color = '#1e293b';
        }
      });
      activeBtn.style.background = '#2563eb';
      activeBtn.style.color = 'white';
    }

    renderNotesTab() {
      const area = document.getElementById('portal-content-area');
      if (!area) return;

      let html = '<h2 style="color: #1e3a8a; margin-top:0;">Complete Unit Notes</h2>';
      courseNotes.units.forEach(u => {
        html += `<div style="margin-bottom: 20px; background: white; padding: 16px; border-radius: 8px; border-left: 5px solid #2563eb;">
          <h3 style="margin:0 0 10px 0; color: #1e40af;">${u.title}</h3>`;
        u.topics.forEach(t => {
          html += `<div style="margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #cbd5e1;">
            <strong>${t.name}:</strong> <span style="color: #334155;">${t.summary}</span>
            <div style="background: #f1f5f9; color: #0f172a; padding: 6px 10px; border-radius: 4px; font-size: 13px; margin-top: 4px;"><strong>Exam Tip:</strong> ${t.examTip}</div>
          </div>`;
        });
        html += '</div>';
      });
      area.innerHTML = html;
    }

    renderFormulasTab() {
      const area = document.getElementById('portal-content-area');
      if (!area) return;

      let html = '<h2 style="color: #1e3a8a; margin-top:0;">Master Formula Deck & CASIO Shortcuts</h2>';
      formulaDeck.forEach(f => {
        html += `<div style="margin-bottom: 16px; background: white; padding: 16px; border-radius: 8px; border-left: 5px solid #7c3aed;">
          <h3 style="margin:0 0 8px 0; color: #5b21b6;">${f.title} (Unit ${f.unitId})</h3>
          <div style="background: #faf5ff; color: #581c87; padding: 10px; border-radius: 6px; font-family: monospace; font-size: 15px; margin-bottom: 8px;">${f.latex}</div>
          <p style="margin: 4px 0; font-size: 14px; color: #334155;">${f.explanation}</p>
          <div style="background: #f0fdf4; color: #166534; padding: 6px 10px; border-radius: 4px; font-size: 13px; margin-top: 6px;"><strong>📟 CASIO fx-991ES PLUS Shortcut:</strong> ${f.calcTip}</div>
        </div>`;
      });
      area.innerHTML = html;
    }

    renderQuestionsTab() {
      const area = document.getElementById('portal-content-area');
      if (!area) return;

      let html = `<h2 style="color: #1e3a8a; margin-top:0;">Topic-Wise PYQs & Practice Bank</h2>
        <p style="color: #475569; font-size: 14px;">Master solutions for Mid-Sems, SEEs, Re-Exams, Assignments and Extra Practice.</p>`;

      questionBank.forEach((q, idx) => {
        const isPyq = q.category === 'PYQ';
        const borderColor = isPyq ? '#d97706' : '#0284c7';
        const bgColor = isPyq ? '#fffbebf' : '#f0f9ff';
        const badgeColor = isPyq ? '#b45309' : '#0369a1';

        html += `<div style="margin-bottom: 16px; background: white; padding: 16px; border-radius: 8px; border-left: 5px solid ${borderColor};">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span style="background: ${badgeColor}; color: white; padding: 3px 8px; border-radius: 4px; font-size: 12px; font-weight: bold;">${q.examTag}</span>
            <span style="color: #64748b; font-size: 12px;">Unit ${q.unitId} • ${q.topic}</span>
          </div>
          <p style="font-weight: bold; margin: 8px 0; color: #0f172a;">Q${idx+1}. ${q.question}</p>`;

        if (q.options) {
          html += `<div style="margin: 10px 0;">`;
          q.options.forEach((opt, oIdx) => {
            html += `<button onclick="EM1App.handleOptionClick('${q.id}', ${oIdx})" id="opt-${q.id}-${oIdx}" style="display: block; width: 100%; text-align: left; margin-bottom: 6px; padding: 8px 12px; border: 1px solid #cbd5e1; background: #f8fafc; border-radius: 6px; cursor: pointer; font-size: 14px;">${String.fromCharCode(65+oIdx)}. ${opt}</button>`;
          });
          html += `</div>`;
        }

        html += `<details style="margin-top: 10px; background: #f1f5f9; padding: 10px; border-radius: 6px;">
          <summary style="font-weight: bold; color: #1e293b; cursor: pointer;">Show Step-by-Step Solution</summary>
          <p style="margin: 8px 0 0 0; font-size: 14px; color: #334155; white-space: pre-line;">${q.solution}</p>
          ${q.calcTip ? `<div style="margin-top: 8px; font-size: 12px; color: #15803d; background: #dc26260f; padding: 6px; border-radius: 4px;"><strong>📟 Calculator Tip:</strong> ${q.calcTip}</div>` : ''}
        </details>`;

        html += `</div>`;
      });

      area.innerHTML = html;
    }

    handleOptionClick(questionId, optionIdx) {
      const res = this.checkMcqAnswer(questionId, optionIdx);
      if (!res) return;

      const btn = document.getElementById(`opt-${questionId}-${optionIdx}`);
      if (btn) {
        if (res.isCorrect) {
          btn.style.background = '#10b981';
          btn.style.color = 'white';
          btn.style.borderColor = '#059669';
        } else {
          btn.style.background = '#ef4444';
          btn.style.color = 'white';
          btn.style.borderColor = '#dc2626';
        }
      }
    }
  }

  const instance = new EM1InteractiveController();

  return {
    notes: courseNotes,
    formulas: formulaDeck,
    questions: questionBank,
    controller: instance,
    getFilteredQuestions: (unit, cat) => instance.getFilteredQuestions(unit, cat),
    checkAnswer: (qId, optIdx) => instance.checkMcqAnswer(qId, optIdx),
    handleOptionClick: (qId, optIdx) => instance.handleOptionClick(qId, optIdx),
    initDOMController: (containerId) => instance.initDOMController(containerId)
  };
}));
