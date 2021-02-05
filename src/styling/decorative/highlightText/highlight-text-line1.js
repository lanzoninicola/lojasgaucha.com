import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Span = styled.span`
  position: relative;
  white-space: ${({ newLine }) => {
    if (newLine) return "pre-wrap"

    return null
  }};
`

const Line1 = styled.div`
  position: absolute;
  top: 60%;
  left: 10%;
  height: 10px;
  width: 105%;
  max-width: 440px;
  margin-left: -8%;
  transform: rotate(var(--decoration-angle-2));
  z-index: -1;

  background: ${({ color }) => {
    if (color) return color

    return "#000000"
  }};
`

const HighlightTextLine1 = ({ color, newLine, children }) => {
  return (
    <>
      <Span newLine={newLine}>
        {children}
        <Line1 color={color} />
      </Span>
    </>
  )
}

HighlightTextLine1.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
}

export default HighlightTextLine1
