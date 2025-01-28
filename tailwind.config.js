/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flyonui/dist/js/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("flyonui"),
    // eslint-disable-next-line no-undef
    require("flyonui/plugin")
  ],
  flyonui: {
    themes: ["light"]
  }
}

