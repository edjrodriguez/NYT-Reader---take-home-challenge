import React from 'react';
import SearchedCard from '../../SearchedCard/SearchedCard';
import { useNavigate } from "react-router-dom"
import { v4 as uuidV4 } from "uuid";

const SearchPage = ({ filteredStories, getMoreDetails }) => {
    const navigate = useNavigate()
    const headlines = filteredStories.map(result => {
        return (
            <SearchedCard
                key={uuidV4()}
                id={result.short_url}
                title={result.title}
                publishDate={result.published_date}
                byline={result.byline}
                getMoreDetails={getMoreDetails}
            />
        )
    })

    return (
        <div className='headline-container'>
            <button onClick={() => navigate('/')}> Back to Headlines</button>

            {headlines}
        </div>

    )
}

export default SearchPage