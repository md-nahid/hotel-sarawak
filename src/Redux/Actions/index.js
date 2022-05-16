import { SHOW_SEARCH } from "../Constants";
import { HIDE_SEARCH } from "../Constants";

// cart increment action
export default function increment(productId) {
  return {
    type: "INCREMENT",
    payload: productId,
  };
}

// fetching data to redux cart store
export function fetchData() {
  return function (dispatch) {
    fetch("products.json")
      .then((req) => req.json())
      .then((res) =>
        dispatch({
          type: "FETCH_DATA",
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
