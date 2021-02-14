import * as React from "react"
import PropTypes from "prop-types"

import { GridFixedContainer } from "@layouts/index"
import { Text } from "@typography"

import InstitutionalSmallBoxNumber from "./institutional-stat-small-box-number"

const InstitutionalStatSmallBox = ({ number, text }) => {
  return (
    <>
      <GridFixedContainer rows="1fr" columns="1fr 1fr" gap="16">
        <InstitutionalSmallBoxNumber>{number}</InstitutionalSmallBoxNumber>
        <Text color="blue">{text}</Text>
      </GridFixedContainer>
    </>
  )
}

InstitutionalStatSmallBox.propTypes = {
  number: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default InstitutionalStatSmallBox
