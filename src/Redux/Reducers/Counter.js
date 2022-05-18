import toast from "react-hot-toast";
import { FETCH_DATA, INCREMENT, DECREMENT, REMOVE_FROM_CART } from "../Constants";

let initialState = {
  products: [],
  cart: [],
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        products: action.payload,
      };
    case INCREMENT:
      let prod = state.products.find((x) => x.idMeal === action.payload);
      const inCart = state.cart.find((item) => (item.idMeal === action.payload ? true : false));
      // toaster
      if (inCart) {
        toast.success("Already added. & Incremented");
      } else {
        toast.success("Added to cart");
      }
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.idMeal === action.payload
                ? {
                    ...item,
                    qty: item.qty + 1,
                    total: (item.qty + 1) * item.price,
                  }
                : item
            )
          : [
              ...state.cart,
              {
                ...prod,
                qty: 1,
                price: 23,
                total: 23,
              },
            ],
      };
    case DECREMENT:
      let d = state.cart.find((item) => (item.qty < 2 ? false : true));
      if (d) {
        toast.success("Removed one item.");
      } else {
        toast.success("Item Removed");
      }
      return {
        ...state,
        cart: d
          ? state.cart.map((item) =>
              item.idMeal === action.payload ? { ...item, qty: item.qty < 1 ? 0 : item.qty - 1, total: (item.qty - 1) * item.price } : item
            )
          : state.cart.filter((item) => item.idMeal !== action.payload),
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.idMeal !== action.payload),
      };
    default:
      return state;
  }
}
