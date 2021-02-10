const typographyTheme = () => {
  return {
    config: {
      minLock: 320,
      maxLock: 1440,
    },
    primary: {
      family: '"Manrope", sans-serif',
      h1: {
        fontSize: { mobile: 38, tablet: 49, laptop: 49 },
        lineHeight: { mobile: 41, tablet: 52, laptop: 52 },
      },
      h2: {
        fontSize: { mobile: 24, tablet: 39, laptop: 39 },
        lineHeight: { mobile: 27, tablet: 42, laptop: 42 },
      },
      h3: {
        fontSize: { mobile: 25, tablet: 31, laptop: 31 },
        lineHeight: { mobile: 28, tablet: 34, laptop: 34 },
      },
      h4: {
        fontSize: { mobile: 20, tablet: 31, laptop: 31 },
        lineHeight: { mobile: 23, tablet: 34, laptop: 34 },
      },
      h5: {
        fontSize: { mobile: 16, tablet: 31, laptop: 31 },
        lineHeight: { mobile: 19, tablet: 34, laptop: 34 },
      },
    },
    secondary: {
      family: '"Poppins", sans-serif',
      body: {
        fontSize: { mobile: 16, tablet: 18, laptop: 18 },
        lineHeight: { mobile: 18, tablet: 21, laptop: 21 },
      },
      small: {
        fontSize: { mobile: 10, tablet: 10, laptop: 13 },
        lineHeight: { mobile: 13, tablet: 13, laptop: 15 },
      },
    },
  }
}

export default typographyTheme
