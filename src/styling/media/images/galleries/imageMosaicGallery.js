import * as React from "react"
import PropTypes from "prop-types"

import {
  GridMosaicContainer,
  GridMosaicCellWide,
  GridMosaicCellTall,
  GridMosaicCellBase,
} from "@layouts"
import { useViewportInfo } from "@hooks"
import { randomItemFromArray, objectKeys } from "@utils"

import { ImageQL } from "../index"

const _gridCellWide = props => (
  <GridMosaicCellWide {...props}>{props?.children}</GridMosaicCellWide>
)
const _gridCellTall = props => (
  <GridMosaicCellTall {...props}>{props?.children}</GridMosaicCellTall>
)
const _gridCellBase = props => (
  <GridMosaicCellBase {...props}>{props?.children}</GridMosaicCellBase>
)

const ImageMosaicGallery = ({ data = {}, ...props }) => {
  const { device } = useViewportInfo()

  return (
    <GridMosaicContainer {...props}>
      {data?.[device]?.edges.map((item, index) => {
        const GridCellContainer = randomItemFromArray([
          _gridCellWide,
          _gridCellTall,
          _gridCellBase,
        ])

        return (
          <GridCellContainer key={index}>
            <ImageQL data={item?.node?.childImageSharp?.fluid} />
          </GridCellContainer>
        )
      })}
    </GridMosaicContainer>
  )
}

ImageMosaicGallery.prototype = {
  data: PropTypes.object.isRequired,
}

export default ImageMosaicGallery
