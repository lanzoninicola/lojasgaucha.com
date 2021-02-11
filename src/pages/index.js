import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/home-page/hero/shared/hero"
import Claims from "../components/home-page/claims/laptop/claims"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />

      <Hero />
      <Claims />
    </Layout>
  )
}

export default IndexPage
