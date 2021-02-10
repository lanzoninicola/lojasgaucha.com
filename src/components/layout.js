import * as React from "react"
import PropTypes from "prop-types"

import { WebsiteLayout } from "../styling/layouts/templates/index"

// import DOMViewportInfo from "../styling/layouts/utils/DOMViewportInfo"

const Layout = ({ children }) => {
  return (
    <WebsiteLayout>
      {/* <DOMViewportInfo /> */}
      {children}
    </WebsiteLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
