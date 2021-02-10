import { isDomAvailable } from "@utils/index"

const HEADLESS_VIEWPORT_SIZE = { width: 0, height: 0 }

export default function getCurrentWindowSize() {
  return isDomAvailable
    ? { width: window.screen.width, height: window.screen.height }
    : HEADLESS_VIEWPORT_SIZE
}
