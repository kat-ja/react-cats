import React from 'react';
import catapi from '../apis/catapi';

class Breeds extends React.Component {
    state = { breeds: [] }

    getBreeds = async () => {
        const responseBreeds = await catapi.get('/breeds', {
            params: {

            }
        })
        this.setState({ breeds: responseBreeds });
    }

    componentDidMount() {
        this.getBreeds();
    }


    render() {
        let arr = [];
        
        let breedsData = this.state.breeds.data;
        //console.log(breedsData);

        for(let key in breedsData){
            arr.push(breedsData[key].name);
        } 

        return (
            <div>
                <form>
                    <select>
                        {arr.map((breedname, i) =>{
                            return <option value={breedname} key={i} >{breedname}</option>
                        })}

                    </select>
                    <input
                        type="submit"
                        value="Submit"
                    />
                </form>
            </div>
        )
    }
}





export default Breeds;