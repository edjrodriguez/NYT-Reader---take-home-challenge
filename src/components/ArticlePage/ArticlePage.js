import React from 'react';
import { useNavigate } from "react-router-dom"

const ArticlePage = ({ moreDetails }) => {
    const image = moreDetails.multimedia[0].url
    const navigate = useNavigate()
    return (
        <>
            <button onClick={() => navigate('/')}> Back to Headlines</button>
            <h1>{moreDetails.title}</h1>
            <h3>{moreDetails.byline}</h3>
            <p>{moreDetails.published_date}</p>
            <img src={`${image}`} alt="from this NYT article"/>
            <h4>{moreDetails.abstract}</h4>
            <a href={moreDetails.short_url}>Read full article</a>
        </>
    )
}

export default ArticlePage