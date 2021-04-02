import { configureStore } from '@reduxjs/toolkit';
import {jokeReducer} from "../components/jokes";
import {categoriesReducer} from "../components/categories";

export default configureStore({
  reducer: {
    joke: jokeReducer,
    categories: categoriesReducer,
  },
});
