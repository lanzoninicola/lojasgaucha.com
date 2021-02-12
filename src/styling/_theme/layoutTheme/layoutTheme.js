import breakpointsTheme from "../breakpointsTheme/breakpointsTheme"
const devicesBreakpoints = breakpointsTheme().viewportDevices

function layoutTheme() {
  const layoutTheme = {
    grid: {
      responsive: {
        // This state for the min-width of columns
        // below this value the browser start stacking the grid-items
        columns: {
          default: devicesBreakpoints.mobile.small.width,
          custom: devicesBreakpoints.tablet.small.width,
        },
        // This state for the min-heifht of rows
        rows: {
          default: devicesBreakpoints.mobile.small.height / 4,
          custom: undefined,
        },
      },
    },
  }
  return layoutTheme
}

export default layoutTheme
