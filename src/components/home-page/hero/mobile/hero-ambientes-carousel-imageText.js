import * as React from "react"
import PropTypes from "prop-types"
import { ImageTitle } from "@images/index"
import { colorsTheme } from "@theme"
import { SVGIcon } from "@icons/index"

const HeroAmbientesCarouselImageText = ({ text }) => {
  return (
    <ImageTitle
      bottomCenter
      text={text}
      uppercase
      bg={colorsTheme("orange", { colorUnit: "rgba", opacity: "0.7" })}
      w="60%"
    >
      <SVGIcon
        name="ARROW_RIGHT"
        size="24"
        color={colorsTheme("white")}
        pl="8"
      />
    </ImageTitle>
  )
}

HeroAmbientesCarouselImageText.propTypes = {
  text: PropTypes.string.isRequired,
}

export default HeroAmbientesCarouselImageText
