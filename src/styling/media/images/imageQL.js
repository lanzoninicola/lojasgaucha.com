import * as React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { isNotString } from "@utils/index"

//TODO:
// adding fallback when an image is not available

const ImageQL = ({
  children,
  fluid,
  wrapperStyle,
  imgStyle,
  shadow,
  alt,
  title,
  ignoreAlt,
  ignoreTitle,
  ...props
}) => {
  const renderedWrapperStyle = {
    ...wrapperStyle,
    margin: 0,
    padding: 0,
    height: "100%",
    width: "100%",
  }

  if (shadow) {
    renderedWrapperStyle.boxShadow =
      "rgba(0, 6, 36, 0.25) 0px 26px 24px -16px, rgba(0, 6, 36, 0.3) 0px 16px 24px -18px, rgba(0, 6, 36, 0.07) 0px 0px 10px 0px"
  }

  return (
    <Img
      fluid={fluid}
      style={renderedWrapperStyle}
      imgStyle={{
        ...imgStyle,
        margin: 0,
        padding: 0,
        height: "100%",
        width: "100%",
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
    if (props["ignoreAlt"] && props["ignoreAlt"] === false) {
      if (!props[propName]) {
        console.error(`${componentName} - the "alt" attribute is missing.`)
      }

      if (isNotString(props[propName])) {
        return new Error(
          `${componentName} - the "alt" attribute must be a string.`
        )
      }
    }
  },
  title: function (props, propName, componentName) {
    if (props["ignoreTitle"] && props["ignoreTitle"] === false) {
      if (!props[propName]) {
        console.error(`${componentName} - the "title" attribute is missing.`)
      }

      if (isNotString(props[propName])) {
        return new Error(
          `${componentName} - the "title" attribute must be a string.`
        )
      }
    }
  },
  ignoreAlt: PropTypes.bool,
  ignoreTitle: PropTypes.bool,
}

export default ImageQL
