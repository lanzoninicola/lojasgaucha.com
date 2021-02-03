import * as React from "react"
import PropTypes from "prop-types"
import { GridContainer } from "@layouts/index"
import { Box } from "@shape/index"
import { Text } from "@typography/index"

const StatsSmallBox = ({ number, description }) => {
  return (
    <Box bg="white" opacity="0.31" br="10" h="40" w100>
      <GridContainer rows="1fr" columns="1fr 1fr">
        <Text variant="primary" color="orange" weight="700" size="24">
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
