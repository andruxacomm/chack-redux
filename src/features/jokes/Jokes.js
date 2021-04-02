import React from 'react';

export const Jokes = ({jokes = [], onRandomClick = () => {}}) => {
    return jokes?.length > 0 ? <>
        {jokes.map((joke, index) => (<div key={joke.id}>{index}. {joke.value}</div>))}
        <button onClick={onRandomClick}>get random</button>
    </> : null;
}