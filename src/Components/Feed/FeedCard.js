import React from "react";
import './FeedCard.css'

const FeedCard = ({article})=>{
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
    const length=Number(article.content.split("+")[1].split(" ")[0]);
    const date=new Date(article.publishedAt);
    return (
        <div className="articleBox">
        {article?(
            <div className="parent">
                <div className="articleInfo">
                    <span className="articleAuthor">
                        {article.author}
                    </span>
                    <span className="articleTitle">
                        {article.title}
                    </span>
                    <span className="articleDesc">
                        {article.description}
                    </span>
                    <span className="articleDate">
                        {monthNames[date.getMonth()]} {date.getDate()} .    {Math.ceil(length/1000)} min read {length>6000?'★':""}
                        <span className="social">
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" class="lr"><path d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z" fill="#292929"></path></svg>
                        <svg class="eh el lh" width="25" height="25"><path d="M5 12.5c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41A1.93 1.93 0 0 0 7 10.5c-.55 0-1.02.2-1.41.59-.4.39-.59.86-.59 1.41zm5.62 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.03.2-1.42.59-.39.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.43.59.56 0 1.03-.2 1.42-.59.39-.39.58-.86.58-1.41 0-.55-.2-1.02-.58-1.41a1.93 1.93 0 0 0-1.42-.59c-.56 0-1.04.2-1.43.59-.39.39-.58.86-.58 1.41z" fill-rule="evenodd"></path></svg>
                        </span>
                    </span>
                </div>
                    <img className="feedImage" src={article.urlToImage} alt="No image!" width='200px' height='150px' />
            </div>
            )
            :
            'loading'
        }
        </div>
    )
}

export default FeedCard;