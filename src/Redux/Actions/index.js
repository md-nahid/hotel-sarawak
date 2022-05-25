import {
  SHOW_SEARCH,
  HIDE_SEARCH,
  INCREMENT,
  DECREMENT,
  REMOVE_FROM_CART,
  REMOVE_FROM_FAV,
  ADD_TO_FAVORITE,
} from '../Constants';

// cart increment action
export default function increment(productId) {
  return {
    type: INCREMENT,
    payload: productId,
  };
}
export function decrement(productId) {
  return {
    type: DECREMENT,
    payload: productId,
  };
}
export function removefromCart(productId) {
  return {
    type: REMOVE_FROM_CART,
    payload: productId,
  };
}
export function removeFromFav(productId) {
  return {
    type: REMOVE_FROM_FAV,
    payload: productId,
  };
}

// favorites add action
export function addToFavorite(id) {
  return function (dispatch) {
    fetch('products.json')
      .then((req) => req.json())
      .then((res) => {
        res.meals.forEach((item) => {
          if (item.idMeal === id) {
            return dispatch({
              type: ADD_TO_FAVORITE,
              payload: item,
            });
          }
        });
      });
  };
}

// fetching data to redux cart store
export function fetchData() {
  return function (dispatch) {
    fetch('products.json')
      .then((req) => req.json())
      .then((res) =>
        dispatch({
          type: 'FETCH_DATA',
          payload: res.meals,
        })
      );
  };
}

// show search actions
export function showSearch() {
  return {
    type: SHOW_SEARCH,
  };
}
// hide search actions
export function hideSearch() {
  return {
    type: HIDE_SEARCH,
  };
}
