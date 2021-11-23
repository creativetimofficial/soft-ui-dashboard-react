function menuItem(theme) {
  const { palette, borders, transitions } = theme;

  const { secondary, light } = palette;
  const { borderRadius } = borders;

  return {
    display: "flex",
    alignItems: "center",
    width: "100%",
    color: secondary.main,
    py: 1,
    px: 2,
    borderRadius: borderRadius.md,
    transition: transitions.create("background-color", {
      easing: transitions.easing.easeInOut,
      duration: transitions.duration.standard,
    }),

    "&:not(:last-child)": {
      mb: 1.25,
    },

    "&:hover": {
      backgroundColor: light.main,
    },
  };
}

function menuImage(theme, ownerState) {
  const { functions, palette, borders } = theme;
  const { color } = ownerState;

  const { linearGradient } = functions;
  const { gradients } = palette;
  const { borderRadius } = borders;

  return {
    display: "grid",
    placeItems: "center",
    backgroundImage: gradients[color]
      ? linearGradient(gradients[color].main, gradients[color].state)
      : linearGradient(gradients.dark.main, gradients.dark.state),

    "& img": {
      width: "100%",
      borderRadius: borderRadius.lg,
    },
  };
}

export { menuItem, menuImage };
