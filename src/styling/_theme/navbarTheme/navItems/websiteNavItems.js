export default function websiteNavItems() {
  return [
    {
      icon: "ALERT_TRIANGLE",
      text: "Porque nós",
      to: {
        type: "modal",
        value: "ModalInstitutional",
      },
      spotlighted: { yesno: true, color: "green" },
    },
    {
      icon: "PIN",
      text: "Loja fisica",
      to: {
        type: "modal",
        value: "ModalMap",
      },
      spotlighted: { yesno: false, color: "default" },
    },
    {
      icon: "LOGO_GAUCHA",
      text: "home",
      to: {
        type: "link",
        value: "/",
      },
      spotlighted: { yesno: false, color: "default" },
    },
    {
      icon: "WHATSAPP",
      text: "ajuda",
      to: {
        type: "modal",
        value: "ModalFaleConosco",
      },
      spotlighted: { yesno: false, color: "default" },
    },
    {
      icon: "CALENDAR_DATES",
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
