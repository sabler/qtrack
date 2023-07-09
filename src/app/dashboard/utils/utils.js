export const renderDate = (stamp) => {
  return new Date(stamp);
};

export const isItStriped = (index) => {
  let calculation = index % 2 == 0;
  console.log(calculation);

  return calculation;
};
