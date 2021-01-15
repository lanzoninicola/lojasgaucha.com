import * as React from "react"
import styled from "styled-components"

import { FlexContainer } from "../../styling/layouts/inner"
import SVGIcon from "../../styling/icons/SVGIcon"

const StyledModalCardIcon = styled.div`
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
      <FlexContainer centerX centerY>
        <SVGIcon name={name} size={size ?? "24"} color={color ?? "white"} />
      </FlexContainer>
    </StyledModalCardIcon>
  )
}

export default ModalCardIcon
