const ArrayMap = ({ through, RenderTo }) => {
    return (
      <>
        {through.map((mapValue, index) => {
          return <RenderTo key={index} mapValue={mapValue} {...props} />
        })}
      </>
    )
  }
  
  <ArrayMap through={array} Render={()=><CarouselSlideCard>{children}</CarouselSlideCard>}