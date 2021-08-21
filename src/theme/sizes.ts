const sizes = {
  remUnit: 16, // px
  toRem(px: number = 16) {
    return `${px / this.remUnit}rem`;
  },
};

export default sizes;
