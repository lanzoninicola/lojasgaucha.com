import * as React from "react"
import { ThemeProvider } from "styled-components"
import { Helmet } from "react-helmet"

import { GlobalStyle, theme } from "@theme"
import { ViewportProvider } from "@layouts"
import { ModalProvider } from "@overlays"

// this is a gatsby function and not a React component
// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#wrapRootElement
// it used to wrap the gatsby root React Element
const wrapRootElement = ({ element }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Helmet>
          {/* https://leafletjs.com/examples/quick-start/ */}
          <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
            integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
            crossorigin=""
          />
        </Helmet>
        <ViewportProvider>
          <ModalProvider>{element}</ModalProvider>
        </ViewportProvider>
      </ThemeProvider>
    </>
  )
}

export default wrapRootElement
