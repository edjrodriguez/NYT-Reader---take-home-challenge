import React from 'react';
import { useNavigate } from "react-router-dom"
import ArticleCard from '../ArticleCard/ArticleCard';

const ArticlePage = () => {
    const navigate = useNavigate()

    return (
        <>
            <ArticleCard />
            <button onClick={() => navigate('/home')}> Back to Headlines</button>
        </>
    )
}

export default ArticlePage