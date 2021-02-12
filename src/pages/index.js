import * as React from "react"
import { ThemeContext } from "styled-components"
import SEO from "../components/seo"

import { WebsiteLayout } from "@templates"
import Hero from "../components/home-page/hero/shared/hero"
import Claims from "../components/home-page/claims/laptop/claims"
import Institutional from "../components/home-page/institutional/laptop/institutional"

const IndexPage = () => {
  // const themeContext = React.useContext(ThemeContext)
  // const { device } = themeContext?.viewport

  return (
    <WebsiteLayout>
      <SEO title="Home" />
      <Hero />
      {/* {(device === "laptop" || device === "tablet") && (
        <>
          <Claims />
          <Institutional />
        </>
      )} */}
    </WebsiteLayout>
  )
}

export default IndexPage
