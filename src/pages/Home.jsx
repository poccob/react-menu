import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';

const categoryNames = [
  'Горячее',
  'На компанию',
  'Пицца',
  'Детское',
  'Закуски',
  'Нарезки',
  'Супы',
  'Жульены',
  'Гарниры',
  'Соусы',
  'Десерты',
  'Напитки',
  'Коктейли',
];
const sortItems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене ↑', type: 'price', order: 'asc' },
  { name: 'цене ↓', type: 'price', order: 'desc' },
  //{ name: 'алфавиту ↑', type: 'name', order: 'asc' },
  //{ name: 'алфавиту ↓', type: 'name', order: 'desc' },
];

function Home() {
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddPizzaToCart = (obj) => {
    dispatch({
      type: 'ADD_PIZZA_CART',
      payload: obj,
    });
  };

  return (
    <div className='container'>
      <h2 className='content__title'>Меню</h2>
      <div className='content__top'>
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <div className='categories-plug'></div>
        <SortPopup
          activeSortName={sortBy.name}
          items={sortItems}
          onClickSortType={onSelectSortType}
        />
      </div>

      <div className='content__items'>
        {isLoaded
          ? items.map((obj) => (
              <PizzaBlock
                onClickAddPizza={handleAddPizzaToCart}
                key={obj.id}
                addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                {...obj}
              />
            ))
          : Array(4)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
