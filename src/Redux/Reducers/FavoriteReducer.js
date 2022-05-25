import { ADD_TO_FAVORITE, REMOVE_FROM_FAV } from '../Constants';
import toast from 'react-hot-toast';
import { favorite } from '../../Components/Toastoptions/Toastoptions';

export default function FavoriteReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      const exist = state.find((x) => (x.idMeal === action.payload.idMeal ? true : false));
      if (exist) {
        toast('Already added to favorite', favorite);
      } else {
        toast('Added to favorite.', favorite);
      }
      return exist ? state : [...state, action.payload];
    case REMOVE_FROM_FAV:
      return state.filter((item) => item.idMeal !== action.payload);
    default:
      return state;
  }
}
