import websiteNavItems from "./navItems/websiteNavItems"
import mapsNavItems from "./navItems/mapsNavItems"
import iconsTheme from "../iconsTheme/iconsTheme"

import colorsTheme from "../colorsTheme"
import { isNotUndefined, isNotEmptyObject, error } from "@utils/index"

function validateNavItems(navItems) {
  const { catalog } = iconsTheme()

  Object.keys(navItems).map(itemsGroup => {
    navItems[itemsGroup].map(itemGroup => {
      if (itemGroup?.icon !== itemGroup?.icon.toUpperCase()) {
        error(
          "navbarTheme",
          `The name of icon "${itemGroup.text}" for the navbarItems "${itemsGroup}" must be capitalize in "uppercase". Check which name it will choosed in the IconTheme`
        )
      }

      if (catalog[itemGroup?.icon] === undefined) {
        error(
          "navbarTheme",
          `The icon for the navbarItem "${itemGroup.text}" is not exists in the iconsTheme. It will give you problems when you will use the navbar React Components `
        )
      }
    })
  })
}

const navbarTheme = () => {
  const navbarSettings = {
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
      maps: mapsNavItems(),
    },
  }

  const navItems = navbarSettings?.navItems

  if (isNotUndefined(navItems)) {
    if (isNotEmptyObject(navItems)) {
      validateNavItems(navItems)
    }
  }

  return navbarSettings
}

export default navbarTheme
