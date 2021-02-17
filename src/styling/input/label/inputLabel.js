import * as React from "react"
import PropTypes from "prop-types"

import { Text } from "@typography"
import { isUndefined, error } from "@utils"

const InputLabel = ({ htmlFor, text, style = {} }) => {
  return (
    <Text
      as="label"
      htmlFor={htmlFor ?? ""}
      weight="600"
      color="orange"
      capitalize="uppercase"
      ls="1px"
      mb="6px"
      $style={{ ...style }}
    >
      {text && text}
    </Text>
  )
}

InputLabel.propTypes = {
  htmlFor: (props, propName, componentName) => {
    if (isUndefined(props[propName]) || props[propName] === "") {
      return error(
        `${componentName}`,
        `Please, add "name" prop (type "string") to the input component.`
      )
    }
  },
  text: PropTypes.string,
  style: PropTypes.object,
}

export default InputLabel
