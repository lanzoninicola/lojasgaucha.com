import * as React from "react"
import { ThemeContext } from "styled-components"

import { GridFixedContainer, FlexContainer } from "@layouts"
import { Title, Text } from "@typography"
import { colorsTheme } from "@theme"
import { SVGIcon } from "@icons"
import { NavAnchor } from "@navigation"

// TODO: TELEFONO DA THEMEPROVIDER
//          WHATSAPP MANAGING MULTI NUMBERS

const FaleConoscoContactCanaisRapido = () => {
  const themeContext = React.useContext(ThemeContext)
  const companyTheme = themeContext?.company
  const { officePhone, whatsApp } = companyTheme

  return (
    <GridFixedContainer
      id="fale-conosco-canais-rapido"
      columns="1fr"
      rAuto
      $style={{
        border: "1px solid",
        borderColor: `${colorsTheme("orange")}`,
      }}
      gap="32"
      pt="16"
      pl="16"
      pb="16"
      pr="16"
    >
      <Title as="h5" weight="700" color="orange" uppercase center>
        canais rapido
      </Title>
      <GridFixedContainer columns="1fr 1fr" rAuto>
        <NavAnchor
          to={{ type: "phone", value: `tel:${officePhone?.APINumber}` }}
        >
          <GridFixedContainer columns="1fr" rAuto gap="4" centerX>
            <SVGIcon name="CALL_PHONE" size="60" color={colorsTheme("blue")} />
            <Text weight="600" color="blue" uppercase>
              telefone
            </Text>
            <Text weight="600" color="blue">
              {officePhone?.UINumber}
            </Text>
          </GridFixedContainer>
        </NavAnchor>
        <NavAnchor
          to={{
            type: "whatsapp",
            value: `${whatsApp?.APIUrl}${whatsApp?.contacts[0]?.wAPINumber}`,
          }}
        >
          <GridFixedContainer columns="1fr" rAuto gap="4" centerX>
            <SVGIcon name="WHATSAPP" size="60" color={colorsTheme("blue")} />
            <Text weight="600" color="blue" uppercase>
              whatsapp
            </Text>
          </GridFixedContainer>
        </NavAnchor>
      </GridFixedContainer>
    </GridFixedContainer>
  )
}

export default FaleConoscoContactCanaisRapido
