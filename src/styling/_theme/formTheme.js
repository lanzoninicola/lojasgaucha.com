const formTheme = () => {
  return {
    layout: {
      input: {
        primary: {},
        secondary: {},
        // VARIANTS is a style other than primary or secondary
        // applied in particular situation with requirements that
        // cannot be satisfied by the standard layout described above
        // The name of the variants can be a fantasy name from which the inspiration comes from
        variants: {
          firebase: {
            fontFamily: '"Poppins", sans-serif',
            size: "18px",
            lineHeight: "36px",
            capitalize: "lowercase",
          },
        },
      },
      textArea: {
        primary: {},
        secondary: {},
        // VARIANTS is a style other than primary or secondary
        // applied in particular situation with requirements that
        // cannot be satisfied by the standard layout described above
        // The name of the variants can be a fantasy name from which the inspiration comes from
        variants: {
          firebase: {
            fontFamily: '"Poppins", sans-serif',
            size: "20px",
            lineHeight: "28px",
            capitalize: "lowercase",
          },
        },
      },
    },
  }
}

export default formTheme
