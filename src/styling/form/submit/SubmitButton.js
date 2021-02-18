import * as React from "react"
import PropTypes from "prop-types"

import { ButtonPrimaryOrange, ButtonPrimaryBlue } from "@buttons"

const SubmitButton = ({ variant, color, children, ...props }) => {
  function renderPrimaryOrangeButton(props) {
    return (
      <ButtonPrimaryOrange as="input" type="submit" {...props}>
        {children}
      </ButtonPrimaryOrange>
    )
  }

  function renderPrimaryBlueButton(props) {
    return (
      <ButtonPrimaryBlue as="input" type="submit" {...props}>
        {children}
      </ButtonPrimaryBlue>
    )
  }

  function renderButtons({ variant, color, ...props }) {
    if (variant === "primary" && color === "blue") {
      return renderPrimaryBlueButton({ ...props })
    }

    if (variant === "primary" && color === "orange") {
      return renderPrimaryOrangeButton({ ...props })
    }
  }

  return renderButtons({ variant, color, children, ...props })
}

SubmitButton.propTypes = {
  variant: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default SubmitButton
