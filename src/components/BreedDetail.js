import React from 'react';
import CatItem from './CatItem';

const BreedDetail = ({ data, dataImages }) => {

    console.log('from BreedDetail: ', dataImages.data);
    let renderedList = [];

    // checking if not undefined is a workaround, first is undefined, the not and can be consolelogged, not CLEAR WHY!
    if(dataImages.data !== undefined){
        renderedList = dataImages.data.map((cat) => {
            return <CatItem cat={cat} key={cat.id} />
            //return <p key={cat.id}><img src={cat.url}/></p>
        })
    
        console.log(renderedList);
    }
/*
    const renderedList = dataImages.data.map((cat) => {
        return <CatItem cat={cat} key={cat.id} />
        //return <p key={cat.id}><img src={cat.url}/></p>
    })

    console.log(renderedList);
*/

    if (data === undefined) {
        return (
            <h5>No breed was selected. Please select one.</h5>
        )
    } else {

        return (

            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <h5>{data.name}</h5>
                        <h3>ID: {data.id}</h3>
                        <p>Description: {data.description}</p>
                        <p>Temperament: {data.temperament}</p>
                        <p>Origin: {data.origin}</p>
                        <p>Intelligence: {data.intelligence}</p>
                        <p>Adaptability: {data.adaptability}</p>
                        <p>Affection level: {data.affection_level}</p>
                        <p>Child friendly: {data.child_friendly}</p>
                        <p>Dog friendly: {data.dog_friendly}</p>
                        <p>Energy level: {data.energy_level}</p>
                        <p>Health issues: {data.health_issues}</p>
                        <p>Indoor: {data.indoor}</p>
                        <p>Rare: {data.rare}</p>
                        <p>Social needs: {data.social_needs}</p>
                        <p>Stranger friendly: {data.stranger_friendly}</p>
                        <p>Vocalisation: {data.vocalisation}</p>
                        <p>Weight: {data.weight.metric} kg</p>
                        <a href={data.wikipedia_url}>Wikipedia</a>
                    </div>


                    <div className="col-8">
                        <div className="card-columns">
                            {renderedList}
                        </div>
                    </div>
                     

                </div>

            </div>
        )
    }

}

export default BreedDetail;