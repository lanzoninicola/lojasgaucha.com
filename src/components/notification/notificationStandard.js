import * as React from "react"
import { ThemeContext } from "styled-components"
import { FlexContainer } from "@layouts/index"
import { Text } from "@typography/index"
import { colorsTheme } from "@theme/index"
import { Box } from "@shape/index"
import { Clock } from "@widget/index"

const NotificationStandard = () => {
  const themeContext = React.useContext(ThemeContext)
  const { device } = themeContext?.viewport

  return (
    <FlexContainer
      row
      w100
      stretchXM={device === "mobile" && true}
      stretchXL={device === "laptop" && true}
      p={device === "laptop" && "4 180 4 180"}
    >
      <Clock />
      <Box bg="blue" opacity="0.9">
        <Text color={colorsTheme("white")}>A loja està aberta. Aproveite!</Text>
      </Box>
    </FlexContainer>
  )
}

export default NotificationStandard
