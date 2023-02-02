import { defineConfig } from "windicss/helpers";

export default defineConfig({
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1366px",
      },
      fontFamily: {
        serif: ["PT Serif", "serif"],
        handwrite: ["Cookie", "cursive"],
      },
      colors: {
        armyGreen: "#2E3B00",
        lemonCurry: "#C19A21",
        grayWeb: "#7D8282",
        goldDark: "#ba9211",
        goldMedium: "#e1c278",
        goldLight: "#faefb1",
      },
      textColor: {
        armyGreen: "#2E3B00",
        lemonCurry: "#C19A21",
        grayWeb: "#7D8282",
        goldDark: "#ba9211",
        goldMedium: "#e1c278",
        goldLight: "#faefb1",
      },
      backgroundColor: {
        body: "#d6d6d6",
      },
      backgroundImage: {
        containerBg: "url('/src/assets/images/lbg-bg.webp')",
        logo: "url('/src/assets/images/lbg-logo.svg')",
        patternBg: "url('/src/assets/images/lbg-patron.svg')",
      },
    },
  },
  shortcuts: {
    heading: "text-armyGreen",
    "heading-1": "heading text-4xl",
    "heading-2": "heading text-3xl",
    "heading-3": "heading text-2xl",
    "heading-4": "heading text-xl",
    "heading-5": "heading text-lg",
    "heading-6": "heading text-base font-extrabold",
    "paragraph-a": "text-xl",
    "paragraph-b": "text-3xl",
    "flex-col-center": "flex flex-col justify-center",
    "filter-to-white":
      "filter invert-99 sepia-2 saturate-75 hue-rotate-99 brightness-0 contrast-100",
  },
});
