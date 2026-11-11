/**
 * Engineering Mathematics I (EM201T / NEM201T)
 * Master Interactive Web App & Data Architecture (Version 2)
 *
 * Grounded in Official Syllabus and Complete Exam History (2024-2026).
 * Features Dynamic KaTeX Math Rendering Engine & SPA UI Controller.
 */

(function (global) {
  'use strict';

  const subjectInfo = {
  "id": "em-1",
  "code": "EM201T / NEM201T",
  "title": "Engineering Mathematics I",
  "institution": "Institute of Advanced Research",
  "semester": 1,
  "totalUnits": 5,
  "description": "Complete Master Portal covering Multivariable Calculus, Infinite Series, Improper Integrals, Multiple Integration, Vector Calculus, Differential Equations, and CASIO Calculator Shortcuts."
};
  const courseNotes = [
  {
    "unitId": 1,
    "unitTitle": "Unit I: Partial Differentiation & Multivariable Calculus",
    "color": "#6366f1",
    "subtopics": [
      {
        "title": "1.1 Multivariable Limits & Continuity",
        "summary": "Functions of two or more variables z = f(x,y). Evaluation of limits as (x,y) -> (a,b).",
        "content": "\n### **Multivariable Limits & Path Test**\nA limit $\\lim_{(x,y) \\to (a,b)} f(x,y) = L$ exists **if and only if** $f(x,y)$ approaches $L$ along **every possible 2D path** approaching $(a,b)$.\n\n* **The 2D Path Test for Non-Existence**:\n  If approaching $(0,0)$ along straight lines $y = mx$ yields a result that depends on the slope $m$, the limit **does not exist**.\n  $$\\lim_{(x,y) \\to (0,0)} \\frac{x y}{x^2 + y^2} = \\lim_{x \\to 0} \\frac{m x^2}{x^2(1 + m^2)} = \\frac{m}{1 + m^2} \\quad \\implies \\text{No limit!}$$\n\n* **Piecewise Continuity Boundary Condition**:\n  A function $f(x)$ is continuous at a boundary point $x = c$ if LHL = RHL = $f(c)$.\n  $$\\lim_{x \\to c^-} f(x) = \\lim_{x \\to c^+} f(x) = f(c)$$\n",
        "examTip": "Always test y = mx first when asked to show a multivariable limit does not exist!"
      },
      {
        "title": "1.2 Partial Derivatives & Clairaut's Theorem",
        "summary": "First and second order pure and mixed partial derivatives.",
        "content": "\n### **Partial Differentiation**\nWhen differentiating $f(x,y)$ with respect to $x$, treat $y$ as a constant:\n$$f_x = \\frac{\\partial f}{\\partial x} = \\lim_{h \\to 0} \\frac{f(x+h, y) - f(x,y)}{h}$$\n\n### **Clairaut's Schwarz Mixed Partials Theorem**\nIf $f_{xy}$ and $f_{yx}$ are continuous on an open region, then:\n$$\\frac{\\partial^2 f}{\\partial x \\partial y} = \\frac{\\partial^2 f}{\\partial y \\partial x} \\quad (f_{xy} = f_{yx})$$\n\n* **Example ($x^2 + y^2 + x^2y^2$)**:\n  $$\\frac{\\partial f}{\\partial x} = 2x + 2x y^2, \\quad \\frac{\\partial f}{\\partial y} = 2y + 2x^2 y, \\quad \\frac{\\partial^2 f}{\\partial x \\partial y} = 4xy$$\n",
        "examTip": "Check f_xy = f_yx as a fast sanity check on partial derivative questions."
      },
      {
        "title": "1.3 Chain Rule & Total Differentials",
        "summary": "Differentiating composite multivariable functions and implicit constraints.",
        "content": "\n### **Multivariable Chain Rule**\n* **Case 1 (Single parameter t)**: If $z = f(x,y)$ where $x = x(t)$ and $y = y(t)$:\n  $$\\frac{dz}{dt} = \\frac{\\partial z}{\\partial x} \\frac{dx}{dt} + \\frac{\\partial z}{\\partial y} \\frac{dy}{dt}$$\n\n* **Case 2 (Two parameters u, v)**: If $z = f(x,y)$ where $x = x(u,v)$ and $y = y(u,v)$:\n  $$\\frac{\\partial z}{\\partial u} = \\frac{\\partial z}{\\partial x} \\frac{\\partial x}{\\partial u} + \\frac{\\partial z}{\\partial y} \\frac{\\partial y}{\\partial u}$$\n\n### **Total Differential & Implicit Differentiation**\nThe total differential $df$ represents the total linear approximation change:\n$$df = \\frac{\\partial f}{\\partial x} dx + \\frac{\\partial f}{\\partial y} dy$$\n\nFor an implicit function $F(x,y) = C$:\n$$\\frac{dy}{dx} = -\\frac{F_x}{F_y} = -\\frac{\\partial F / \\partial x}{\\partial F / \\partial y}$$\n",
        "examTip": "Never forget the negative sign in implicit differentiation dy/dx = -F_x / F_y!"
      },
      {
        "title": "1.4 Homogeneous Functions & Euler's Theorem",
        "summary": "Euler's First and Second Order Identities for degree-n homogeneous functions.",
        "content": "\n### **Definition of Homogeneous Function**\nA function $f(x,y)$ is homogeneous of degree $n$ if:\n$$f(tx, ty) = t^n f(x,y)$$\n\n### **Euler's Theorem**\n* **First-Order Euler Identity**:\n  $$x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y} = n u$$\n\n* **Second-Order Euler Identity**:\n  $$x^2 \\frac{\\partial^2 u}{\\partial x^2} + 2xy \\frac{\\partial^2 u}{\\partial x \\partial y} + y^2 \\frac{\\partial^2 u}{\\partial y^2} = n(n-1) u$$\n\n* **Transformed Form**:\n  If $f(u)$ is homogeneous of degree $n$ where $u = g(x,y)$, then $x u_x + y u_y = n \\frac{f(u)}{f'(u)}$.\n",
        "examTip": "Euler's theorem saves up to 10 lines of partial derivative expansion on 5-mark exam questions!"
      },
      {
        "title": "1.5 Directional Derivatives & Vector Gradient",
        "summary": "Gradient vector \nabla \\Phi and rate of change along direction vectors.",
        "content": "\n### **Vector Gradient**\nThe gradient of a scalar field $\\Phi(x,y,z)$ points in the direction of maximum rate of increase:\n$$\\nabla \\Phi = \\text{grad } \\Phi = \\frac{\\partial \\Phi}{\\partial x} \\mathbf{i} + \\frac{\\partial \\Phi}{\\partial y} \\mathbf{j} + \\frac{\\partial \\Phi}{\\partial z} \\mathbf{k}$$\n\n### **Directional Derivative**\nThe rate of change of $\\Phi$ along a unit direction vector $\\hat{\\mathbf{u}} = \\frac{\\mathbf{a}}{|\\mathbf{a}|}$:\n$$D_{\\hat{\\mathbf{u}}} \\Phi = \\nabla \\Phi \\cdot \\hat{\\mathbf{u}} = |\\nabla \\Phi| \\cos \\theta$$\n\n* **Maximum Rate of Increase**: Occurs along $\\nabla \\Phi$ with magnitude $|\\nabla \\Phi|$.\n",
        "examTip": "Always normalize the direction vector a to a unit vector u = a/|a| before taking the dot product!"
      },
      {
        "title": "1.6 Tangent Planes, Normal Lines & Relative Extrema",
        "summary": "3D surface geometry and 2-variable critical point classification.",
        "content": "\n### **3D Tangent Plane & Normal Line**\nFor a surface $F(x,y,z) = 0$ at $(x_0, y_0, z_0)$:\n* **Tangent Plane**: $F_x(x - x_0) + F_y(y - y_0) + F_z(z - z_0) = 0$\n* **Normal Line**: $\\frac{x - x_0}{F_x} = \\frac{y - y_0}{F_y} = \\frac{z - z_0}{F_z}$\n\n### **2-Variable Relative Extrema Classification**\n1. **Critical Points**: Find $(x_0, y_0)$ where $f_x = 0$ and $f_y = 0$.\n2. **Second-Derivative Discriminant**: Let $A = f_{xx}, B = f_{xy}, C = f_{yy}$ and $\\Delta = AC - B^2$.\n   * **$\\Delta > 0$ and $A > 0$**: Relative **Minimum**\n   * **$\\Delta > 0$ and $A < 0$**: Relative **Maximum**\n   * **$\\Delta < 0$**: **Saddle Point** (no extremum)\n   * **$\\Delta = 0$**: Inconclusive (requires higher-order testing)\n",
        "examTip": "Remember: A = f_xx, B = f_xy, C = f_yy. Delta = AC - B^2."
      }
    ]
  },
  {
    "unitId": 2,
    "unitTitle": "Unit II: Infinite Series & Expansions",
    "color": "#8b5cf6",
    "subtopics": [
      {
        "title": "2.1 Infinite Series & Convergence Tests",
        "summary": "Master table of 7 core convergence tests for infinite series \\sum a_n.",
        "content": "\n### **Master Convergence Summary Table**\n\n| Test Name | Series Type / Form | Condition for Convergence | Condition for Divergence |\n| :--- | :--- | :--- | :--- |\n| **$n$-th Term Test** | Any $\\sum a_n$ | Inconclusive if $\\lim a_n = 0$ | $\\lim_{n \\to \\infty} a_n \\neq 0$ |\n| **Geometric Series** | $\\sum a r^n$ | $|r| < 1$ | $|r| \\ge 1$ |\n| **$p$-Series Test** | $\\sum \\frac{1}{n^p}$ | $p > 1$ | $p \\le 1$ |\n| **D'Alembert Ratio Test** | $\\lim \\left|\\frac{a_{n+1}}{a_n}\\right| = L$ | $L < 1$ | $L > 1$ ($L=1$ inconclusive) |\n| **Cauchy Root Test** | $\\lim \\left|a_n\\right|^{1/n} = L$ | $L < 1$ | $L > 1$ ($L=1$ inconclusive) |\n| **Leibniz Alternating Test** | $\\sum (-1)^n b_n$ | $b_{n+1} \\le b_n$ AND $\\lim b_n = 0$ | Fails monotonicity/limit |\n",
        "examTip": "If a series contains factorials n!, use D'Alembert Ratio Test. If it contains n-th powers n^n, use Cauchy Root Test!"
      },
      {
        "title": "2.2 Power Series & Radius of Convergence",
        "summary": "Interval of convergence and ratio formulas for power series \\sum c_n x^n.",
        "content": "\n### **Power Series Representation**\nA power series centered at $x = 0$ has the form:\n$$f(x) = \\sum_{n=0}^\\infty c_n x^n = c_0 + c_1 x + c_2 x^2 + \\dots$$\n\n### **Radius of Convergence $R$**\nCalculated using either the Ratio or Root test:\n$$R = \\lim_{n \\to \\infty} \\left| \\frac{c_n}{c_{n+1}} \\right| \\quad \\text{or} \\quad R = \\frac{1}{\\lim_{n \\to \\infty} |c_n|^{1/n}}$$\n\n* **Interval of Convergence**: $(-R, R)$. Always test endpoint convergence at $x = \\pm R$ separately!\n",
        "examTip": "Check endpoints x = -R and x = +R individually to see if brackets should be open () or closed []!"
      },
      {
        "title": "2.3 Taylor & Maclaurin Series Expansions",
        "summary": "Representing smooth functions as infinite polynomial expansions.",
        "content": "\n### **Taylor Series at $x = a$**\n$$f(x) = \\sum_{n=0}^\\infty \\frac{f^{(n)}(a)}{n!} (x - a)^n = f(a) + f'(a)(x-a) + \\frac{f''(a)}{2!}(x-a)^2 + \\dots$$\n\n### **Maclaurin Series (Taylor at $a = 0$)**\n$$f(x) = \\sum_{n=0}^\\infty \\frac{f^{(n)}(0)}{n!} x^n = f(0) + f'(0)x + \\frac{f''(0)}{2!}x^2 + \\frac{f'''(0)}{3!}x^3 + \\dots$$\n\n### **Core Standard Expansions**\n* **$e^x$**: $1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\dots = \\sum_{n=0}^\\infty \\frac{x^n}{n!}$\n* **$\\sin x$**: $x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\dots = \\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$\n* **$\\cos x$**: $1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\dots = \\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n}}{(2n)!}$\n* **$\\ln(1+x)$**: $x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\dots = \\sum_{n=1}^\\infty \\frac{(-1)^{n-1} x^n}{n}$\n* **$\\frac{1}{1-x}$**: $1 + x + x^2 + x^3 + \\dots = \\sum_{n=0}^\\infty x^n \\quad (|x| < 1)$\n",
        "examTip": "Memorize the first 4 terms of e^x, sin x, cos x, and ln(1+x) for instant 2-mark and 5-mark evaluation."
      }
    ]
  },
  {
    "unitId": 3,
    "unitTitle": "Unit III: Improper Integrals, Special Functions & Revolutions",
    "color": "#ec4899",
    "subtopics": [
      {
        "title": "3.1 Improper Integrals (Type 1 & Type 2)",
        "summary": "Integrals with infinite limits or discontinuous integrands.",
        "content": "\n### **Classification of Improper Integrals**\n* **Type 1 (Infinite Limits)**:\n  $$\\int_a^\\infty f(x) dx = \\lim_{t \\to \\infty} \\int_a^t f(x) dx$$\n\n* **Type 2 (Unbounded Integrand at $x = c$)**:\n  $$\\int_a^b f(x) dx = \\lim_{t \\to c^-} \\int_a^t f(x) dx + \\lim_{t \\to c^+} \\int_t^b f(x) dx$$\n\n* **p-Integral Test**:\n  $$\\int_1^\\infty \\frac{1}{x^p} dx \\quad \\text{converges if } p > 1, \\quad \\text{diverges if } p \\le 1.$$\n",
        "examTip": "Always convert infinite limits to limit notation t -> infinity before integrating!"
      },
      {
        "title": "3.2 Beta & Gamma Special Functions",
        "summary": "Definitions, recurrence relations, negative arguments, and transformation identities.",
        "content": "\n### **Gamma Function $\\Gamma(n)$**\nDefined for $n > 0$ by:\n$$\\Gamma(n) = \\int_0^\\infty e^{-x} x^{n-1} dx$$\n\n* **Recurrence Property**: $\\Gamma(n+1) = n \\Gamma(n) = n! \\quad (\\text{for integer } n)$\n* **Half-Integer Value**: $\\Gamma(1/2) = \\sqrt{\\pi}$\n* **Negative Arguments**: Use $\\Gamma(n) = \\frac{\\Gamma(n+1)}{n}$ recursively.\n  $$\\Gamma(-0.5) = \\frac{\\Gamma(0.5)}{-0.5} = -2\\sqrt{\\pi}$$\n\n### **Beta Function $B(m,n)$**\nDefined for $m,n > 0$ by:\n$$B(m,n) = \\int_0^1 x^{m-1} (1-x)^{n-1} dx = 2 \\int_0^{\\pi/2} \\sin^{2m-1}\\theta \\cos^{2n-1}\\theta d\\theta$$\n\n* **Symmetry Proof**: $B(m,n) = B(n,m)$ (Substitute $u = 1-x$).\n* **Beta-Gamma Relationship**:\n  $$B(m,n) = \\frac{\\Gamma(m) \\Gamma(n)}{\\Gamma(m+n)}$$\n",
        "examTip": "Use 2 \\int_0^{\\pi/2} sin^{2m-1}\theta cos^{2n-1}\theta d\theta to solve trig power integrals instantly!"
      },
      {
        "title": "3.3 Bounded Area & Volume of Solids of Revolution",
        "summary": "2D region area and 3D volume generated by revolving regions about coordinate axes.",
        "content": "\n### **2D Enclosed Area**\n$$A = \\int_a^b (y_{\\text{upper}} - y_{\\text{lower}}) dx$$\n\n### **Volume of Revolution Methods**\n* **Disk Method (Revolved around $x$-axis)**:\n  $$V = \\pi \\int_a^b [y(x)]^2 dx$$\n\n* **Disk Method (Revolved around $y$-axis)**:\n  $$V = \\pi \\int_c^d [x(y)]^2 dy$$\n\n* **Cylindrical Shell Method (Revolved around $y$-axis)**:\n  $$V = 2\\pi \\int_a^b x \\cdot y(x) \\, dx$$\n\n* **Washer Method (Region between two curves $y_1, y_2$ revolved around $x$-axis)**:\n  $$V = \\pi \\int_a^b \\left( [y_2(x)]^2 - [y_1(x)]^2 \\right) dx$$\n",
        "examTip": "The Cylindrical Shell method V = 2\\pi \\int x y dx is usually much easier when revolving y = f(x) around the y-axis!"
      }
    ]
  },
  {
    "unitId": 4,
    "unitTitle": "Unit IV: Multiple Integration & Vector Calculus",
    "color": "#10b981",
    "subtopics": [
      {
        "title": "4.1 Double & Triple Integrals (Cartesian & Polar)",
        "summary": "Iterated 2D and 3D integration, order changes, and polar transformations.",
        "content": "\n### **Double Integrals in Cartesian Coordinates**\n$$\\iint_R f(x,y) dA = \\int_a^b \\left( \\int_{g_1(x)}^{g_2(x)} f(x,y) dy \\right) dx$$\n\n### **Changing Order of Integration**\nUsed when $\\int f(x,y) dx$ is non-elementary.\n1. Sketch the region $R$.\n2. Express $R$ with horizontal strips ($x$ limits depending on $y$) instead of vertical strips.\n\n### **Polar Coordinates Transformation**\n$$x = r \\cos \\theta, \\quad y = r \\sin \\theta, \\quad x^2 + y^2 = r^2, \\quad dx \\, dy = r \\, dr \\, d\\theta$$\n$$\\iint_R f(x,y) dx \\, dy = \\iint_R f(r\\cos\\theta, r\\sin\\theta) \\cdot r \\, dr \\, d\\theta$$\n",
        "examTip": "Never forget the Jacobian element 'r' when switching dx dy to dr d\theta!"
      },
      {
        "title": "4.2 Applications to Enclosed Areas",
        "summary": "Double integration for standard 2D curves, ellipses, parabolas, and polar cardioids.",
        "content": "\n### **Area by Double Integration**\n$$A = \\iint_R 1 \\, dA$$\n\n### **Standard Enclosed Area Results**\n1. **Ellipse ($\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$)**:\n   $$\\text{Area} = 4 \\int_0^a \\int_0^{b\\sqrt{1 - x^2/a^2}} dy \\, dx = \\mathbf{\\pi a b}$$\n\n2. **Parabola & Line ($y = 4x - x^2$ and $y = x$)**:\n   $$\\text{Area} = \\int_0^3 \\int_x^{4x - x^2} dy \\, dx = \\mathbf{\\frac{9}{2}}$$\n\n3. **Polar Circles ($r = 2\\sin\\theta$ and $r = 4\\sin\\theta$)**:\n   $$\\text{Area} = \\int_0^\\pi \\int_{2\\sin\\theta}^{4\\sin\\theta} r \\, dr \\, d\\theta = \\mathbf{3\\pi}$$\n\n4. **Cardioid ($r = a(1 + \\cos\\theta)$)**:\n   $$\\text{Area} = 2 \\cdot \\frac{1}{2} \\int_0^\\pi [a(1+\\cos\\theta)]^2 d\\theta = \\mathbf{\\frac{3}{2} \\pi a^2}$$\n",
        "examTip": "Ellipse Area = \\pi a b is a favorite 10-mark Section C descriptive question in SEE exams!"
      },
      {
        "title": "4.3 Vector Calculus: Divergence, Curl & Theorems",
        "summary": "Divergence, curl, solenoidal/irrotational fields, Green's, Stokes', and Gauss's divergence theorems.",
        "content": "\n### **Vector Operators**\nFor a vector field $\\mathbf{F} = P \\mathbf{i} + Q \\mathbf{j} + R \\mathbf{k}$:\n\n* **Divergence (Scalar)**:\n  $$\\nabla \\cdot \\mathbf{F} = \\text{div } \\mathbf{F} = \\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y} + \\frac{\\partial R}{\\partial z}$$\n  * **Solenoidal Field**: $\\nabla \\cdot \\mathbf{F} = 0$ (Incompressible fluid).\n\n* **Curl (Vector)**:\n  $$\\nabla \\times \\mathbf{F} = \\text{curl } \\mathbf{F} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ \\frac{\\partial}{\\partial x} & \\frac{\\partial}{\\partial y} & \\frac{\\partial}{\\partial z} \\\\ P & Q & R \\end{vmatrix}$$\n  * **Irrotational Field**: $\\nabla \\times \\mathbf{F} = \\mathbf{0}$ (Conservative field, $\\mathbf{F} = \\nabla \\Phi$).\n\n### **The Three Fundamental Theorems**\n1. **Green's Theorem in Plane**: $\\oint_C (P dx + Q dy) = \\iint_R \\left( \\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} \\right) dA$\n2. **Stokes' Theorem**: $\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = \\iint_S (\\nabla \\times \\mathbf{F}) \\cdot \\mathbf{n} dS$\n3. **Gauss's Divergence Theorem**: $\\iint_S \\mathbf{F} \\cdot \\mathbf{n} dS = \\iiint_V (\\nabla \\cdot \\mathbf{F}) dV$\n",
        "examTip": "If curl F = 0, the field is irrotational and a scalar potential Phi exists such that F = grad Phi!"
      }
    ]
  },
  {
    "unitId": 5,
    "unitTitle": "Unit V: Ordinary & Partial Differential Equations",
    "color": "#f59e0b",
    "subtopics": [
      {
        "title": "5.1 First-Order Linear Differential Equations",
        "summary": "Integrating factor method for dy/dx + P(x)y = Q(x).",
        "content": "\n### **Standard First-Order LDE**\n$$\\frac{dy}{dx} + P(x)y = Q(x)$$\n\n### **Solution Algorithm**\n1. **Integrating Factor ($\\text{IF}$)**:\n   $$\\text{IF} = e^{\\int P(x) dx}$$\n2. **General Solution**:\n   $$y \\cdot (\\text{IF}) = \\int Q(x) \\cdot (\\text{IF}) \\, dx + C$$\n",
        "examTip": "Ensure the coefficient of dy/dx is 1 before identifying P(x) and Q(x)!"
      },
      {
        "title": "5.2 Second-Order ODEs with Constant Coefficients",
        "summary": "Auxiliary equation root classification for Complementary Function y_CF and Particular Integral y_PI.",
        "content": "\n### **Homogeneous ODE Solution ($y_{\\text{CF}}$)**\nAuxiliary Equation: $m^2 + a m + b = 0$\n* **Real & Distinct Roots ($m_1 \\neq m_2$)**: $y_{\\text{CF}} = C_1 e^{m_1 x} + C_2 e^{m_2 x}$\n* **Real & Equal Roots ($m_1 = m_2 = m$)**: $y_{\\text{CF}} = (C_1 + C_2 x) e^{m x}$\n* **Complex Roots ($\\alpha \\pm i \\beta$)**: $y_{\\text{CF}} = e^{\\alpha x} (C_1 \\cos \\beta x + C_2 \\sin \\beta x)$\n\n### **Particular Integral ($y_{\\text{PI}}$)**\n$$y_{\\text{PI}} = \\frac{1}{f(D)} R(x)$$\n* For $R(x) = e^{a x}$: $y_{\\text{PI}} = \\frac{1}{f(a)} e^{a x} \\quad (\\text{if } f(a) \\neq 0)$\n",
        "examTip": "If f(a) = 0, multiply numerator by x and differentiate denominator: x * e^{ax} / f'(a)!"
      },
      {
        "title": "5.3 Cauchy-Euler Equations & Legendre Polynomials",
        "summary": "Variable coefficient ODE transformation x = e^z and Legendre orthogonality.",
        "content": "\n### **Cauchy-Euler Differential Equation**\n$$x^2 \\frac{d^2y}{dx^2} + a x \\frac{dy}{dx} + b y = R(x)$$\n\n* **Transformation**: Let $x = e^z \\implies z = \\ln x$.\n* **Operator Substitutions**:\n  $$x \\frac{dy}{dx} = D y, \\quad x^2 \\frac{d^2y}{dx^2} = D(D-1) y \\quad \\left(D = \\frac{d}{dz}\\right)$$\n\n### **Legendre Polynomials $P_n(x)$**\n* **Rodrigues' Formula**: $P_n(x) = \\frac{1}{2^n n!} \\frac{d^n}{dx^n} (x^2 - 1)^n$\n* **Values**: $P_0(x) = 1, \\quad P_1(x) = x, \\quad P_2(x) = \\frac{1}{2}(3x^2 - 1)$\n* **Orthogonality Property**:\n  $$\\int_{-1}^1 P_m(x) P_n(x) dx = \\begin{cases} 0 & m \\neq n \\\\ \\frac{2}{2n+1} & m = n \\end{cases}$$\n",
        "examTip": "In Cauchy-Euler equations, always convert back from z = ln x to x in the final answer!"
      },
      {
        "title": "5.4 Partial Differential Equations (Lagrange & Charpit)",
        "summary": "First-order linear PDEs and non-linear partial differential equations.",
        "content": "\n### **Lagrange's First-Order Linear PDE**\nForm: $P p + Q q = R \\quad \\text{where } p = \\frac{\\partial z}{\\partial x}, q = \\frac{\\partial z}{\\partial y}$\n\n* **Lagrange Auxiliary Sub-Equations**:\n  $$\\frac{dx}{P} = \\frac{dy}{Q} = \\frac{dz}{R}$$\n* Solve for two independent integral curves $u(x,y,z) = c_1$ and $v(x,y,z) = c_2$.\n* **General Solution**: $\\phi(u, v) = 0$ or $u = f(v)$.\n",
        "examTip": "Use multipliers l, m, n such that lP + mQ + nR = 0 to get l dx + m dy + n dz = 0!"
      }
    ]
  },
  {
    "unitId": 6,
    "unitTitle": "Unit VI: CASIO fx-991ES PLUS Calculator Blueprint & Exam Strategy",
    "color": "#3b82f6",
    "subtopics": [
      {
        "title": "6.1 CASIO fx-991ES PLUS Pro-Tricks",
        "summary": "Step-by-step calculator button sequences for limits, derivatives, and vectors.",
        "content": "\n### **CASIO fx-991ES PLUS Master Shortcuts**\n\n1. **Radian Mode Setup**:\n   `SHIFT` + `MODE` (SETUP) $\\to$ `4` (RAD). *Crucial for all trig calculus!*\n\n2. **Limit Evaluation (`CALC` Mode)**:\n   * To evaluate $\\lim_{x \\to 5} \\frac{x - 5}{x^2 - 25}$:\n   * Type expression: `(X - 5) / (X^2 - 25)`\n   * Press `CALC`\n   * Enter `X = 5.0001` (or `4.9999`) $\\to$ Output = `0.099990000` $\\approx \\mathbf{0.1 = 1/10}$!\n\n3. **Numerical Derivative Check (`d/dx`)**:\n   * Press `SHIFT` + `\\int dx`\n   * Enter function $f(X)$ and value $X = x_0$ to verify slope!\n\n4. **3D Vector Dot Product ($\\nabla \\Phi \\cdot \\mathbf{u}$)**:\n   * `MODE` $\\to$ `8` (VECTOR) $\\to$ `1` (VctA) $\\to$ `1` (3D). Enter components.\n   * `SHIFT` + `5` (VECTOR) $\\to$ `2` (Data) $\\to$ `2` (VctB). Enter direction.\n   * `SHIFT` + `5` $\\to$ `3` (VctA) $\\cdot$ `SHIFT` + `5` $\\to$ `7` (Dot) $\\cdot$ `SHIFT` + `5` $\\to$ `4` (VctB) $\\to$ `=`!\n",
        "examTip": "Always verify Section A 2-mark limits using the CALC 5.0001 trick before handing in your paper!"
      },
      {
        "title": "6.2 60-Mark SEE Exam Blueprint & Time Strategy",
        "summary": "Strategic time allocation for Section C 10-markers, Section B 5-markers, and Section A.",
        "content": "\n### **60-Mark SEE Exam Time-Management Blueprint**\n\n* **Section C (30 Marks / 50% of Exam)**:\n  * **Requirement**: Solve 3 out of 5 questions (10 Marks each).\n  * **Time Allocation**: Spend **90 Minutes** here first!\n  * **High-Yield Choices**:\n    1. Ellipse Area ($\\pi a b$)\n    2. Polar Circles Area ($3\\pi$)\n    3. Triple Integrals ($26$)\n    4. Volume of Revolution ($40\\pi$)\n\n* **Section B (20 Marks / 33% of Exam)**:\n  * **Requirement**: Solve 4 out of 6 questions (5 Marks each).\n  * **Time Allocation**: Spend **50 Minutes**.\n  * **High-Yield Choices**: Gradient $\\nabla \\Phi$, Tangent/Normal lines, Relative Extrema ($\\Delta = AC - B^2$).\n\n* **Section A (10 Marks / 17% of Exam)**:\n  * **Requirement**: Solve 5 short 2-mark questions.\n  * **Time Allocation**: Spend **25 Minutes**. Solve/verify instantly using calculator tricks!\n",
        "examTip": "Start with Section C 10-markers while your mind is freshest \u2014 3 good questions give you 30 out of 60 marks instantly!"
      }
    ]
  }
];
  const formulaDeck = [
  {
    "id": "f1",
    "unitId": 1,
    "title": "Piecewise Boundary Continuity Condition",
    "formula": "\\lim_{x \\to c^-} f(x) = \\lim_{x \\to c^+} f(x) = f(c)",
    "explanation": "To solve for unknown parameters (like A or B), equate Left-Hand Limit (LHL) and Right-Hand Limit (RHL) at the boundary point x = c.",
    "calcTip": "Use CALC mode with X = c - 0.0001 for LHL and X = c + 0.0001 for RHL."
  },
  {
    "id": "f2",
    "unitId": 1,
    "title": "Clairaut's Mixed Partials Theorem",
    "formula": "\\frac{\\partial^2 f}{\\partial x \\partial y} = \\frac{\\partial^2 f}{\\partial y \\partial x} \\quad (f_{xy} = f_{yx})",
    "explanation": "If f_{xy} and f_{yx} are continuous, the order of mixed partial differentiation does not matter.",
    "calcTip": "Useful as a quick self-check on partial derivative exam questions."
  },
  {
    "id": "f3",
    "unitId": 1,
    "title": "Implicit Differentiation Rule",
    "formula": "\\frac{dy}{dx} = -\\frac{F_x}{F_y} = -\\frac{\\partial F / \\partial x}{\\partial F / \\partial y}",
    "explanation": "For implicit equations F(x,y) = C, the derivative is negative partial wrt x over partial wrt y.",
    "calcTip": "Never omit the leading minus sign!"
  },
  {
    "id": "f4",
    "unitId": 1,
    "title": "Euler's First-Order Identity",
    "formula": "x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y} = n u",
    "explanation": "For any homogeneous function u(x,y) of degree n.",
    "calcTip": "degree n is found by substituting f(tx, ty) = t^n f(x,y)."
  },
  {
    "id": "f5",
    "unitId": 1,
    "title": "Directional Derivative Formula",
    "formula": "D_{\\hat{\\mathbf{u}}} \\Phi = \\nabla \\Phi \\cdot \\hat{\\mathbf{u}} = \\nabla \\Phi \\cdot \\frac{\\mathbf{a}}{|\\mathbf{a}|}",
    "explanation": "Dot product of scalar gradient with normalized unit direction vector u.",
    "calcTip": "Vector mode on CASIO: MODE 8 -> Vector dot product."
  },
  {
    "id": "f6",
    "unitId": 1,
    "title": "2-Variable Relative Extrema Discriminant",
    "formula": "\\Delta = A C - B^2 \\quad \\text{where } A = f_{xx}, B = f_{xy}, C = f_{yy}",
    "explanation": "Delta > 0 & A > 0 => Min; Delta > 0 & A < 0 => Max; Delta < 0 => Saddle Point.",
    "calcTip": "Evaluate A, B, C at critical points (x0, y0) where f_x = 0 and f_y = 0."
  },
  {
    "id": "f7",
    "unitId": 2,
    "title": "D'Alembert Ratio Test",
    "formula": "L = \\lim_{n \\to \\infty} \\left| \\frac{a_{n+1}}{a_n} \\right|",
    "explanation": "Converges if L < 1, Diverges if L > 1, Inconclusive if L = 1.",
    "calcTip": "Primary test for series with factorials n! or exponential terms a^n."
  },
  {
    "id": "f8",
    "unitId": 2,
    "title": "Maclaurin Series Expansion",
    "formula": "f(x) = \\sum_{n=0}^\\infty \\frac{f^{(n)}(0)}{n!} x^n = f(0) + f'(0)x + \\frac{f''(0)}{2!}x^2 + \\dots",
    "explanation": "Taylor series expansion centered at a = 0.",
    "calcTip": "Standard series: e^x, sin x, cos x, ln(1+x)."
  },
  {
    "id": "f9",
    "unitId": 3,
    "title": "Gamma Function Recurrence & Half-Integer",
    "formula": "\\Gamma(n+1) = n \\Gamma(n) = n!, \\quad \\Gamma(1/2) = \\sqrt{\\pi}",
    "explanation": "Recursive factorial extension for all positive real numbers.",
    "calcTip": "Gamma(5/2) = (3/2)(1/2)Gamma(1/2) = 3\\sqrt{\\pi}/4."
  },
  {
    "id": "f10",
    "unitId": 3,
    "title": "Beta-Gamma Relationship",
    "formula": "B(m,n) = \\frac{\\Gamma(m) \\Gamma(n)}{\\Gamma(m+n)} = 2 \\int_0^{\\pi/2} \\sin^{2m-1}\\theta \\cos^{2n-1}\\theta d\\theta",
    "explanation": "Connects Beta double-power trig integrals directly to Gamma factorials.",
    "calcTip": "Use 2m - 1 = power of sin and 2n - 1 = power of cos."
  },
  {
    "id": "f11",
    "unitId": 3,
    "title": "Cylindrical Shell Volume of Revolution",
    "formula": "V = 2\\pi \\int_a^b x \\cdot y(x) \\, dx",
    "explanation": "Volume generated by revolving y = f(x) around the y-axis.",
    "calcTip": "Much easier than Disk method when y = f(x) is hard to invert to x = g(y)."
  },
  {
    "id": "f12",
    "unitId": 4,
    "title": "Polar Coordinates Transformation",
    "formula": "x = r \\cos \\theta, \\quad y = r \\sin \\theta, \\quad dx \\, dy = r \\, dr \\, d\\theta",
    "explanation": "Always include Jacobian factor r when converting double integrals to polar.",
    "calcTip": "x^2 + y^2 = r^2 simplify terms dramatically."
  },
  {
    "id": "f13",
    "unitId": 4,
    "title": "Ellipse Enclosed Area Formula",
    "formula": "\\text{Area} = \\iint_R 1 \\, dx \\, dy = 4 \\int_0^a \\int_0^{b\\sqrt{1 - x^2/a^2}} dy \\, dx = \\mathbf{\\pi a b}",
    "explanation": "Total enclosed area of an ellipse x^2/a^2 + y^2/b^2 = 1.",
    "calcTip": "High-yield 10-mark Section C descriptive question!"
  },
  {
    "id": "f14",
    "unitId": 4,
    "title": "Green's Theorem in Plane",
    "formula": "\\oint_C (P dx + Q dy) = \\iint_R \\left( \\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} \\right) dA",
    "explanation": "Converts line integral along closed curve C to double integral over enclosed region R.",
    "calcTip": "P is dx coefficient, Q is dy coefficient."
  },
  {
    "id": "f15",
    "unitId": 5,
    "title": "First-Order LDE Integrating Factor",
    "formula": "\\text{IF} = e^{\\int P(x) dx}, \\quad y \\cdot (\\text{IF}) = \\int Q(x) \\cdot (\\text{IF}) \\, dx + C",
    "explanation": "General solution for dy/dx + P(x)y = Q(x).",
    "calcTip": "Ensure dy/dx coefficient is 1 before reading P(x)."
  }
];
  const questionBank = [
  {
    "id": "q1",
    "unitId": 1,
    "type": "mcq",
    "marks": 1,
    "tags": [
      "PYQ_2024",
      "PYQ_2025",
      "PYQ_2026",
      "Mid-Sem",
      "High-Yield"
    ],
    "topic": "Limits & Indeterminate Forms",
    "question": "Evaluate the limit: $$\\lim_{x \\to 5} \\frac{x - 5}{x^2 - 25}$$",
    "options": [
      "0.1 (1/10)",
      "0.2 (1/5)",
      "0",
      "Undefined"
    ],
    "correctAnswerIndex": 0,
    "solution": "Factorize the denominator: $$x^2 - 25 = (x - 5)(x + 5)$$ Cancel $(x - 5)$: $$\\lim_{x \\to 5} \\frac{1}{x + 5} = \\frac{1}{5 + 5} = \\frac{1}{10} = \\mathbf{0.1}$$",
    "calcTip": "In CASIO fx-991ES PLUS: Enter (X-5)/(X^2-25), press CALC, enter X = 5.0001 -> 0.09999 \u2248 0.1."
  },
  {
    "id": "q2",
    "unitId": 1,
    "type": "mcq",
    "marks": 1,
    "tags": [
      "PYQ_2024",
      "PYQ_2025",
      "Mid-Sem"
    ],
    "topic": "Piecewise Function Continuity",
    "question": "Find the value of $A$ that makes $f(x)$ continuous at $x = 2$: $$f(x) = \\begin{cases} A + x & x < 2 \\\\ 1 + x^2 & x \\ge 2 \\end{cases}$$",
    "options": [
      "A = 3",
      "A = 5",
      "A = 1",
      "A = 2"
    ],
    "correctAnswerIndex": 0,
    "solution": "Equate Left-Hand Limit and Right-Hand Limit at $x = 2$: $$\\text{LHL} = \\lim_{x \\to 2^-} (A + x) = A + 2$$ $$\\text{RHL} = \\lim_{x \\to 2^+} (1 + x^2) = 1 + 2^2 = 5$$ $$A + 2 = 5 \\implies \\mathbf{A = 3}$$",
    "calcTip": "Verify using LHL at X = 1.9999 and RHL at X = 2.0001."
  },
  {
    "id": "q3",
    "unitId": 1,
    "type": "mcq",
    "marks": 1,
    "tags": [
      "PYQ_2024",
      "SEE_2024",
      "Mid-Sem"
    ],
    "topic": "Function Composition",
    "question": "Given $f(x) = 3x + 4$ and $g(x) = x - 2$, find the composite function $f(g(x))$.",
    "options": [
      "3x - 2",
      "3x + 2",
      "3x - 6",
      "x + 2"
    ],
    "correctAnswerIndex": 0,
    "solution": "Substitute $g(x) = x - 2$ into $f(x)$: $$f(g(x)) = f(x - 2) = 3(x - 2) + 4 = 3x - 6 + 4 = \\mathbf{3x - 2}$$",
    "calcTip": "Test at x = 5: g(5) = 3, f(3) = 13. Check 3(5) - 2 = 13!"
  },
  {
    "id": "q4",
    "unitId": 1,
    "type": "short",
    "marks": 2,
    "tags": [
      "PYQ_2024",
      "PYQ_2025",
      "PYQ_2026",
      "SEE_2024",
      "SEE_2025"
    ],
    "topic": "Partial Derivatives",
    "question": "Find all first-order partial derivatives $\\frac{\\partial f}{\\partial x}$ and $\\frac{\\partial f}{\\partial y}$ for $f(x,y) = x^2 + y^2 + x^2y^2$.",
    "options": [
      "f_x = 2x + 2xy^2, f_y = 2y + 2x^2y",
      "f_x = 2x + y^2, f_y = 2y + x^2",
      "f_x = 2x, f_y = 2y",
      "f_x = 2xy^2, f_y = 2x^2y"
    ],
    "correctAnswerIndex": 0,
    "solution": "Differentiate with respect to $x$ treating $y$ as constant: $$\\frac{\\partial f}{\\partial x} = 2x + 0 + 2x y^2 = \\mathbf{2x + 2xy^2}$$ Differentiate with respect to $y$ treating $x$ as constant: $$\\frac{\\partial f}{\\partial y} = 0 + 2y + x^2 (2y) = \\mathbf{2y + 2x^2y}$$",
    "calcTip": "Verify mixed partial f_{xy} = 4xy."
  },
  {
    "id": "q5",
    "unitId": 1,
    "type": "short",
    "marks": 5,
    "tags": [
      "SEE_2024",
      "SEE_2025",
      "Re-Exam_2026",
      "High-Yield"
    ],
    "topic": "Gradient Vector",
    "question": "Find the gradient vector $\\nabla \\Phi$ for $\\Phi(x,y,z) = 3x^2y - y^3z^2$ at the point $(1, -2, -1)$.",
    "options": [
      "-12i - 9j - 16k",
      "-12i + 9j - 16k",
      "12i - 9j + 16k",
      "-6i - 9j - 8k"
    ],
    "correctAnswerIndex": 0,
    "solution": "1. Compute partial derivatives: $$\\frac{\\partial \\Phi}{\\partial x} = 6xy, \\quad \\frac{\\partial \\Phi}{\\partial y} = 3x^2 - 3y^2z^2, \\quad \\frac{\\partial \\Phi}{\\partial z} = -2y^3z$$ 2. Evaluate at $(1, -2, -1)$: $$\\Phi_x(1,-2,-1) = 6(1)(-2) = -12$$ $$\\Phi_y(1,-2,-1) = 3(1)^2 - 3(-2)^2(-1)^2 = 3 - 12 = -9$$ $$\\Phi_z(1,-2,-1) = -2(-2)^3(-1) = -2(-8)(-1) = -16$$ 3. Result: $$\\nabla \\Phi = \\mathbf{-12\\mathbf{i} - 9\\mathbf{j} - 16\\mathbf{k}}$$"
  },
  {
    "id": "q6",
    "unitId": 1,
    "type": "short",
    "marks": 5,
    "tags": [
      "SEE_2024",
      "SEE_2025",
      "Re-Exam_2026"
    ],
    "topic": "Relative Extrema Classification",
    "question": "Determine the relative extrema for $f(x,y) = 6x^2 + 10y^2 + 2x - 3y + 15$.",
    "solution": "1. Find critical points ($f_x = 0, f_y = 0$): $$f_x = 12x + 2 = 0 \\implies x = -1/6$$ $$f_y = 20y - 3 = 0 \\implies y = 3/20$$ Critical point: $(-1/6, 3/20)$. 2. Evaluate second partial derivatives: $$A = f_{xx} = 12, \\quad B = f_{xy} = 0, \\quad C = f_{yy} = 20$$ 3. Calculate discriminant $\\Delta$: $$\\Delta = AC - B^2 = (12)(20) - 0^2 = 240 > 0$$ Since $\\Delta > 0$ and $A = 12 > 0$, $f(x,y)$ has a **Relative Minimum** at $(-1/6, 3/20)$.",
    "answer": "Relative Minimum at (-1/6, 3/20)"
  },
  {
    "id": "q7",
    "unitId": 4,
    "type": "heavy_hitter",
    "marks": 10,
    "tags": [
      "SEE_2024",
      "SEE_2025",
      "Section_C"
    ],
    "topic": "3D Triple Integral",
    "question": "Evaluate the 3D triple integral: $$\\int_0^2 \\int_1^3 \\int_1^2 x y^2 z \\, dz \\, dy \\, dx$$",
    "options": [
      "26",
      "52",
      "13",
      "36"
    ],
    "correctAnswerIndex": 0,
    "solution": "Since the integrand is separable and limits are constant, split into three independent single integrals: $$\\int_0^2 \\int_1^3 \\int_1^2 x y^2 z \\, dz \\, dy \\, dx = \\left(\\int_0^2 x dx\\right) \\left(\\int_1^3 y^2 dy\\right) \\left(\\int_1^2 z dz\\right)$$ 1. $\\int_0^2 x dx = \\left[\\frac{x^2}{2}\\right]_0^2 = 2$ 2. $\\int_1^3 y^2 dy = \\left[\\frac{y^3}{3}\\right]_1^3 = \\frac{27 - 1}{3} = \\frac{26}{3}$ 3. $\\int_1^2 z dz = \\left[\\frac{z^2}{2}\\right]_1^2 = \\frac{4 - 1}{2} = \\frac{3}{2}$ Product: $$V = 2 \\times \\frac{26}{3} \\times \\frac{3}{2} = \\mathbf{26}$$",
    "calcTip": "Verify each single integral on CASIO using \\int dx button!"
  },
  {
    "id": "q8",
    "unitId": 4,
    "type": "heavy_hitter",
    "marks": 10,
    "tags": [
      "SEE_2024",
      "SEE_2025",
      "Section_C",
      "High-Yield"
    ],
    "topic": "Area of Ellipse by Double Integration",
    "question": "Calculate the total area of the ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ using double integration.",
    "solution": "1. Quadrant 1 area limits: $x$ goes $0 \\to a$, $y$ goes $0 \\to b\\sqrt{1 - x^2/a^2}$. $$\\text{Area}_{\\text{Q1}} = \\int_0^a \\int_0^{b\\sqrt{1 - x^2/a^2}} dy \\, dx = \\int_0^a b\\sqrt{1 - \\frac{x^2}{a^2}} dx$$ 2. Substitute $x = a \\sin \\theta \\implies dx = a \\cos \\theta d\\theta$: $$\\text{Area}_{\\text{Q1}} = b \\int_0^{\\pi/2} \\sqrt{1 - \\sin^2\\theta} \\cdot a \\cos \\theta d\\theta = a b \\int_0^{\\pi/2} \\cos^2\\theta d\\theta = a b \\left[\\frac{\\pi}{4}\\right] = \\frac{\\pi a b}{4}$$ 3. Total Area across all 4 quadrants: $$\\text{Total Area} = 4 \\times \\frac{\\pi a b}{4} = \\mathbf{\\pi a b}$$",
    "answer": "\\pi a b"
  },
  {
    "id": "q9",
    "unitId": 4,
    "type": "heavy_hitter",
    "marks": 10,
    "tags": [
      "SEE_2024",
      "SEE_2025",
      "Section_C"
    ],
    "topic": "Area Between Intersecting Curves",
    "question": "Find the area of the region bounded by the parabola $y = 4x - x^2$ and the line $y = x$.",
    "solution": "1. Find intersection points: $$4x - x^2 = x \\implies 3x - x^2 = 0 \\implies x(3 - x) = 0 \\implies x = 0 \\text{ and } x = 3$$ 2. Set up double integral: $$\\text{Area} = \\int_0^3 \\int_x^{4x - x^2} dy \\, dx = \\int_0^3 (3x - x^2) dx$$ 3. Evaluate integral: $$\\text{Area} = \\left[ \\frac{3x^2}{2} - \\frac{x^3}{3} \\right]_0^3 = \\frac{27}{2} - \\frac{27}{3} = \\frac{27}{2} - 9 = \\mathbf{\\frac{9}{2}}$$ = 4.5",
    "answer": "9/2 (4.5)"
  },
  {
    "id": "q10",
    "unitId": 4,
    "type": "heavy_hitter",
    "marks": 10,
    "tags": [
      "SEE_2024",
      "SEE_2025",
      "Re-Exam_2026",
      "Section_C"
    ],
    "topic": "Polar Double Integral Area",
    "question": "Find the area enclosed between the polar circles $r = 2\\sin\\theta$ and $r = 4\\sin\\theta$.",
    "solution": "1. Both circles lie in upper half plane: $\\theta$ goes $0 \\to \\pi$. Limits for $r$: $2\\sin\\theta \\to 4\\sin\\theta$. $$\\text{Area} = \\int_0^\\pi \\int_{2\\sin\\theta}^{4\\sin\\theta} r \\, dr \\, d\\theta$$ 2. Inner integration wrt $r$: $$\\int_{2\\sin\\theta}^{4\\sin\\theta} r dr = \\left[\\frac{r^2}{2}\\right]_{2\\sin\\theta}^{4\\sin\\theta} = \\frac{16\\sin^2\\theta - 4\\sin^2\\theta}{2} = 6\\sin^2\\theta$$ 3. Outer integration wrt $\\theta$: $$\\text{Area} = 6 \\int_0^\\pi \\sin^2\\theta d\\theta = 6 \\left[ \\frac{\\pi}{2} \\right] = \\mathbf{3\\pi}$$",
    "answer": "3\\pi"
  },
  {
    "id": "q11",
    "unitId": 3,
    "type": "heavy_hitter",
    "marks": 10,
    "tags": [
      "SEE_2024",
      "SEE_2025",
      "Re-Exam_2026",
      "Section_C"
    ],
    "topic": "Volume of Solid of Revolution",
    "question": "Find the volume of the solid generated by revolving the region bounded by $y = x^2$, $x = 1$, $x = 3$, and $y = 0$ about the $y$-axis.",
    "solution": "Use the **Cylindrical Shell Method** for revolving around the $y$-axis: $$V = 2\\pi \\int_a^b x \\cdot y(x) \\, dx$$ Substitute $y = x^2$, $a = 1, b = 3$: $$V = 2\\pi \\int_1^3 x (x^2) dx = 2\\pi \\int_1^3 x^3 dx = 2\\pi \\left[ \\frac{x^4}{4} \\right]_1^3 = 2\\pi \\left( \\frac{81 - 1}{4} \\right) = 2\\pi (20) = \\mathbf{40\\pi}$$",
    "answer": "40\\pi"
  },
  {
    "id": "q12",
    "unitId": 3,
    "type": "short",
    "marks": 2,
    "tags": [
      "Re-Exam_2026",
      "Unit_III"
    ],
    "topic": "Gamma Function Negative Argument",
    "question": "Given $\\Gamma(1.8) = 0.9314$, compute the value of $\\Gamma(-2.2)$.",
    "solution": "Use recurrence formula $\\Gamma(n) = \\frac{\\Gamma(n+1)}{n}$ recursively: 1. $\\Gamma(-1.2) = \\frac{\\Gamma(-0.2)}{-1.2}$ 2. $\\Gamma(-0.2) = \\frac{\\Gamma(0.8)}{-0.2}$ 3. $\\Gamma(0.8) = \\frac{\\Gamma(1.8)}{0.8} = \\frac{0.9314}{0.8} = 1.16425$ 4. Working backwards: $$\\Gamma(-0.2) = \\frac{1.16425}{-0.2} = -5.82125$$ $$\\Gamma(-1.2) = \\frac{-5.82125}{-1.2} = 4.85104$$ $$\\Gamma(-2.2) = \\frac{\\Gamma(-1.2)}{-2.2} = \\frac{4.85104}{-2.2} = \\mathbf{-2.205}$$",
    "answer": "-2.205"
  },
  {
    "id": "q13",
    "unitId": 1,
    "type": "mcq",
    "marks": 1,
    "tags": [
      "Extra_Practice",
      "Unit_I"
    ],
    "topic": "Trigonometric Limit",
    "question": "Evaluate the limit: $$\\lim_{x \\to 0} \\frac{1 - \\cos 4x}{x^2}$$",
    "options": [
      "8",
      "4",
      "2",
      "16"
    ],
    "correctAnswerIndex": 0,
    "solution": "Use identity $1 - \\cos 4x = 2 \\sin^2 2x$: $$\\lim_{x \\to 0} \\frac{2 \\sin^2 2x}{x^2} = 2 \\lim_{x \\to 0} \\left(\\frac{\\sin 2x}{x}\\right)^2 = 2 (2)^2 = \\mathbf{8}$$",
    "calcTip": "Test at X = 0.0001 in RAD mode -> 7.9999 \u2248 8."
  },
  {
    "id": "q14",
    "unitId": 1,
    "type": "short",
    "marks": 5,
    "tags": [
      "Extra_Practice",
      "Unit_I"
    ],
    "topic": "Euler's Theorem Transformed",
    "question": "If $u = \\tan^{-1} \\left( \\frac{x^3 + y^3}{x - y} \\right)$, show that $x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y} = \\sin 2u$.",
    "solution": "1. Rearrange: $\\tan u = \\frac{x^3 + y^3}{x - y} = z(x,y)$. $z$ is homogeneous of degree $n = 3 - 1 = 2$. 2. Apply Euler's theorem to $z = \\tan u$: $$x \\frac{\\partial z}{\\partial x} + y \\frac{\\partial z}{\\partial y} = 2 z \\implies x \\sec^2 u \\frac{\\partial u}{\\partial x} + y \\sec^2 u \\frac{\\partial u}{\\partial y} = 2 \\tan u$$ 3. Divide by $\\sec^2 u$: $$x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y} = \\frac{2 \\tan u}{\\sec^2 u} = 2 \\sin u \\cos u = \\mathbf{\\sin 2u}$$",
    "answer": "sin 2u"
  },
  {
    "id": "q15",
    "unitId": 1,
    "type": "short",
    "marks": 5,
    "tags": [
      "Extra_Practice",
      "Unit_I"
    ],
    "topic": "Directional Derivative",
    "question": "Find the directional derivative of $f(x,y,z) = x^2 y z + 4 x z^2$ at $(1, -1, 1)$ along direction $\\mathbf{a} = 2\\mathbf{i} - \\mathbf{j} - 2\\mathbf{k}$.",
    "solution": "1. Compute gradient $\\nabla f$: $$\\nabla f = (2xyz + 4z^2)\\mathbf{i} + (x^2z)\\mathbf{j} + (x^2y + 8xz)\\mathbf{k}$$ At $(1,-1,1)$: $$\\nabla f = (2(-1) + 4)\\mathbf{i} + (1)\\mathbf{j} + (-1 + 8)\\mathbf{k} = 2\\mathbf{i} + \\mathbf{j} + 7\\mathbf{k}$$ 2. Normalize direction vector $\\mathbf{a}$: $$|\\mathbf{a}| = \\sqrt{4 + 1 + 4} = 3 \\implies \\hat{\\mathbf{u}} = \\frac{2}{3}\\mathbf{i} - \\frac{1}{3}\\mathbf{j} - \\frac{2}{3}\\mathbf{k}$$ 3. Directional derivative: $$D_{\\hat{\\mathbf{u}}} f = \\nabla f \\cdot \\hat{\\mathbf{u}} = 2\\left(\\frac{2}{3}\\right) + 1\\left(-\\frac{1}{3}\\right) + 7\\left(-\\frac{2}{3}\\right) = \\frac{4 - 1 - 14}{3} = \\frac{-11}{3}$$",
    "answer": "-11/3"
  },
  {
    "id": "q16",
    "unitId": 2,
    "type": "short",
    "marks": 5,
    "tags": [
      "Extra_Practice",
      "Unit_II"
    ],
    "topic": "Series Convergence (Ratio Test)",
    "question": "Test the convergence of the infinite series $\\sum_{n=1}^\\infty \\frac{n}{2^n}$.",
    "solution": "Apply D'Alembert Ratio Test: $$a_n = \\frac{n}{2^n}, \\quad a_{n+1} = \\frac{n+1}{2^{n+1}}$$ $$L = \\lim_{n \\to \\infty} \\frac{a_{n+1}}{a_n} = \\lim_{n \\to \\infty} \\left( \\frac{n+1}{2^{n+1}} \\cdot \\frac{2^n}{n} \\right) = \\lim_{n \\to \\infty} \\frac{n+1}{2n} = \\frac{1}{2}$$ Since $L = 1/2 < 1$, the series **CONVERGES** absolutely by the Ratio Test.",
    "answer": "Converges (L = 1/2 < 1)"
  },
  {
    "id": "q17",
    "unitId": 4,
    "type": "short",
    "marks": 5,
    "tags": [
      "Extra_Practice",
      "Unit_IV"
    ],
    "topic": "Polar Double Integration",
    "question": "Evaluate the polar double integral: $$\\int_0^\\pi \\int_0^1 r^3 \\sin\\theta \\, dr \\, d\\theta$$",
    "options": [
      "1/2",
      "1/4",
      "1",
      "2"
    ],
    "correctAnswerIndex": 0,
    "solution": "Separate variables $r$ and $\\theta$: $$\\left( \\int_0^1 r^3 dr \\right) \\left( \\int_0^\\pi \\sin\\theta d\\theta \\right) = \\left[ \\frac{r^4}{4} \\right]_0^1 \\cdot \\left[ -\\cos\\theta \\right]_0^\\pi = \\left(\\frac{1}{4}\\right) (1 - (-1)) = \\frac{1}{4} \\times 2 = \\mathbf{\\frac{1}{2}}$$ \\approx 0.5"
  },
  {
    "id": "q18",
    "unitId": 4,
    "type": "short",
    "marks": 5,
    "tags": [
      "Extra_Practice",
      "Unit_IV"
    ],
    "topic": "Solenoidal Vector Field Constant",
    "question": "Find the constant $a$ such that $\\mathbf{F} = (x + 3y)\\mathbf{i} + (y - 2z)\\mathbf{j} + (x + az)\\mathbf{k}$ is solenoidal.",
    "options": [
      "a = -2",
      "a = 2",
      "a = 0",
      "a = -1"
    ],
    "correctAnswerIndex": 0,
    "solution": "A vector field is solenoidal if its divergence is zero ($\\nabla \\cdot \\mathbf{F} = 0$): $$\\nabla \\cdot \\mathbf{F} = \\frac{\\partial}{\\partial x}(x + 3y) + \\frac{\\partial}{\\partial y}(y - 2z) + \\frac{\\partial}{\\partial z}(x + az) = 1 + 1 + a = 2 + a$$ Set $2 + a = 0 \\implies \\mathbf{a = -2}$."
  },
  {
    "id": "q19",
    "unitId": 5,
    "type": "short",
    "marks": 5,
    "tags": [
      "Extra_Practice",
      "Unit_V"
    ],
    "topic": "Cauchy-Euler Differential Equation",
    "question": "Solve the Cauchy-Euler ODE: $x^2 \\frac{d^2y}{dx^2} - 3x \\frac{dy}{dx} + 4y = 0$.",
    "solution": "Substitute $x = e^z \\implies x \\frac{dy}{dx} = D y, x^2 \\frac{d^2y}{dx^2} = D(D-1)y$: $$[D(D-1) - 3D + 4]y = 0 \\implies (D^2 - 4D + 4)y = 0$$ Auxiliary equation: $m^2 - 4m + 4 = 0 \\implies (m - 2)^2 = 0 \\implies m = 2, 2$ (Repeated roots). Solution in $z$: $y = (C_1 + C_2 z) e^{2z}$. Convert back $z = \\ln x, e^{2z} = x^2$: $$\\mathbf{y = (C_1 + C_2 \\ln x) x^2}$$",
    "answer": "y = (C_1 + C_2 \\ln x) x^2"
  },
  {
    "id": "q20",
    "unitId": 5,
    "type": "short",
    "marks": 5,
    "tags": [
      "Extra_Practice",
      "Unit_V"
    ],
    "topic": "First-Order Linear DE",
    "question": "Solve the differential equation: $\\frac{dy}{dx} + 2x y = 4x$.",
    "solution": "Standard 1st-order LDE with $P(x) = 2x$ and $Q(x) = 4x$. 1. Integrating Factor: $$\\text{IF} = e^{\\int 2x dx} = e^{x^2}$$ 2. General solution: $$y \\cdot e^{x^2} = \\int 4x e^{x^2} dx + C$$ Substitute $u = x^2 \\implies du = 2x dx$: $$y \\cdot e^{x^2} = 2 e^{x^2} + C \\implies \\mathbf{y = 2 + C e^{-x^2}}$$ "
  }
];

  /**
   * UI & DOM CONTROLLER ENGINE
   */
  const EM1App = {
    subjectInfo,
    courseNotes,
    formulaDeck,
    questionBank,
    state: {
      activeTab: 'notes',
      activeUnit: 'all',
      searchQuery: '',
      userAnswers: {},
      score: 0,
    },

    initDOMController(containerId) {
      const container = document.getElementById(containerId);
      if (!container) {
        console.error('Container #' + containerId + ' not found.');
        return;
      }

      // Inject App HTML Structure
      container.innerHTML = this.renderAppHTML();
      this.bindEvents(container);
      this.loadKaTeXAndRender(container);
    },

    loadKaTeXAndRender(container) {
      if (!document.getElementById('katex-css')) {
        const css = document.createElement('link');
        css.id = 'katex-css';
        css.rel = 'stylesheet';
        css.href = 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css';
        document.head.appendChild(css);
      }

      const renderMath = () => {
        if (window.renderMathInElement) {
          window.renderMathInElement(container, {
            delimiters: [
              { left: '$$', right: '$$', display: true },
              { left: '\[', right: '\]', display: true },
              { left: '$', right: '$', display: false },
              { left: '\(', right: '\)', display: false }
            ],
            throwOnError: false
          });
        }
      };

      if (window.renderMathInElement) {
        renderMath();
      } else {
        const script1 = document.createElement('script');
        script1.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js';
        script1.onload = () => {
          const script2 = document.createElement('script');
          script2.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js';
          script2.onload = renderMath;
          document.head.appendChild(script2);
        };
        document.head.appendChild(script1);
      }
    },

    renderAppHTML() {
      return `
        <div style="font-family: system-ui, -apple-system, sans-serif; background: #0f172a; color: #f8fafc; padding: 24px; min-height: 100vh; box-sizing: border-box;">
          
          <!-- Header Banner -->
          <div style="background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%); border: 1px solid #4338ca; border-radius: 16px; padding: 28px; margin-bottom: 24px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.5);">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
              <div>
                <span style="background: #4f46e5; color: #fff; font-size: 12px; font-weight: 700; padding: 4px 12px; border-radius: 9999px; text-transform: uppercase; letter-spacing: 0.05em;">
                  ${this.subjectInfo.code} • Sem ${this.subjectInfo.semester}
                </span>
                <h1 style="font-size: 28px; font-weight: 800; margin: 12px 0 6px 0; color: #ffffff;">
                  ${this.subjectInfo.title}
                </h1>
                <p style="color: #c7d2fe; margin: 0; font-size: 14px; max-width: 600px;">
                  ${this.subjectInfo.description}
                </p>
              </div>
              <div style="background: rgba(15, 23, 42, 0.6); padding: 12px 20px; border-radius: 12px; border: 1px solid #3730a3; text-align: right;">
                <div style="font-size: 11px; color: #a5b4fc; text-transform: uppercase;">Institute</div>
                <div style="font-size: 13px; font-weight: 700; color: #fff;">${this.subjectInfo.institution}</div>
              </div>
            </div>
          </div>

          <!-- Navigation Tabs -->
          <div style="display: flex; gap: 12px; margin-bottom: 20px; border-bottom: 2px solid #1e293b; padding-bottom: 12px; flex-wrap: wrap;">
            <button class="em1-tab-btn ${this.state.activeTab === 'notes' ? 'active' : ''}" data-tab="notes" style="${this.getTabStyle('notes')}">
              📘 Master Notes
            </button>
            <button class="em1-tab-btn ${this.state.activeTab === 'formulas' ? 'active' : ''}" data-tab="formulas" style="${this.getTabStyle('formulas')}">
              📟 Formula Deck
            </button>
            <button class="em1-tab-btn ${this.state.activeTab === 'questions' ? 'active' : ''}" data-tab="questions" style="${this.getTabStyle('questions')}">
              📚 Question Bank (${this.questionBank.length})
            </button>
            <button class="em1-tab-btn ${this.state.activeTab === 'blueprint' ? 'active' : ''}" data-tab="blueprint" style="${this.getTabStyle('blueprint')}">
              🧮 Calculator & Exam Strategy
            </button>
          </div>

          <!-- Filter & Search Bar -->
          <div style="display: flex; gap: 12px; margin-bottom: 24px; flex-wrap: wrap; align-items: center; background: #1e293b; padding: 12px 16px; border-radius: 12px;">
            <span style="font-size: 13px; font-weight: 600; color: #94a3b8;">Filter Unit:</span>
            <select id="em1-unit-filter" style="background: #0f172a; color: #f8fafc; border: 1px solid #334155; padding: 6px 12px; border-radius: 8px; font-size: 13px;">
              <option value="all">All Units (I - VI)</option>
              <option value="1">Unit I: Multivariable Calculus</option>
              <option value="2">Unit II: Infinite Series</option>
              <option value="3">Unit III: Improper Integrals</option>
              <option value="4">Unit IV: Multiple Integration</option>
              <option value="5">Unit V: Differential Equations</option>
              <option value="6">Unit VI: Calculator Blueprint</option>
            </select>
          </div>

          <!-- Main Content View Area -->
          <div id="em1-view-area">
            ${this.renderCurrentView()}
          </div>
        </div>
      `;
    },

    getTabStyle(tabKey) {
      const isActive = this.state.activeTab === tabKey;
      return `
        background: ${isActive ? '#4f46e5' : '#1e293b'};
        color: ${isActive ? '#ffffff' : '#94a3b8'};
        border: 1px solid ${isActive ? '#6366f1' : '#334155'};
        padding: 10px 18px;
        border-radius: 10px;
        font-weight: 600;
        font-size: 14px;
        cursor: pointer;
        transition: all 0.2s ease;
      `;
    },

    renderCurrentView() {
      if (this.state.activeTab === 'notes') return this.renderNotesView();
      if (this.state.activeTab === 'formulas') return this.renderFormulasView();
      if (this.state.activeTab === 'questions') return this.renderQuestionsView();
      if (this.state.activeTab === 'blueprint') return this.renderBlueprintView();
      return '';
    },

    renderNotesView() {
      const filtered = this.courseNotes.filter(u => this.state.activeUnit === 'all' || u.unitId == this.state.activeUnit);
      return filtered.map(unit => `
        <div style="background: #1e293b; border-left: 6px solid ${unit.color}; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
          <h2 style="color: ${unit.color}; margin-top: 0; font-size: 20px; border-bottom: 1px solid #334155; padding-bottom: 10px;">
            ${unit.unitTitle}
          </h2>
          ${unit.subtopics.map(sub => `
            <div style="background: #0f172a; border-radius: 10px; padding: 16px; margin: 14px 0; border: 1px solid #334155;">
              <h3 style="color: #38bdf8; margin-top: 0; font-size: 16px;">${sub.title}</h3>
              <div style="font-size: 14px; color: #cbd5e1; line-height: 1.6;">${sub.content}</div>
              ${sub.examTip ? `
                <div style="background: rgba(245, 158, 11, 0.1); border: 1px solid #f59e0b; color: #fbbf24; padding: 8px 12px; border-radius: 6px; font-size: 12px; margin-top: 12px;">
                  💡 <strong>Exam Tip:</strong> ${sub.examTip}
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      `).join('');
    },

    renderFormulasView() {
      const filtered = this.formulaDeck.filter(f => this.state.activeUnit === 'all' || f.unitId == this.state.activeUnit);
      return `
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 16px;">
          ${filtered.map(f => `
            <div style="background: #1e293b; border: 1px solid #334155; border-radius: 12px; padding: 18px; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <span style="background: #312e81; color: #a5b4fc; font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 6px;">Unit ${f.unitId}</span>
                <h4 style="color: #f1f5f9; margin: 8px 0 12px 0; font-size: 15px;">${f.title}</h4>
                <div style="background: #0f172a; padding: 12px; border-radius: 8px; border: 1px solid #475569; text-align: center; margin-bottom: 12px;">
                  $${f.formula}$$
                </div>
                <p style="font-size: 12px; color: #94a3b8; margin: 0 0 10px 0;">${f.explanation}</p>
              </div>
              ${f.calcTip ? `
                <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid #10b981; color: #34d399; padding: 6px 10px; border-radius: 6px; font-size: 11px;">
                  📟 ${f.calcTip}
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      `;
    },

    renderQuestionsView() {
      const filtered = this.questionBank.filter(q => this.state.activeUnit === 'all' || q.unitId == this.state.activeUnit);
      return filtered.map((q, idx) => `
        <div style="background: #1e293b; border: 1px solid #334155; border-radius: 12px; padding: 20px; margin-bottom: 18px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              <span style="background: #4f46e5; color: #fff; font-size: 11px; font-weight: 700; padding: 3px 8px; border-radius: 6px;">Unit ${q.unitId} • ${q.topic}</span>
              ${q.tags.map(t => `<span style="background: #334155; color: #cbd5e1; font-size: 11px; padding: 3px 8px; border-radius: 6px;">${t}</span>`).join('')}
            </div>
            <span style="background: #059669; color: #fff; font-size: 11px; font-weight: 700; padding: 3px 8px; border-radius: 6px;">${q.marks} Marks</span>
          </div>

          <div style="font-size: 15px; color: #f8fafc; margin-bottom: 16px;">
            <strong>Q${idx + 1}:</strong> ${q.question}
          </div>

          ${q.options ? `
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 16px;">
              ${q.options.map((opt, optIdx) => `
                <button class="em1-opt-btn" data-qid="${q.id}" data-opt="${optIdx}" style="background: #0f172a; color: #cbd5e1; border: 1px solid #334155; padding: 10px; border-radius: 8px; text-align: left; cursor: pointer; font-size: 13px;">
                  <strong>${String.fromCharCode(65 + optIdx)}.</strong> ${opt}
                </button>
              `).join('')}
            </div>
          ` : ''}

          <details style="background: #0f172a; padding: 12px 16px; border-radius: 8px; border: 1px solid #334155;">
            <summary style="cursor: pointer; color: #38bdf8; font-weight: 600; font-size: 13px;">View Step-by-Step Solution & Answer</summary>
            <div style="margin-top: 12px; font-size: 13px; color: #e2e8f0; line-height: 1.6;">
              ${q.solution}
              ${q.calcTip ? `<div style="margin-top: 8px; color: #34d399;">📟 <strong>Calculator Shortcut:</strong> ${q.calcTip}</div>` : ''}
            </div>
          </details>
        </div>
      `).join('');
    },

    renderBlueprintView() {
      const bp = this.courseNotes.find(n => n.unitId === 6);
      if (!bp) return '';
      return `
        <div style="background: #1e293b; border-radius: 12px; padding: 24px; border: 1px solid #334155;">
          <h2 style="color: #38bdf8; margin-top: 0;">${bp.unitTitle}</h2>
          ${bp.subtopics.map(sub => `
            <div style="background: #0f172a; border-radius: 10px; padding: 18px; margin-top: 16px; border: 1px solid #334155;">
              <h3 style="color: #fbbf24; margin-top: 0;">${sub.title}</h3>
              <div style="font-size: 14px; color: #e2e8f0; line-height: 1.6;">${sub.content}</div>
            </div>
          `).join('')}
        </div>
      `;
    },

    bindEvents(container) {
      container.addEventListener('click', (e) => {
        const tabBtn = e.target.closest('.em1-tab-btn');
        if (tabBtn) {
          this.state.activeTab = tabBtn.dataset.tab;
          container.innerHTML = this.renderAppHTML();
          this.loadKaTeXAndRender(container);
          return;
        }

        const optBtn = e.target.closest('.em1-opt-btn');
        if (optBtn) {
          const qid = optBtn.dataset.qid;
          const selectedOpt = parseInt(optBtn.dataset.opt, 10);
          const q = this.questionBank.find(item => item.id === qid);
          if (q) {
            if (selectedOpt === q.correctAnswerIndex) {
              optBtn.style.background = '#065f46';
              optBtn.style.borderColor = '#10b981';
              optBtn.style.color = '#ffffff';
            } else {
              optBtn.style.background = '#991b1b';
              optBtn.style.borderColor = '#ef4444';
              optBtn.style.color = '#ffffff';
            }
          }
        }
      });

      const unitSelect = container.querySelector('#em1-unit-filter');
      if (unitSelect) {
        unitSelect.value = this.state.activeUnit;
        unitSelect.addEventListener('change', (e) => {
          this.state.activeUnit = e.target.value;
          const viewArea = container.querySelector('#em1-view-area');
          if (viewArea) {
            viewArea.innerHTML = this.renderCurrentView();
            this.loadKaTeXAndRender(viewArea);
          }
        });
      }
    }
  };

  global.EM1App = EM1App;

  // Auto-mount if #em1-app element exists on load
  if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
      if (document.getElementById('em1-app')) {
        EM1App.initDOMController('em1-app');
      }
    });
  }

})(typeof window !== 'undefined' ? window : this);
