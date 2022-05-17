import { ADD_TO_FAVORITE } from "../Constants";

const initialState = [];
export default function FavoriteReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      // check if already added
      const exist = state.find((x) => (x === action.payload ? true : false));
      return exist ? state : [...state, action.payload];
    default:
      return state;
  }
}
