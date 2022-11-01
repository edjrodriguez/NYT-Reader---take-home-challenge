import './App.css';
import React, {useState, useEffect} from 'react';
import { Routes, Route, useNavigate } from "react-router-dom"
import SearchBar from '../SearchBar/SearchBar';
import HeadlinesPage from '../HeadlinesPage/HeadlinesPage';
import ArticlePage from '../ArticlePage/ArticlePage';
import { fetchHeadlines } from '../../apiCalls';

const App = () => {
  const navigate = useNavigate()
  const [ topStories, setTopStories ] = useState({})

useEffect(()=>{
  fetchHeadlines()
  .then(data => setTopStories(data)
  )
}, [])

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
