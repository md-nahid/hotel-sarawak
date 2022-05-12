let initialState = {
  count: 0,
  products: [
    {
      order: 0,
      id: "",
    },
  ],
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
}
