import { colorsTheme } from "@theme"

const carouselTheme = section => {
  const carouselTheme = {
    style: {
      hero_carousel: {
        card: {
          default: {
            background: "white",
            borderRadius: "25px",
            shadow: {
              color: colorsTheme("whitegray"),
            },
          },
        },
      },
    },
    config: {
      hero_carousel: {
        card: {
          shadow: {
            visible: true,
          },
        },
      },
    },
    data: {
      hero_carousel: {
        type: "graphql", // fixed / endpoint
        fixed: [],
        endpoint: "",
      },
    },
  }

  return carouselTheme[section]
}

export default carouselTheme
