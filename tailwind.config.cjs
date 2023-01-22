const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      light: {
        sun: "#FFFFFF", // 100
        sky: "#EEF0F1", // 95
        mist: "#DDE2E3", // 90
        cloud: "#CAD6D7", // 85
      },
      dark: {
        moon: "#0C3543", // 20
        sky: "#062935", // 15
        mist: "#031C27", // 10
        cloud: "#010D15", // 5
      },
    },
    fontSize: {
      "display-big": [
        "64px",
        {
          lineHeight: "58px",
          fontWeight: 900,
        },
      ],
      "display-medium": [
        "55px",
        {
          lineHeight: "48px",
          fontWeight: 500,
        },
      ],
      "display-small": [
        "48px",
        {
          lineHeight: "48px",
          fontWeight: 200,
        },
      ],
      h1: [
        "32px",
        {
          fontWeight: 900,
        },
      ],
      h2: [
        "22px",
        {
          fontWeight: 900,
        },
      ],
      h3: [
        "16px",
        {
          fontWeight: 900,
        },
      ],
      "lead-bold": [
        "16px",
        {
          fontWeight: 700,
        },
      ],
      lead: [
        "16px",
        {
          fontWeight: 400,
        },
      ],
      "body-bold": [
        "14px",
        {
          fontWeight: 700,
        },
      ],
      body: [
        "14px",
        {
          fontWeight: 400,
        },
      ],
      small: [
        "13px",
        {
          fontWeight: 400,
        },
      ],
    },
    extend: {
      fontFamily: {
        sans: ['"Public SansVariable"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
