import { isNotUndefined, isNotString, error } from "@utils/index"

const companyTheme = filter => {
  if (isNotUndefined(filter) && isNotString(filter)) {
    error(
      "companyTheme()",
      `The "filter" parameter must be a string and not ${typeof filter}`
    )
  }

  const companyInfo = {
    shortName: `LOJAS GAÚCHA`,
    longName: `LOJAS GAÚCHA - Gazzoni Eletromóveis Ltda`,
    description: `Bem vindo na Loja Gaucha, por 15 anos, procuramos soluções para sua casa ao melhor preço.`,
    phisicalAddress: "Av. Tupi, 2361 - Centro - Pato Branco",
    // TODO: manage multiple phisical adresses
    //
    // physicalAdresses: [
    //   {
    //     siteName: null, // if the company site has a different name from the
    //     address: "Av. Tupi, 2361 - Centro",
    //     city: "Pato Branco",
    //     CEP: "85501-055",
    //     State: "PR",
    //   },
    // ],
    officePhone: `46991564002`,
    whatsAppContacts: [
      { fullName: "Mara", wnumber: "46991564002" },
      { fullName: "Nicola", wnumber: "46991564002" },
    ],
    maps: {
      // The "placeName" props is used to buil the external link of the MapAppsNavbar
      // Grab the exact place name from the URL after searching the place inside Google Maps website
      placeName: "LOJAS+GAÚCHA+-+Gazzoni+Eletromóveis+Ltda",
      latitude: "-26.22606",
      longitude: "-52.671120",
    },
  }

  if (isNotUndefined(filter)) {
    return companyInfo[filter]
  }

  return companyInfo
}

export default companyTheme
