module.exports = {
  mode: "jit",
  future: {
    purgeLayersByDefault: true,
    applyComplexClasses: true,
  },
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "dark-mode": { raw: "(prefers-color-scheme: dark)" },
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        primary: {
          darker: "var(--color-primary-darker)",
          DEFAULT: "var(--color-primary)",
          lighter: "var(--color-primary-lighter)",
        },
        mono: {
          darkest: "var(--color-mono-darkest)",
          darker: "var(--color-mono-darker)",
          dark: "var(--color-mono-dark)",
          "medium-dark": "var(--color-mono-medium-dark)",
          medium: "var(--color-mono-medium)",
          "medium-light": "var(--color-mono-medium-light)",
          light: "var(--color-mono-light)",
          lighter: "var(--color-mono-lighter)",
          lightest: "var(--color-mono-lightest)",
        },
        red: {
          darker: "var(--color-red-darker)",
          dark: "var(--color-red-dark)",
          DEFAULT: "var(--color-red)",
          light: "var(--color-red-light)",
          lighter: "var(--color-red-lighter)",
        },
        green: {
          darker: "var(--color-green-darker)",
          dark: "var(--color-green-dark)",
          DEFAULT: "var(--color-green)",
          light: "var(--color-green-light)",
          lighter: "var(--color-green-lighter)",
        },
        blue: {
          darker: "var(--color-blue-darker)",
          dark: "var(--color-blue-dark)",
          DEFAULT: "var(--color-blue)",
          light: "var(--color-blue-light)",
          lighter: "var(--color-blue-lighter)",
        },
        yellow: {
          darker: "var(--color-yellow-darker)",
          dark: "var(--color-yellow-dark)",
          DEFAULT: "var(--color-yellow)",
          light: "var(--color-yellow-light)",
          lighter: "var(--color-yellow-lighter)",
        },
        orange: {
          darker: "var(--color-orange-darker)",
          dark: "var(--color-orange-dark)",
          DEFAULT: "var(--color-orange)",
          light: "var(--color-orange-light)",
          lighter: "var(--color-orange-lighter)",
        },
        teal: {
          darker: "var(--color-teal-darker)",
          dark: "var(--color-teal-dark)",
          DEFAULT: "var(--color-teal)",
          light: "var(--color-teal-light)",
          lighter: "var(--color-teal-lighter)",
        },
        purple: {
          darker: "var(--color-purple-darker)",
          dark: "var(--color-purple-dark)",
          DEFAULT: "var(--color-purple)",
          light: "var(--color-purple-light)",
          lighter: "var(--color-purple-lighter)",
        },
      },
    },
  },
  plugins: [],
};
