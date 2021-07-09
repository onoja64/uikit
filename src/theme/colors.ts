import { Colors } from "./types";

export const baseColors = {
  failure: "#ce2e0f",
  primary: "#16108a",
  primaryBright: "#0c0c67",
  primaryDark: "#10198f",
  secondary: "#3f27a5",
  success: "#31d040",
  warning: "#d28c05",
};

export const brandColors = {
  binance: "#1b0bf0",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#290a6c",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: '#2a265f',
  textDisabled: '#868399',
  textSubtle: '#230dad',
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#343ebe",
  background: "#282433",
  backgroundDisabled: "#2d2b39",
  contrast: "#FFFFFF",
  invertedContrast: "#131526",
  input: "#69460a",
  // primaryDark: "#0098A1",
  tertiary: "#3f2d03",
  text: "#EAE2FC",
  textDisabled: "#635d71",
  textSubtle: "#c9c4d4",
  borderColor: "#604a0e",
  card: "#2c1f03",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #8e5d08 0%, #61430e 100%)",
  },
};
