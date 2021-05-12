import * as path from "path";
import { generateTheme, IColorSet } from "vscode-theme-generator";

const themeName = "Generated";
const colors = {
  black: "#1f2937",
  white: "#FFFFFF",
  blue: "#E6DB74",
  red: "#f92672",
  green: "#a6e22e",
  yellow: "#FFFFFF",
};

const colorSet: IColorSet = {
  base: {
    background: colors.black,
    foreground: colors.white,
    color1: colors.red,
    color2: colors.blue,
    color3: colors.green,
    color4: colors.yellow,
  },
};

generateTheme(themeName, colorSet, path.join(__dirname, "theme.json"));
