import React from 'react';


const BreedDetail = ({data}) => {
    //console.log('from BreedDetail all props: ', props);
   // console.log('from BreedDetail: ', data);

    if (data === undefined) {
        return (
            <h5>No breed was selected. Please select one.</h5>
        )
    } else {
        return (

            <div>
                <h5>{data.name}</h5>
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
        )
    }

}

export default BreedDetail;