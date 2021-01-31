import * as React from "react"
import { debounce } from "../layouts/utils/functions"
import { ThemeContext } from "styled-components"
import { isDomAvailable } from "@utils/index"
import useDeepCompareEffect from "use-deep-compare-effect"

function useViewportInfo() {
  const [viewportInfo, setViewportInfo] = React.useState({
    device: null,
    height: 0,
    width: 0,
  })

  const themeContext = React.useContext(ThemeContext)

  useDeepCompareEffect(() => {
    if (isDomAvailable) {
      setViewportInfo({
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

        setViewportInfo({
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
  }, [{ viewportInfo }])

  return viewportInfo
}

export default useViewportInfo
