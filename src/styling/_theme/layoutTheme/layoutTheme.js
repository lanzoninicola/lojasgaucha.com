import breakpointsTheme from "../breakpointsTheme/breakpointsTheme"

const _breakpointsTheme = breakpointsTheme()
const devicesBreakpoints = _breakpointsTheme?.viewportDevices

function layoutTheme() {
  const _layoutTheme = {
    viewport: {
      //*
      //*   if the below propertiy is valorized it means that
      //*   there is an highly customizable layout for a viewport
      //*   with a diagonal lower than the indicated one.
      //*
      //*   if exists a single layout for all breakpoints set to "zero" the prop
      //*

      minDiagonal: 1190,
    },
    grid: {
      gap: {
        default: { mobile: 8, tablet: 16, laptop: 16 },
      },
      responsive: {
        // This state for the min-width of columns
        // below this value the browser start stacking the grid-items
        columns: {
          default: devicesBreakpoints.mobile.small.width,
          custom: devicesBreakpoints.tablet.small.width - 10,
        },
        // This state for the min-heifht of rows
        rows: {
          default: devicesBreakpoints.mobile.small.height / 4,
          custom: undefined,
        },
      },
    },
  }
  return _layoutTheme
}

export default layoutTheme
