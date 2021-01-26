import colorsTheme from "./colorsTheme"

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
      items: [
        {
          icon: "home",
          text: "Ambientes",
          to: {
            type: "link",
            value: "/ambientes",
          },
          spotlighted: false,
          focused: "enter",
        },
        {
          icon: "shop",
          text: "Sobre nós",
          to: {
            type: "link",
            value: "/loja",
          },
          spotlighted: false,
          focused: "idle",
        },
        {
          icon: "pin",
          text: "Loja fisica",
          to: {
            type: "link",
            value: "/map",
          },
          spotlighted: false,
          focused: "idle",
        },
        {
          icon: "clock",
          text: "Horarios",
          to: {
            type: "link",
            value: "/horarios",
          },
          spotlighted: false,
          focused: "idle",
        },
        {
          icon: "calendar_dates",
          text: "Agendamento",
          to: {
            type: "link",
            value: "/agendamento",
          },
          spotlighted: true,
          focused: "idle",
        },
        {
          icon: "search",
          text: "Pesquisa",
          to: {
            type: "link",
            value: "/loja",
          },
          spotlighted: false,
          focused: "idle",
        },
      ],
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
      items: [
        {
          icon: "ALERT_TRIANGLE",
          text: "Porque nós",
          to: {
            type: "modal",
            value: "ModalAmbientes",
          },
          spotlighted: { yesno: true, color: "green" },
        },
        {
          icon: "pin",
          text: "Loja fisica",
          to: {
            type: "modal",
            value: "ModalMap",
          },
          spotlighted: { yesno: false, color: "default" },
        },
        {
          icon: "logo_gaucha",
          text: "home",
          to: {
            type: "link",
            value: "/",
          },
          spotlighted: { yesno: false, color: "default" },
        },
        {
          icon: "whatsapp",
          text: "ajuda",
          to: {
            type: "modal",
            value: "ModalFaleConosco",
          },
          spotlighted: { yesno: false, color: "default" },
        },
        {
          icon: "calendar_dates",
          text: "agenda",
          to: {
            type: "modal",
            value: "ModalAgendamento",
          },
          spotlighted: { yesno: true, color: "orange" },
          focused: "idle",
        },
      ],
    },
  }
}

export default navbarTheme
