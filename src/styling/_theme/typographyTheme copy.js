const typographyTheme = () => {
  return {
    config: {
      minLock: 320,
      maxLock: 1440,
    },
    primary: {
      family: '"Manrope", sans-serif',
      h1: {
        minFontSize: 38,
        maxFontSize: 48,
        minLineHeight: 40,
        maxLineHeight: 50,
      },
      h2: {
        minFontSize: 17,
        maxFontSize: 39,
        minLineHeight: 20,
        maxLineHeight: 41,
      },
      h3: {
        minFontSize: 25,
        maxFontSize: 31,
        minLineHeight: 27,
        maxLineHeight: 33,
      },
      h4: {
        minFontSize: 20,
        maxFontSize: 26,
        minLineHeight: 22,
        maxLineHeight: 28,
      },
      h5: {
        minFontSize: 16,
        maxFontSize: 18,
        minLineHeight: 18,
        maxLineHeight: 20,
      },
      body: {
        minFontSize: 12,
        maxFontSize: 18,
        minLineHeight: 15,
        maxLineHeight: 21,
      },
      small: {
        minFontSize: 12,
        maxFontSize: 14,
        minLineHeight: 14,
        maxLineHeight: 16,
      },
    },
    secondary: {
      family: '"Poppins", sans-serif',
      h1: {
        minFontSize: 34,
        maxFontSize: 48,
        minLineHeight: 36,
        maxLineHeight: 50,
      },
      h2: {
        minFontSize: 17,
        maxFontSize: 38,
        minLineHeight: 20,
        maxLineHeight: 41,
      },
      h3: {
        minFontSize: 18,
        maxFontSize: 31,
        minLineHeight: 20,
        maxLineHeight: 33,
      },
      h4: {
        minFontSize: 16,
        maxFontSize: 25,
        minLineHeight: 18,
        maxLineHeight: 27,
      },
      h5: {
        minFontSize: 15,
        maxFontSize: 16,
        minLineHeight: 17,
        maxLineHeight: 18,
      },
      body: {
        minFontSize: 11,
        maxFontSize: 18,
        minLineHeight: 15,
        maxLineHeight: 21,
      },
      small: {
        minFontSize: 10,
        maxFontSize: 13,
        minLineHeight: 13,
        maxLineHeight: 15,
      },
    },
  }
}

export default typographyTheme
