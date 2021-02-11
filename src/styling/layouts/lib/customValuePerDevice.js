import { getCurrentDevice, isValidBreakpoints } from "@layouts/lib/index"
import { isObject, error } from "@utils/index"

export default function customValuePerDevice(values = {}) {
  if (!isObject(values)) {
    error(
      `customValuePerDevice()`,
      `Parameter passed to function must be an object, instead of ${typeof values}`
    )
    return
  }

  if (isValidBreakpoints(values)) {
    const { device: currentDeviceFormFactor } = getCurrentDevice()

    return values[currentDeviceFormFactor]
  } else {
    error(
      `customValuePerDevice()`,
      `Parameter passed to function does not contain valid breakpoints: ${JSON.stringify(
        values
      )}`
    )
    return
  }
}
