import * as React from "react"
import { debounce } from "../layouts/_utils/functions"
import { ThemeContext } from "styled-components"
import { isDomAvailable } from "@utils/index"
import useDeepCompareEffect from "use-deep-compare-effect"

import { isUndefined, log, error } from "@utils/index"

// TODO: to be verified: wrapped window and document object to control behaviours

function useViewportInfo(component = null, debug = false) {
  const themeContext = React.useContext(ThemeContext)
  const breakpoints = themeContext?.breakpoints

  const [viewportInfo, setViewportInfo] = React.useState({
    device: "mobile",
    size: "mobile-small",
    height: 568,
    width: 320,
    diagonal: 651.94,
  })

  useDeepCompareEffect(() => {
    if (isDomAvailable()) {
      if (isUndefined(breakpoints)) {
        error(
          "useViewportInfo",
          `breakpoints theme value is: ${breakpoints}. Attempted to call the useViewport hook outside of 'theme' context. Make sure your component is rendered inside 'ThemeProvider' component, part of 'styled-component' module`
        )
        return
      }

      function detectDevice(width, height) {
        if (debug) {
          log("useViewportInfo", {
            message1: `${debug.component} component - detectDevice() fired}`,
            message2: `breakpoints: ${JSON.stringify(breakpoints)}`,
          })
        }
        const deviceDetected = {
          device: viewportInfo.device,
          size: viewportInfo.size,
          currentDiagonal: viewportInfo.diagonal,
        }

        const devices = breakpoints["viewportDevices"]
        const currentDiagonal = Math.round(
          Math.sqrt(width * width + height * height)
        )

        // TODO: It might be improved maybe normalizing the breakpoint data with flat data-structure and avoiding double looping
        Object.keys(devices).forEach(device => {
          Object.keys(devices[device]).forEach(size => {
            if (currentDiagonal >= Math.round(devices[device][size].diagonal)) {
              deviceDetected.device = device
              deviceDetected.size = devices[device][size].name
              deviceDetected.currentDiagonal = currentDiagonal
              return deviceDetected
            }
          })
        })
        // }
        return deviceDetected
      }

      function setNextViewportInfo() {
        const nextViewportInfo = { ...viewportInfo }
        const viewportWidth = window.innerWidth
        const viewportHeight = window.innerHeight
        const { device, size, currentDiagonal } = detectDevice(
          viewportWidth,
          viewportHeight
        )
        nextViewportInfo.device = device
        nextViewportInfo.size = size
        nextViewportInfo.height = viewportHeight
        nextViewportInfo.width = viewportWidth
        nextViewportInfo.diagonal = currentDiagonal

        if (debug) {
          log(
            "useViewportInfo",
            `${debug.component} component - output ${JSON.stringify(
              nextViewportInfo
            )}`
          )
        }
        return nextViewportInfo
      }

      // set the viewportinfo object in mounting accordingly to the size of screen
      // because it might be different from the data set on initial state
      setViewportInfo(setNextViewportInfo())

      const debouncedHandleResize = debounce(function handleResize() {
        console.log(`component ${component} is mounted`)
        console.log("resize")
        // reset the viewport info when the "resize" event is fired with a delay of 100ms
        setViewportInfo(setNextViewportInfo())
      }, 100)
      window.addEventListener("resize", debouncedHandleResize)
      return () => {
        console.log(`component ${component} is unmounted`)
        window.removeEventListener("resize", debouncedHandleResize)
      }
    }
  }, [{ viewportInfo }])

  return viewportInfo
}

export default useViewportInfo
