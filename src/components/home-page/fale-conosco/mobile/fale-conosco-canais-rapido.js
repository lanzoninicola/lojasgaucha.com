import * as React from "react"
import { ThemeContext } from "styled-components"
import { GridFixedContainer } from "@layouts/index"
import { Title } from "@typography/index"
import { NavModal, NavAnchor } from "@navigation/index"

import ModalCard from "./modalCard"
import ModalCardIcon from "./modalCardIcon"

const FaleConoscoCanaisRapido = () => {
  const themeContext = React.useContext(ThemeContext)
  const companyTheme = themeContext?.company
  const { officePhone, whatsApp } = companyTheme

  // se i contatti di whatsapp sono più di uno aprire un'altra modal in modalità card
  // per selezionare la persona con cui parlare

  return (
    <GridFixedContainer columns="1fr" rAuto>
      <Title as="h4" weight="400" color="orange">
        Canais rapido
      </Title>
      <NavAnchor to={{ type: "phone", value: `tel:${officePhone?.APINumber}` }}>
        <ModalCard p="16" title="TELEFONE">
          <ModalCardIcon name="CALL_PHONE" size="24" />
        </ModalCard>
      </NavAnchor>
      <NavAnchor
        to={{
          type: "whatsapp",
          value: `${whatsApp?.APIUrl}${whatsApp?.contacts[0]?.wAPINumber}`,
        }}
      >
        <ModalCard p="16" title="WHATSAPP">
          <ModalCardIcon name="WHATSAPP" size="24" />
        </ModalCard>
      </NavAnchor>
      <Title as="h4" weight="400" color="orange" mt="36px">
        O pode escrever
      </Title>
      <NavModal
        from="faleConosco"
        to={{ type: "modal", value: "ModalFaleConoscoForm" }}
      >
        <ModalCard p="16" title="DEIXA UM MENSAGEM">
          <ModalCardIcon name="MAIL" />
        </ModalCard>
      </NavModal>
    </GridFixedContainer>
  )
}

export default FaleConoscoCanaisRapido
