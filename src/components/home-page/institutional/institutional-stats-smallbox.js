import * as React from "react"
import PropTypes from "prop-types"
import { GridContainer } from "@layouts/index"
import { Box } from "@shape/index"
import { Text } from "@typography/index"

const StatsSmallBox = ({ number, description }) => {
  return (
    <Box bg="white" opacity="0.31" br="10" h100 w100>
      <GridContainer rows="1fr" columns="1fr 1fr" centerX>
        <Text variant="primary" color="orange" weight="700" size="28">
          {number}
        </Text>
        <Text variant="primary" color="white" weight="700" size="15">
          {description}
        </Text>
      </GridContainer>
    </Box>
  )
}

StatsSmallBox.propTypes = {
  number: PropTypes.string,
  description: PropTypes.string,
}

export default StatsSmallBox
