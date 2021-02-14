import * as React from "react"
import PropTypes from "prop-types"
import { Text } from "@typography"

const InstitutionalSmallBoxNumber = ({ children }) => {
  return (
    <Text
      color="blue"
      weight="600"
      size={{ laptop: 72, tablet: 36 }}
      align="right"
    >
      {children}
    </Text>
  )
}

InstitutionalSmallBoxNumber.propTypes = {
  children: PropTypes.node.isRequired,
}

export default InstitutionalSmallBoxNumber
