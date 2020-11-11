import React from 'react';
import CategoryItem from './CategoryItem';

const CategoryList = (props) => {
    console.log('PROPS',props);
    const renderedList = props.categorized.map((cat, i) => {
        //console.log(i);
        return <CategoryItem cat={cat} key={i}/>
    })
   // console.log(renderedList);
    return(
        <div>
            <h5>
            Search by category "{props.categoryname}"
            </h5>
        <div className="card-columns">
            {renderedList}
        </div>
        </div>
    )
}

export default CategoryList;