import * as React from "react"
import PropTypes from "prop-types"
import { SVGIcon } from "@icons/index"
import { SmallText } from "@typography/index"
import { FlexContainer } from "@layouts/index"

const ErrorMessage = ({ text, color }) => {
  return (
    <FlexContainer row centerY mt="8" mb="8">
      <SVGIcon name="ALERT_TRIANGLE" size="12" color="red" />
      <SmallText
        weight="400"
        size="12"
        variant="secondary"
        color={color}
        italic
        ml="8px"
      >
        {text}
      </SmallText>
    </FlexContainer>
  )
}

ErrorMessage.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}

export default ErrorMessage