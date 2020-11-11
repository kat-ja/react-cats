import React from 'react';


class SearchBox extends React.Component {
    state = { searchTerm: '' };

    onInputChange = (event) => {
        this.setState({ searchTerm: event.target.value });
        //console.log(this.state.searchTerm)

    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.searchTerm);
        this.setState({searchTerm: ''});
    }

    render() {
        return (
            <div className="card-body">
                <h5 className="card-title">Search for cats</h5>
                <form>
                    
                    <input className="form-control"
                        type="text"
                        value={this.state.searchTerm}
                        onChange={this.onInputChange}
                    />
                    <button className="btn btn-outline-secondary float-right btn-space" onClick={this.onFormSubmit}>Search</button>
                </form>
                
            </div>
        )
    }
}
export default SearchBox;