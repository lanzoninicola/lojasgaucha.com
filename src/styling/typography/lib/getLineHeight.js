import { isUndefined, isObject, isNumber, isString } from "@utils/index"

// TODO manage +3 size

export default function getLineHeight(
  userLineHeight,
  userFontSize,
  themeLineHeights,
  themeFontSizes
) {
  let _lineHeight = 0

  // line-height is undefined --> line-height calculcation from theme or based on font-size
  if (isUndefined(userLineHeight)) {
    // size is undefined --> line-height from theme
    if (isUndefined(userFontSize)) {
      _lineHeight = themeLineHeights
    }

    // size is not undefined --> line-height based on atomic font-size
    if (isNumber(userFontSize) || isString(userFontSize))
      _lineHeight = parseInt(userFontSize) + 3

    // size is not undefined --> line-height based on font-size which is atomic using breakpoints(typeof object)
    let nextDevicesLineHeight = {}
    if (isObject(userFontSize)) {
      Object.keys(themeFontSizes).forEach(device => {
        nextDevicesLineHeight = {
          ...nextDevicesLineHeight,
          [device]: userFontSize[device] + 3 ?? themeFontSizes[device],
        }
      })
      _lineHeight = nextDevicesLineHeight
    }
  }
  // line-height is atomic using a breakpoints object --> line-height size from user
  let nextDevicesLineHeight = {}
  if (isObject(userLineHeight)) {
    Object.keys(themeLineHeights).forEach(device => {
      nextDevicesLineHeight = {
        ...nextDevicesLineHeight,
        [device]: userLineHeight[device] ?? themeLineHeights[device],
      }
    })
    _lineHeight = nextDevicesLineHeight
  }

  return _lineHeight
}
