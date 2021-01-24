import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Span = styled.span`
  position: relative;
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

const HighlitTextLine1 = ({ color, children }) => {
  return (
    <>
      <Span>
        {children}
        <Line1 color={color} />
      </Span>
    </>
  )
}

HighlitTextLine1.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
}

export default HighlitTextLine1
