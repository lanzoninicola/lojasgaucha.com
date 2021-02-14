import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Size } from "@layouts"
import { Span } from "@layouts/index"

const Line1 = styled.div`
  ${Size}
  position: absolute;
  top: ${({ top }) => {
    if (top) return top
    return "0%"
  }};
  left: 10%;
  margin-left: -8%;
  z-index: -1;
  background: ${({ color }) => {
    if (color) return color
    return "#000000"
  }};
`

const HighlightTextLine1 = ({ color, newLine, children, ...props }) => {
  return (
    <>
      <Span newLine={newLine}>
        {children}
        <Line1 color={color} h="75%" w="102%" wFixed {...props} />
      </Span>
    </>
  )
}

HighlightTextLine1.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
}

export default HighlightTextLine1
