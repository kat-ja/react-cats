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
            <div>
                <form>
                    <label>Search</label>
                    <input
                        type="text"
                        value={this.state.searchTerm}
                        onChange={this.onInputChange}
                    />
                    <button className="ui button" onClick={this.onFormSubmit}>Search</button>
                </form>
                
            </div>
        )
    }
}
export default SearchBox;