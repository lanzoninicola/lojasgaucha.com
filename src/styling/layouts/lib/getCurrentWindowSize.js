import { isDomAvailable } from "@utils/index"

const HEADLESS_VIEWPORT_SIZE = { width: 0, height: 0 }

export default function getCurrentWindowSize() {
  return isDomAvailable
    ? { width: window.innerWidth, height: window.innerHeight }
    : HEADLESS_VIEWPORT_SIZE
}
