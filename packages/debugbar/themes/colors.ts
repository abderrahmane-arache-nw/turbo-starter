const colors = {
  white: "#FFFFFF",
  black: "#000000",
  gray: "#efefef",
  lightGray: "#ddd",
  alizarinCrimson: "#ED2B2A",
  gulfBlue: "#070A52",
  burntSienna: "#EB514E",
  lighter: "#fafafa",
  golf: "#cdcdcd",
  green: "green",
  red: "red",
  orange: "orange",
  belizeHole: "#2980b9",
  asbestos: "#7f8c8d",
  citylOp: "#b2bec34d",
  downRiver: "#0B2447",
  biscay: "#19376D",
  indigo: "#576CBC",
  RegentStBlue: "#A5D7E8",
} as const;

type Keys = keyof typeof colors;
export type StyleColors = (typeof colors)[Keys];

const SPACING_MULTIPLIER = 0.0625;
const SPACING_UNIT = "rem";

export const getSpacing = (mutiplier: number): string => `${mutiplier * SPACING_MULTIPLIER}${SPACING_UNIT}`;

const toolbarHeights = {
  barWithPadding: 46,
  closedBar: 30,
  openedBar: 200,
} as const;

const fontFamily = {
  arial: "arial",
  monospace: "monospace",
} as const;

const fontSize = {
  xs: getSpacing(12),
  base: getSpacing(16),
  large: getSpacing(18),
  text2xl: getSpacing(24),
  text4xl: getSpacing(36),
  small: "small",
  xSmall: "x-small",
} as const;

const fontWeight = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 800,
} as const;

const zIndex = {
  low: 0,
  medium: 1,
  high: 2,
} as const;

export { colors, fontFamily, fontSize, zIndex, toolbarHeights, fontWeight };
