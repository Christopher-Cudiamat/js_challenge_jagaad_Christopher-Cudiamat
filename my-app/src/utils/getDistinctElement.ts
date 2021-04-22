export const getDistinctElement = (myArray: any[], props: string) => {
  return myArray.filter((obj, pos, arr) => {
    return arr.map((mapObj) => mapObj[props]).indexOf(obj[props]) === pos;
  });
};
