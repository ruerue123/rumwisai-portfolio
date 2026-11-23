import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F7F6F2",
        ink: "#17191B",
        mute: "#777B80",
        teal: { DEFAULT: "#007487", bright: "#35B5C8" },
        line: "#E4E3DE",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: ["clamp(2.75rem, 8.2vw, 8rem)", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
        h2: ["clamp(2.25rem, 5.5vw, 5rem)", { lineHeight: "1", letterSpacing: "-0.035em" }],
      },
      maxWidth: { page: "88rem" },
    },
  },
  plugins: [],
};
export default config;
