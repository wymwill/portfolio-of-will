import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CDKgfJIX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AtmosphericBackground() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": "true",
		className: "pointer-events-none fixed inset-0 z-0 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "radial-gradient(ellipse at 20% 0%, oklch(0.2 0.045 290) 0%, transparent 55%), radial-gradient(ellipse at 90% 100%, oklch(0.18 0.05 265) 0%, transparent 60%), oklch(0.12 0.025 285)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				className: "absolute inset-0 h-full w-full opacity-[0.08]",
				xmlns: "http://www.w3.org/2000/svg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pattern", {
						id: "grid",
						width: "48",
						height: "48",
						patternUnits: "userSpaceOnUse",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M 48 0 L 0 0 0 48",
							fill: "none",
							stroke: "var(--brass)",
							strokeWidth: "0.5"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pattern", {
						id: "grid-major",
						width: "240",
						height: "240",
						patternUnits: "userSpaceOnUse",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M 240 0 L 0 0 0 240",
							fill: "none",
							stroke: "var(--brass)",
							strokeWidth: "1"
						})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: "100%",
						height: "100%",
						fill: "url(#grid)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: "100%",
						height: "100%",
						fill: "url(#grid-major)"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Starfield, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConstellationLayer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				className: "absolute -right-40 -top-40 h-[500px] w-[500px] opacity-[0.06]",
				viewBox: "0 0 400 400",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					fill: "none",
					stroke: "var(--brass)",
					strokeWidth: "0.7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "200",
							cy: "200",
							r: "180"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "200",
							cy: "200",
							r: "140",
							strokeDasharray: "2 6"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "200",
							cy: "200",
							r: "100"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "200",
							cy: "200",
							r: "60",
							strokeDasharray: "1 4"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "radial-gradient(ellipse at center, transparent 40%, oklch(0.07 0.018 260 / 0.85) 100%)" }
			})
		]
	});
}
function Starfield() {
	const stars = [];
	let s = 1337;
	const rand = () => {
		s = (s * 9301 + 49297) % 233280;
		return s / 233280;
	};
	for (let i = 0; i < 90; i++) stars.push({
		x: rand() * 100,
		y: rand() * 100,
		r: rand() * 1.1 + .3,
		d: rand() * 5
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className: "absolute inset-0 h-full w-full",
		preserveAspectRatio: "none",
		children: stars.map((st, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: `${st.x}%`,
			cy: `${st.y}%`,
			r: st.r,
			fill: "var(--parchment)",
			opacity: .5,
			className: "animate-twinkle",
			style: { animationDelay: `${st.d}s` }
		}, i))
	});
}
var CONSTELLATIONS = [
	{
		name: "Aries",
		left: 6,
		top: 10,
		size: 200,
		fy: -.06,
		fx: .01,
		fr: .003,
		points: [
			[88, 22],
			[62, 38],
			[32, 54],
			[24, 66]
		],
		edges: [
			[0, 1],
			[1, 2],
			[2, 3]
		]
	},
	{
		name: "Taurus",
		left: 64,
		top: 52,
		size: 240,
		fy: -.1,
		fx: -.012,
		fr: -.003,
		points: [
			[20, 12],
			[64, 8],
			[42, 38],
			[52, 44],
			[58, 52],
			[46, 56],
			[34, 74],
			[26, 88]
		],
		edges: [
			[0, 2],
			[1, 4],
			[2, 3],
			[3, 5],
			[4, 5],
			[5, 6],
			[6, 7]
		]
	},
	{
		name: "Gemini",
		left: 36,
		top: 64,
		size: 190,
		fy: -.08,
		fx: .008,
		fr: .004,
		points: [
			[38, 8],
			[62, 14],
			[34, 34],
			[58, 38],
			[30, 62],
			[56, 64],
			[22, 88],
			[50, 90]
		],
		edges: [
			[0, 2],
			[1, 3],
			[2, 4],
			[3, 5],
			[4, 6],
			[5, 7],
			[2, 3],
			[4, 5]
		]
	},
	{
		name: "Cancer",
		left: 76,
		top: 8,
		size: 190,
		fy: -.07,
		fx: -.01,
		fr: .003,
		points: [
			[48, 14],
			[46, 40],
			[28, 62],
			[60, 58],
			[68, 82]
		],
		edges: [
			[0, 1],
			[1, 2],
			[1, 3],
			[3, 4]
		]
	},
	{
		name: "Leo",
		left: 6,
		top: 46,
		size: 230,
		fy: -.14,
		fx: .018,
		fr: .004,
		points: [
			[70, 12],
			[60, 20],
			[56, 32],
			[62, 42],
			[72, 46],
			[40, 44],
			[16, 52],
			[28, 70],
			[58, 66]
		],
		edges: [
			[0, 1],
			[1, 2],
			[2, 3],
			[3, 4],
			[3, 5],
			[5, 6],
			[6, 7],
			[7, 8],
			[8, 4]
		]
	},
	{
		name: "Virgo",
		left: 42,
		top: 6,
		size: 230,
		fy: -.09,
		fx: -.008,
		fr: -.004,
		points: [
			[18, 22],
			[32, 30],
			[48, 24],
			[62, 14],
			[42, 44],
			[34, 62],
			[50, 74],
			[64, 56]
		],
		edges: [
			[0, 1],
			[1, 2],
			[2, 3],
			[1, 4],
			[4, 5],
			[5, 6],
			[4, 7]
		]
	},
	{
		name: "Libra",
		left: 72,
		top: 60,
		size: 200,
		fy: -.12,
		fx: -.014,
		fr: .003,
		points: [
			[36, 60],
			[52, 16],
			[70, 34],
			[42, 84],
			[80, 64]
		],
		edges: [
			[0, 1],
			[1, 2],
			[2, 0],
			[0, 3],
			[2, 4]
		]
	},
	{
		name: "Scorpius",
		left: 10,
		top: 18,
		size: 240,
		fy: -.11,
		fx: .016,
		fr: -.004,
		points: [
			[24, 10],
			[16, 20],
			[14, 32],
			[26, 38],
			[32, 52],
			[38, 66],
			[48, 78],
			[62, 84],
			[76, 80],
			[84, 68],
			[76, 60]
		],
		edges: [
			[0, 3],
			[1, 3],
			[2, 3],
			[3, 4],
			[4, 5],
			[5, 6],
			[6, 7],
			[7, 8],
			[8, 9],
			[9, 10]
		]
	},
	{
		name: "Sagittarius",
		left: 58,
		top: 12,
		size: 220,
		fy: -.1,
		fx: -.01,
		fr: .004,
		points: [
			[48, 28],
			[34, 38],
			[58, 40],
			[18, 50],
			[36, 66],
			[60, 64],
			[72, 46],
			[74, 64]
		],
		edges: [
			[3, 1],
			[1, 0],
			[0, 2],
			[1, 4],
			[4, 5],
			[2, 5],
			[2, 6],
			[6, 7],
			[7, 5]
		]
	},
	{
		name: "Capricornus",
		left: 28,
		top: 42,
		size: 210,
		fy: -.16,
		fx: .01,
		fr: .005,
		points: [
			[12, 24],
			[20, 36],
			[36, 58],
			[52, 66],
			[70, 56],
			[84, 34],
			[78, 22]
		],
		edges: [
			[0, 1],
			[1, 2],
			[2, 3],
			[3, 4],
			[4, 5],
			[5, 6],
			[6, 0]
		]
	},
	{
		name: "Aquarius",
		left: 74,
		top: 32,
		size: 210,
		fy: -.08,
		fx: -.012,
		fr: -.003,
		points: [
			[16, 30],
			[28, 22],
			[40, 32],
			[52, 24],
			[60, 36],
			[50, 52],
			[58, 68],
			[44, 82]
		],
		edges: [
			[0, 1],
			[1, 2],
			[2, 3],
			[3, 4],
			[4, 5],
			[5, 6],
			[6, 7]
		]
	},
	{
		name: "Pisces",
		left: 12,
		top: 62,
		size: 220,
		fy: -.13,
		fx: .014,
		fr: .004,
		points: [
			[16, 22],
			[24, 14],
			[32, 20],
			[26, 30],
			[34, 46],
			[42, 64],
			[50, 78],
			[64, 70],
			[78, 60],
			[88, 48],
			[82, 40]
		],
		edges: [
			[0, 1],
			[1, 2],
			[2, 3],
			[3, 0],
			[3, 4],
			[4, 5],
			[5, 6],
			[6, 7],
			[7, 8],
			[8, 9],
			[9, 10],
			[10, 8]
		]
	}
];
var WINDOW_HALF = .21;
var windowFor = (i) => {
	const center = i / (CONSTELLATIONS.length - 1);
	return [Math.max(0, center - WINDOW_HALF), Math.min(1, center + WINDOW_HALF)];
};
function windowOpacity(p, [a, b]) {
	const fade = .15 * (b - a);
	const enter = a <= 0 ? 1 : (p - a) / fade;
	const exit = b >= 1 ? 1 : (b - p) / fade;
	return Math.min(Math.max(Math.min(enter, exit, 1), 0), 1);
}
function ConstellationLayer() {
	const rootRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const root = rootRef.current;
		if (!root) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const layers = Array.from(root.children);
		let raf = 0;
		const apply = () => {
			raf = 0;
			const y = window.scrollY;
			const max = document.documentElement.scrollHeight - window.innerHeight;
			const p = max > 0 ? Math.min(Math.max(y / max, 0), 1) : 0;
			layers.forEach((el, i) => {
				const c = CONSTELLATIONS[i];
				const d = p - i / (CONSTELLATIONS.length - 1);
				el.style.transform = `translate3d(${d * c.fx * 3e3}px, ${d * c.fy * 3e3}px, 0) rotate(${d * c.fr * 3e3}deg)`;
				el.style.opacity = String(windowOpacity(p, windowFor(i)));
			});
		};
		const onScroll = () => {
			if (!raf) raf = requestAnimationFrame(apply);
		};
		apply();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", onScroll);
			if (raf) cancelAnimationFrame(raf);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: rootRef,
		className: "absolute inset-0",
		children: CONSTELLATIONS.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 100 100",
			className: "absolute will-change-transform",
			style: {
				left: `${c.left}%`,
				top: `${c.top}%`,
				width: c.size,
				height: c.size,
				opacity: windowOpacity(0, windowFor(i))
			},
			children: [c.edges.map(([a, b], j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: c.points[a][0],
				y1: c.points[a][1],
				x2: c.points[b][0],
				y2: c.points[b][1],
				stroke: "var(--brass)",
				strokeWidth: "0.45",
				strokeDasharray: "1.5 2.5",
				opacity: "0.55"
			}, j)), c.points.map(([x, y], j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: x,
				cy: y,
				r: "2",
				fill: "var(--brass)",
				opacity: "0.4"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: x,
				cy: y,
				r: "1",
				fill: "var(--parchment)",
				opacity: "1",
				className: "animate-twinkle",
				style: { animationDelay: `${(i * 1.3 + j * .7) % 5}s` }
			})] }, j))]
		}, c.name))
	});
}
function ArchiveSurface({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative z-10",
		children
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
	const [isMobile, setIsMobile] = import_react.useState(void 0);
	import_react.useEffect(() => {
		const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
		const onChange = () => {
			setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		};
		mql.addEventListener("change", onChange);
		setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		return () => mql.removeEventListener("change", onChange);
	}, []);
	return !!isMobile;
}
var PROFILE = {
	name: "Will Wands",
	disciplines: [
		"Robotics",
		"Autonomous Systems",
		"Computer Vision",
		"Software Engineering"
	],
	tagline: "I build intelligent systems where software meets the physical world.",
	school: "Rutgers University — Honors School of Engineering",
	program: "Electrical & Computer Engineering and Computer Science",
	bio: ["I am an engineer drawn to the boundary between code and the physical world — where a well-tuned algorithm becomes a machine that perceives, decides, and moves. My work sits at the intersection of robotics, computer vision, and the systems software that binds them.", "At Rutgers I study Computer Engineering and Computer Science, and I spend my time leading autonomous vehicle software, mentoring younger programmers, and researching planning algorithms for aerial platforms."],
	interests: [
		"Autonomous navigation",
		"Perception & sensor fusion",
		"Motion planning",
		"Hardware–software integration",
		"Automation tooling",
		"Real-time systems"
	],
	links: {
		email: "mailto:willwands@gmail.com",
		github: "https://github.com/willwands",
		linkedin: "https://www.linkedin.com/in/wowands",
		resume: "/resume.pdf"
	}
};
function CardBackArt() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 80 120",
		className: "h-full w-full",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "3.5",
				y: "3.5",
				width: "73",
				height: "113",
				rx: "5",
				fill: "none",
				stroke: "var(--brass)",
				strokeWidth: "1",
				opacity: "0.9"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "7",
				y: "7",
				width: "66",
				height: "106",
				rx: "3",
				fill: "none",
				stroke: "var(--brass)",
				strokeWidth: "0.5",
				opacity: "0.55"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CornerGear, {
				cx: 12,
				cy: 12
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CornerGear, {
				cx: 68,
				cy: 12
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CornerGear, {
				cx: 12,
				cy: 108
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CornerGear, {
				cx: 68,
				cy: 108
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				stroke: "var(--brass)",
				strokeWidth: "0.7",
				fill: "none",
				opacity: "0.85",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M40 16 L43 24 L40 30 L37 24 Z",
						fill: "var(--brass)",
						fillOpacity: "0.25"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M40 104 L43 96 L40 90 L37 96 Z",
						fill: "var(--brass)",
						fillOpacity: "0.25"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "40",
						y1: "30",
						x2: "40",
						y2: "36"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "40",
						y1: "84",
						x2: "40",
						y2: "90"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "40",
					cy: "60",
					r: "24",
					fill: "none",
					stroke: "var(--brass)",
					strokeWidth: "0.6",
					strokeDasharray: "2 3",
					opacity: "0.7"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "40",
					cy: "60",
					r: "19",
					fill: "none",
					stroke: "var(--brass)",
					strokeWidth: "0.9"
				}),
				Array.from({ length: 12 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "40",
					y1: "38.5",
					x2: "40",
					y2: "41",
					stroke: "var(--brass)",
					strokeWidth: "1.6",
					transform: `rotate(${i * 30} 40 60)`
				}, i)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					fill: "var(--brass)",
					fillOpacity: "0.85",
					stroke: "var(--brass-bright)",
					strokeWidth: "0.3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", { points: "40,44 42.5,57.5 40,60 37.5,57.5" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", { points: "40,76 42.5,62.5 40,60 37.5,62.5" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", { points: "24,60 37.5,62.5 40,60 37.5,57.5" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", { points: "56,60 42.5,62.5 40,60 42.5,57.5" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					fill: "var(--brass)",
					fillOpacity: "0.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", { points: "30,50 38,58 40,60 36,56" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", { points: "50,50 42,58 40,60 44,56" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", { points: "30,70 38,62 40,60 36,64" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", { points: "50,70 42,62 40,60 44,64" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "40",
					cy: "60",
					r: "3.2",
					fill: "var(--brass-bright)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "40",
					cy: "60",
					r: "1.4",
					fill: "var(--arcane-bright)"
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				fill: "var(--brass-bright)",
				opacity: "0.7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 34 l1 2 l2 1 l-2 1 l-1 2 l-1 -2 l-2 -1 l2 -1 Z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M60 86 l1 2 l2 1 l-2 1 l-1 2 l-1 -2 l-2 -1 l2 -1 Z" })]
			})
		]
	});
}
function CornerGear({ cx, cy }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx,
			cy,
			r: "4",
			fill: "none",
			stroke: "var(--brass)",
			strokeWidth: "0.8",
			opacity: "0.9"
		}),
		Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: cx,
			y1: cy - 4,
			x2: cx,
			y2: cy - 5.5,
			stroke: "var(--brass)",
			strokeWidth: "1",
			transform: `rotate(${i * 45} ${cx} ${cy})`,
			opacity: "0.9"
		}, i)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx,
			cy,
			r: "1.3",
			fill: "var(--brass)",
			opacity: "0.9"
		})
	] });
}
var CARDS = [
	{
		id: "hero",
		title: "The Mystic",
		section: "Home",
		symbol: "✦",
		romanNumeral: "I",
		target: "#hero"
	},
	{
		id: "about",
		title: "The Alchemist",
		section: "About",
		symbol: "☽",
		romanNumeral: "II",
		target: "#about"
	},
	{
		id: "skills",
		title: "The Adept",
		section: "Skills",
		symbol: "✶",
		romanNumeral: "III",
		target: "#skills"
	},
	{
		id: "experience",
		title: "The Arcana",
		section: "Experience",
		symbol: "⚙",
		romanNumeral: "IV",
		target: "#experience"
	},
	{
		id: "projects",
		title: "The Forge",
		section: "Projects",
		symbol: "◈",
		romanNumeral: "V",
		target: "#projects"
	},
	{
		id: "contact",
		title: "The Oracle",
		section: "Contact",
		symbol: "◬",
		romanNumeral: "VI",
		target: "#contact"
	}
];
function TarotNav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [topHover, setTopHover] = (0, import_react.useState)(false);
	const [headerFocus, setHeaderFocus] = (0, import_react.useState)(false);
	const [finePointer, setFinePointer] = (0, import_react.useState)(true);
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("hero");
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 60);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia("(pointer: fine)");
		const update = () => setFinePointer(mq.matches);
		update();
		mq.addEventListener("change", update);
		return () => mq.removeEventListener("change", update);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!finePointer) return;
		const onMove = (e) => {
			setTopHover((prev) => prev ? e.clientY <= 160 : e.clientY <= 80);
		};
		const onLeave = () => setTopHover(false);
		window.addEventListener("mousemove", onMove, { passive: true });
		document.documentElement.addEventListener("mouseleave", onLeave);
		return () => {
			window.removeEventListener("mousemove", onMove);
			document.documentElement.removeEventListener("mouseleave", onLeave);
		};
	}, [finePointer]);
	(0, import_react.useEffect)(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) setActive(e.target.id);
			});
		}, {
			rootMargin: "-40% 0px -55% 0px",
			threshold: 0
		});
		CARDS.forEach((card) => {
			const el = document.getElementById(card.id);
			if (el) observer.observe(el);
		});
		return () => observer.disconnect();
	}, []);
	const cardsVisible = !scrolled;
	const headerVisible = scrolled && (topHover || headerFocus || menuOpen || !finePointer);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#main",
			className: "font-mono-archive sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-brass focus:px-3 focus:py-2 focus:text-ink-deep",
			children: "Skip to content"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			"aria-label": "Primary",
			onFocusCapture: () => setHeaderFocus(true),
			onBlurCapture: (e) => {
				if (!e.currentTarget.contains(e.relatedTarget)) {
					setHeaderFocus(false);
					setMenuOpen(false);
				}
			},
			className: cn("fixed left-0 right-0 top-0 z-50 border-b border-brass/20 bg-ink-deep/85 backdrop-blur-md transition-transform duration-400", headerVisible ? "translate-y-0" : "-translate-y-full"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#hero",
						className: "group flex items-center gap-3",
						"aria-label": `${PROFILE.name} — home`,
						tabIndex: headerVisible ? void 0 : -1,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monogram, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden flex-col leading-tight sm:flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-lg text-parchment",
								children: PROFILE.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono-archive text-parchment-dim",
								children: "Archive"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden items-center gap-1 md:flex",
						children: [CARDS.map((card) => {
							const isActive = active === card.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: card.target,
								tabIndex: headerVisible ? void 0 : -1,
								className: cn("font-mono-archive relative px-3 py-2 transition-colors", isActive ? "text-brass-bright" : "text-parchment-dim hover:text-parchment"),
								children: [card.section, isActive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									className: "absolute -bottom-0.5 left-1/2 h-[2px] w-6 -translate-x-1/2 bg-brass"
								}) : null]
							}, card.id);
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: PROFILE.links.resume,
							tabIndex: headerVisible ? void 0 : -1,
							className: "font-mono-plex archive-frame ml-2 inline-flex items-center gap-2 px-4 py-2 text-ink-deep transition-transform hover:-translate-y-0.5",
							style: {
								"--af-border": "var(--brass-dim)",
								"--af-bg": "var(--brass)",
								"--af-bg-hover": "var(--brass-bright)"
							},
							children: "Résumé"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setMenuOpen((v) => !v),
						"aria-label": menuOpen ? "Close menu" : "Open menu",
						"aria-expanded": menuOpen,
						tabIndex: headerVisible ? void 0 : -1,
						className: "archive-frame font-mono-plex px-3 py-2 text-parchment md:hidden",
						style: {
							"--af-border": "color-mix(in oklab, var(--brass) 50%, transparent)",
							"--af-bg": "color-mix(in oklab, var(--ink) 80%, var(--ink-deep))",
							"--af-bg-hover": "var(--ink)"
						},
						children: menuOpen ? "Close" : "Menu"
					})
				]
			}), menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-brass/20 bg-ink-deep/95 backdrop-blur md:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3",
					children: [CARDS.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: card.target,
						onClick: () => setMenuOpen(false),
						className: "font-mono-archive rounded-sm px-3 py-3 text-parchment hover:bg-ink",
						children: card.section
					}, card.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: PROFILE.links.resume,
						className: "font-mono-plex archive-frame mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 text-ink-deep",
						style: {
							"--af-border": "var(--brass-dim)",
							"--af-bg": "var(--brass)",
							"--af-bg-hover": "var(--brass-bright)"
						},
						children: "Résumé"
					})]
				})
			}) : null]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			"aria-label": "Section cards",
			"aria-hidden": !cardsVisible,
			className: cn("fixed left-0 right-0 top-0 z-40 flex justify-center bg-gradient-to-b from-ink-deep/70 to-transparent py-4 transition-all duration-500", cardsVisible ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-24 opacity-0"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-end justify-center gap-2 sm:gap-4",
				children: CARDS.map((card, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TarotCardLink, {
					card,
					index: i,
					isActive: active === card.id,
					tabbable: cardsVisible
				}, card.id))
			})
		})
	] });
}
function Monogram() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 44 44",
		className: "h-9 w-9 text-brass transition-transform duration-500 group-hover:rotate-90",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "22",
				cy: "22",
				r: "20",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "22",
				cy: "22",
				r: "16",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "0.5",
				strokeDasharray: "2 3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M13 16 L17 30 L22 20 L27 30 L31 16",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.4",
				strokeLinejoin: "miter"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "22",
				cy: "22",
				r: "1.6",
				fill: "currentColor"
			})
		]
	});
}
function TarotCardLink({ card, index, isActive, tabbable }) {
	const [revealed, setRevealed] = (0, import_react.useState)(false);
	const isMobile = useIsMobile();
	const flipped = revealed || isActive;
	const w = isMobile ? 46 : 78;
	const h = Math.round(w * 1.5);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: card.target,
		"aria-label": `${card.title} — go to ${card.section}`,
		"aria-current": isActive ? "true" : void 0,
		tabIndex: tabbable ? void 0 : -1,
		onMouseEnter: () => setRevealed(true),
		onMouseLeave: () => setRevealed(false),
		onFocus: () => setRevealed(true),
		onBlur: () => setRevealed(false),
		className: cn("tarot-card block", flipped && "is-flipped"),
		style: {
			width: w,
			height: h,
			transform: revealed ? "translateY(-6px)" : isActive ? "translateY(-3px)" : "none",
			transition: "transform 0.3s ease, filter 0.3s ease",
			filter: isActive ? "drop-shadow(0 0 14px color-mix(in oklab, var(--arcane) 55%, transparent))" : revealed ? "drop-shadow(0 0 10px color-mix(in oklab, var(--brass) 40%, transparent))" : "drop-shadow(0 6px 12px color-mix(in oklab, black 60%, transparent))",
			animation: `card-rise 0.6s cubic-bezier(0.2, 0.7, 0.2, 1) ${index * .1}s both`
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "tarot-card-inner",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "tarot-card-face tarot-card-back",
				style: {
					border: "1px solid color-mix(in oklab, var(--brass) 45%, transparent)",
					background: "linear-gradient(165deg, color-mix(in oklab, var(--arcane) 16%, var(--ink-deep)) 0%, color-mix(in oklab, var(--arcane) 8%, var(--ink-deep)) 100%)"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardBackArt, {})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "tarot-card-face tarot-card-front flex flex-col items-center justify-between px-1 py-2",
				style: {
					border: `1px solid ${isActive ? "color-mix(in oklab, var(--brass-bright) 75%, transparent)" : "color-mix(in oklab, var(--brass) 40%, transparent)"}`,
					background: "radial-gradient(ellipse at 30% 15%, color-mix(in oklab, var(--brass) 12%, transparent), transparent 60%), linear-gradient(180deg, oklch(0.20 0.022 260), oklch(0.13 0.02 260))",
					boxShadow: isActive ? "inset 0 0 16px color-mix(in oklab, var(--arcane) 20%, transparent)" : "inset 0 0 12px color-mix(in oklab, black 40%, transparent)"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono-archive",
						style: {
							fontSize: 9,
							letterSpacing: "0.1em",
							color: isActive ? "var(--brass-bright)" : "var(--parchment-dim)"
						},
						children: card.romanNumeral
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						style: {
							fontSize: isMobile ? 16 : 24,
							lineHeight: 1,
							color: isActive ? "var(--brass-bright)" : "var(--arcane)",
							filter: isActive ? "drop-shadow(0 0 6px color-mix(in oklab, var(--brass-bright) 60%, transparent))" : "none",
							transition: "color 0.3s ease"
						},
						children: card.symbol
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex flex-col items-center gap-0.5 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display",
							style: {
								fontSize: isMobile ? 7 : 9.5,
								lineHeight: 1.15,
								letterSpacing: "0.05em",
								color: isActive ? "var(--brass-bright)" : "var(--parchment)"
							},
							children: card.title
						}), !isMobile ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono-archive",
							style: {
								fontSize: 6,
								letterSpacing: "0.14em",
								color: "var(--parchment-dim)"
							},
							children: card.section
						}) : null]
					})
				]
			})]
		})
	});
}
function ArchiveLabel({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("font-mono-archive inline-flex items-center gap-2 text-brass", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": "true",
				className: "inline-block h-[1px] w-6 bg-current opacity-70"
			}),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": "true",
				className: "inline-block h-[1px] w-6 bg-current opacity-70"
			})
		]
	});
}
function SectionHeading({ label, title, kicker, align = "left" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("flex flex-col gap-3", align === "center" ? "items-center text-center" : "items-start"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchiveLabel, { children: label }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-4xl leading-[1.05] text-parchment sm:text-5xl md:text-6xl",
				children: title
			}),
			kicker ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-2xl text-parchment-dim",
				children: kicker
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EngravedDivider, { className: align === "center" ? "mx-auto" : "" })
		]
	});
}
function EngravedDivider({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		"aria-hidden": "true",
		viewBox: "0 0 240 8",
		className: cn("h-2 w-40 text-brass opacity-80", className),
		fill: "none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "0",
				y1: "4",
				x2: "90",
				y2: "4",
				stroke: "currentColor",
				strokeWidth: "0.75"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "150",
				y1: "4",
				x2: "240",
				y2: "4",
				stroke: "currentColor",
				strokeWidth: "0.75"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "120",
				cy: "4",
				r: "3",
				stroke: "currentColor",
				strokeWidth: "0.75"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "120",
				cy: "4",
				r: "1",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "100",
				cy: "4",
				r: "0.8",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "140",
				cy: "4",
				r: "0.8",
				fill: "currentColor"
			})
		]
	});
}
function CornerOrnament({ position }) {
	const rotation = {
		tl: "rotate-0",
		tr: "rotate-90",
		br: "rotate-180",
		bl: "-rotate-90"
	}[position];
	const pos = {
		tl: "top-0 left-0",
		tr: "top-0 right-0",
		br: "bottom-0 right-0",
		bl: "bottom-0 left-0"
	}[position];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		"aria-hidden": "true",
		viewBox: "0 0 64 64",
		className: cn("pointer-events-none absolute h-10 w-10 text-brass", pos, rotation),
		fill: "none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M7 7 L19 11 L23 23 L11 19 Z",
				stroke: "currentColor",
				strokeWidth: "1.1",
				fill: "currentColor",
				fillOpacity: "0.14"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M9.5 9.5 L19 19",
				stroke: "currentColor",
				strokeWidth: "0.7",
				opacity: "0.8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M19 11 C 28 7, 33 13, 40 9 C 45 6.5, 49 8, 50 11 C 50.6 13, 48.6 14.4, 47 13.4 C 45.8 12.6, 46.2 10.8, 47.8 10.6",
				stroke: "currentColor",
				strokeWidth: "1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M11 19 C 7 28, 13 33, 9 40 C 6.5 45, 8 49, 11 50 C 13 50.6, 14.4 48.6, 13.4 47 C 12.6 45.8, 10.8 46.2, 10.6 47.8",
				stroke: "currentColor",
				strokeWidth: "1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M27 12.5 C 29 15.5, 27.5 18.5, 24.5 19",
				stroke: "currentColor",
				strokeWidth: "0.7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M12.5 27 C 15.5 29, 18.5 27.5, 19 24.5",
				stroke: "currentColor",
				strokeWidth: "0.7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M52 8.5 L63 8.5",
				stroke: "currentColor",
				strokeWidth: "0.6",
				opacity: "0.7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M8.5 52 L8.5 63",
				stroke: "currentColor",
				strokeWidth: "0.6",
				opacity: "0.7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M4.5 4.5 L8 6.2 L6.2 8 Z",
				fill: "currentColor",
				opacity: "0.9"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "34",
				cy: "9",
				r: "1",
				fill: "currentColor",
				opacity: "0.85"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "9",
				cy: "34",
				r: "1",
				fill: "currentColor",
				opacity: "0.85"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "24.5",
				cy: "24.5",
				r: "1.2",
				fill: "currentColor"
			})
		]
	});
}
function BrassFrame({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative bg-parchment-plate engraved", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CornerOrnament, { position: "tl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CornerOrnament, { position: "tr" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CornerOrnament, { position: "bl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CornerOrnament, { position: "br" }),
			children
		]
	});
}
function TechnicalTag({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "font-mono-archive inline-flex items-center gap-1.5 rounded-sm border border-brass-dim bg-ink/60 px-2 py-1 text-parchment-dim",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": "true",
			className: "h-1 w-1 rounded-full bg-brass"
		}), children]
	});
}
function ArchiveButton(props) {
	const { children, variant = "primary", className, as, ...rest } = props;
	const base = "group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 font-mono-plex transition-all duration-200 archive-frame hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-60";
	const styles = {
		primary: "text-ink-deep",
		ghost: "text-parchment hover:text-brass-bright",
		arcane: "text-arcane hover:text-arcane-bright"
	}[variant];
	const frame = {
		"--af-border": variant === "primary" ? "var(--brass-dim)" : variant === "arcane" ? "color-mix(in oklab, var(--arcane) 45%, transparent)" : "color-mix(in oklab, var(--brass) 50%, transparent)",
		"--af-bg": variant === "primary" ? "var(--brass)" : "color-mix(in oklab, var(--ink) 80%, var(--ink-deep))",
		"--af-bg-hover": variant === "primary" ? "var(--brass-bright)" : "var(--ink)"
	};
	if (as === "a") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		style: frame,
		className: cn(base, styles, className),
		...rest,
		children
	});
	const { type = "button", ...buttonRest } = rest;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		style: frame,
		className: cn(base, styles, className),
		...buttonRest,
		children
	});
}
var HERO_PORTRAIT_SRC = "/headshot-will.png";
function HeroSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "hero",
		className: "relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-40 sm:pt-44",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 md:grid-cols-[1.1fr_0.9fr] lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "animate-drift",
						style: { animationDelay: "0.05s" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchiveLabel, { children: "Archive Activated" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-display animate-drift mt-6 text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] tracking-tight text-parchment",
						style: { animationDelay: "0.2s" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block",
							children: "WILL"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-brass",
							children: "WANDS"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "animate-drift mt-6 flex flex-wrap items-center gap-x-3 gap-y-1",
						style: { animationDelay: "0.35s" },
						children: PROFILE.disciplines.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono-archive text-brass-bright",
							children: [d, i < PROFILE.disciplines.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								className: "ml-3 text-brass-dim",
								children: "·"
							}) : null]
						}, d))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "animate-drift mt-8 max-w-xl text-lg leading-relaxed text-parchment-dim sm:text-xl",
						style: { animationDelay: "0.5s" },
						children: [
							"“",
							PROFILE.tagline,
							"”"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EngravedDivider, { className: "animate-drift mt-8" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "animate-drift mt-8 flex flex-wrap items-center gap-3",
						style: { animationDelay: "0.7s" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ArchiveButton, {
								as: "a",
								href: "#projects",
								variant: "primary",
								children: ["Inspect My Work", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									children: "→"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchiveButton, {
								as: "a",
								href: "#contact",
								variant: "ghost",
								children: "Contact Me"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchiveButton, {
								as: "a",
								href: PROFILE.links.resume,
								variant: "arcane",
								"aria-label": "Download résumé",
								children: "Résumé ↗"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#about",
						className: "font-mono-archive group animate-drift mt-14 inline-flex items-center gap-3 text-parchment-dim hover:text-brass-bright",
						style: { animationDelay: "1s" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							className: "animate-scroll-hint inline-block h-8 w-[1px] bg-current"
						}), "Scroll to unseal the archive"]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative hidden items-center justify-center md:flex",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "animate-drift w-full max-w-sm",
					style: { animationDelay: "0.6s" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroPortraitPlate, {})
				})
			})]
		})
	});
}
function HeroPortraitPlate() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "engraved relative aspect-3/4 w-full overflow-hidden bg-parchment-plate",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CornerOrnament, { position: "tl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CornerOrnament, { position: "tr" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CornerOrnament, { position: "bl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CornerOrnament, { position: "br" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: HERO_PORTRAIT_SRC,
				alt: `Portrait of ${PROFILE.name}`,
				className: "h-full w-full object-cover"
			})
		]
	});
}
function AboutSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				label: "Archive Record 01",
				title: "Subject Profile"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BrassFrame, {
					className: "p-6 sm:p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto aspect-square w-full max-w-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-full border border-brass-dim" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-3 rounded-full border border-brass/40" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-6 flex items-center justify-center overflow-hidden rounded-full",
								style: { background: "radial-gradient(circle at 35% 30%, oklch(0.30 0.03 260) 0%, oklch(0.12 0.02 260) 70%)" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									viewBox: "0 0 200 200",
									className: "h-3/4 w-3/4 text-brass",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "100",
											cy: "100",
											r: "88",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "0.6",
											opacity: "0.5"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "100",
											cy: "100",
											r: "70",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "0.4",
											strokeDasharray: "2 4",
											opacity: "0.5"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											d: "M50 60 L70 140 L100 80 L130 140 L150 60",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "3",
											strokeLinejoin: "miter"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
											x: "100",
											y: "170",
											textAnchor: "middle",
											fill: "currentColor",
											fontFamily: "var(--font-mono)",
											fontSize: "9",
											letterSpacing: "4",
											opacity: "0.9",
											children: "W · W"
										})
									]
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-2 border-t border-brass-dim pt-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetaRow, {
								k: "Institution",
								v: PROFILE.school
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetaRow, {
								k: "Program",
								v: PROFILE.program
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetaRow, {
								k: "Classification",
								v: "Engineer - Researcher"
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-5",
						children: PROFILE.bio.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg leading-relaxed text-parchment",
							children: p
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono-archive mb-3 text-brass",
							children: "Areas of Focus"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: PROFILE.interests.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechnicalTag, { children: i }, i))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchiveButton, {
							as: "a",
							href: PROFILE.links.resume,
							variant: "primary",
							children: "Download Résumé"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchiveButton, {
							as: "a",
							href: "#experience",
							variant: "ghost",
							children: "View Chronicle →"
						})]
					})
				] })]
			})]
		})
	});
}
function MetaRow({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-baseline justify-between gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono-archive text-parchment-dim",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-right text-sm text-parchment",
			children: v
		})]
	});
}
var SKILL_CARDS = [
	{
		id: "languages",
		title: "The Codex",
		romanNumeral: "I",
		symbol: "❖",
		domain: "Languages",
		skills: [
			"C++",
			"Java",
			"Python",
			"SQL",
			"JavaScript",
			"HTML/CSS"
		]
	},
	{
		id: "autonomy",
		title: "The Automaton",
		romanNumeral: "II",
		symbol: "⚙",
		domain: "Robotics & Autonomy",
		skills: [
			"ROS 2",
			"Gazebo",
			"LiDAR Pipelines",
			"Arduino",
			"Linux"
		]
	},
	{
		id: "perception",
		title: "The Eye",
		romanNumeral: "III",
		symbol: "◉",
		domain: "Vision & ML",
		skills: [
			"OpenCV",
			"MediaPipe",
			"TensorFlow",
			"CNN Training",
			"Real-time Inference"
		]
	},
	{
		id: "systems",
		title: "The Engine",
		romanNumeral: "IV",
		symbol: "⬡",
		domain: "Systems & Data",
		skills: [
			"Redis",
			"PostgreSQL",
			"Multithreading",
			"Async I/O",
			"REST APIs"
		]
	},
	{
		id: "software",
		title: "The Loom",
		romanNumeral: "V",
		symbol: "✶",
		domain: "Web & Infrastructure",
		skills: [
			"React",
			"Vue.js",
			"Express.js",
			"FastAPI",
			"Docker · AWS"
		]
	}
];
function SkillsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "skills",
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				label: "Archive Record 02",
				title: "The Five Arts",
				kicker: "Draw a card to unseal each discipline of the practice."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 flex flex-wrap items-stretch justify-center gap-5 sm:gap-7",
				children: SKILL_CARDS.map((card, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillTarotCard, {
					card,
					index: i
				}, card.id))
			})]
		})
	});
}
function SkillTarotCard({ card, index }) {
	const [flipped, setFlipped] = (0, import_react.useState)(false);
	const [hovered, setHovered] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: () => setFlipped((v) => !v),
		onMouseEnter: () => setHovered(true),
		onMouseLeave: () => setHovered(false),
		"aria-pressed": flipped,
		"aria-label": flipped ? `${card.title} — ${card.domain}: ${card.skills.join(", ")}. Press to turn face-down.` : `${card.title} — face-down card ${card.romanNumeral}. Press to reveal skills.`,
		className: cn("tarot-card block", flipped && "is-flipped"),
		style: {
			width: "clamp(150px, 17vw, 190px)",
			aspectRatio: "2 / 3",
			transform: hovered && !flipped ? "translateY(-10px) rotate(-1deg)" : "none",
			transition: "transform 0.35s ease, filter 0.35s ease",
			filter: flipped ? "drop-shadow(0 0 20px color-mix(in oklab, var(--arcane) 45%, transparent))" : hovered ? "drop-shadow(0 0 14px color-mix(in oklab, var(--brass) 45%, transparent))" : "drop-shadow(0 10px 20px color-mix(in oklab, black 65%, transparent))",
			animation: `card-rise 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) ${index * .12}s both`
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "tarot-card-inner",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "tarot-card-face tarot-card-back",
				style: {
					border: "1px solid color-mix(in oklab, var(--brass) 45%, transparent)",
					background: "linear-gradient(165deg, color-mix(in oklab, var(--arcane) 16%, var(--ink-deep)) 0%, color-mix(in oklab, var(--arcane) 8%, var(--ink-deep)) 100%)"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardBackArt, {})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "tarot-card-face tarot-card-front flex flex-col items-center px-3 py-4 text-center",
				style: {
					border: "1px solid color-mix(in oklab, var(--brass-bright) 60%, transparent)",
					background: "radial-gradient(ellipse at 30% 12%, color-mix(in oklab, var(--brass) 14%, transparent), transparent 60%), linear-gradient(180deg, oklch(0.21 0.022 260), oklch(0.13 0.02 260))",
					boxShadow: "inset 0 0 22px color-mix(in oklab, var(--arcane) 16%, transparent)"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono-archive",
						style: {
							fontSize: 10,
							color: "var(--brass-bright)"
						},
						children: card.romanNumeral
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						className: "mt-1",
						style: {
							fontSize: 30,
							lineHeight: 1,
							color: "var(--arcane)",
							filter: "drop-shadow(0 0 8px color-mix(in oklab, var(--arcane) 55%, transparent))"
						},
						children: card.symbol
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display mt-2",
						style: {
							fontSize: 17,
							letterSpacing: "0.04em",
							color: "var(--brass-bright)"
						},
						children: card.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono-archive mt-0.5",
						style: {
							fontSize: 7.5,
							color: "var(--parchment-dim)"
						},
						children: card.domain
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						className: "my-2.5 h-[1px] w-12",
						style: { background: "color-mix(in oklab, var(--brass) 55%, transparent)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex flex-col gap-1.5",
						children: card.skills.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "text-parchment",
							style: {
								fontSize: 12.5,
								lineHeight: 1.25
							},
							children: s
						}, s))
					})
				]
			})]
		})
	});
}
var EXPERIENCE = [
	{
		archiveNo: "EXP-001",
		side: "technical",
		year: "2026",
		dateLabel: "May 2026 – Aug 2026",
		organization: "The MITRE Corporation",
		role: "Software Engineering Intern · Bedford, MA",
		summary: "Built high-throughput translation infrastructure for high-compliance systems inside a secure, production CI/CD environment.",
		bullets: [
			"Decreased translation retrieval latency by 30% by engineering high-throughput RESTful API endpoints, backed by rigorous unit test suites, that ingest streaming data from a Redis priority queue.",
			"Automated real-time data transfers across high-compliance systems by architecting an on-demand microservice translation pipeline with Vue.js, Python, and the BlackSheep asynchronous API framework.",
			"Delivered production-ready features within a secure CI/CD pipeline, collaborating in a 10-person Agile team through Git-based peer code reviews."
		],
		tags: [
			"Python",
			"Vue.js",
			"Redis",
			"REST APIs",
			"BlackSheep",
			"CI/CD"
		]
	},
	{
		archiveNo: "EXP-002",
		side: "technical",
		year: "2025",
		dateLabel: "Sep 2025 – Present",
		organization: "IEEE Intelligent Ground Vehicle Competition",
		role: "Lead Programmer · Rutgers University",
		summary: "Directing the autonomy software for a full-scale outdoor ground vehicle — perception, mapping, and navigation across a ROS 2 pipeline.",
		bullets: ["Mitigated navigation errors by designing autonomous path-finding and localized spatial mapping systems using OpenCV edge-detection logic to detect physical obstacle fields.", "Streamlined sensor integration across complex hardware by deploying custom object perception and LiDAR tracking pipelines with ROS 2 and Gazebo in Linux environments."],
		tags: [
			"ROS 2",
			"Gazebo",
			"OpenCV",
			"LiDAR",
			"Linux"
		]
	},
	{
		archiveNo: "EXP-003",
		side: "cultural",
		year: "2025",
		dateLabel: "Sep 2025 – Present",
		organization: "Chinese Student Organization",
		role: "Treasurer · Rutgers University",
		summary: "Stewarding the finances and large-scale event operations of one of Rutgers' biggest cultural communities.",
		bullets: ["Manage $20,000+ of operational budgets, planning, and financial allocations from Rutgers University.", "Execute high-capacity community and charity initiatives — running on-site logistics and registration pipelines for 400+ attendees at events year-round."],
		tags: [
			"Budgeting",
			"Event Operations",
			"Community",
			"Logistics"
		]
	},
	{
		archiveNo: "EXP-004",
		side: "cultural",
		year: "2025",
		dateLabel: "Aug 2025 – May 2029 (expected)",
		organization: "Rutgers University — Honors School of Engineering",
		role: "B.S. Electrical & Computer Engineering and Computer Science",
		summary: "Joined the honors engineering community in New Brunswick — dual-degree study across hardware and software. GPA 3.72.",
		bullets: ["Coursework: Data Structures, Data Management, Linear Algebra, Probability, Discrete Mathematics."],
		tags: [
			"Honors College",
			"ECE",
			"Computer Science"
		]
	},
	{
		archiveNo: "EXP-005",
		side: "technical",
		year: "2024",
		dateLabel: "Jul 2024 – Aug 2024",
		organization: "NJ Governor's School of Engineering & Technology",
		role: "Research Scholar · New Brunswick, NJ",
		summary: "Path-planning research on autonomous navigation, carried through to a peer-reviewed conference presentation.",
		bullets: ["Optimized path-planning vectors against real-world telemetry constraints by evaluating A* and RRT* graph algorithms inside a custom Python and Pygame testing framework.", "Validated autonomous navigation simulation models by co-authoring a technical research paper presented at the peer-reviewed MIT Undergraduate Research Technology Conference (URTC)."],
		tags: [
			"A*",
			"RRT*",
			"Python",
			"Simulation",
			"Research"
		]
	}
];
function ExperienceSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "experience",
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					label: "Archive Record 03",
					title: "Chronicle of Expeditions",
					kicker: "One chronicle, two rails — engineering expeditions on the left, community and cultural stewardship on the right."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 hidden grid-cols-2 gap-14 md:grid",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RailLegend, { side: "technical" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RailLegend, { side: "cultural" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-6 md:mt-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"aria-hidden": "true",
							className: "pointer-events-none absolute inset-y-0 left-4 hidden w-[2px] md:left-1/2 md:block md:-translate-x-1/2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-full bg-gradient-to-b from-transparent via-brass/50 to-transparent" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"aria-hidden": "true",
							className: "pointer-events-none absolute inset-y-0 left-4 w-[2px] bg-gradient-to-b from-transparent via-brass/40 to-transparent md:hidden"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "space-y-14",
							children: EXPERIENCE.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineItem, { entry }, entry.archiveNo))
						})
					]
				})
			]
		})
	});
}
var SIDE_LABEL = {
	technical: "Technical",
	cultural: "Social & Cultural"
};
function RailLegend({ side }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-center gap-3", side === "technical" ? "justify-start" : "justify-end"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": "true",
			className: cn("h-[1px] w-10", side === "technical" ? "bg-brass" : "bg-arcane")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("font-mono-archive", side === "technical" ? "text-brass" : "text-arcane"),
			children: SIDE_LABEL[side]
		})]
	});
}
function TimelineItem({ entry }) {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	const isCultural = entry.side === "cultural";
	(0, import_react.useEffect)(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([e]) => {
			if (e.isIntersecting) {
				setVisible(true);
				observer.disconnect();
			}
		}, { rootMargin: "-10% 0px" });
		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		ref,
		className: cn("relative grid grid-cols-1 gap-6 transition-all duration-700 md:grid-cols-2 md:gap-14", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YearSeal, {
			year: entry.year,
			cultural: isCultural,
			className: "absolute left-4 top-2 -translate-x-1/2 md:left-1/2",
			visible
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("pl-14 md:pl-0", isCultural ? "md:col-start-2" : "md:col-start-1"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BrassFrame, {
				className: "p-6 sm:p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex flex-wrap items-center gap-x-3 gap-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("font-mono-archive", isCultural ? "text-arcane" : "text-brass"),
							children: SIDE_LABEL[entry.side]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono-archive text-parchment-dim",
							children: entry.dateLabel
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl leading-tight text-parchment",
						children: entry.organization
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono-archive mt-1 text-arcane",
						children: entry.role
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 leading-relaxed text-parchment-dim",
						children: entry.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2 border-t border-brass-dim pt-4",
						children: entry.bullets.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3 text-parchment",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								className: "mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-brass"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "leading-relaxed",
								children: b
							})]
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 flex flex-wrap gap-2",
						children: entry.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechnicalTag, { children: t }, t))
					})
				]
			})
		})]
	});
}
function YearSeal({ year, cultural, className, visible }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("z-10 flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-700", visible ? "rotate-0" : "-rotate-45", className),
		style: {
			background: "var(--brass)",
			boxShadow: `0 0 0 2px var(--ink-deep), 0 0 0 3px ${cultural ? "var(--arcane)" : "var(--brass-dim)"}, 0 6px 18px oklch(0.06 0.02 260 / 0.6)`
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono-archive text-ink-deep",
			style: {
				fontSize: 11,
				letterSpacing: "0.02em",
				fontWeight: 700
			},
			children: year
		})
	});
}
var PROJECTS = [
	{
		artifactNo: "ART-001",
		featured: true,
		title: "Autonomous IGVC Vehicle",
		problem: "Navigate an unknown outdoor course with lane markers, obstacles, and GPS waypoints — fully autonomously.",
		role: "Lead Programmer — full autonomy stack",
		summary: "A ROS 2 based autonomy platform combining vision-based lane detection, LiDAR obstacle avoidance, and a waypoint planner tuned for competition conditions.",
		tags: [
			"ROS 2",
			"C++",
			"OpenCV",
			"LiDAR",
			"Gazebo",
			"Autonomy"
		],
		githubUrl: null,
		demoUrl: null,
		dossier: {
			context: "The Intelligent Ground Vehicle Competition demands a robot that survives an outdoor obstacle course with no prior map, no external localization, and strict time limits.",
			contribution: "Architected the ROS 2 node graph, wrote the vision pipeline for lane detection, and integrated planning and control with the perception stack.",
			architecture: "Sensor drivers → perception (camera + LiDAR fusion) → costmap → planner → controller. Simulation in Gazebo mirrors the physical topic graph.",
			challenges: "Sunlight variance broke naive HSV thresholds; solved with adaptive preprocessing and a tighter camera exposure policy. Real-time constraints forced careful thread and topic sizing.",
			lessons: "Simulation-first development compresses the debug loop enormously — but only if the sim topics mirror hardware exactly."
		}
	},
	{
		artifactNo: "ART-002",
		title: "Teamfight Tactics Teacher",
		problem: "Match data for Teamfight Tactics is plentiful, but turning it into real-time coaching insight means surviving strict API rate limits and heavy analytical load.",
		role: "Sole developer — systems design and implementation",
		summary: "A C++ data-ingestion backend built on a custom Redis-style in-memory key-value store, feeding an asynchronous stats engine and a real-time Python dashboard.",
		tags: [
			"C++",
			"Python",
			"Redis",
			"REST API",
			"TCP"
		],
		githubUrl: null,
		demoUrl: null,
		dossier: {
			context: "Game analytics APIs enforce hard rate limits, and naive polling architectures buckle under the volume of match data a serious analysis tool needs.",
			contribution: "Architected the C++ ingestion pipeline and its custom Redis-style in-memory key-value store, then engineered an asynchronous evaluation engine exposing computed metrics over a JSON/HTTP socket interface.",
			architecture: "C++ ingestion pipeline with in-memory KV store → asynchronous, lambda-driven stats engine → JSON over an HTTP/TCP socket → real-time Python dashboard.",
			challenges: "Eliminating network bottlenecks while enforcing strict API rate limits — solved at the architecture level with the custom in-memory store and asynchronous processing.",
			result: "Processes 50+ statistical fields per match in real time via lambda-driven evaluation."
		}
	},
	{
		artifactNo: "ART-003",
		title: "RUOnCampus — Off-Campus Housing Marketplace",
		problem: "Rutgers students hunting for off-campus housing and sublets have no trusted, campus-specific marketplace.",
		role: "Full-stack developer — schema, backend, and listing experience",
		summary: "A full-stack sublet matchmaking platform: React and Tailwind up front, Express.js and Supabase PostgreSQL underneath, with token-based authentication throughout.",
		tags: [
			"React",
			"Express.js",
			"Supabase",
			"PostgreSQL",
			"Tailwind CSS"
		],
		githubUrl: null,
		demoUrl: null,
		dossier: {
			context: "Sublet hunting at Rutgers happens across scattered group chats and boards — listings are unstructured, searches are slow, and trust is thin.",
			contribution: "Spearheaded the platform: mapped transactional relational schemas across 8 database tables, built the multi-step listing composer with React Context state stores and debounced lookups, and deployed the Express.js backend with granular token-based authentication workflows.",
			architecture: "React + Tailwind frontend → Express.js API with token-based auth → Supabase-hosted PostgreSQL across an 8-table relational schema.",
			challenges: "Search speed and onboarding friction — solved through careful relational indexing and a unified, debounced multi-step composer flow.",
			result: "Search queries return in under 40ms, and user onboarding drop-offs fell by 25%."
		}
	},
	{
		artifactNo: "ART-004",
		title: "Angry Signing Llama — Real-Time CV Pipeline",
		problem: "Sign-language recognition is only useful in conversation if it keeps up with the signer — inference has to happen in real time.",
		role: "ML & systems developer — models, pipeline, and transport",
		summary: "A real-time computer-vision pipeline that recognizes 35 unique signs at 97% accuracy, streaming from FastAPI microservices to the browser over low-latency web sockets.",
		tags: [
			"Python",
			"FastAPI",
			"TensorFlow",
			"MediaPipe",
			"JavaScript"
		],
		githubUrl: null,
		demoUrl: null,
		dossier: {
			context: "Recognizing sign language on commodity hardware means squeezing a full CV inference loop — capture, landmark extraction, classification, display — into sub-second windows.",
			contribution: "Trained convolutional neural networks in TensorFlow on structural body nodes extracted via MediaPipe, and engineered the low-latency web-socket link between the CV microservices and an optimized JavaScript frontend.",
			architecture: "Camera stream → MediaPipe landmark extraction → TensorFlow CNN classifier inside FastAPI microservices → web sockets → JavaScript frontend.",
			challenges: "Holding sub-second end-to-end inference windows across the microservice boundary without dropping recognition accuracy.",
			result: "97% sign-recognition accuracy across 35 unique signs, with sub-second inference end to end."
		}
	},
	{
		artifactNo: "ART-005",
		title: "Imposture — Smart Posture Monitor",
		problem: "Desk slouching goes unnoticed until it hurts — posture correction needs to happen the moment form slips.",
		role: "Developer — vision system and hardware bridge",
		summary: "A computer-vision posture monitor that watches streaming video for ergonomic slouching thresholds and fires real-time alerts through an Arduino hardware network.",
		tags: [
			"Python",
			"OpenCV",
			"MediaPipe",
			"Arduino",
			"C++"
		],
		githubUrl: null,
		demoUrl: null,
		dossier: {
			context: "Posture feedback tools either sample too slowly to matter or demand wearables — a camera and a microcontroller can do better.",
			contribution: "Architected the computer-vision monitoring system that processes streaming video frames against slouching thresholds, and wrote the synchronous C++ serial interface carrying MediaPipe coordinate flags to the external Arduino network.",
			architecture: "Webcam stream → OpenCV + MediaPipe pose landmarks → threshold engine (Python) → C++ synchronous serial bridge → Arduino alert hardware.",
			challenges: "Eliminating communication bottlenecks between the vision stack and the hardware — solved with a synchronous serial protocol carrying compact coordinate flags.",
			result: "Real-time physical posture-correction alerts driven directly from streaming video."
		}
	}
];
function ProjectsSection() {
	const [openProject, setOpenProject] = (0, import_react.useState)(null);
	const featured = PROJECTS.find((p) => p.featured) ?? PROJECTS[0];
	const others = PROJECTS.filter((p) => p !== featured);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "projects",
		className: "relative py-24 sm:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				label: "Archive Record 04",
				title: "Cabinet of Inventions",
				kicker: "A working catalog of engineering artifacts — each one a small experiment in perception, planning, or building."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid gap-8 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedCard, {
					project: featured,
					onOpen: setOpenProject
				}), others.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
					project: p,
					onOpen: setOpenProject
				}, p.artifactNo))]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectDossier, {
			project: openProject,
			onClose: () => setOpenProject(null)
		})]
	});
}
function FeaturedCard({ project, onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: () => onOpen(project),
		className: "group relative col-span-1 text-left transition-shadow duration-300 hover:shadow-[0_0_56px_-10px_var(--brass)] focus-visible:shadow-[0_0_56px_-10px_var(--brass)] lg:col-span-2",
		"aria-label": `Inspect featured project: ${project.title}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BrassFrame, {
			className: "h-full overflow-hidden p-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative aspect-[16/9] w-full overflow-hidden border-b border-brass-dim",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectVisual, {
						project,
						large: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-deep via-ink-deep/40 to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute left-5 top-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchiveLabel, { children: "Featured Artifact" })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-6 sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-baseline gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono-archive text-brass",
							children: project.artifactNo
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono-archive text-parchment-dim",
							children: project.role
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display mt-2 text-3xl leading-tight text-parchment sm:text-4xl",
						children: project.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-lg text-parchment-dim",
						children: project.problem
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 leading-relaxed text-parchment",
						children: project.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 flex flex-wrap gap-2",
						children: project.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechnicalTag, { children: t }, t))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex flex-wrap gap-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono-archive inline-flex items-center gap-2 text-brass-bright group-hover:text-brass-bright",
							children: ["Inspect Project", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								className: "transition-transform group-hover:translate-x-1",
								children: "→"
							})]
						})
					})
				]
			})]
		})
	});
}
function ProjectCard({ project, onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: () => onOpen(project),
		className: "group relative text-left transition-transform duration-300 hover:-translate-y-1 focus-visible:-translate-y-1",
		"aria-label": `Inspect project: ${project.title}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BrassFrame, {
			className: "h-full overflow-hidden p-0 transition-shadow duration-300 group-hover:shadow-[0_0_36px_-8px_var(--brass)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative aspect-[4/3] w-full overflow-hidden border-b border-brass-dim",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectVisual, { project }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-deep/90 via-transparent to-transparent" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-baseline justify-between gap-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono-archive text-brass",
							children: project.artifactNo
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display mt-1 text-xl leading-tight text-parchment",
						children: project.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 line-clamp-3 text-sm leading-relaxed text-parchment-dim",
						children: project.problem
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap gap-1.5",
						children: project.tags.slice(0, 3).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechnicalTag, { children: t }, t))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "font-mono-archive mt-4 flex items-center gap-2 text-brass-bright",
						children: ["Inspect", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							className: "transition-transform group-hover:translate-x-1",
							children: "→"
						})]
					})
				]
			})]
		})
	});
}
function ProjectVisual({ project, large = false }) {
	const variant = parseInt(project.artifactNo.slice(-1), 10) % 5;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 flex items-center justify-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "radial-gradient(ellipse at 30% 30%, oklch(0.24 0.03 260) 0%, oklch(0.10 0.02 260) 70%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				className: "absolute inset-0 h-full w-full opacity-20",
				"aria-hidden": "true",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pattern", {
					id: `pv-${project.artifactNo}`,
					width: "24",
					height: "24",
					patternUnits: "userSpaceOnUse",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M 24 0 L 0 0 0 24",
						fill: "none",
						stroke: "var(--brass)",
						strokeWidth: "0.4"
					})
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "100%",
					height: "100%",
					fill: `url(#pv-${project.artifactNo})`
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 400 300",
				className: cn("relative h-full w-full", large ? "opacity-90" : "opacity-85"),
				"aria-hidden": "true",
				children: [
					variant === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiagramRobot, {}),
					variant === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiagramGraph, {}),
					variant === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiagramWeb, {}),
					variant === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiagramLens, {}),
					variant === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiagramCircuit, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "absolute inset-0 opacity-40",
				style: { background: "radial-gradient(circle at 70% 40%, oklch(0.72 0.11 195 / 0.35) 0%, transparent 55%)" }
			})
		]
	});
}
function DiagramRobot() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		fill: "none",
		stroke: "var(--brass-bright)",
		strokeWidth: "1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "140",
				y: "120",
				width: "120",
				height: "80",
				rx: "4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "160",
				cy: "220",
				r: "18"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "240",
				cy: "220",
				r: "18"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M170 120 L170 90 L230 90 L230 120" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "200",
				cy: "80",
				r: "8",
				fill: "var(--arcane)",
				stroke: "var(--arcane-bright)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M100 160 L140 160 M260 160 L300 160",
				strokeDasharray: "2 4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "200",
				cy: "160",
				r: "6",
				fill: "var(--arcane-bright)",
				opacity: "0.8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M200 40 L200 70",
				strokeWidth: "0.6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "200",
				y: "30",
				textAnchor: "middle",
				fill: "var(--brass)",
				fontFamily: "var(--font-mono)",
				fontSize: "10",
				letterSpacing: "2",
				children: "AUTONOMY"
			})
		]
	});
}
function DiagramGraph() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		fill: "none",
		stroke: "var(--brass-bright)",
		strokeWidth: "1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "80",
				cy: "200",
				r: "8",
				fill: "var(--brass)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "180",
				cy: "120",
				r: "8",
				fill: "var(--brass)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "280",
				cy: "80",
				r: "8",
				fill: "var(--arcane)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "320",
				cy: "200",
				r: "8",
				fill: "var(--brass)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "200",
				cy: "240",
				r: "8",
				fill: "var(--brass)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 200 L180 120 L280 80 L320 200 L200 240 L80 200",
				opacity: "0.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M180 120 L320 200",
				strokeDasharray: "3 5",
				stroke: "var(--arcane)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M180 120 L200 240",
				strokeDasharray: "3 5",
				stroke: "var(--arcane-bright)",
				strokeWidth: "1.4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "200",
				y: "40",
				textAnchor: "middle",
				fill: "var(--brass)",
				fontFamily: "var(--font-mono)",
				fontSize: "10",
				letterSpacing: "2",
				children: "PATH · A* / RRT*"
			})
		]
	});
}
function DiagramWeb() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		fill: "none",
		stroke: "var(--brass-bright)",
		strokeWidth: "1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "80",
				y: "70",
				width: "240",
				height: "160",
				rx: "6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "80",
				y: "70",
				width: "240",
				height: "26",
				fill: "var(--brass-dim)",
				opacity: "0.4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "96",
				cy: "83",
				r: "3",
				fill: "var(--brass)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "108",
				cy: "83",
				r: "3",
				fill: "var(--copper)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "120",
				cy: "83",
				r: "3",
				fill: "var(--arcane)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "100",
				y: "115",
				width: "90",
				height: "90",
				rx: "3",
				opacity: "0.7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "210",
				y: "115",
				width: "90",
				height: "40",
				rx: "3",
				opacity: "0.7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "210",
				y: "165",
				width: "90",
				height: "40",
				rx: "3",
				opacity: "0.7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "200",
				y: "260",
				textAnchor: "middle",
				fill: "var(--brass)",
				fontFamily: "var(--font-mono)",
				fontSize: "10",
				letterSpacing: "2",
				children: "FULL-STACK"
			})
		]
	});
}
function DiagramLens() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		fill: "none",
		stroke: "var(--brass-bright)",
		strokeWidth: "1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "60",
				y: "90",
				width: "280",
				height: "120",
				rx: "6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "200",
				cy: "150",
				r: "50"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "200",
				cy: "150",
				r: "34",
				stroke: "var(--arcane)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "200",
				cy: "150",
				r: "16",
				fill: "var(--arcane-bright)",
				opacity: "0.4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M60 150 L150 150 M250 150 L340 150",
				strokeDasharray: "2 4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M200 90 L200 100 M200 200 L200 210" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "140",
				y: "72",
				width: "120",
				height: "8",
				rx: "2",
				opacity: "0.6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "200",
				y: "240",
				textAnchor: "middle",
				fill: "var(--brass)",
				fontFamily: "var(--font-mono)",
				fontSize: "10",
				letterSpacing: "2",
				children: "VISION"
			})
		]
	});
}
function DiagramCircuit() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		fill: "none",
		stroke: "var(--brass-bright)",
		strokeWidth: "1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "80",
				y: "80",
				width: "240",
				height: "140",
				rx: "4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M120 80 L120 60 M180 80 L180 60 M240 80 L240 60 M300 80 L300 60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M120 220 L120 240 M180 220 L180 240 M240 220 L240 240 M300 220 L300 240" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "160",
				cy: "130",
				r: "14",
				fill: "var(--brass-dim)",
				opacity: "0.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "200",
				y: "120",
				width: "80",
				height: "20",
				opacity: "0.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "120",
				y: "170",
				width: "60",
				height: "20",
				opacity: "0.4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "200",
				y: "170",
				width: "90",
				height: "30",
				opacity: "0.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "160",
				cy: "130",
				r: "4",
				fill: "var(--arcane-bright)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "200",
				y: "270",
				textAnchor: "middle",
				fill: "var(--brass)",
				fontFamily: "var(--font-mono)",
				fontSize: "10",
				letterSpacing: "2",
				children: "AUTOMATION"
			})
		]
	});
}
function ProjectDossier({ project, onClose }) {
	const dialogRef = (0, import_react.useRef)(null);
	const previouslyFocused = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!project) return;
		previouslyFocused.current = document.activeElement;
		const prevOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		(dialogRef.current?.querySelector("[data-autofocus]"))?.focus();
		const onKey = (e) => {
			if (e.key === "Escape") onClose();
			if (e.key === "Tab" && dialogRef.current) {
				const focusables = dialogRef.current.querySelectorAll("a, button, [tabindex]:not([tabindex=\"-1\"])");
				if (!focusables.length) return;
				const first = focusables[0];
				const last = focusables[focusables.length - 1];
				if (e.shiftKey && document.activeElement === first) {
					e.preventDefault();
					last.focus();
				} else if (!e.shiftKey && document.activeElement === last) {
					e.preventDefault();
					first.focus();
				}
			}
		};
		window.addEventListener("keydown", onKey);
		return () => {
			window.removeEventListener("keydown", onKey);
			document.body.style.overflow = prevOverflow;
			previouslyFocused.current?.focus?.();
		};
	}, [project, onClose]);
	if (!project) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "dialog",
		"aria-modal": "true",
		"aria-labelledby": "dossier-title",
		className: "fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto bg-ink-deep/85 px-4 py-10 backdrop-blur-sm",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: dialogRef,
			onClick: (e) => e.stopPropagation(),
			className: "animate-iris relative w-full max-w-3xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BrassFrame, {
				className: "p-6 sm:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"data-autofocus": true,
						onClick: onClose,
						"aria-label": "Close dossier",
						className: "engraved font-mono-archive absolute right-4 top-4 rounded-sm bg-ink/70 px-3 py-1.5 text-parchment hover:text-brass-bright",
						children: "Close ✕"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono-archive text-brass",
							children: project.artifactNo
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono-archive text-parchment-dim",
							children: "Dossier · Unsealed"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						id: "dossier-title",
						className: "font-display text-3xl leading-tight text-parchment sm:text-4xl",
						children: project.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono-archive mt-2 text-arcane",
						children: project.role
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex flex-wrap gap-2",
						children: project.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechnicalTag, { children: t }, t))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 space-y-6 border-t border-brass-dim pt-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DossierField, {
								label: "Problem",
								value: project.problem
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DossierField, {
								label: "Context",
								value: project.dossier.context
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DossierField, {
								label: "Contribution",
								value: project.dossier.contribution
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DossierField, {
								label: "Architecture",
								value: project.dossier.architecture
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DossierField, {
								label: "Engineering Challenges",
								value: project.dossier.challenges
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DossierField, {
								label: "Result",
								value: project.dossier.result
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DossierField, {
								label: "Lessons & Next Steps",
								value: project.dossier.lessons
							})
						]
					}),
					project.githubUrl || project.demoUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3 border-t border-brass-dim pt-6",
						children: [project.githubUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchiveButton, {
							as: "a",
							href: project.githubUrl,
							target: "_blank",
							rel: "noreferrer",
							variant: "primary",
							children: "GitHub ↗"
						}) : null, project.demoUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchiveButton, {
							as: "a",
							href: project.demoUrl,
							target: "_blank",
							rel: "noreferrer",
							variant: "arcane",
							children: "Live Demo ↗"
						}) : null]
					}) : null
				]
			})
		})
	});
}
function DossierField({ label, value }) {
	if (!value) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "font-mono-archive mb-1 text-brass",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "leading-relaxed text-parchment",
		children: value
	})] });
}
var REASONS = [
	"Internship Inquiry",
	"Research Collaboration",
	"Engineering Project",
	"Startup Opportunity",
	"General Message"
];
function ContactSection() {
	const [state, setState] = (0, import_react.useState)("idle");
	const [errors, setErrors] = (0, import_react.useState)({});
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		organization: "",
		reason: REASONS[0],
		message: ""
	});
	const update = (k, v) => setForm((prev) => ({
		...prev,
		[k]: v
	}));
	const validate = () => {
		const errs = {};
		if (!form.name.trim()) errs.name = "Name is required.";
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "A valid email is required.";
		if (!form.message.trim() || form.message.trim().length < 10) errs.message = "Please share a bit more (at least 10 characters).";
		return errs;
	};
	const onSubmit = async (e) => {
		e.preventDefault();
		if (state === "submitting") return;
		setState("validating");
		const errs = validate();
		setErrors(errs);
		if (Object.keys(errs).length) {
			setState("error");
			return;
		}
		setState("submitting");
		const subject = `[${form.reason}] Portfolio contact from ${form.name}`;
		const body = [
			form.message,
			"",
			`— ${form.name}${form.organization ? ` · ${form.organization}` : ""}`,
			form.email
		].join("\n");
		window.location.href = `${PROFILE.links.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
		setState("success");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				label: "Archive Record 05",
				title: "Open a Channel"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.3fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
							className: "border-l-2 border-brass pl-5 text-lg italic leading-relaxed text-parchment",
							children: "Whether you are building autonomous systems, intelligent products, or ambitious engineering tools, I would be interested in hearing about it."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-10 space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UplinkRow, {
									glyph: "@",
									label: "Primary Uplink",
									display: "willwands@gmail.com",
									href: PROFILE.links.email
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UplinkRow, {
									glyph: "<>",
									label: "Source Repository",
									display: "github.com/wymwill",
									href: PROFILE.links.github
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UplinkRow, {
									glyph: ">_",
									label: "Professional Mesh",
									display: "linkedin.com/in/wowands",
									href: PROFILE.links.linkedin
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-auto hidden pt-12 lg:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": "true",
								className: "flex h-20 w-20 items-center justify-center rounded-full border border-dashed border-brass-dim text-brass-dim",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: { fontSize: 22 },
									children: "⚙"
								})
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative border border-brass-dim/60 bg-ink/70 p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CornerOrnament, { position: "tl" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CornerOrnament, { position: "tr" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CornerOrnament, { position: "bl" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CornerOrnament, { position: "br" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit,
							noValidate: true,
							className: "space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-6 sm:grid-cols-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConsoleField, {
											label: "Operator Designation",
											id: "c-name",
											placeholder: "Name",
											required: true,
											value: form.name,
											onChange: (v) => update("name", v),
											error: errors.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConsoleField, {
											label: "Uplink Address",
											id: "c-email",
											type: "email",
											placeholder: "Email",
											required: true,
											value: form.email,
											onChange: (v) => update("email", v),
											error: errors.email
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConsoleField, {
											label: "Organization [Optional]",
											id: "c-org",
											placeholder: "Entity",
											value: form.organization,
											onChange: (v) => update("organization", v)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "c-reason",
											className: "font-mono-archive mb-2 block text-parchment-dim",
											children: "Transmission Type"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
											id: "c-reason",
											value: form.reason,
											onChange: (e) => update("reason", e.target.value),
											className: "w-full border border-brass-dim/70 bg-ink-deep px-3 py-3 font-plex text-sm text-parchment focus:outline-none focus-visible:ring-2 focus-visible:ring-brass",
											children: REASONS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: r }, r))
										})] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										htmlFor: "c-message",
										className: "font-mono-archive mb-2 block text-parchment-dim",
										children: ["Detailed Payload ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-blood",
											children: "*"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										id: "c-message",
										rows: 7,
										value: form.message,
										onChange: (e) => update("message", e.target.value),
										"aria-invalid": !!errors.message,
										"aria-describedby": errors.message ? "c-message-err" : void 0,
										className: "w-full resize-y border border-brass-dim/70 bg-ink-deep px-4 py-3 font-plex text-sm text-parchment placeholder:text-parchment-dim/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-brass",
										placeholder: "Message content..."
									}),
									errors.message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										id: "c-message-err",
										className: "font-mono-archive mt-1 text-blood",
										children: errors.message
									}) : null
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"aria-live": "polite",
									role: "status",
									className: "min-h-6",
									children: [
										state === "submitting" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono-archive text-brass",
											children: "Transmitting…"
										}) : null,
										state === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono-archive text-brass-bright",
											children: "Draft opened in your mail client — send it to complete the transmission."
										}) : null,
										state === "error" && errors.form ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono-archive text-blood",
											children: errors.form
										}) : null
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ArchiveButton, {
									type: "submit",
									variant: "primary",
									className: "w-full py-3.5",
									disabled: state === "submitting",
									children: [state === "submitting" ? "Transmitting…" : "Transmit Signal", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": "true",
										children: "▷"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center justify-between gap-2 pt-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono-archive text-brass/80",
										style: { fontSize: "0.62rem" },
										children: "Status: relays via your mail client"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono-archive text-parchment-dim/70",
										style: { fontSize: "0.62rem" },
										children: "Format: encrypted mechanical packet"
									})]
								})
							]
						})
					]
				})]
			})]
		})
	});
}
function UplinkRow({ glyph, label, display, href }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		target: href.startsWith("http") ? "_blank" : void 0,
		rel: "noreferrer",
		className: "group flex items-center gap-5 border border-brass-dim/40 bg-ink/60 px-5 py-4 transition-colors hover:border-brass/60",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": "true",
			className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brass-dim/60 bg-ink-deep font-plex text-sm text-brass",
			children: glyph
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex flex-col gap-0.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono-archive text-parchment-dim",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-plex text-sm text-parchment group-hover:text-brass-bright",
				children: display
			})]
		})]
	}) });
}
function ConsoleField({ label, id, value, onChange, type = "text", placeholder, required = false, error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			htmlFor: id,
			className: "font-mono-archive mb-2 block text-parchment-dim",
			children: [
				label,
				" ",
				required ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-blood",
					children: "*"
				}) : null
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			id,
			type,
			value,
			required,
			placeholder,
			onChange: (e) => onChange(e.target.value),
			"aria-invalid": !!error,
			"aria-describedby": error ? `${id}-err` : void 0,
			className: "w-full border border-brass-dim/70 bg-ink-deep px-3 py-3 font-plex text-sm text-parchment placeholder:text-parchment-dim/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-brass"
		}),
		error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			id: `${id}-err`,
			className: "font-mono-archive mt-1 text-blood",
			children: error
		}) : null
	] });
}
function PortfolioFooter() {
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "relative border-t border-brass/20 py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EngravedDivider, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left w-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display text-lg text-parchment",
					children: PROFILE.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "font-mono-archive text-parchment-dim",
					children: ["Archive sealed · © ", year]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: PROFILE.links.github,
							className: "font-mono-archive text-parchment-dim hover:text-brass-bright",
							target: "_blank",
							rel: "noreferrer",
							children: "GitHub ↗"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: PROFILE.links.linkedin,
							className: "font-mono-archive text-parchment-dim hover:text-brass-bright",
							target: "_blank",
							rel: "noreferrer",
							children: "LinkedIn ↗"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: PROFILE.links.resume,
							className: "font-mono-archive text-parchment-dim hover:text-brass-bright",
							children: "Résumé ↗"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#hero",
							className: "font-mono-plex archive-frame px-3 py-2 text-parchment hover:text-brass-bright",
							style: {
								"--af-border": "color-mix(in oklab, var(--brass) 50%, transparent)",
								"--af-bg": "color-mix(in oklab, var(--ink) 80%, var(--ink-deep))",
								"--af-bg-hover": "var(--ink)"
							},
							children: "↑ Return to Seal"
						})
					]
				})]
			})]
		})
	});
}
var SEAL_MS = 1500;
var OPEN_MS = 800;
function ArchiveSeal() {
	const [phase, setPhase] = (0, import_react.useState)("sealing");
	const phaseRef = (0, import_react.useRef)("sealing");
	const timers = (0, import_react.useRef)([]);
	(0, import_react.useEffect)(() => {
		phaseRef.current = phase;
	}, [phase]);
	const open = () => {
		if (phaseRef.current !== "sealing") return;
		timers.current.forEach(clearTimeout);
		sessionStorage.setItem("archive-unsealed", "1");
		setPhase("opening");
		timers.current = [window.setTimeout(() => setPhase("done"), OPEN_MS)];
	};
	(0, import_react.useEffect)(() => {
		if (sessionStorage.getItem("archive-unsealed")) {
			setPhase("done");
			return;
		}
		const sealTime = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 500 : SEAL_MS;
		timers.current = [window.setTimeout(() => {
			sessionStorage.setItem("archive-unsealed", "1");
			setPhase("opening");
		}, sealTime), window.setTimeout(() => setPhase("done"), sealTime + OPEN_MS)];
		return () => timers.current.forEach(clearTimeout);
	}, []);
	(0, import_react.useEffect)(() => {
		if (phase === "done") return;
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = prev;
		};
	}, [phase]);
	if (phase === "done") return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "status",
		"aria-label": "Unsealing the archive",
		onClick: open,
		onKeyDown: open,
		tabIndex: -1,
		className: cn("fixed inset-0 z-[100] flex items-center justify-center bg-ink-deep", phase === "opening" && "seal-iris-out"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("flex flex-col items-center gap-7 transition-opacity duration-300", phase === "opening" && "opacity-0"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-44 w-44 sm:h-52 sm:w-52",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						viewBox: "0 0 200 200",
						className: "absolute inset-0 h-full w-full",
						style: { animation: "ring-spin-slow 9s linear infinite" },
						"aria-hidden": "true",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "100",
							cy: "100",
							r: "96",
							fill: "none",
							stroke: "var(--brass)",
							strokeWidth: "1",
							opacity: "0.8"
						}), Array.from({ length: 48 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: "100",
							y1: "4",
							x2: "100",
							y2: i % 4 === 0 ? 14 : 9,
							stroke: "var(--brass)",
							strokeWidth: i % 4 === 0 ? 1.4 : .6,
							transform: `rotate(${i / 48 * 360} 100 100)`,
							opacity: i % 4 === 0 ? 1 : .55
						}, i))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						viewBox: "0 0 200 200",
						className: "absolute inset-0 h-full w-full",
						style: { animation: "ring-spin-reverse 6s linear infinite" },
						"aria-hidden": "true",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "100",
							cy: "100",
							r: "78",
							fill: "none",
							stroke: "var(--brass)",
							strokeWidth: "0.8",
							strokeDasharray: "5 9",
							opacity: "0.85"
						}), [
							0,
							90,
							180,
							270
						].map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "100",
							cy: "22",
							r: "2.6",
							fill: "var(--brass-bright)",
							transform: `rotate(${a} 100 100)`
						}, a))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						viewBox: "0 0 200 200",
						className: "absolute inset-0 h-full w-full",
						"aria-hidden": "true",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "100",
							cy: "100",
							r: "58",
							fill: "none",
							stroke: "var(--arcane)",
							strokeWidth: "0.8",
							opacity: "0.7",
							strokeDasharray: "1000",
							style: { animation: "engrave-draw 1.1s ease-out both" }
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M64 74 L82 130 L100 88 L118 130 L136 74",
							fill: "none",
							stroke: "var(--brass-bright)",
							strokeWidth: "4",
							strokeLinejoin: "miter",
							strokeDasharray: "1000",
							style: {
								animation: "engrave-draw 1.2s ease-out 0.15s both",
								filter: "drop-shadow(0 0 8px color-mix(in oklab, var(--brass-bright) 55%, transparent))"
							}
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-arcane-glow animate-lens absolute inset-[22%] rounded-full opacity-60" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono-archive text-brass",
						children: ["Unsealing the Archive of ", PROFILE.name]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "relative block h-[2px] w-44 overflow-hidden bg-ink",
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute inset-y-0 left-0 bg-brass",
							style: { animation: `seal-progress ${SEAL_MS}ms linear both` }
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono-archive text-parchment-dim opacity-60",
						children: "Click to skip"
					})
				]
			})]
		})
	});
}
var EDGE = 10;
var RAM_SPAN = 36;
function RamScrollbar() {
	const ramRef = (0, import_react.useRef)(null);
	const trackRef = (0, import_react.useRef)(null);
	const draggingRef = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		const ram = ramRef.current;
		const track = trackRef.current;
		if (!ram || !track) return;
		let raf = 0;
		const maxScroll = () => document.documentElement.scrollHeight - window.innerHeight;
		const apply = () => {
			raf = 0;
			const max = maxScroll();
			const frac = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
			const travel = window.innerHeight - RAM_SPAN - 2 * EDGE;
			ram.style.transform = `translateX(-50%) translateY(${EDGE + frac * travel}px)`;
			ram.setAttribute("aria-valuenow", String(Math.round(frac * 100)));
		};
		const onScroll = () => {
			if (!raf) raf = requestAnimationFrame(apply);
		};
		const scrollToClientY = (clientY) => {
			const travel = window.innerHeight - RAM_SPAN - 2 * EDGE;
			const frac = Math.min(Math.max((clientY - EDGE - RAM_SPAN / 2) / travel, 0), 1);
			window.scrollTo({
				top: frac * maxScroll(),
				behavior: "instant"
			});
		};
		const onPointerDown = (e) => {
			draggingRef.current = true;
			ram.style.transition = "none";
			track.setPointerCapture(e.pointerId);
			scrollToClientY(e.clientY);
			e.preventDefault();
		};
		const onPointerMove = (e) => {
			if (!draggingRef.current) return;
			scrollToClientY(e.clientY);
		};
		const endDrag = () => {
			draggingRef.current = false;
			ram.style.transition = "";
		};
		const onKeyDown = (e) => {
			const page = window.innerHeight;
			const steps = {
				ArrowUp: -page * .1,
				ArrowDown: page * .1,
				PageUp: -page * .9,
				PageDown: page * .9
			};
			if (e.key in steps) {
				e.preventDefault();
				window.scrollBy({
					top: steps[e.key],
					behavior: "smooth"
				});
			} else if (e.key === "Home") {
				e.preventDefault();
				window.scrollTo({
					top: 0,
					behavior: "smooth"
				});
			} else if (e.key === "End") {
				e.preventDefault();
				window.scrollTo({
					top: maxScroll(),
					behavior: "smooth"
				});
			}
		};
		apply();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll, { passive: true });
		track.addEventListener("pointerdown", onPointerDown);
		track.addEventListener("pointermove", onPointerMove);
		track.addEventListener("pointerup", endDrag);
		track.addEventListener("pointercancel", endDrag);
		ram.addEventListener("keydown", onKeyDown);
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
			track.removeEventListener("pointerdown", onPointerDown);
			track.removeEventListener("pointermove", onPointerMove);
			track.removeEventListener("pointerup", endDrag);
			track.removeEventListener("pointercancel", endDrag);
			ram.removeEventListener("keydown", onKeyDown);
			if (raf) cancelAnimationFrame(raf);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: trackRef,
		className: "fixed inset-y-0 right-0 z-40 hidden w-9 cursor-pointer select-none sm:block",
		style: { touchAction: "none" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-y-3 left-1/2 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-brass/30 to-transparent" }),
			Array.from({ length: 9 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute left-1/2 h-[1px] w-2.5 -translate-x-1/2 bg-brass/25",
				style: { top: `${10 + i * 10}%` }
			}, i)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: ramRef,
				role: "scrollbar",
				"aria-controls": "main",
				"aria-orientation": "vertical",
				"aria-valuemin": 0,
				"aria-valuemax": 100,
				"aria-valuenow": 0,
				"aria-label": "Page scrollbar",
				tabIndex: 0,
				className: "absolute left-1/2 cursor-grab transition-transform duration-150 ease-out active:cursor-grabbing",
				style: {
					transform: "translateX(-50%)",
					filter: "drop-shadow(0 0 5px color-mix(in oklab, var(--brass) 45%, transparent))"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: { transform: "rotate(-90deg)" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PixelRam, { size: 38 })
				})
			})
		]
	});
}
var PALETTE = {
	b: "#a67c52",
	s: "#8a6240",
	d: "#6e4d33",
	h: "#d9b380",
	H: "#b08d5e",
	w: "#f2ebdd",
	k: "#2e2620"
};
var SPRITE = [
	"........................",
	".................hhh....",
	"................hHHHh...",
	"................hH.hHh..",
	"..www...........hH.bHh..",
	".wwbbbbbbbbbbbbbbHHbbh..",
	".wbbbbbbbbbbbbbbbbkbww..",
	".wbbbbbbbbbbbbbbbbbbwk..",
	"..bbbbbbbbbbbbbbbbbw....",
	"..sbbbbbbbbbbbbbbbs.....",
	"..s.sbbb......bbbs......",
	"..d..sbb......sbb.......",
	"..d...sb......d.s.......",
	".d....sb.....d...s......",
	".k....ks.....k...ks.....",
	"........................"
];
function PixelRam({ size = 38 }) {
	const cols = SPRITE[0].length;
	const rows = SPRITE.length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: `0 0 ${cols} ${rows}`,
		width: size,
		height: size * rows / cols,
		style: { imageRendering: "pixelated" },
		shapeRendering: "crispEdges",
		children: SPRITE.flatMap((row, y) => Array.from(row).map((ch, x) => PALETTE[ch] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x,
			y,
			width: "1",
			height: "1",
			fill: PALETTE[ch]
		}, `${x}-${y}`) : null))
	});
}
function PortfolioPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchiveSeal, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RamScrollbar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AtmosphericBackground, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ArchiveSurface, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TarotNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "main",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutSection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillsSection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExperienceSection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectsSection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortfolioFooter, {})
		] })
	] });
}
//#endregion
export { PortfolioPage as component };
