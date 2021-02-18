import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { GridFixedContainer } from "@layouts"
import { ImageL } from "@images"
import { SVGIcon } from "@icons"
import StoreLocationHeader from "./store-location-header"
import StoreLocationAddress from "../shared/store-location-address"

const StoreLocationContent = () => {
  const data = useStaticQuery(
    graphql`
      query StoreMapLaptopImage {
        images: allFile(
          filter: {
            sourceInstanceName: { eq: "maps_images" }
            relativeDirectory: { eq: "laptop" }
            name: { eq: "mapStoreRoadSign" }
          }
        ) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                  originalName
                }
              }
            }
          }
        }
      }
    `
  )

  return (
    <GridFixedContainer
      columns="1fr"
      rows="1fr"
      pl={{ laptop: 160, tablet: 80 }}
      pr={{ laptop: 160, tablet: 80 }}
      pt={{ laptop: 40, tablet: 20 }}
    >
      <GridFixedContainer columns="1fr" rows="1fr 1fr">
        <StoreLocationHeader />
        <StoreLocationAddress />
      </GridFixedContainer>

      {/* <GridFixedContainer columns="1fr 1fr" rAuto>
        <div></div>
        <div
          style={{
            width: "150px",
            height: "112px",
          }}
        >
          <ImageQL data={data} />
        </div>
      </GridFixedContainer> 
      <SVGIcon name="STORE_ROAD_SIGN" siez="300" />*/}
    </GridFixedContainer>
  )
}

export default StoreLocationContent
