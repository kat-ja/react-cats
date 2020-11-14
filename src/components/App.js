import React from 'react';
import './css/SearchBox.css';

import SearchBox from './SearchBox';
import catapi from '../apis/catapi';
import Breeds from './Breeds';
import CatList from './CatList';
import BreedDetail from './BreedDetail';
import Categories from './Categories';
import CategoryList from './CategoryList';


class App extends React.Component {

    state = {
        cats: [],
        catlist: false,
        breed: [],
        breedId: '',
        breeddetail: false,
        breedImages: [],
        selectedcategory: '',
        selectedCategoryName: 'boxes',
        categorized: [],
        categorydetail: false,
        mode: 'none'
    }

    onTermSubmit = async searchTerm => {

        const response = await catapi.get('/images/search', {
            params: {
                q: searchTerm,
                limit: 30
            }
        })
        this.setState({
            cats: response.data,
            catlist: true,
            mode: 'catlist'
        });
    }

    // default search for first view
    componentDidMount() {
        this.onTermSubmit('cat');
        this.setState({ catlist: true });
    }

    onSelectSubmit = async (selectedBreed) => {

        console.log('from app', selectedBreed);
       // console.log('from app', selectedBreedId);

        const responseBreed = await catapi.get('/breeds/search', {
            params: {
                q: selectedBreed
            }
        })
        /*
        const responseBreedImages = await catapi.get('/images/search', {
            params: {
                breed_id: selectedBreedId,
                limit: 30
            }
        })
        */
        this.setState({
            breed: responseBreed.data[0],
            breedId: responseBreed.data[0].id,
            breeddetail: true,
            mode: 'breeddetail',
           // breedImages: responseBreedImages
        });

        
        console.log('from app', this.state.breedId);
        //this.getBreedImages();
    }

    getBreedId = () => {
        console.log("XXXXXXXXXX", this.state.breed.id);
        return this.state.breed.id;
    }
    
    /*
    getBreedImages = () => {
        const id = this.getBreedId();
        console.log("yyyyyy",id);
    }
    */
    onSelectSubmitId = async selectedBreedId => {
        console.log('from app', selectedBreedId);
        const responseBreedImages = await catapi.get('/images/search', {
            params: {
                breed_id: selectedBreedId,
                limit: 30
            }
        })
        console.log("SELECTED BREED FOR IMAGES", this.state.selectedBreed);
        this.setState({ breedImages: responseBreedImages });
        console.log("BREEDIMAGES", this.state.breedImages);
    }
    

    onSelectSubmitCateg = async selectedCategory => {
        // console.log('from app', selectedCategory);
        const responseCategory = await catapi.get('/images/search', {
            params: {
                limit: 30,
                category_ids: selectedCategory
            }
        })

        let categorizedArr = [];
        for (let i = 0; i < 30; i++) {
            categorizedArr.push(responseCategory.data[i].url);
        }

        this.setState({
            selectedcategory: selectedCategory,
            categorized: categorizedArr,
            categorydetail: true,
            mode: 'categorylist'
        });

        switch (this.state.selectedcategory) {
            case '5':
                this.setState({ selectedCategoryName: 'boxes' });
                break;
            case '15':
                this.setState({ selectedCategoryName: 'clothes' });
                break;
            case '1':
                this.setState({ selectedCategoryName: 'hats' });
                break;
            case '14':
                this.setState({ selectedCategoryName: 'sinks' });
                break;
            case '2':
                this.setState({ selectedCategoryName: 'space' });
                break;
            case '4':
                this.setState({ selectedCategoryName: 'sunglasses' });
                break;
            case '7':
                this.setState({ selectedCategoryName: 'ties' });
                break;
            default:
                this.setState({ selectedCategoryName: 'no category' });
        }
        //console.log('from App', this.state.selectedCategoryName)

    }

    renderCatList() {
        if (this.state.mode === 'catlist') {
            return (
                <div>
                    <CatList data={this.state.cats} catlist={this.state.catlist} />
                </div>
            )
        } else {
            return null;
        }
    }

    renderBreedDetail() {
        if (this.state.mode === 'breeddetail') {
            return (
                <BreedDetail
                    data={this.state.breed}
                    dataImages = {this.state.breedImages}
                    onSelectSubmit={this.onSelectSubmit}
                    onSelectSubmitId={this.onSelectSubmitId}
                    breeddetail={this.state.breeddetail}
                    //getBreedImages={()=>this.getBreedImages}
                />
            )
        } else {
            return null;
        }
    }

    renderCategoryList() {
        if (this.state.mode === 'categorylist') {
            return (
                <CategoryList
                    categorized={this.state.categorized}
                    categoryname={this.state.selectedCategoryName}
                />
            )
        } else {
            return null;
        }
    }




    render() {
        
            
        return (
            <div className="container">
                <div className="display-4 text-center mt-5 mb-3">Cats from TheCatApi</div>
                <div className="card-columns">
                    <div className="card  greyish">
                        <SearchBox onFormSubmit={this.onTermSubmit} />
                    </div>
                    <div className="card greyish">
                        <Breeds
                            getBreeds={this.getBreeds}
                            breeds={this.state.breeds}
                            onSelectSubmit={this.onSelectSubmit}
                            onSelectSubmitId={this.onSelectSubmitId}
                            
                        />
                    </div>
                    <div className="card greyish">
                        <Categories 
                            getCategories={this.getCategories} 
                            categories={this.state.categories} 
                            onSelectSubmitCateg={this.onSelectSubmitCateg} 
                        />
                    </div>

                </div>


                {/* conditional rendering */}
                <div>
                    {this.renderCatList()}
                </div>
                <div>
                    {this.renderBreedDetail()}
                </div>
                <div>
                    {this.renderCategoryList()}
                </div>
            </div>

        );
    }
}
export default App;