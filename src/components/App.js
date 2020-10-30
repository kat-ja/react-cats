import React from 'react';
import SearchBox from './SearchBox';
import catapi from '../apis/catapi';
import Breeds from './Breeds';

class App extends React.Component {

    state = { cats: [] }

    onTermSubmit = async searchTerm => {
        console.log('from app', searchTerm);

        const response = await catapi.get('/images/search', {
            params: {
                q: searchTerm,
                limit: 10
            }
        })
        console.log(response);
    }




    render() {

        return (
            <div className="ui stackable three column grid">
                
                <div className="column">
                    <SearchBox onFormSubmit={this.onTermSubmit} />
                    <Breeds getBreeds={this.getBreeds} breeds={this.state.breeds} />
                </div>
                <div className="column">
                    
                </div>
                <div className="column">
                    
                </div>
            </div>
        );
    }
}
export default App;