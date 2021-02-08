import * as React from "react"
import { FlexContainer } from "@layouts/index"
import { Text } from "@typography/index"
import { colorsTheme } from "@theme/index"
import { Box } from "@shape/index"
import { Clock } from "@widget/index"

const NotificationStandard = () => {
  return (
    <FlexContainer row stretchXL w100>
      <Clock />
      <Box bg="blue" opacity="0.9">
        <Text weight="400" variant="secondary" color={colorsTheme("white")}>
          A loja està aberta. Aproveite!
        </Text>
      </Box>
    </FlexContainer>
  )
}

export default NotificationStandard
