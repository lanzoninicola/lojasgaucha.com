import * as React from "react"
import { Title } from "@typography"
import { GridFixedContainer } from "@layouts"
import { HighlightTextLine1 } from "@decorative"
import { colorsTheme } from "@theme"
import { SVGIcon } from "@icons"

const ServicesHeadline = () => {
  return (
    <GridFixedContainer columns="1fr" rows="1fr" centerX centerY h="400">
      <GridFixedContainer columns="1fr" rAuto centerX gap="40">
        <Title as="h2" color="blue" weight="600" uppercase center>
          cuidamos de todos os nossos{" "}
          <HighlightTextLine1
            color="white"
            bg={colorsTheme("orange")}
            h="50%"
            top="20%"
            left="8%"
          >
            serviços pessoalmente
          </HighlightTextLine1>
        </Title>
        <SVGIcon name="ARROW_BOTTOM" color={colorsTheme("blue")} />
      </GridFixedContainer>
    </GridFixedContainer>
  )
}

export default ServicesHeadline
