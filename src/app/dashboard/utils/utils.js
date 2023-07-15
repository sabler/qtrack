export const renderDate = (stamp) => {
  return new Date(stamp);
};

export const isItStriped = (index) => {
  let calculation = index % 2 == 0;
  return calculation;
};

export const friendlyNumbers = (point, afterDecimal = 3) => {
  return Number.parseFloat(point).toFixed(afterDecimal);
};

export const updateMap = () => {
  //
};
