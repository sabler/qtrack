export const renderDate = (stamp) => {
  return new Date(stamp);
};

export const isItStriped = (index) => {
  let calculation = index % 2 == 0;
  return calculation;
};

export const friendlyCoords = (point) => {
  return Number.parseFloat(point).toFixed(3);
};

export const updateMap = () => {
  //
};
