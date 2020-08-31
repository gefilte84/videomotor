import React from 'react';

class SearchBar extends React.Component {
    // initierer state
    state = { term: '' };

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        {/* lag kontrollert input */}
                        <input type="text" value={this.state.term} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;