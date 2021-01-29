/**
 *
 *  Pancake Layout
 *
 *  This layout has this shape:
 *
 *  1. Header
 *  2. Main Content
 *  3. Footer
 *
 */

import * as React from "react"
import PropTypes from "prop-types"

import { PancakeStack } from "../inner/index"
import { HeaderFixedContainer } from "../components/index"

const PancakeLayout = ({ children }) => {
  return (
    // 2021-01-29 to solve building error in Gatsby cloud
    <div>Hello World</div>
    // <PancakeStack>
    //   <HeaderFixedContainer />
    //   {children}
    //   {/* Footer */}
    // </PancakeStack>
  )
}

// PancakeLayout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default PancakeLayout
