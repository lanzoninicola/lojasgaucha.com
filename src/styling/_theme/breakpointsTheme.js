const breakpointsTheme = () => {
  return {
    xxsmall: { device: "mobileXS", width: 320, height: 568, diagonal: 651.94 }, // iphone 5
    xsmall: { device: "mobileM", width: 375, height: 667, diagonal: 765.19 }, // iphone 6/7/8
    small: { device: "mobile", width: 375, height: 812, diagonal: 894.41 }, // iphone X
    medium: { device: "tablet", width: 768, height: 1024, diagonal: 1280 },
    large: { device: "laptop", width: 1366, height: 1024, diagonal: 1707.2 },
    xlarge: { device: "laptopL", width: 1920, height: 1080, diagonal: 2202.91 },
    xxlarge: {
      device: "laptopL",
      width: 2560,
      height: 1600,
      diagonal: 3018.87,
    },
    xxxlarge: { device: "fourK", width: 3840, height: 2160, diagonal: 4405.81 },
  }
}

export default breakpointsTheme
