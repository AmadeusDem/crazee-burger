export const deepClone = (array) => JSON.parse(JSON.stringify(array));

export const findObjectById = (id, array) => {
  return array.find((item) => item.id === id);
};

export const findIndexById = (id, array) => {
  return array.findIndex((item) => item.id === id);
};
