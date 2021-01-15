import * as React from "react"
import { FlexContainer } from "../../styling/layouts/inner/index"
import { SmallText } from "../../styling/typography"
import colorsTheme from "../../styling/_theme/colorsTheme"
import SVGIcon from "../../styling/icons/SVGIcon"
import { Box } from "../../styling/shape/index"

const NotificationStandard = () => {
  return (
    <FlexContainer row stretchXM w100>
      <FlexContainer row centerY wAuto>
        <SVGIcon name="clock" color={colorsTheme("blue")} />
        <SmallText
          weight="600"
          variant="secondary"
          color={colorsTheme("blue")}
          ml="10px"
        >
          11:30
        </SmallText>
      </FlexContainer>
      <FlexContainer row centerY wAuto>
        <Box bg="blue">
          <FlexContainer row centerY>
            <SmallText
              weight="400"
              variant="secondary"
              color={colorsTheme("white")}
              size="12"
            >
              A loja està aberta. Aproveite!
            </SmallText>
          </FlexContainer>
        </Box>
      </FlexContainer>
    </FlexContainer>
  )
}

export default NotificationStandard
