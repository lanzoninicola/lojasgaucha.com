import * as React from "react"
import PropTypes from "prop-types"
import { GridFixedContainer, TextBox } from "@layouts/index"
import { Text } from "@typography/index"

const StatsSmallBox = ({ number, description }) => {
  return (
    <TextBox bg="white" opacity="0.31" br="10" h100 w100>
      <GridFixedContainer
        rows="1fr"
        columns="1fr 1fr"
        h100
        w100
        centerX
        centerY
      >
        <Text color="orange" size="24">
          {number}
        </Text>
        <Text color="white">{description}</Text>
      </GridFixedContainer>
    </TextBox>
  )
}

StatsSmallBox.propTypes = {
  number: PropTypes.string,
  description: PropTypes.string,
}

export default StatsSmallBox
