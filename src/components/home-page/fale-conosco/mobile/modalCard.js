import * as React from "react"
import styled from "styled-components"

import { GridFixedContainer, Size, Space } from "@layouts/index"
import { Title } from "@typography/index"

const StyledModalCard = styled.div`
  ${Size}
  ${Space}
  border-radius: 10px;
  background: ${({ theme }) =>
    theme.colors("whitegray", { colorUnit: "rgba", opacity: 0.3 })};
`

const ModalCard = ({ title, children, ...props }) => {
  return (
    <StyledModalCard {...props}>
      <GridFixedContainer rows="1fr" columns="1fr .25fr" centerY w100 h100>
        <Title as="h5" weight="400" color="whitegray">
          {title}
        </Title>
        {children}
      </GridFixedContainer>
    </StyledModalCard>
  )
}

export default ModalCard
