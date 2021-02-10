import * as React from "react"
import { debounce } from "../layouts/utils/functions"
import { theme } from "@theme/_global-style"
import { isDomAvailable } from "@utils/index"

// TODO: to be verified: wrapped window and document object to control behaviours

const HEADLESS_VIEWPORT_SIZE = { width: 0, height: 0 }

function getCurrentWindowSize() {
  return isDomAvailable()
    ? { width: window.innerWidth, height: window.innerHeight }
    : HEADLESS_VIEWPORT_SIZE
}

function getCurrentDiagonal() {
  const { width, height } = getCurrentWindowSize()
  return { diagonal: Math.round(Math.sqrt(width * width + height * height)) }
}

function getCurrentDevice() {
  const { diagonal } = getCurrentDiagonal()
  const breakpoints = theme?.breakpoints
  const devices = breakpoints["viewportDevices"]

  const currentDevice = { device: null, size: 0 }

  // TODO: It might be improved maybe normalizing the breakpoint data with flat data-structure and avoiding double looping
  Object.keys(devices).forEach(device => {
    Object.keys(devices[device]).forEach(size => {
      if (diagonal >= Math.round(devices[device][size].diagonal)) {
        currentDevice.device = device
        currentDevice.size = devices[device][size].name
        return currentDevice
      }
    })
  })

  return currentDevice
}

function useViewportInfo() {
  const [viewportInfo, setViewportInfo] = React.useState({
    ...getCurrentWindowSize(),
    ...getCurrentDiagonal(),
    ...getCurrentDevice(),
  })

  const updateWindowSize = React.useCallback(() => {
    const { width, height } = getCurrentWindowSize()
    const { diagonal } = getCurrentDiagonal()
    const { device, size } = getCurrentDevice()

    const nextViewportInfo = {
      ...viewportInfo,
      device,
      size,
      width,
      height,
      diagonal,
    }

    setViewportInfo(nextViewportInfo)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const resizeStop = React.useCallback(() => {
    if (isDomAvailable()) {
      window.removeEventListener("resize", updateWindowSize)
    }
  }, [])

  const resizeStart = React.useCallback(() => {
    debounce(updateWindowSize(), 100)

    if (isDomAvailable()) {
      window.addEventListener("resize", updateWindowSize)
    }
  }, [updateWindowSize])

  React.useEffect(() => {
    // if (isUndefined(breakpoints)) {
    //   error(
    //     "useViewportInfo",
    //     `breakpoints theme value is: ${breakpoints}. Attempted to call the useViewport hook outside of 'theme' context. Make sure your component is rendered inside 'ThemeProvider' component, part of 'styled-component' module`
    //   )
    //   return
    // }

    resizeStart()

    return () => {
      resizeStop()
    }
  }, [resizeStart, resizeStop])

  return viewportInfo
}

export default useViewportInfo
