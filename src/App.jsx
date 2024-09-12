// import './App.css';
import React, {useState} from 'react';
import { NavBar } from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import dotenv from 'dotenv'
export default function App() {
  document.title = "Breaking News"

  const ApiKey = import.meta.env.VITE_REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(10);


  const setProcess = (ele) => {
    setProgress(ele); 
  };
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <LoadingBar
          color='#f11946'
          progress= {progress}

        />
        <Routes>
          <Route path='/'element              = {<News setProcess={setProcess} ApiKey = {ApiKey} key="general" totalResults={5} category={"general"} />}/>
          <Route path='/business'element      = {<News setProcess={setProcess} ApiKey = {ApiKey} totalResults={5} category={"business"} />}/>
          <Route path='/entertainment'element = {<News setProcess={setProcess} ApiKey = {ApiKey} totalResults={5} category={"entertainment"} />}/>
          <Route path='/health'element        = {<News setProcess={setProcess} ApiKey = {ApiKey} key ="health" totalResults={5} category={"health"} />}/>
          <Route path='/science'element       = {<News setProcess={setProcess} ApiKey = {ApiKey} key ="science" totalResults={5} category={"science"} />}/>
          <Route path='/sports'element        = {<News setProcess={setProcess} ApiKey = {ApiKey} key ="sports" totalResults={5} category={"sports"} />}/>
          <Route path='/technology'element    = {<News setProcess={setProcess} ApiKey = {ApiKey} key ="technology" totalResults={5} category={"technology"} />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
