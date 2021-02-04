import * as React from "react"

import { FlexContainer } from "@layouts/index"
import { SmallText } from "@typography/index"
import { NavLink } from "@navigation/index"
import { SVGIcon } from "@icons/index"

import colorsTheme from "@theme/index"

const HeroAmbientesHeadline = () => {
  return (
    <FlexContainer row stretchXL centerY hAuto mb="10">
      <SmallText
        weight="600"
        size="14"
        lh="18"
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
          <SVGIcon name="view_all" color={colorsTheme("orange")} mb="4" />
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
