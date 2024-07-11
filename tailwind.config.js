/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			extend: {
				animation: {
					glitch1:
						"glitch1 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite both",
					glitch2:
						"glitch2 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite both reverse",
				},
				keyframes: {
					glitch1: {
						"0%, 100%": { transform: "translate(0, 0)" },
						"20%": { transform: "translate(-3px, 3px)" },
						"40%": { transform: "translate(-3px, -3px)" },
						"60%": { transform: "translate(3px, 3px)" },
						"80%": { transform: "translate(3px, -3px)" },
					},
					glitch2: {
						"0%, 100%": { transform: "translate(0, 0)" },
						"20%": { transform: "translate(3px, -3px)" },
						"40%": { transform: "translate(3px, 3px)" },
						"60%": { transform: "translate(-3px, -3px)" },
						"80%": { transform: "translate(-3px, 3px)" },
					},
				},
			},
		},
	},
	plugins: [],
};
