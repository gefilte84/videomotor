import React, { useState } from 'react';

const SearchBar = () => {

};

class SearchBar extends React.Component {
    // initierer state
    state = { term: ''};

    onInputChange = event => {
        this.setState({ term: event.target.value})
    };

    onFormSubmit = event => {
        // stopper siden i å reloade ved enter trykk
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);

        // TODO: husk å call
        // callback fra parent komponent
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        {/* lag kontrollert input */}
                        <input type="text"
                        value={this.state.term}
                        onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;