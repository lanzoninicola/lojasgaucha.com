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

import { PancakeStack } from "@layouts/index"
import { HeaderFixedContainer } from "@layouts/index"

const PancakeLayout = ({ device, children }) => {
  return (
    // 2021-01-29 to solve building error in Gatsby cloud
    // <>
    //   <div>Hello World</div>
    //   {children}
    // </>
    <PancakeStack device={device}>
      <HeaderFixedContainer />
      {children}
      {/* Footer */}
    </PancakeStack>
  )
}

PancakeLayout.propTypes = {
  children: PropTypes.node.isRequired,
  device: PropTypes.string.isRequired,
}

export default PancakeLayout
