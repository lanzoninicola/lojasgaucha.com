const typographyTheme = () => {
  return {
    config: {
      minLock: 320,
      maxLock: 1440,
    },
    primary: {
      family: '"Manrope", sans-serif',
      h1: {
        fontSize: { mobile: 38, tablet: 49, laptop: 56 },
        lineHeight: { mobile: 41, tablet: 52, laptop: 60 },
      },
      h2: {
        fontSize: { mobile: 24, tablet: 32, laptop: 48 },
        lineHeight: { mobile: 27, tablet: 35, laptop: 52 },
      },
      h3: {
        fontSize: { mobile: 25, tablet: 31, laptop: 40 },
        lineHeight: { mobile: 28, tablet: 34, laptop: 46 },
      },
      h4: {
        fontSize: { mobile: 20, tablet: 24, laptop: 34 },
        lineHeight: { mobile: 23, tablet: 30, laptop: 38 },
      },
      h5: {
        fontSize: { mobile: 16, tablet: 18, laptop: 28 },
        lineHeight: { mobile: 19, tablet: 21, laptop: 32 },
      },
    },
    secondary: {
      family: '"Poppins", sans-serif',
      body: {
        fontSize: { mobile: 16, tablet: 16, laptop: 18 },
        lineHeight: { mobile: 18, tablet: 19, laptop: 24 },
      },
      small: {
        fontSize: { mobile: 10, tablet: 10, laptop: 13 },
        lineHeight: { mobile: 13, tablet: 13, laptop: 15 },
      },
    },
  }
}

export default typographyTheme
