import React from 'react';
import "./HeadlineCard.css"
// import { useNavigate } from "react-router-dom"

const HeadlineCard = ({id, title, publishDate, byline, getMoreDetails}) => {
    // const navigate = useNavigate()
    return (
        <div className='headline-card'>
            <h1>{title}</h1>
            <h3>{byline}</h3>
            <p>Published: {publishDate}</p>
            <button onClick={() => getMoreDetails(id)}>More Details</button>
        </div>
    )
}

export default HeadlineCard