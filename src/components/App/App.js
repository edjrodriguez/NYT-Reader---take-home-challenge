import './App.css';
import React from 'react';
// import React, {useState} from 'react';
import { Routes, Route, useNavigate } from "react-router-dom"
import SearchBar from '../SearchBar/SearchBar';
import HeadlinesPage from '../HeadlinesPage/HeadlinesPage';
import ArticlePage from '../ArticlePage/ArticlePage';


const App = () => {
  const navigate = useNavigate()


  return (
    <div className="App">
      <Routes>
        <Route exact path='/home' element={
          <>
            <SearchBar
            />
            <HeadlinesPage />
          </>
        } />
        <Route exact path='/details' element={
            <ArticlePage />
        } />
        <Route path='*' element={
          <div>
            <h1 className='not-found'>404: Not found</h1>
            <button className='search-page' onClick={() => navigate('/home')} >Back to Search Page</button>
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;
