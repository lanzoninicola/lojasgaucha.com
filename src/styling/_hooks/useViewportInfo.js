import * as React from "react"
import { debounce } from "../layouts/utils/functions"
import { ThemeContext } from "styled-components"
import { isDomAvailable } from "@utils/index"

function useViewportInfo() {
  const [viewportInfo, setviewportInfo] = React.useState({
    device: null,
    height: 0,
    width: 0,
  })

  const themeContext = React.useContext(ThemeContext)

  React.useEffect(() => {
    if (isDomAvailable) {
      setviewportInfo({
        device: "mobile",
        height: window.innerHeight,
        width: window.innerWidth,
      })

      const debouncedHandleResize = debounce(function handleResize() {
        let device = "laptop"

        const breakpoints = themeContext?.breakpoints

        // console.log(window.innerWidth)

        if (window.innerWidth >= breakpoints?.small?.width) {
          device = breakpoints?.small?.device
        }

        if (window.innerWidth >= breakpoints?.medium?.width) {
          device = breakpoints?.medium?.device
        }

        if (window.innerWidth >= breakpoints?.large?.width) {
          device = breakpoints?.large?.device
        }

        if (window.innerWidth >= breakpoints?.xlarge?.width) {
          device = breakpoints?.xlarge?.device
        }

        if (window.innerWidth >= breakpoints?.xxlarge?.width) {
          device = breakpoints?.xxlarge?.device
        }

        setviewportInfo({
          device: device,
          height: window.innerHeight,
          width: window.innerWidth,
        })
      }, 200)
      window.addEventListener("resize", debouncedHandleResize)
      return _ => {
        window.removeEventListener("resize", debouncedHandleResize)
      }
    }
  })

  return viewportInfo
}

export default useViewportInfo
