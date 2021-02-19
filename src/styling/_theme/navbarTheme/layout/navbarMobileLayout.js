import { colorsTheme } from "@theme"

const navbarMobileLayout = () => {
  const layout = {
    container: {
      width: "100vw",
      height: 70,
      background: colorsTheme("white", { colorUnit: "rgb", opacity: 0 }),
    },
    navItem: {
      icon: {
        color: {
          default: "blue",
          hovered: "blue",
          spotligthed: {
            orange: "orange",
            green: "green",
          },
        },
        size: "24",
      },
      text: {
        capitalize: "lowercase", // "lowercase" || "uppercase" || "capitalize"
        size: 12, // value in PX
        lineHeight: 12, // value in PX
        color: {
          default: colorsTheme("blue"),
          hovered: colorsTheme("blue"),
          spotligthed: {
            orange: colorsTheme("orange"),
            green: colorsTheme("green"),
          },
        },
      },
      effects: {
        hover: {
          borderTop: `4px solid ${colorsTheme("green")}`,
          transform: `scale(1.1)`,
        },
        framerMotion: {
          hover: {
            scale: 1.2,
            borderTop: `4px solid ${colorsTheme("green")}`,
          },
          tap: {
            scale: 1.3,
            borderTop: `4px solid ${colorsTheme("green")}`,
          },
        },
      },
    },
  }

  return layout
}

export default navbarMobileLayout
