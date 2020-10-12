export const setSortBy = ({ type, order, name }) => ({
  type: 'SET_SORT_BY',
  payload: { type, order, name }, 
});

export const setCategory = (catIndex) => ({
  type: 'SET_CATEGORY',
  payload: catIndex, 
});
