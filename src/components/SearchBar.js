import React, { useState } from 'react';


// endrer til funksjoner sånn at vi får brukt 
//use State
const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');

    const onInputChange = (event) => {
        setTerm(event.target.value);
    };

    const onSubmit = (event) => {
        // stopper siden i å reloade ved enter trykk
        event.preventDefault();

        onFormSubmit(term);

};
return (
    <div className="search-bar ui segment">
        <form onSubmit={onSubmit} className="ui form">
            <div className="field">
                <label>Video Search</label>
                {/* lag kontrollert input */}
                <input 
                type="text"
                value={term}
                onChange={onInputChange}
                />
            </div>
        </form>
    </div>
);
};

export default SearchBar;