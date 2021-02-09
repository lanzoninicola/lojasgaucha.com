/**
const breakpointsTheme = () => {
  return {
    xxsmall: { name: "mobileXS", width: 320, height: 568, diagonal: 651.94 }, // iphone 5
    xsmall: { name: "mobileM", width: 375, height: 667, diagonal: 765.19 }, // iphone 6/7/8
    small: { name: "mobile", width: 375, height: 812, diagonal: 894.41 }, // iphone X
    medium: { name: "tablet", width: 768, height: 1024, diagonal: 1280 },
    large: { name: "laptop", width: 1366, height: 1024, diagonal: 1707.2 },
    xlarge: { name: "laptopL", width: 1920, height: 945, diagonal: 2202.91 },
    xxlarge: {
      name: "laptopL",
      width: 2560,
      height: 1600,
      diagonal: 3018.87,
    },
    xxxlarge: { name: "fourK", width: 3840, height: 2160, diagonal: 4405.81 },
  }
}
 */

const breakpointsTheme = () => {
  return {
    viewportDevices: {
      mobile: {
        small: {
          name: "mobile-small",
          width: 320,
          height: 568,
          diagonal: 651.94,
        },
        medium: {
          name: "mobile-medium",
          width: 375,
          height: 667,
          diagonal: 765.19,
        },
        large: {
          name: "mobile-large",
          width: 375,
          height: 812,
          diagonal: 894.41,
        },
      },
      tablet: {
        small: {
          name: "tablet-small",
          width: 600,
          height: 1024,
          diagonal: 1186.83,
        },
        medium: {
          name: "tablet-medium",
          width: 768,
          height: 1024,
          diagonal: 1280,
        },
        large: {
          name: "tablet-large",
          width: 1024,
          height: 1366,
          diagonal: 1707.2,
        },
      },
      // The height value has decreased by 150px compared to the standard values.
      // This is an estimated value that refers to the size of the browser navigation bar, browser favourites.
      laptop: {
        small: {
          name: "laptop-small",
          width: 1366,
          height: 874,
          diagonal: 1707.2,
        },
        medium: {
          name: "laptop-medium",
          width: 1920,
          height: 945,
          diagonal: 2202.91,
        },
        large: {
          name: "laptop-large",
          width: 2560,
          height: 1450,
          diagonal: 3018.87,
        },
        xlarge: {
          name: "laptop-xlarge",
          width: 3840,
          height: 2160,
          diagonal: 4405.81,
        },
      },
    },
    //
    designReference: {
      mobile: "large",
      tablet: "medium",
      laptop: "medium",
    },
  }
}

export default breakpointsTheme
