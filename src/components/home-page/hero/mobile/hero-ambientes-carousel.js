import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { useViewportInfo } from "@hooks"
import { ImageQL } from "@images/index"
import { NavLink } from "@navigation"
import { removeFilenameExtension } from "@utils"

import CarouselSlide from "../../../../styling/carousel/carouselSlide"
import HeroAmbientesCarouselImageText from "./hero-ambientes-carousel-imageText"
import CarouselSlideCard from "../../../../styling/carousel/carouselSlideCard"

const HeroAmbientesCarousel = () => {
  const { device } = useViewportInfo()

  const data = useStaticQuery(graphql`
    query CarouselImages {
      laptop: allFile(filter: { sourceInstanceName: { eq: "hero_carousel" } }) {
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
      tablet: allFile(filter: { sourceInstanceName: { eq: "hero_carousel" } }) {
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
      mobile: allFile(filter: { sourceInstanceName: { eq: "hero_carousel" } }) {
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
  `)

  // const ambientes = [""]

  const carouselData = data?.[device]?.edges.map((image, index) => {
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

  console.log(carouselData)

  return (
    <CarouselSlide id="hero-carousel">
      {carouselData.map((itemData, index) => {
        return (
          <CarouselSlideCard
            id="hero-carousel-card"
            key={index}
            h100
            // p="20 30 20 30" // this is ok for mobile
            p="80 120 80 120"
          >
            <NavLink to={itemData?.to}>
              <ImageQL
                data={itemData.fluid}
                alt={itemData?.alt}
                title={itemData?.title}
                shadow
                wrapperStyle={{
                  borderRadius: 25,
                }}
              />
              <HeroAmbientesCarouselImageText text={itemData?.name} />
            </NavLink>
          </CarouselSlideCard>
        )
      })}
    </CarouselSlide>
  )
}

export default HeroAmbientesCarousel
