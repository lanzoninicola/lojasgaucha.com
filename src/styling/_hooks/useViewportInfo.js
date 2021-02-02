import * as React from "react"
import { debounce } from "../layouts/utils/functions"
import { ThemeContext } from "styled-components"
import { isDomAvailable } from "@utils/index"
import useDeepCompareEffect from "use-deep-compare-effect"

// TODO: to be verified: wrapped window and document object to control behaviours

function useViewportInfo() {
  const [viewportInfo, setViewportInfo] = React.useState({
    device: "mobile",
    height: 568,
    width: 320,
  })

  const themeContext = React.useContext(ThemeContext)

  useDeepCompareEffect(() => {
    if (isDomAvailable()) {
      function detectDevice(width) {
        const breakpoints = themeContext?.breakpoints
        if (width >= breakpoints?.small?.width) {
          return breakpoints?.small?.device
        }

        if (width >= breakpoints?.medium?.width) {
          return breakpoints?.medium?.device
        }

        if (width >= breakpoints?.large?.width) {
          return breakpoints?.large?.device
        }

        if (width >= breakpoints?.xlarge?.width) {
          return breakpoints?.xlarge?.device
        }

        if (width >= breakpoints?.xxlarge?.width) {
          return breakpoints?.xxlarge?.device
        }
      }

      const nextViewportInfo = { ...viewportInfo }
      nextViewportInfo.device = detectDevice(window.innerWidth)
      nextViewportInfo.height = window.innerHeight
      nextViewportInfo.width = window.innerWidth

      setViewportInfo(nextViewportInfo)

      const debouncedHandleResize = debounce(function handleResize() {
        const nextViewportInfo = { ...viewportInfo }
        nextViewportInfo.device = detectDevice(window.innerWidth)
        nextViewportInfo.height = window.innerHeight
        nextViewportInfo.width = window.innerWidth
        setViewportInfo(nextViewportInfo)
      }, 100)
      window.addEventListener("resize", debouncedHandleResize)
      return _ => {
        window.removeEventListener("resize", debouncedHandleResize)
      }
    }
  }, [{ viewportInfo }])

  return viewportInfo
}

export default useViewportInfo
