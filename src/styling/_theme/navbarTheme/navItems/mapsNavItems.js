export default function mapsNavItems() {
  return [
    {
      icon: "GMAPS",
      text: "Google Maps",
      to: {
        type: "anchor",
        value:
          "https://www.google.com/maps/search/?api=1&query=LOJAS+GAÚCHA+-+Gazzoni+Eletromóveis+Ltda",
      },
      spotlighted: { yesno: false, color: "" },
    },
    {
      icon: "WAZE",
      text: "Waze",
      to: {
        type: "anchor",
        value: "https://waze.com/ul?q=LOJAS+GAÚCHA+-+Gazzoni+Eletromóveis+Ltda",
      },
      spotlighted: { yesno: false, color: "" },
    },
    {
      icon: "APPLE_MAPS",
      text: "Apple Maps",
      to: {
        type: "anchor",
        value:
          "http://maps.apple.com/?q=LOJAS+GAÚCHA+-+Gazzoni+Eletromóveis+Ltda",
      },
      spotlighted: { yesno: false, color: "" },
    },
  ]
}
