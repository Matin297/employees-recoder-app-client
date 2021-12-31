import colors from "./colors";
import themes from "./themes.json";
import sizes from "./sizes";
import animation from "./animation";

const lightTheme = themes.light;

const theme = {
  name: "light",
  colors: {
    ...colors,
    ...lightTheme.colors,
  },
  sizes,
  animation,
};

export default theme;
