import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom"
import SearchBar from '../SearchBar/SearchBar';
import HeadlinesPage from '../HeadlinesPage/HeadlinesPage';
import ArticlePage from '../ArticlePage/ArticlePage';
import { fetchHeadlines } from '../../apiCalls';

const App = () => {
  const navigate = useNavigate()
  const [ topStories, setTopStories ] = useState(null)
  const [ moreDetails, setMoreDetails ] = useState(null)

  const getMoreDetails = (id) => {
    navigate('/article-details')
    const articleDetails = topStories.results.find(result => result.short_url === id)
    setMoreDetails(articleDetails)
  }

  useEffect(() => {
    fetchHeadlines()
      .then(data => setTopStories(data)
      )
  }, [ setTopStories ])

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={
          <>
            <SearchBar />
            {!topStories ? <h1>loading...</h1> :
              <HeadlinesPage
                topStories={topStories}
                getMoreDetails={getMoreDetails}
              />}
          </>
        } />
        <Route exact path='/article-details' element={
          <>
            {!moreDetails ? <h1>Loading... </h1> : <ArticlePage
              moreDetails={moreDetails}
            />}
          </>
        } />
        <Route path='*' element={
          <div>
            <h1 className='not-found'>404: Not found</h1>
            <button className='search-page' onClick={() => navigate('/')} >Back to Search Page</button>
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;
