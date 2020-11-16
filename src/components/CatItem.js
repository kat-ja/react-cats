import React from 'react';

const CatItem = ({cat}) => {
    return(
        <div className="card">
            <img src={cat.url}  alt="cat" className="card-img-top thumbnail"/>
        </div>
    )
}

export default CatItem;