import axios from "axios";

export const getRandom = async () => {
    const {data} = await axios.get('https://api.chucknorris.io/jokes/random');
    return data;
}

export const getRandomByCategory = async (id) => {
    const {data} = await axios.get('https://api.chucknorris.io/jokes/random?category='+ id)
    return data;
}

export const getCategories = async () => {
    const {data} = await axios.get('https://api.chucknorris.io/jokes/categories');
    return data;
}

export const search = async (string) => {
    const {data} = await axios.get('https://api.chucknorris.io/jokes/search?query=' + string)
    return data;
}