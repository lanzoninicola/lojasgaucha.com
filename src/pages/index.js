import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/home-page/hero/shared/hero"
import Claims from "../components/home-page/claims/laptop/claims"
import Institutional from "../components/home-page/institutional/shared/institutional"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Claims />
      // DIVIDERE L'Institutional COMPONENT PER MOBILE E DESKTOP VERSION E
      INSERIRE IF PER DEVICE IN QUESTA PAGINA
      <Institutional />
    </Layout>
  )
}

export default IndexPage
