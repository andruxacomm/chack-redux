import { configureStore } from '@reduxjs/toolkit';
import {joke, categories} from "./slices";

export default configureStore({
  reducer: {
    joke: joke.reducer,
    categories: categories.reducer,
  },
});
