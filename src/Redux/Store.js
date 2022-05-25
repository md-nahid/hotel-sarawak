import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Reducers/Counter';
import isLogedin from './Reducers/Islogedin';
import showSearchCom from './Reducers/SearchReducer';
import FavoriteReducer from './Reducers/FavoriteReducer';

export const store = configureStore(
  {
    reducer: {
      cartCount: counterReducer,
      login: isLogedin,
      isSearch: showSearchCom,
      favoriteCount: FavoriteReducer,
    },
  },
  +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
