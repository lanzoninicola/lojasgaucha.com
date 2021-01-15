import * as React from "react"
import styled from "styled-components"
import { FlexContainer, PancakeStack } from "../layouts/index"

import { Title } from "../typography/index"

const ModalBase = styled.div`
  position: fixed;
  overflow: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
`

const ModalInner = styled.div`
  height: 100px;
  margin-left: 16px;
  margin-right: 16px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
`

const Modal = ({ pageTitle }) => {
  return (
    <ModalBase>
      <PancakeStack>
        <Title as="h2" align="center" color="orange" weight="400">
          fale conosco
        </Title>
        <ModalInner>
          <FlexContainer column>
            <Title as="h4" align="center" color="orange" weight="700">
              CANAIS RAPIDO
            </Title>
          </FlexContainer>
        </ModalInner>
      </PancakeStack>
    </ModalBase>
  )
}

export default Modal
