import * as React from "react"
import styled from "styled-components"

import { SVGIcon } from "@icons/index"

const StyledModalCardIcon = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  background: ${({ theme }) =>
    theme.colors("whitegray", { colorUnit: "rgba", opacity: 0.3 })};
  border-radius: 20px;
  ${props => props.$style ?? {}}
`

const ModalCardIcon = ({ name, size, color }) => {
  return (
    <StyledModalCardIcon>
      <SVGIcon
        name={name}
        size={size ?? "24"}
        color={color ?? "white"}
        $style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </StyledModalCardIcon>
  )
}

export default ModalCardIcon
