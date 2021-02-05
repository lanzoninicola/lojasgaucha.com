import * as React from "react"
import { FlexContainer } from "@layouts/index"
import { Text } from "@typography/index"
import { colorsTheme } from "@theme/index"
import { SVGIcon } from "@icons/index"
import { Box } from "@shape/index"

const NotificationStandard = () => {
  return (
    <FlexContainer row stretchXL w100>
      <FlexContainer row centerY wAuto>
        <SVGIcon name="clock" color={colorsTheme("blue")} />
        <Text
          weight="600"
          variant="secondary"
          color={colorsTheme("blue")}
          ml="10px"
        >
          11:30
        </Text>
      </FlexContainer>
      <Box bg="blue" opacity="0.9">
        <Text weight="400" variant="secondary" color={colorsTheme("white")}>
          A loja està aberta. Aproveite!
        </Text>
      </Box>
    </FlexContainer>
  )
}

export default NotificationStandard
