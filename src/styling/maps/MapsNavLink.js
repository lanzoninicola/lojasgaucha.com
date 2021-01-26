import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { FlexContainer } from "../layouts/inner/index"
import { NavAnchor } from "../navigation/index"
import SVGIcon from "../icons/SVGIcon"
import colorsTheme from "../_theme/colorsTheme"
import { SmallText } from "../typography/index"

const MapsNavLink = () => {
  // const data = useStaticQuery(graphql`
  //   query mapLocationName {
  //     site {
  //       siteMetadata {
  //         maps {
  //           locationName
  //         }
  //       }
  //     }
  //   }
  // `)

  // console.log(data)

  const location = ""

  return (
    <NavAnchor
      to={{
        item: "link",
        value: `https://www.google.com/maps/search/?api=1&query=${location}`,
      }}
      $style={{}}
    >
      <FlexContainer column centerY>
        <SVGIcon name="view_all" color={colorsTheme("orange")} mb="4" />
        <SmallText
          weight="600"
          size="12"
          lh="14"
          capitalize="lowercase"
          color="orange"
        >
          ver mais
        </SmallText>
      </FlexContainer>
    </NavAnchor>
  )
}

export default MapsNavLink
