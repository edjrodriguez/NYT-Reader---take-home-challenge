import React from 'react';
// import React, {useState} from 'react';
import HeadlineCard from '../HeadlineCard/HeadlineCard';
import { v4 as uuidV4 } from "uuid";

const HeadlinesPage = ({ topStories }) => {
    console.log(topStories)
    const headlines = topStories.results.map(result => {
        return (
            <HeadlineCard
                key={uuidV4()}
                title={result.title}
                publishDate={result.published_date}
                byline={result.byline}
            />
        )
    })

    return (
        <div className='headline-container'>
            {headlines}
        </div>

    )
}

export default HeadlinesPage