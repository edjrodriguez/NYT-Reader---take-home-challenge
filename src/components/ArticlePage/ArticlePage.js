import React from 'react';
import { useNavigate } from "react-router-dom"

const ArticlePage = ({ moreDetails }) => {
    const image = moreDetails.multimedia[ 0 ].url
    const navigate = useNavigate()
    return (
        <div className='article-details'>
            <button className='back-button' onClick={() => navigate('/')}> Back to Headlines</button>
            <h1>{moreDetails.title}</h1>
            <h2>{moreDetails.byline}</h2>
            <p>{moreDetails.published_date}</p>
            <img src={`${image}`} alt="from this NYT article" />
            <h3>{moreDetails.abstract}</h3>
            <a href={moreDetails.short_url}>Read full article</a>
        </div>
    )
}

export default ArticlePage