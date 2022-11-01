import React from 'react';
import {useNavigate } from "react-router-dom"
// import React, {useState} from 'react';


const ArticlePage = () => {
    const navigate = useNavigate()

    return(
        <>
            <h1>Single article details go here go here</h1>
            <button onClick={()=> navigate('/home')} > Back to Headlines</button>
        </>
    )
}

export default ArticlePage