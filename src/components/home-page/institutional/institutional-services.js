import * as React from "react"
import { GridFixedContainer } from "@layouts/index"
import { Title } from "@typography/index"
import { ImageCard } from "@cards/index"
import { useStaticQuery, graphql } from "gatsby"
import { removeFilenameExtension } from "@utils/index"

const InstitutionalServices = () => {
  const data = useStaticQuery(graphql`
    query IstitutionalMobileImages {
      images: allFile(
        filter: {
          sourceInstanceName: { eq: "istitutional_images" }
          relativeDirectory: { eq: "mobile" }
        }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    }
  `)

  return (
    <GridFixedContainer rows=".25fr 1fr" gap="8" stretchX h100>
      <Title as="h2" color="orange" weight="700" mt="16" mb="8">
        Nossos serviços
      </Title>
      <GridFixedContainer
        rows="1fr"
        columns="1fr 1fr 1fr"
        gap="8"
        stretchX
        h100
      >
        {data?.images?.edges.map((image, index) => {
          const fluidData = image?.node?.childImageSharp?.fluid
          const label = removeFilenameExtension(
            image?.node?.childImageSharp?.fluid?.originalName
          )
          return (
            <ImageCard
              key={index}
              card={{ br: "10px" }}
              image={{ fluid: fluidData }}
              imageLabel={{
                text: label,
                color: "white",
                lowercase: true,
              }}
            />
          )
        })}
      </GridFixedContainer>
    </GridFixedContainer>
  )
}

export default InstitutionalServices
