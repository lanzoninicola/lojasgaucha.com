import * as React from "react"
import { FlexContainer } from "@layouts/index"
import { SmallText } from "@typography/index"
import { colorsTheme } from "@theme/index"
import { SVGIcon } from "@icons/index"
import { Box } from "@shape/index"

const NotificationStandard = () => {
  return (
    <FlexContainer row stretchXL w100>
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
      <Box bg="blue" opacity="0.9">
        <SmallText
          weight="400"
          variant="secondary"
          color={colorsTheme("white")}
          size="12"
        >
          A loja està aberta. Aproveite!
        </SmallText>
      </Box>
    </FlexContainer>
  )
}

export default NotificationStandard
