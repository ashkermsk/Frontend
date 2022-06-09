export const calcCssSize = (value) => {
  return isNaN(Number(value)) ? value || '0' : `${value}px`;
};

export const boxShadow = (elevation) => {
  return elevation === 1 ? '0px 0px 5px #808080' : null;
};
