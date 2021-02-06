import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/home-page/hero/mobile/hero"
import BannerNotification from "../components/notification/bannerNotification"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <BannerNotification />
      <Hero />
      {/* <Claims /> */}
    </Layout>
  )
}

export default IndexPage
