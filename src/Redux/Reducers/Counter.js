let initialState = {
  products: [],
  cart: [],
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        products: action.payload,
      };
    case "INCREMENT":
      // get the item
      let prod = state.products.find((x) => x.idMeal === action.payload);
      // if already in the cart
      const inCart = state.cart.find((item) =>
        item.idMeal === action.payload ? true : false
      );
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
    default:
      return state;
  }
}
