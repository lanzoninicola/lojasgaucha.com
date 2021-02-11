import { theme } from "@theme/_global-style"
import { objectKeys } from "@utils"

export default function getBreakpoints() {
  const themeBreakpoints = theme?.breakpoints.viewportDevices
  return objectKeys(themeBreakpoints)
}
