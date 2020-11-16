import React from 'react';
import CatItem from './CatItem';

const BreedDetail = ({ data, dataImages }) => {


    console.log('from BreedDetail: ', dataImages.data);
    let renderedList = [];

    // checking if not undefined is a workaround, first is undefined, the not and can be consolelogged, not CLEAR WHY!
    if (dataImages.data !== undefined) {
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

    if (data === undefined || dataImages.data === undefined) {
        return (
            <h5>No breed was selected. Please select one.</h5>
        )
    } else {
        return (
            <div className="container">
                <div className="row">
                <div className="col-4">
                        <h5>{data.name}</h5>
                        <a href={data.wikipedia_url} target="_blank" className="badge badge-secondary">Wikipedia</a>
                        <br />
                        <br />
                        <p><strong>Description:</strong> <br /> {data.description}</p>
                        <p><strong>Temperament:</strong> <br /> {data.temperament}</p>
                        <p><strong>Origin:</strong> {data.origin}</p>
                        <p><strong>Intelligence:</strong> {data.intelligence}</p>
                        <p><strong>Adaptability:</strong> {data.adaptability}</p>
                        <p><strong>Affection level:</strong> {data.affection_level}</p>
                        <p><strong>Child friendly:</strong> {data.child_friendly}</p>
                        <p><strong>Dog friendly:</strong> {data.dog_friendly}</p>
                        <p><strong>Energy level:</strong> {data.energy_level}</p>
                        <p><strong>Health issues:</strong> {data.health_issues}</p>
                        <p><strong>Indoor:</strong> {data.indoor}</p>
                        <p><strong>Rare:</strong> {data.rare}</p>
                        <p><strong>Social needs:</strong> {data.social_needs}</p>
                        <p><strong>Stranger friendly:</strong> {data.stranger_friendly}</p>
                        <p><strong>Vocalisation:</strong> {data.vocalisation}</p>
                        <p><strong>Shedding:</strong> {data.shedding_level}</p>
                        <p><strong>Alternative names:</strong> {data.alt_names==='' ? 'none' : data.alt_names} </p>
                        <p><strong>Weight:</strong> {data.weight.metric} kg</p>
                        <p><strong>Life expectancy:</strong> {data.life_span}</p>
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