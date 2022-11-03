import React, { useState } from 'react';
// import React, {useState} from 'react';

const SearchBar = ({ filterArticles }) => {
    const [ userSearch, setUserSearch ] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        let updateUserSearch = userSearch.toLowerCase()
        filterArticles(updateUserSearch)
        clearInput()
    }

    const clearInput = () => {
        setUserSearch("")
    }

    return (
        <div className='search-bar'>
            <form className='search-box' onSubmit={(event) => handleSubmit(event)}>
                <input
                    placeholder='Search Articles'
                    className='search-bar'
                    name='userSearch'
                    value={userSearch}
                    onChange={(event) => setUserSearch(event.target.value)}
                />
                {/* <button className='search-button' disabled={}>Find</button> */}
                <button className='search-button' disabled={!userSearch}>Find Articles</button>

            </form>
        </div>
    )
}

export default SearchBar