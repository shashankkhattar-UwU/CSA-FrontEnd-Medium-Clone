import React, {useState, useEffect} from "react";
import './Feed.css'
import './FeedCard';
import FeedCard from "./FeedCard";
import Tags from "./Tags";

const Feed = ({data})=>{
    const [Sticky, setSticky]=useState(true);
    useEffect(() => {
        function handleResize() {
          if(window.innerWidth>1016){
              setSticky(true);
          }
          else{
              setSticky(false);
          }
        }
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        }
      }, []);
    return (
        <div className="feedContainer">
            <div className={Sticky?'tagsDiv sticky': 'tagsDiv'}>
            <Tags/>
            </div>
            <div className="cardContainer">
           { data.map((article, i)=>{
                return (
                    <FeedCard key={i} article={article}/>
                )
            })}
            </div>
        </div>
    )
}

export default Feed;