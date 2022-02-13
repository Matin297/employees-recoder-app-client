const sizes = {
  remUnit: 16, // px
  toRem(px: number = 16) {
    return `${px / this.remUnit}rem`;
  },
  typography: {
    h1: 40,
    h2: 35,
    h3: 30,
    h4: 25,
    h5: 20,
    h6: 18,
    body1: 16,
    body2: 12,
  },
};

export default sizes;
