import * as React from "react"
import PropTypes from "prop-types"
import { SVGIcon } from "@icons/index"
import { SmallText } from "@typography/index"
import { FlexContainer } from "@layouts/index"

const ErrorMessage = ({ text, style }) => {
  return (
    <FlexContainer row centerY mt="8" mb="8">
      <SVGIcon name="ALERT_TRIANGLE" size="12" color="red" />
      <SmallText
        weight="400"
        size={style?.fontSize ?? "12"}
        color={style?.color ?? "red"}
        italic
        ml="8px"
      >
        {text ?? "An error occured"}
      </SmallText>
    </FlexContainer>
  )
}

ErrorMessage.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.object,
}

export default ErrorMessage
