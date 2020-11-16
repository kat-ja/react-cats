import React from 'react';

const CategoryItem = ({cat}) => {
    //console.log(this.props);
    return(
        <div className="card">
            <img src={cat} alt="cat by category" className="card-img-top thumbnail"/>   
        </div>
    )
}

export default CategoryItem;