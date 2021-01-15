import * as React from "react"

const HeroImageGallery = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "30vh",
        display: "grid",
        gridTemplateColumns: ".25fr .50fr 1fr .50fr .25fr .50fr .50fr",
        gridTemplateRows: "1fr .25fr .75fr .25fr 1fr",
      }}
    >
      <div
        id="photo1"
        style={{
          background:
            'url("https://res.cloudinary.com/cloudnila/image/upload/v1609098352/lojasgaucha.com/images/320/heroImage1_1.png")',
          backgroundSize: "cover" /* <-- background size */,
          backgroundPosition: "center" /* <-- background position */,
          gridColumn: "1 / 4",
          gridRow: "1 / 3",
          transform: "translateX(10%) translateY(-10%)",
        }}
      ></div>
      <div
        id="separator"
        style={{
          backgroundColor: "#ED6B28",
          gridColumn: "4 / 6",
          gridRow: "1 / 2",
        }}
      ></div>
      <div
        id="photo2"
        style={{
          background:
            'url("https://res.cloudinary.com/cloudnila/image/upload/v1609098352/lojasgaucha.com/images/320/heroImage1_2.png")',
          backgroundSize: "cover" /* <-- background size */,
          backgroundPosition: "center" /* <-- background position */,
          gridColumn: "6 / 8",
          gridRow: "1 / 2",
          transform: "translateX(-10%) translateY(-10%)",
        }}
      ></div>
      <div
        id="separator"
        style={{
          backgroundColor: "#ED6B28",
          gridColumn: "1 / 1",
          gridRow: "3 / 5",
        }}
      ></div>
      <div
        id="photo3"
        style={{
          background:
            'url("https://res.cloudinary.com/cloudnila/image/upload/v1609098352/lojasgaucha.com/images/320/heroImage2_1.png")',
          backgroundSize: "cover" /* <-- background size */,
          backgroundPosition: "center" /* <-- background position */,
          gridColumn: "2 / 4",
          gridRow: "3 / 5",
        }}
      ></div>
      <div
        id="photo4"
        style={{
          background:
            'url("https://res.cloudinary.com/cloudnila/image/upload/v1609098352/lojasgaucha.com/images/320/heroImage2_2.png")',
          backgroundSize: "cover" /* <-- background size */,
          backgroundPosition: "center" /* <-- background position */,
          gridColumn: "4 / 7",
          gridRow: "2 / 4",
        }}
      ></div>
      <div
        id="separator"
        style={{
          backgroundColor: "#ED6B28",
          gridColumn: "7 / 8",
          gridRow: "2 / 4",
        }}
      ></div>
      <div
        id="separator"
        style={{
          backgroundColor: "#ED6B28",
          gridColumn: "1 / 3",
          gridRow: "5 / 6",
          transform: "translateX(0%) translateY(10%)",
        }}
      ></div>
      <div
        id="photo5"
        style={{
          background:
            'url("https://res.cloudinary.com/cloudnila/image/upload/v1609098352/lojasgaucha.com/images/320/heroImage3_1.png")',
          backgroundSize: "cover" /* <-- background size */,
          backgroundPosition: "center" /* <-- background position */,
          gridColumn: "3 / 5",
          gridRow: "5 / 6",
          transform: "translateX(-5%) translateY(-4%)",
        }}
      ></div>
      <div
        id="separator"
        style={{
          backgroundColor: "#ED6B28",
          gridColumn: "4 / 5",
          gridRow: "4 / 4",
        }}
      ></div>
      <div
        id="photo6"
        style={{
          background:
            'url("https://res.cloudinary.com/cloudnila/image/upload/v1609098352/lojasgaucha.com/images/320/heroImage3_2.png")',
          backgroundSize: "cover" /* <-- background size */,
          backgroundPosition: "center" /* <-- background position */,
          gridColumn: "5 / 8",
          gridRow: "4 / 6",
          transform: "translateX(0%) translateY(5%)",
        }}
      ></div>
    </div>
  )
}

export default HeroImageGallery
