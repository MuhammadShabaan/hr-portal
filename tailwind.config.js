/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/pages/**/*.tsx", "./src/components/**/*.tsx"],
  theme: {
    extend: {
      fontSize: {
        h1r: ["2.5rem", { lineHeight: "3rem", fontWeight: "400" }],
        h2r: ["2rem", { lineHeight: "2.4rem", fontWeight: "400" }],
        h3r: ["1.4rem", { lineHeight: "1.8rem", fontWeight: "400" }],
        sub1r: ["1.25rem", { lineHeight: "1.5rem", fontWeight: "400" }],
        sub2r: ["1rem", { lineHeight: "1.2rem", fontWeight: "400" }],
        sub3r: ["0.875rem", { lineHeight: "1.05rem", fontWeight: "400" }],
        b1r: ["0.625rem", { lineHeight: "0.75rem", fontWeight: "400" }],
        b2r: ["0.5rem", { lineHeight: "0.6rem", fontWeight: "400" }],
        h1m: ["2.5rem", { lineHeight: "3rem", fontWeight: "500" }],
        h2m: ["2rem", { lineHeight: "2.4rem", fontWeight: "500" }],
        h3m: ["1.4rem", { lineHeight: "1.8rem", fontWeight: "500" }],
        sub1m: ["1.25rem", { lineHeight: "1.5rem", fontWeight: "500" }],
        sub2m: ["1rem", { lineHeight: "1.2rem", fontWeight: "500" }],
        sub3m: ["0.875rem", { lineHeight: "1.05rem", fontWeight: "500" }],
        b1m: ["0.625rem", { lineHeight: "0.75rem", fontWeight: "500" }],
        b2m: ["0.5rem", { lineHeight: "0.6rem", fontWeight: "500" }],
        h1b: ["2.5rem", { lineHeight: "3rem", fontWeight: "700" }],
        h2b: ["2rem", { lineHeight: "2.4rem", fontWeight: "700" }],
        h3b: ["1.4rem", { lineHeight: "1.8rem", fontWeight: "700" }],
        sub1b: ["1.25rem", { lineHeight: "1.5rem", fontWeight: "700" }],
        sub2b: ["1rem", { lineHeight: "1.2rem", fontWeight: "700" }],
        sub3b: ["0.875rem", { lineHeight: "1.05rem", fontWeight: "700" }],
        b1b: ["0.625rem", { lineHeight: "0.75rem", fontWeight: "700" }],
        b2b: ["0.5rem", { lineHeight: "0.6rem", fontWeight: "700" }],
      },

      colors: {
        neutral: {
          200: "#FFFFFF",
          300: "#F2F2F2",
          400: "#E6E6E6",
          500: "#BFBFBF",
          600: "#808080",
          700: "#4D4D4D",
          800: "#333333",
          900: "#19191A",
        },
        primary: {
          600: "#C0D5E2",
          700: "#7AA7C2",
          800: "#437593",
          900: "#335970",
        },
        background: {
          primary: "#F8FAFC",
          secondary: "#E9F6F1",
        },
      },
    },
  },
  plugins: [],
};
