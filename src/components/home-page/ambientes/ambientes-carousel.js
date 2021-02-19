import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { GridFixedContainer } from "@layouts"
import { Title } from "@typography"
import { ImageMosaicGallery } from "@images"

const AmbientesCarousel = () => {
  const data = useStaticQuery(graphql`
    query CarouselImagesLaptop {
      laptop: allFile(filter: { sourceInstanceName: { eq: "hero_carousel" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 1920, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
                originalName
              }
            }
          }
        }
      }
      tablet: allFile(filter: { sourceInstanceName: { eq: "hero_carousel" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 1024, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
                originalName
              }
            }
          }
        }
      }
      mobile: allFile(filter: { sourceInstanceName: { eq: "hero_carousel" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 375, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
                originalName
              }
            }
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <GridFixedContainer columns="1fr" rows="1fr">
      <GridFixedContainer
        columns="1fr"
        rows=".1fr 1fr"
        pl={{ laptop: 160, tablet: 80 }}
        pr={{ laptop: 160, tablet: 80 }}
        pt={{ laptop: 80, tablet: 80 }}
        pb={{ laptop: 80, tablet: 80 }}
      >
        <Title as="h2" color="blue" weight="700">
          Decoraramos seus ambientes
        </Title>

        <ImageMosaicGallery
          data={data}
          columns="1fr 1fr 1fr 1fr 1fr"
          rHeight="200"
        />
      </GridFixedContainer>
    </GridFixedContainer>
  )
}

export default AmbientesCarousel
