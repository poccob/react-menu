import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });

  axios.get(`/db/cat-${category !== null ? `${category + 1}` : '0'}.json`).then(({ data }) => {
    console.log(sortBy);
    if (sortBy.type === 'popular') {
      data.sort(function (obj1, obj2) {
        return obj2.rating - obj1.rating;
      });
    }
    if (sortBy.type === 'price' && sortBy.order === 'asc') {
      data.sort(function (obj1, obj2) {
        return obj1.price - obj2.price;
      });
    }
    if (sortBy.type === 'price' && sortBy.order === 'desc') {
      data.sort(function (obj1, obj2) {
        return obj2.price - obj1.price;
      });
    }
    dispatch(setPizzas(data));
  });
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});
