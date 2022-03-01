import React from "react";
import './Trending.css';
import TrendBox from "./TrendBox";



const Trending=({data})=>{
    return(
        <div className="trendContainer">
            <h5 className="trendingHeading">
                <img src="https://media.istockphoto.com/vectors/circle-statistic-grid-rising-up-symbol-design-vector-id1002577032" alt="trending" style={{width: '30px', height: '30px'}}/>
                TRENDING ON MEDIUM
            </h5>
        <div className="mainTrend">
            {
                data.map((article, i)=>{
                    return(
                        <TrendBox key={i} rank={i+1} article={article} />
                    )
                })
            }
            {/* <TrendBox article={data[0]}/> */}
         </div>
        </div>
    )
}
export default Trending;