import * as React from "react"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import Hero from "../components/hero/mobile/hero"
import BannerNotification from "../components/notification/bannerNotification"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <BannerNotification />
      <Hero />
      {/* <Claims /> */}
      {/* <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    </Layout>
  )
}

export default IndexPage
