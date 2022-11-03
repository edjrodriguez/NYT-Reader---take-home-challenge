import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom"
import SearchBar from '../SearchBar/SearchBar';
import HeadlinesPage from '../HeadlinesPage/HeadlinesPage';
import ArticlePage from '../ArticlePage/ArticlePage';
import SearchPage from '../SearchPage/SearchPage';
import { fetchHeadlines } from '../../apiCalls';

const App = () => {
  const navigate = useNavigate()
  const [ topStories, setTopStories ] = useState(null)
  const [ filteredStories, setFilteredStories ] = useState(null)
  const [ moreDetails, setMoreDetails ] = useState(null)

  const getMoreDetails = (id) => {
    const articleDetails = topStories.results.find(result => result.short_url === id)
    setMoreDetails(articleDetails)
    navigate('/article-details')
  }

  const filterArticles = (userSearch) => {
    const searched = topStories.results.filter(result => result.title.toLowerCase().includes(userSearch))
    setFilteredStories(searched)
    navigate('/search')
  }

  useEffect(() => {
    fetchHeadlines()
      .then(data => setTopStories(data)
      )
  }, [ setTopStories ])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <>
            <h1>New York Times - Today's Top Stories</h1>
            <SearchBar
              filterArticles={filterArticles}
            />
            {!topStories ? <h1>loading...</h1> :
              <HeadlinesPage
                topStories={topStories}
                getMoreDetails={getMoreDetails}
              />}
          </>
        } />
        <Route path='/article-details' element={
          <>
            <h1>From Today's Top Stories</h1>
            {!moreDetails ? <h1>Loading... </h1> : <ArticlePage
              moreDetails={moreDetails}
            />}
          </>
        } />
        <Route path='/search' element={
          <>
            <SearchPage
              filteredStories={filteredStories}
              getMoreDetails={getMoreDetails}
            />
            <button className='search-page' onClick={() => navigate('/')} >Back to Headlines</button>
          </>

        } />


        <Route path='*' element={
          <div>
            <h1 className='not-found'>404: Not found</h1>
            <button className='search-page' onClick={() => navigate('/')} >Back to Headlines</button>
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;
