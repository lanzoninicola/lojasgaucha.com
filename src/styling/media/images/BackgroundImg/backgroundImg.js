import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import setGatsbyFluidData from "../lib/setGatsbyFluidData"
import BackgroundImage from "gatsby-background-image"
import { Size } from "@layouts"

const BackgroundImg = ({ data, children }) => {
  return (
    <BackgroundImage fluid={setGatsbyFluidData(data)}>
      {children}
    </BackgroundImage>
  )
}

BackgroundImg.propTypes = {
  data: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}

const StyledBackgroundImg = styled(BackgroundImg)`
  ${Size}
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default StyledBackgroundImg
