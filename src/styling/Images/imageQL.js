import * as React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { isNotString } from "../utils"

const ImageQL = ({
  children,
  fluid,
  wrapperStyle,
  imgStyle,
  alt,
  title,
  ...props
}) => {
  //TODO:
  // adding fallback when an image is not available

  return (
    <Img
      fluid={fluid}
      style={{
        ...wrapperStyle,
        margin: 0,
        padding: 0,
        height: "100%",
      }}
      imgStyle={{
        ...imgStyle,
        margin: 0,
        padding: 0,
        height: "100%",
      }}
      {...props}
    >
      {children}
    </Img>
  )
}

ImageQL.propTypes = {
  fluid: PropTypes.object.isRequired,
  wrapperStyle: PropTypes.object,
  imgStyle: PropTypes.object,
  alt: function (props, propName, componentName) {
    if (!props[propName]) {
      console.error(`${componentName} - the "alt" attribute is missing.`)
    }

    if (isNotString(props[propName])) {
      return new Error(
        `${componentName} - the "alt" attribute must be a string.`
      )
    }
  },
  title: function (props, propName, componentName) {
    if (!props[propName]) {
      console.error(`${componentName} - the "title" attribute is missing.`)
    }

    if (isNotString(props[propName])) {
      return new Error(
        `${componentName} - the "title" attribute must be a string.`
      )
    }
  },
}

export default ImageQL
