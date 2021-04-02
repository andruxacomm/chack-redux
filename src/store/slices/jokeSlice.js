import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getRandom, getRandomByCategory, search} from "../../api/jokes";

export const fetchRandom = createAsyncThunk(
    'jokes/fetchRandom',
    getRandom
)

export const fetchRandomByCategory = createAsyncThunk(
    'jokes/fetchRandomByCategory',
    getRandomByCategory
)

export const asyncSearch = createAsyncThunk(
    'jokes/search',
    search,
)

export const joke = createSlice({
    name: 'newsCategory',
    initialState: {
        value: [],
        isPending: true,
        isSuccess: false,
        error: null,
    },
    extraReducers: {
        [fetchRandom.pending]: (state) => {
            state.isPending = true;
        },
        [fetchRandom.fulfilled]: (state, action) => {
            state.value = [prepareJokeStructure(action.payload)];
            state.isPending = false;
            state.isSuccess = true;
        },
        [fetchRandom.rejected]: (state, action) => {
            state.isPending = false;
            state.isSuccess = false;
            state.error = action.error;
        },
        [fetchRandomByCategory.pending]: (state) => {
            state.isPending = true;
        },
        [fetchRandomByCategory.fulfilled]: (state, action) => {
            state.value = [prepareJokeStructure(action.payload)];
            state.isPending = false;
            state.isSuccess = true;
        },
        [fetchRandomByCategory.rejected]: (state, action) => {
            state.isPending = false;
            state.isSuccess = false;
            state.error = action.error;
        },
        [asyncSearch.pending]: (state) => {
            state.isPending = true;
        },
        [asyncSearch.fulfilled]: (state, action) => {
            state.value = action.payload.result.slice(0, 9).map(prepareJokeStructure);
            state.isPending = false;
            state.isSuccess = true;
        },
        [asyncSearch.rejected]: (state) => {
            state.isPending = false;
        },
    }
});

const prepareJokeStructure = (joke) => {
    return {
        categories: joke.categories || [],
        id: joke.id,
        value: joke.value || '',
        iconUrl: joke.icon_url || '',
        updatedAt: joke.updated_at || '',
        createdAt: joke.created_at || '',
    }
}

export const selectJoke = state => state.joke;
