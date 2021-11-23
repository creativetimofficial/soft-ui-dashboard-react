// Images
import backgroundImage from "assets/images/curved-images/white-curved.jpeg";

function card(theme, ownerState) {
  const { borders, functions, transitions, breakpoints } = theme;
  const { miniSidenav } = ownerState;

  const { borderRadius } = borders;
  const { pxToRem } = functions;

  return {
    minWidth: "auto",
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: "50%",
    backgroundSize: "cover",
    borderRadius: borderRadius.xl,
    boxShadow: "none",

    [breakpoints.up("xl")]: {
      maxHeight: miniSidenav ? pxToRem(64) : pxToRem(192),
      transition: transitions.create("max-height", {
        easing: transitions.easing.easeInOut,
        duration: transitions.duration.standard,
      }),
    },
  };
}

function cardContent(theme, ownerState) {
  const { palette, functions, borders } = theme;
  const { sidenavColor } = ownerState;

  const { white, dark, gradients } = palette;
  const { linearGradient } = functions;
  const { borderRadius } = borders;

  return {
    color: white.main,
    position: "relative",
    zIndex: 2,
    width: "100%",
    height: "100%",
    p: 2,

    "&::after": {
      content: '""',
      backgroundImage:
        sidenavColor === "default"
          ? linearGradient(gradients.secondary.main, gradients.secondary.state)
          : linearGradient(gradients[sidenavColor].main, gradients[sidenavColor].state),
      display: "block",
      height: "100%",
      width: "100%",
      borderRadius: borderRadius.xl,
      position: "absolute",
      top: 0,
      left: 0,
      opacity: 0.65,
      zIndex: -1,
    },

    "& .MuiButton-root": {
      color: dark.main,
    },

    "&:last-child": {
      pb: 2,
    },
  };
}

const cardIconBox = {
  display: "grid",
  placeItems: "center",
  transition: ({ transitions }) =>
    transitions.create("margin", {
      easing: transitions.easing.easeInOut,
      duration: transitions.duration.standard,
    }),
};

function cardIcon(theme, ownerState) {
  const { functions, palette } = theme;
  const { sidenavColor } = ownerState;

  const { linearGradient } = functions;
  const { gradients, transparent } = palette;

  return {
    backgroundImage:
      sidenavColor === "default"
        ? linearGradient(gradients.dark, gradients.dark.state)
        : linearGradient(gradients[sidenavColor].main, gradients[sidenavColor].state),
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: transparent.main,
  };
}

export { card, cardContent, cardIconBox, cardIcon };
