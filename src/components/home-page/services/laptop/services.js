import * as React from "react"

import { GridFixedContainer } from "@layouts"
import ServicesHeadline from "./services-headline"
import ServicesVendedores from "./services-vendedores"
import ServicesEntrega from "./services-entrega"
import ServicesMontagem from "./services-montagem"

const Services = () => {
  return (
    <GridFixedContainer
      as="section"
      columns="1fr"
      rows=".5fr 1fr 1fr 1fr"
      gap="0"
      mb="32"
    >
      <ServicesHeadline />
      <ServicesVendedores />
      <ServicesEntrega />
      <ServicesMontagem />
    </GridFixedContainer>
  )
}

export default Services
