/**
 * Converts RGB string to RGBA string
 */
export const convertRGBToRGBA = (rgb: string, alpha: number): string => {
  const rgbArray = rgb.match(/\d+/g);
  if (rgbArray) {
    const [r, g, b] = rgbArray.map((x) => parseInt(x));
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  return rgb;
};
