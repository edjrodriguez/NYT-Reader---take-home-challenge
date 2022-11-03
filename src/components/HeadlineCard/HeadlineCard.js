import React from 'react';
import "./HeadlineCard.css"

const HeadlineCard = ({ id, title, publishDate, byline, getMoreDetails }) => {
    return (
        <div className='headline-card'>
            <h1>{title}</h1>
            <h2>{byline}</h2>
            <p>Published: {publishDate}</p>
            <button className='more-details-button' onClick={() => getMoreDetails(id)}>More Details</button>
        </div>
    )
}

export default HeadlineCard