import * as React from "react"
import {
  getCurrentWindowSize,
  getCurrentViewportDiagonal,
  getCurrentDevice,
} from "@layouts/lib/index"
import { isDomAvailable, debounce } from "@utils/index"

// TODO: to be verified: wrapped window and document object to control behaviours
// TODO: https://github.com/aragon/use-viewport/blob/master/src/viewport.tsx - check useRef implementation

function useViewportInfo() {
  const [viewportInfo, setViewportInfo] = React.useState({
    ...getCurrentWindowSize(),
    ...getCurrentViewportDiagonal(),
    ...getCurrentDevice(),
  })

  const updateWindowSize = React.useCallback(() => {
    const { width, height } = getCurrentWindowSize()
    const { diagonal } = getCurrentViewportDiagonal()
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
    if (isDomAvailable) {
      window.removeEventListener("resize", updateWindowSize)
    }
  }, [updateWindowSize])

  const resizeStart = React.useCallback(() => {
    debounce(updateWindowSize(), 100)

    if (isDomAvailable) {
      window.addEventListener("resize", updateWindowSize)
    }
  }, [updateWindowSize])

  React.useEffect(() => {
    resizeStart()

    return () => {
      resizeStop()
    }
  }, [resizeStart, resizeStop])

  return viewportInfo
}

export default useViewportInfo
