import * as React from "react"
import { FlexContainer } from "@layouts/index"
import { useStaticQuery, graphql } from "gatsby"
import { ImageQL } from "@images/index"
import { Title } from "@typography/index"
import { colorsTheme } from "@theme/index"

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
      <Title weight="600" variant="secondary" color={colorsTheme("orange")}>
        {shortName}
      </Title>
    </FlexContainer>
  )
}

export default CompanyTooltip
