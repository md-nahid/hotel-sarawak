import { ADD_TO_FAVORITE } from "../Constants";
import toast from "react-hot-toast";
import { favorite } from "../../Components/Toastoptions/Toastoptions";

const initialState = [];
export default function FavoriteReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      // check if already added
      const exist = state.find((x) => (x === action.payload ? true : false));
      if (exist) {
        toast("Already added to favorite", favorite);
      } else {
        toast("Added to favorite.", favorite);
      }
      return exist ? state : [...state, action.payload];
    default:
      return state;
  }
}
