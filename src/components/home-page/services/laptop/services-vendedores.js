import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { useViewportInfo } from "@hooks"
import { GridFluidContainer, GridFixedContainer, FlexContainer } from "@layouts"
import { ImageQL } from "@images"
import { Title, Text } from "@typography"
import { ForegroundGradient } from "@decorative"

const ServicesVendedores = () => {
  const { device } = useViewportInfo()

  const data = useStaticQuery(
    graphql`
      query IstitutionalLaptopVendedoresImage {
        laptop: allFile(
          filter: {
            sourceInstanceName: { eq: "services_images" }
            relativeDirectory: { eq: "laptop" }
            name: { eq: "vendedores" }
          }
        ) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 1920, quality: 100) {
                  ...GatsbyImageSharpFluid
                  originalName
                }
              }
            }
          }
        }
        tablet: allFile(
          filter: {
            sourceInstanceName: { eq: "services_images" }
            relativeDirectory: { eq: "laptop" }
            name: { eq: "montagem" }
          }
        ) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 1024, quality: 100) {
                  ...GatsbyImageSharpFluid
                  originalName
                }
              }
            }
          }
        }
        mobile: allFile(
          filter: {
            sourceInstanceName: { eq: "services_images" }
            relativeDirectory: { eq: "laptop" }
            name: { eq: "montagem" }
          }
        ) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 375, quality: 100) {
                  ...GatsbyImageSharpFluid
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
    <GridFluidContainer id="services-montagem" h="650">
      <GridFixedContainer columns="1fr 1fr" rows="1fr">
        <ImageQL data={data} />
        <GridFixedContainer columns="1fr" rows=".25fr 1fr">
          <Text
            weight="700"
            color="white"
            opacity="0.1"
            size={{ laptop: 180, tablet: 90 }}
            lh="100"
            ls="-0.06em"
            left
            noWrap
            ml="-10%"
            overflowXHide={device === "tablet" ? true : false}
            $style={{
              zIndex: 2,
            }}
          >
            vendedores
          </Text>
          <GridFixedContainer
            columns={
              (device === "laptop" && ".25fr 1fr .25fr") ||
              (device === "tablet" && "1fr")
            }
            rows={
              (device === "laptop" && "1fr") ||
              (device === "tablet" && ".5fr 1fr .5fr")
            }
            centerY
            $style={{ zIndex: 2 }}
          >
            <div></div>
            <GridFixedContainer columns="1fr" rAuto stretchXS pl="10%" pr="10%">
              <Title as="h4" color="orange" weight="700">
                Diga olá aos nossos vendedores
              </Title>
              <Title as="h5" color="orange">
                Por que fazer sozinho?
              </Title>
              <Text color="white">
                Procure a ajuda de nossos especialistas que podem orientá-lo
                sobre a melhor solução para suas necessidades.
              </Text>
            </GridFixedContainer>
            <div></div>
          </GridFixedContainer>
        </GridFixedContainer>
      </GridFixedContainer>

      <ForegroundGradient gradient={{ direction: "right", start: "blue" }} />
    </GridFluidContainer>
  )
}

export default ServicesVendedores
