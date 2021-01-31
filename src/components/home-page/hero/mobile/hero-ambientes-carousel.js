import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { ImageQL } from "@images/index"
import NavLink from "../../../../styling/navigation/navLink"

import CarouselSlide from "../../../../styling/carousel/carouselSlide"
import HeroAmbientesCarouselImageText from "./hero-ambientes-carousel-imageText"
import CarouselSlideCard from "../../../../styling/carousel/carouselSlideCard"

import { removeFilenameExtension } from "../../../../styling/utils/index"

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

  // const ambientes = [""]

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
            name: "cabinet",
            alt: "Escolha os nossos produtos para seu quarto",
            title: "Nossa linha de produtos para seu quarto",
            to: {
              type: "link",
              value: "/quarto",
            },
          }
        case "cozinha":
          return {
            name: "cozinha",
            alt: "Escolha os nossos produtos para sua nova cozinha",
            title: "Nossa linha de produtos para sua nova cozinha",
            to: {
              type: "link",
              value: "/cozinhas",
            },
          }
        case "quarto":
          return {
            name: "quarto",
            alt: "Escolha os nossos produtos para seu quarto",
            title: "Nossa linha de produtos para seu quarto",
            to: {
              type: "link",
              value: "/quarto",
            },
          }
        case "salaestar":
          return {
            name: "sala da estar",
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
            h="90%"
            p="20 30 20 30"
          >
            <NavLink to={itemData?.to}>
              <ImageQL
                fluid={itemData?.fluid}
                alt={itemData?.alt}
                title={itemData?.title}
                shadow
                wrapperStyle={{
                  borderRadius: 25,
                }}
              ></ImageQL>
            </NavLink>
            <HeroAmbientesCarouselImageText text={itemData?.name} />
          </CarouselSlideCard>
        )
      })}
    </CarouselSlide>
  )
}

export default HeroAmbientesCarousel
