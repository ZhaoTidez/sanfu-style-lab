/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "PingFang SC",
          "Microsoft YaHei",
          "sans-serif",
        ],
      },
      boxShadow: {
        neon: "0 0 0 1px rgba(255,255,255,.75), 0 16px 50px rgba(40,105,255,.14)",
        pink: "0 18px 60px rgba(255,45,155,.22)",
      },
      animation: {
        floaty: "floaty 5.5s ease-in-out infinite",
        floatySlow: "floaty 7.5s ease-in-out infinite",
        scan: "scan 2.6s linear infinite",
        pop: "pop .35s ease-out both",
        slideUp: "slideUp .28s ease-out both",
        shimmer: "shimmer 2.1s linear infinite",
        pulseGlow: "pulseGlow 1.8s ease-in-out infinite",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0) rotate(var(--tw-rotate, 0deg))" },
          "50%": { transform: "translateY(-16px) rotate(var(--tw-rotate, 0deg))" },
        },
        scan: {
          "0%": { transform: "translateY(-110%)" },
          "100%": { transform: "translateY(110%)" },
        },
        pop: {
          "0%": { transform: "scale(.92)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(12px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        pulseGlow: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(33, 217, 255, .35)" },
          "50%": { boxShadow: "0 0 0 12px rgba(33, 217, 255, 0)" },
        },
      },
    },
  },
  plugins: [],
};
