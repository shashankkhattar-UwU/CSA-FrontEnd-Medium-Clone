import React, {useState, useEffect} from 'react';
import './App.css';
import tachyons from 'tachyons';
import './Components/SecondBox/SecondBox';
import './Components/Trending/Trending'
import Navbar from './Components/Navbar/Navbar';
import SecondBox from './Components/SecondBox/SecondBox';
import Trending from './Components/Trending/Trending';
import Feed from './Components/Feed/Feed';

function App() {
  const [articles, setArticles]=useState([]);
  useEffect(()=>{
    fetch('https://newsapi.org/v2/everything?q=keyword&apiKey=9d7ed3cc50794d69804ac36644b52470')
    .then(response=>response.json())
    .then(response=>response.articles)
    .then(news=>{
      // console.log(news);
      setArticles(news);
    })

  }, [])
  // findNews();
  return (
    <div className="App">
      <Navbar/>
      <SecondBox/>
      <Trending data={articles.slice(6,12)} />
      <hr className='trendingLine' />
      <Feed data={articles.slice(6, 20)}/>
    </div>
  );
}

export default App;
