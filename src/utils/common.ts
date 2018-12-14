export const getSizeWithUnit = (value: number | string): string => {
  return new RegExp("[%|px|em|rem|vh|vw|pt|cm|auto]$").test(`${value}`)
    ? `${value}`
    : `${value}px`;
};
