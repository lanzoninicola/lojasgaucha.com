import * as React from "react"
import { FlexContainer } from "../../layouts/inner"
import { useStaticQuery, graphql } from "gatsby"
import { ImageQL } from "@images/index"
import { Title } from "../../typography"
import colorsTheme from "../../_theme/colorsTheme"

const CompanyTooltip = ({ shortName }) => {
  const data = useStaticQuery(graphql`
    query MapCompanyImage {
      images: allFile(filter: { sourceInstanceName: { eq: "maps_images" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <FlexContainer column h="80" w="150">
      <ImageQL
        fluid={data?.images?.edges[0].node.childImageSharp?.fluid}
        ignoreAlt
        ignoreTitle
        wrapperStyle={{
          borderRadius: 10,
        }}
      />
      <Title
        weight="600"
        variant="secondary"
        color={colorsTheme("orange")}
        size="12"
      >
        {shortName}
      </Title>
    </FlexContainer>
  )
}

export default CompanyTooltip
