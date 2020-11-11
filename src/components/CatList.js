import React from 'react';
//import './css/CatList.css';
import CatItem from './CatItem';

const CatList = (props) => {
    console.log('from catlist: ',props.data);
    const renderedList = props.data.map((cat)=>{
        return <CatItem cat={cat} key={cat.id}/>
        //return <p key={cat.id}><img src={cat.url}/></p>
    })
    

        return(
            <div className="card-columns">
           
                
               {renderedList}
    
            
            </div>
        )
    
        
   
    
}

export default CatList;