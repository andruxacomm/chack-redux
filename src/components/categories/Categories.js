import React from 'react';

export const Categories = ({categories = [], onCategoryCLick = (cat) => {}}) => {
    return categories ? <>
        {(categories || []).map(cat => (
            <button key={cat} onClick={() => onCategoryCLick(cat)}>{cat}</button>
        ))}
    </> : null
}