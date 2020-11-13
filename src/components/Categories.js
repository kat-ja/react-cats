import React from 'react';
import catapi from '../apis/catapi';

class Categories extends React.Component {
    state = { categories: [], selectedCategory: ''}

    getCategories = async () => {
        const responseCategories = await catapi.get('/categories', {
            params: {

            }
        })
        this.setState({ categories: responseCategories });
        //console.log(this.state.categories)
    }

    componentDidMount() {
        this.getCategories();
    }

    onSelectChange = event => {
        this.setState({ selectedCategory: event.target.value });
    }

   
    onSelectSubmitCateg = event => {
        event.preventDefault();
        //this.setState({ selectedCategory: event.target.value });
        this.props.onSelectSubmitCateg(this.state.selectedCategory, this.state.selectedCategoryName);
        this.setState({ selectedCategory: '' });

        // console.log('from categories, line 57', this.state.selectedCategory)
        //console.log('from categories, line 58', this.state.selectedCategoryName)
    }

    render() {
        let arr = [];
        let arrKeys = [];

        //console.log("selected category", this.state.selectedCategory);

        let categoriesData = this.state.categories.data;

        for (let key in categoriesData) {
            arr.push(categoriesData[key].name);
        }

        for (let key in categoriesData) {
            arrKeys.push(categoriesData[key].id);
        }


        return (
            <div className="card-body">
                {
                    /*To get the options for select. Api too slow to fetch them every time. How to get a new line after each option?
                    <p>
                        {arr.map((x, i) => { return `<option value="${arrKeys[i]}" key="${arrKeys[i]}">${x}</option>` })}
                    </p>
                    */
                }

               <h5 className="card-title">Search for cats by category</h5>
                <form>
                    <select className="custom-select" onChange={this.onSelectChange} value={this.state.selectedCategory}>
                        <option value="">Select option</option>
                        <option value="5" key="5">boxes</option>
                        <option value="15" key="15">clothes</option>
                        <option value="1" key="1">hats</option>
                        <option value="14" key="14">sinks</option>
                        <option value="2" key="2">space</option>
                        <option value="4" key="4">sunglasses</option>
                        <option value="7" key="7">ties</option>
                    </select>
                    <button className="btn btn-outline-secondary float-right btn-space" onClick={this.onSelectSubmitCateg}>Search</button>
                    {/* 
                    <input onClick={this.onSelectSubmitCateg} type="submit"/>
                    */}
                </form>
            </div>
        )
    }
}





export default Categories;