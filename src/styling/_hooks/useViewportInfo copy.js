import * as React from "react"
import { debounce } from "../layouts/utils/functions"
import { ThemeContext } from "styled-components"
import { isDomAvailable } from "@utils/index"
import useDeepCompareEffect from "use-deep-compare-effect"

import { isNotUndefined, log } from "@utils/index"

// TODO: to be verified: wrapped window and document object to control behaviours

function useViewportInfo() {
  const themeContext = React.useContext(ThemeContext)
  const breakpoints = themeContext?.breakpoints

  const [viewportInfo, setViewportInfo] = React.useState({
    device: "mobile-small",
    height: 568,
    width: 320,
    diagonal: 651.94,
  })

  useDeepCompareEffect(() => {
    if (isDomAvailable()) {
      function detectDevice(width, height) {
        const deviceDetected = {
          device: viewportInfo.device,
          diagonal: viewportInfo.diagonal,
        }
        if (isNotUndefined(breakpoints)) {
          Object.keys(breakpoints).forEach(name => {
            if (
              width >= breakpoints[name].width &&
              height >= breakpoints[name].height
            ) {
              deviceDetected.device = breakpoints[name].device
              deviceDetected.diagonal = breakpoints[name].diagonal
              return deviceDetected
            }
          })
        }
        return deviceDetected
      }

      function setNextViewportInfo() {
        const nextViewportInfo = { ...viewportInfo }
        const viewportWidth = window.innerWidth
        const viewportHeight = window.innerHeight
        const { device, diagonal } = detectDevice(viewportWidth, viewportHeight)
        nextViewportInfo.device = device
        nextViewportInfo.height = viewportHeight
        nextViewportInfo.width = viewportWidth
        nextViewportInfo.diagonal = diagonal
        return nextViewportInfo
      }

      // set the viewportinfo object in mounting accordingly to the size of screen
      // because it might be different from the data set on initial state
      setViewportInfo(setNextViewportInfo())

      const debouncedHandleResize = debounce(function handleResize() {
        // reset the viewport info when the "resize" event is fired with a delay of 100ms
        setViewportInfo(setNextViewportInfo())
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
