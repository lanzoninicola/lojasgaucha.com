export default function websiteNavItems() {
  return [
    {
      icon: "google",
      text: "Google Maps",
      to: {
        type: "link",
        value:
          "https://www.google.com/maps/search/?api=1&query=LOJAS+GAÚCHA+-+Gazzoni+Eletromóveis+Ltda",
      },
      spotlighted: { yesno: false, color: "" },
    },
    {
      icon: "waze",
      text: "Waze",
      to: {
        type: "link",
        value: "https://waze.com/ul?q=LOJAS+GAÚCHA+-+Gazzoni+Eletromóveis+Ltda",
      },
      spotlighted: { yesno: false, color: "" },
    },
    {
      icon: "appleMaps",
      text: "Apple Maps",
      to: {
        type: "link",
        value:
          "http://maps.apple.com/?q=LOJAS+GAÚCHA+-+Gazzoni+Eletromóveis+Ltda",
      },
      spotlighted: { yesno: false, color: "" },
    },
  ]
}
