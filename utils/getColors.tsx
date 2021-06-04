export const getCssPropHex = (prop: string) => {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(prop)
    .toUpperCase();
};

export const getCssPropRgb = (prop: string) => {
  const hex = getCssPropHex(prop);

  if (hex.length != 8) {
    throw "Only six-digit hex colors are allowed.";
  }

  var aRgbHex: any = hex.match(/.{1,2}/g);
  var aRgb = [
    parseInt(aRgbHex[1], 16),
    " ",
    parseInt(aRgbHex[2], 16),
    " ",
    parseInt(aRgbHex[3], 16),
  ];
  return aRgb;
};

export const getCssPropHsl = (prop: string) => {
  const rgb: any = getCssPropRgb(prop);

  let r: any = rgb[0];
  let g: any = rgb[2];
  let b: any = rgb[4];

  // Make r, g, and b fractions of 1
  r /= 255;
  g /= 255;
  b /= 255;

  // Find greatest and smallest channel values
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  // Calculate hue
  // No difference
  if (delta == 0) h = 0;
  // Red is max
  else if (cmax == r) h = ((g - b) / delta) % 6;
  // Green is max
  else if (cmax == g) h = (b - r) / delta + 2;
  // Blue is max
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  // Make negative hues positive behind 360°
  if (h < 0) h += 360;

  // Calculate lightness
  l = (cmax + cmin) / 2;

  // Calculate saturation
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  // Multiply l and s by 100
  s = +(s * 100).toFixed(0);
  l = +(l * 100).toFixed(0);

  return h + " " + s + " " + l;
};
