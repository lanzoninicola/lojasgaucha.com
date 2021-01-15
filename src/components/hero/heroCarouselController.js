import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { removeFilenameExtension } from "../../styling/utils/index"

const HeroCarouselController = ({ children }) => {
  const data1 = useStaticQuery(graphql`
    query SiteMetadata {
      allSite {
        nodes {
          siteMetadata {
            author
          }
        }
      }
    }
  `)

  // query CarouselImages {
  //   images: allFile(filter: { sourceInstanceName: { eq: "hero_carousel" } }) {
  //     edges {
  //       node {
  //         relativePath
  //         childImageSharp {
  //           fluid {
  //             ...GatsbyImageSharpFluid
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
  // data?.images?.edges[xxx].node?.childImageSharp?.fluid

  console.log(data1)
  // const childProps = data?.images?.edges.map((image, index) => {
  //   // image {
  //   //   node: {
  //   //     childImageSharp: // info required by Gatsby to render image
  //   //     relativePath: "" // here the name of ile
  //   //   }
  //   // }
  //   const fileNameNoExtension = removeFilenameExtension(
  //     image?.node?.relativePath
  //   )
  //   const imageAttributes = filename => {
  //     switch (filename) {
  //       case "roupeiros":
  //         return {
  //           alt: "Escolha os nossos produtos para seu quarto",
  //           title: "Nossa linha de produtos para seu quarto",
  //         }
  //       case "cozinha":
  //         return {
  //           alt: "Escolha os nossos produtos para sua nova cozinha",
  //           title: "Nossa linha de produtos para sua nova cozinha",
  //         }
  //       case "quarto":
  //         return {
  //           alt: "Escolha os nossos produtos para seu quarto",
  //           title: "Nossa linha de produtos para seu quarto",
  //         }
  //       case "salaestar":
  //         return {
  //           alt: "Escolha os nossos produtos para sua sala de estar",
  //           title: "Nossa linha de produtos para sua sala de estar",
  //         }
  //       default:
  //         break
  //     }
  //   }
  //   return {
  //     ...index,
  //     ...image?.node,
  //     ...imageAttributes(fileNameNoExtension),
  //   }
  // })
  // return <>{React.cloneElement(children, childProps)}</>

  return <div>fuck</div>
}

export default HeroCarouselController
