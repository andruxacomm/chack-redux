import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getCategories} from "../../api/jokes";

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    getCategories,
)

export const categories = createSlice({
    name: 'newsCategory',
    initialState: {
        value: [],
        isPending: true,
        isSuccess: false,
        error: null,
    },
    extraReducers: {
        [fetchCategories.pending]: (state) => {
            state.isPending = true;
        },
        [fetchCategories.fulfilled]: (state, action) => {
            state.value = action.payload.map(prepareCategory);
            state.isPending = false;
            state.isSuccess = true;
        },
        [fetchCategories.rejected]: (state, action) => {
            state.isPending = false;
            state.isSuccess = false;
            state.error = action.error;
        },
    }
})

const prepareCategory = (cat => typeof cat === 'string' ? cat : '');

export const categoriesReducer =  categories.reducer;

export const selectCategories = state => state.categories;
