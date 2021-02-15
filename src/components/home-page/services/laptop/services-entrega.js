import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { useViewportInfo } from "@hooks"
import { GridFluidContainer, GridFixedContainer, FlexContainer } from "@layouts"
import { ImageQL } from "@images"
import { Title, Text } from "@typography"
import { colorsTheme } from "@theme"
import { ForegroundGradient } from "@decorative"

const ServicesEntrega = () => {
  const { device } = useViewportInfo()
  const data = useStaticQuery(
    graphql`
      query IstitutionalLaptopEntregaImage {
        images: allFile(
          filter: {
            sourceInstanceName: { eq: "services_images" }
            relativeDirectory: { eq: "laptop" }
            name: { eq: "entrega" }
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
    <GridFluidContainer id="services-entrega">
      <GridFixedContainer columns="1fr 1fr" rows="1fr">
        <GridFixedContainer columns="1fr" rows=".25fr 1fr">
          <Text
            weight="700"
            color="white"
            opacity="0.1"
            size={{ laptop: 180, tablet: 90 }}
            lh="100"
            ls="-0.06em"
            right
            noWrap
            ml="-10%"
            $style={{
              zIndex: 2,
              // transform: "rotate(-90deg)",
              // position: "absolute",
              // left: "-10%",
              // width: "150%",
            }}
          >
            entrega
          </Text>
          <GridFixedContainer
            columns={
              (device === "laptop" && ".5fr 1fr .5fr") ||
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
                Nós entregamos com nossos veículos
              </Title>
              <Title as="h5" color="orange">
                Quanto é importante para você que seus móveis cheguem com
                segurança? Muito né...
              </Title>
              <Text color="white">
                Lojas Gaúcha transporta com seus próprios meios para garantir a
                integridade de suas compras.
              </Text>
            </GridFixedContainer>
            <div></div>
          </GridFixedContainer>
        </GridFixedContainer>
        <ImageQL data={data} />
      </GridFixedContainer>

      <ForegroundGradient gradient={{ direction: "left", start: "blue" }} />
    </GridFluidContainer>
  )
}

export default ServicesEntrega
