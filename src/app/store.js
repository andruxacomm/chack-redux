import { configureStore } from '@reduxjs/toolkit';
import {jokeReducer} from '../features/jokes';
import {categoriesReducer} from '../features/categories';

export default configureStore({
  reducer: {
    joke: jokeReducer,
    categories: categoriesReducer,
  },
});
