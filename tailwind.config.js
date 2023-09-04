/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f2f2f2",
        a2a2a: "#2a2a2a",
        d6e70: "#6d6e70",
        cdcfd3: "#cdcfd3",
        ffffff: "#fff",
        "bar-color": "#cd113b",
        a30cf: "#3a30cf",
        e94: "#047e94",
        darkslategray: {
          "100": "#415156",
          "200": "#393e46",
        },
        d6e701: "#838383",
        e7e7e7: "#e7e7e7",
        lavenderblush: "#f8e9eb",
        lavender: "#d0e5fe",
        azure: "#e7f5f5",
        ff4d4f: "#ee6565",
        ac11: "#00ac11",
        f4ecce: "#f4ecce",
      },
      fontFamily: {
        reg: "'Uni Neue'",
        "text-14-reg": "Inter",
        roboto: "Roboto",
      },
      borderRadius: {
        "6xl": "25px",
        "2xl": "21px",
        "12xl": "31px",
        "3xs": "10px",
        "8xs": "5px",
        "8xl": "27px",
        "77xl": "96px",
      },
    },
    fontSize: {
      xs: "0.67rem",
      sm: "0.78rem",
      xl: "1.11rem",
      lg: "1rem",
      base: "0.89rem",
      smi: "0.72rem",
      "3xs": "0.56rem",
      "5xl": "1.33rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
