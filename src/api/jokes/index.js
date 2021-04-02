import axios from "axios";

export const getRandom = async () => {
    try {
        const {data} = await axios.get('https://api.chucknorris.io/jokes/random');
        if (!data.id) throw new Error('invalid Joke id');
        return data;
    } catch (e) {
        throw new Error(e);
    }
}

export const getRandomByCategory = async (id) => {
    try {
        const {data} = await axios.get('https://api.chucknorris.io/jokes/random?category='+ id);
        if (!(data?.categories || []).includes(id)) throw new Error('invalid Joke id');
       return data;
    } catch (e) {
        throw new Error(e);
    }
}

export const getCategories = async () => {
    try {
        const {data} = await axios.get('https://api.chucknorris.io/jokes/categories');
        if (!Array.isArray(data)) throw new Error('data is not a array');
        return data;
    } catch (e) {
        throw new Error(e);
    }
}

export const search = async (string) => {
    try {
        const {data} = await axios.get('https://api.chucknorris.io/jokes/search?query=' + string)
        return data;
    } catch (e) {
        throw new Error(e);
    }
}