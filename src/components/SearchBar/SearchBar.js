import React from 'react';
// import React, {useState} from 'react';

const SearchBar = () => {

    return (
        <div>
            <form>
                <input
                    placeholder='Search Articles'
                />
                {/* <button className='search-button' disabled={}>Find</button> */}
                <button className='search-button' >Find</button>

            </form>
        </div>
    )
}

export default SearchBar