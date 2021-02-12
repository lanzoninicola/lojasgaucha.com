import * as React from "react"

import { FlexContainer } from "@layouts/index"
import { Text, SmallText } from "@typography/index"
import { NavLink } from "@navigation/index"
import { SVGIcon } from "@icons/index"

import { colorsTheme } from "@theme"

const HeroAmbientesHeadline = () => {
  return (
    <FlexContainer row stretchXL centerY hAuto>
      <Text
        weight="600"
        color="orange"
        capitalize="uppercase"
        $style={{
          width: "140",
        }}
      >
        Ambientes para la sua casa
      </Text>
      <NavLink
        to={{
          item: "link",
          value: "/ambientes",
        }}
        $style={{}}
      >
        <FlexContainer column centerY>
          <SVGIcon name="view_all" color={colorsTheme("orange")} mb="4" />
          <SmallText weight="600" capitalize="lowercase" color="orange">
            ver mais
          </SmallText>
        </FlexContainer>
      </NavLink>
    </FlexContainer>
  )
}

export default HeroAmbientesHeadline
