import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import CarouselSlide from "../../../styling/carousel/carouselSlide"
import ImageQL from "../../../styling/Images/ImageQL"
import CarouselSlideCard from "../../../styling/carousel/carouselSlideCard"
import NavLink from "../../../styling/navigation/navLink"
import HeroCarouselController from "../HeroCarouselController"

const HeroMobileCarousel = () => {
  // console.log(data?.images?.edges)
  // const cardImage = data?.images?.edges.map((image, index) => {
  //   // image {
  //   //   node: {
  //   //     childImageSharp: // info required by Gatsby to render image
  //   //     relativePath: "" // here the name of ile
  //   //   }
  //   // }
  //   console.log(image)
  //   return (

  //   )
  // })
  return (
    <CarouselSlide>
      <HeroCarouselController>
        <CarouselSlideCard>
          <NavLink>
            {/* <ImageQL fluid={image?.node?.childImageSharp?.fluid} /> */}
          </NavLink>
        </CarouselSlideCard>
      </HeroCarouselController>
    </CarouselSlide>
  )
}

export default HeroMobileCarousel
