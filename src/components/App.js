import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
    render() {
        return (
            // container gjør at searchbar ikke strekker over hele siden (margin på sidene)
        <div className="ui container">
            <SearchBar />
        </div>
        );
    }
}

export default App;