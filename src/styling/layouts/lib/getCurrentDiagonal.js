import { getCurrentWindowSize } from "@layouts/lib/index"

export default function getCurrentDiagonal() {
  const { width, height } = getCurrentWindowSize()
  return { diagonal: Math.round(Math.sqrt(width * width + height * height)) }
}
