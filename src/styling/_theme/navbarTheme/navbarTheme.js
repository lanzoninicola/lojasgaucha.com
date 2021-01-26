import colorsTheme from "../colorsTheme"
import websiteNavItems from "./navItems/websiteNavItems"
import mapNavItems from "./navItems/mapNavItems"

const navbarTheme = () => {
  return {
    large: {
      layout: {
        width: { min: 100, max: 700 },
        height: "100%",
        background: null,
        items: {
          icons: {
            show: true,
            colors: {
              default: colorsTheme("blue"),
              hovered: colorsTheme("blue"),
              spotligthed: colorsTheme("orange"),
            },
            size: "24",
          },
          labels: {
            show: true, // true || false
            capitalize: "uppercase", // "lowercase" || "uppercase" || "capitalize"
            size: 12, // value in PX
            lineHeight: 12, // value in PX
            colors: {
              default: colorsTheme("blue"),
              hovered: colorsTheme("blue"),
              spotligthed: colorsTheme("orange"),
            },
          },
        },
      },
    },
    mobile: {
      layout: {
        width: "100vw",
        height: 70,
        background: colorsTheme("white", { colorUnit: "rgb", opacity: 0 }),
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
        items: {
          icons: {
            colors: {
              default: colorsTheme("blue"),
              hovered: colorsTheme("blue"),
              spotligthed: {
                orange: colorsTheme("orange"),
                green: colorsTheme("green"),
              },
            },
            size: "24",
          },
          labels: {
            capitalize: "lowercase", // "lowercase" || "uppercase" || "capitalize"
            size: 12, // value in PX
            lineHeight: 12, // value in PX
            colors: {
              default: colorsTheme("blue"),
              hovered: colorsTheme("blue"),
              spotligthed: {
                orange: colorsTheme("orange"),
                green: colorsTheme("green"),
              },
            },
          },
        },
      },
    },
    navItems: {
      website: websiteNavItems(),
      map: mapNavItems(),
    },
  }
}

export default navbarTheme
