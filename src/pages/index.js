import * as React from "react"
import SEO from "../components/seo"
import { WebsiteLayout } from "@templates"
import { useViewportInfo } from "@hooks"
import Hero from "../components/home-page/hero/shared/hero"
import Claims from "../components/home-page/claims/laptop/claims"
import Institutional from "../components/home-page/institutional/laptop/institutional"
import Services from "../components/home-page/services/laptop/services"

const IndexPage = () => {
  const { device } = useViewportInfo()

  return (
    <WebsiteLayout>
      <SEO title="Home" />
      <Hero />
      {(device === "laptop" || device === "tablet") && (
        <>
          <Claims />
          <Institutional />
          <Services />
        </>
      )}
    </WebsiteLayout>
  )
}

export default IndexPage
