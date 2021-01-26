import * as React from "react"
import styled from "styled-components"

import { FlexContainer } from "../../styling/layouts/inner"
import { Title } from "../../styling/typography/index"

const StyledModalCard = styled.div`
  height: 70px;
  width: 100%;
  margin-top: 16px;
  border-radius: 10px;
  background: ${({ theme }) =>
    theme.colors("whitegray", { colorUnit: "rgba", opacity: 0.3 })};
  padding: 16px;
`

const ModalCard = ({ title, children }) => {
  return (
    <StyledModalCard>
      <FlexContainer row stretchXL centerY>
        <Title as="h5" weight="400" color="whitegray">
          {title}
        </Title>
        {children}
      </FlexContainer>
    </StyledModalCard>
  )
}

export default ModalCard
