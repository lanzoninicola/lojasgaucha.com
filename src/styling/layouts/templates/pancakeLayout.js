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
    <PancakeStack>
      <HeaderFixedContainer />
      {children}
      {/* Footer */}
    </PancakeStack>
  )
}

PancakeLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PancakeLayout
