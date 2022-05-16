import { SHOW_SEARCH } from "../Constants";
import { HIDE_SEARCH } from "../Constants";

let initialState = false;

export default function showSearchCom(state = initialState, action) {
  switch (action.type) {
    case SHOW_SEARCH:
      return true;
    case HIDE_SEARCH:
      return false;
    default:
      return state;
  }
}
