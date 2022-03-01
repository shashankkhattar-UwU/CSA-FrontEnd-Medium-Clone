import React from "react";
import './TrendBox.css';

const TrendBox=({rank, article})=>{
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
    const length=Number(article.content.split("+")[1].split(" ")[0]);
    const date=new Date(article.publishedAt);
    return(

        <div className="trendBox">
        {article?(
            <div>
                <div className="rankDisplay">
                    0{rank}
                </div>
                <div className="trendingInfo">
                    <span className="trendingAuthor">
                        {article.author}
                    </span>
                    <span className="trendingTitle">
                        {article.title}
                    </span>
                    <span className="trendingDate">
                        {monthNames[date.getMonth()]} {date.getDate()} .    {Math.ceil(length/1000)} min read {length>6000?'★':""}
                    </span>
                </div>
            </div>
            )
            :
            'loading'
        }
        </div>
    )
}
export default TrendBox;