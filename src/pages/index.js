import {fetchRandom, fetchRandomByCategory, Jokes, selectJoke, asyncSearch} from "../features/jokes";
import {Categories, fetchCategories, selectCategories} from "../features/categories";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

export const IndexPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchRandom());
        dispatch(fetchCategories());
    }, []);
    const jokeStore = useSelector(selectJoke);
    const categoriesStore = useSelector(selectCategories);

    const onInput = e => {
        dispatch(asyncSearch(e.currentTarget.value));
    }

    return <>
        {jokeStore.isSuccess && categoriesStore.isSuccess && <>
            <div style={{marginBottom: '10px'}}>
                <label htmlFor="searchInput">
                    Search
                <input id="searchInput" onChange={onInput}/>
                </label>
            </div>
            <div style={{marginBottom: '10px'}}>
                <Categories categories={categoriesStore.value} onCategoryCLick={(category) => dispatch(fetchRandomByCategory(category))}/>
            </div>
            <Jokes jokes={jokeStore.value} onRandomClick={() => dispatch(fetchRandom())}/>
        </>}
    </>
};