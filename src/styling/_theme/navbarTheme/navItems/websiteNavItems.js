export default function websiteNavItems() {
  return [
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
  ]
}
