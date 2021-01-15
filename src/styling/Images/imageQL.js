import * as React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const ImageQL = ({ fluid }) => {
  //TODO:
  // adding fallback when an image is not available
  // adding ALT attribute

  return <Img fluid={fluid} />
}

ImageQL.propTypes = {
  data: PropTypes.object,
}

export default ImageQL
