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

const PancakeLayout = ({ children, ...props }) => {
  return <PancakeStack {...props}>{children}</PancakeStack>
}

PancakeLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PancakeLayout
