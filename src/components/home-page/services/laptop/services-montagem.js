import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { useViewportInfo } from "@hooks"
import { GridFluidContainer, GridFixedContainer, FlexContainer } from "@layouts"
import { ImageQL } from "@images"
import { Title, Text } from "@typography"
import { ForegroundGradient } from "@decorative"

const ServicesMontagem = () => {
  const { device } = useViewportInfo()

  const data = useStaticQuery(
    graphql`
      query IstitutionalLaptopMontagemImage {
        images: allFile(
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
    <GridFluidContainer id="services-montagem">
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
            overflowXHide={device === "tablet" ? true : false}
            ml="-10%"
            $style={{
              zIndex: 2,
              // transform: "rotate(-90deg)",
              // position: "absolute",
              // left: "-10%",
              // width: "150%",
            }}
          >
            montagem
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
                Servico de montagem
              </Title>
              <Title as="h5" color="orange">
                Por que a montagem tem que ser uma sua responsabilidade?
              </Title>
              <Text color="white">
                Lojas Gaucha oferece o serviço com seu próprio pessoal
                especializado. Ninguém conhece nossos móveis melhor do que nós.
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

export default ServicesMontagem
