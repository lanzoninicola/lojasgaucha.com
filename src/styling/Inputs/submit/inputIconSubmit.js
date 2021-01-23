import * as React from "react"
import styled from "styled-components"

import SVGIcon from "../../icons/SVGIcon"
import colorsTheme from "../../_theme/colorsTheme"

const ButtonBackground = styled.button`
  position: relative;
  width: 50px;
  height: 50px;
  border: 0px;
  border-radius: 50%;
  background: ${({ bg }) => colorsTheme(bg)};
  cursor: pointer;
`

const InputIconSubmit = ({ bg, children, ...props }) => {
  return (
    <ButtonBackground bg={bg}>
      <SVGIcon
        name="SEND"
        color="white"
        $style={{
          top: "50%",
          left: "50%",
          position: "absolute",
          transform: "translate(-50%,-50%)",
        }}
      />
    </ButtonBackground>
  )
}

export default InputIconSubmit
