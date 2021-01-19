import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import CarouselSlide from "../../../styling/carousel/carouselSlide"
import ImageQL from "../../../styling/Images/ImageQL"
import CarouselSlideCard from "../../../styling/carousel/carouselSlideCard"
import NavLink from "../../../styling/navigation/navLink"

import { removeFilenameExtension } from "../../../styling/utils/index"
import ImageTitle from "../../../styling/Images/imageTitle"
import colorsTheme from "../../../styling/_theme/colorsTheme"

const HeroAmbientesCarousel = () => {
  const data = useStaticQuery(graphql`
    query CarouselImages {
      images: allFile(filter: { sourceInstanceName: { eq: "hero_carousel" } }) {
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

  const carouselData = data?.images?.edges.map((image, index) => {
    // image {
    //   node: {
    //     childImageSharp: // info required by Gatsby to render image
    //     relativePath: "" // here the name of ile
    //   }
    // }
    const fileNameNoExtension = removeFilenameExtension(
      image?.node?.relativePath
    )
    const carouselAddtionalData = filename => {
      switch (filename) {
        case "roupeiros":
          return {
            alt: "Escolha os nossos produtos para seu quarto",
            title: "Nossa linha de produtos para seu quarto",
            to: {
              type: "link",
              value: "/quarto",
            },
          }
        case "cozinha":
          return {
            alt: "Escolha os nossos produtos para sua nova cozinha",
            title: "Nossa linha de produtos para sua nova cozinha",
            to: {
              type: "link",
              value: "/cozinhas",
            },
          }
        case "quarto":
          return {
            alt: "Escolha os nossos produtos para seu quarto",
            title: "Nossa linha de produtos para seu quarto",
            to: {
              type: "link",
              value: "/quarto",
            },
          }
        case "salaestar":
          return {
            alt: "Escolha os nossos produtos para sua sala de estar",
            title: "Nossa linha de produtos para sua sala de estar",
            to: {
              type: "link",
              value: "/salaestar",
            },
          }
        default:
          break
      }
    }

    return {
      index,
      fluid: image?.node?.childImageSharp?.fluid,
      ...carouselAddtionalData(fileNameNoExtension),
    }
  })

  return (
    <CarouselSlide id="hero-carousel">
      {carouselData.map((itemData, index) => {
        return (
          <CarouselSlideCard
            id="hero-carousel-card"
            key={index}
            p="0 40 0 40"
            $style={{
              position: "relative",
            }}
          >
            <NavLink to={itemData?.to}>
              <ImageQL
                fluid={itemData?.fluid}
                alt={itemData?.alt}
                title={itemData?.title}
                wrapperStyle={{
                  borderRadius: 25,
                }}
              ></ImageQL>
            </NavLink>
            <ImageTitle
              bottomCenter
              bg={colorsTheme("orange", { colorUnit: "rgba", opacity: "0.7" })}
            >
              Prova di scrittura
            </ImageTitle>
          </CarouselSlideCard>
        )
      })}
    </CarouselSlide>
  )
}

export default HeroAmbientesCarousel
