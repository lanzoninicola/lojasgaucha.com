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

const PancakeLayout = ({ viewportInfo, children, ...props }) => {
  return (
    <PancakeStack {...props}>
      {React.Children.map(children, child => {
        if (child !== null) {
          return React.cloneElement(child, {
            viewportInfo,
          })
        }
      })}
    </PancakeStack>
  )
}

PancakeLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PancakeLayout
