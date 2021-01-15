import * as React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const ImageQL = ({ data }) => {
  const images = data.map((item, index) => {
    return <Img key={index} fluid={item?.node?.childImageSharp?.fluid} />
  })

  return <>{images}</>
}

// ImageQL.propTypes = {
//   data: PropTypes.array.isRequired,
// }

export default ImageQL
