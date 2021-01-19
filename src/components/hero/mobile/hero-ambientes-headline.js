import * as React from "react"

import { FlexContainer } from "../../../styling/layouts/inner"
import { SmallText } from "../../../styling/typography/index"
import { NavLink } from "../../../styling/navigation/index"
import SVGIcon from "../../../styling/icons/SVGIcon"

import colorsTheme from "../../../styling/_theme/colorsTheme"

const HeroAmbientesHeadline = () => {
  return (
    <FlexContainer row stretchXL centerY hAuto mb="10">
      <SmallText
        weight="600"
        size="14"
        lh="16"
        color="orange"
        capitalize="uppercase"
        $style={{
          width: "120px",
        }}
      >
        Ambientes para la sua casa
      </SmallText>
      <NavLink
        to={{
          item: "link",
          value: "/ambientes",
        }}
        $style={{}}
      >
        <FlexContainer column centerY>
          <SVGIcon name="view_all" color={colorsTheme("orange")} />
          <SmallText
            weight="600"
            size="12"
            lh="14"
            capitalize="lowercase"
            color="orange"
          >
            ver mais
          </SmallText>
        </FlexContainer>
      </NavLink>
    </FlexContainer>
  )
}

export default HeroAmbientesHeadline
