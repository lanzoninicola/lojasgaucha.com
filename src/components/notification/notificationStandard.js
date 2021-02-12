import * as React from "react"
import { useViewportInfo } from "@hooks"
import { FlexContainer } from "@layouts/index"
import { Text } from "@typography/index"
import { colorsTheme } from "@theme"
import { TextBox } from "@layouts"
import { Clock } from "@widget/index"

const NotificationStandard = () => {
  const { device } = useViewportInfo()

  return (
    <FlexContainer
      row
      w100
      stretchXM={device === "mobile" && true}
      stretchXL={(device === "laptop" || device === "tablet") && true}
      pt={{ laptop: 4, tablet: 4 }}
      pl={{ laptop: 180, tablet: 80 }}
      pb={{ laptop: 4, tablet: 4 }}
      pr={{ laptop: 180, tablet: 80 }}
    >
      <Clock />
      <TextBox bg="blue" opacity="0.9">
        <Text color={colorsTheme("white")}>A loja està aberta. Aproveite!</Text>
      </TextBox>
    </FlexContainer>
  )
}

export default NotificationStandard
