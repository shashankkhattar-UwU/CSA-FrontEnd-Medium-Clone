import React from "react";
import './Tags.css';

const Tags=()=>{
    return (
        <div className="tagsParent">
            <span className="tagsHeading">
             DISCOVER MORE OF WHAT MATTERS TO YOU
            </span>
            <div className="allTags">
                <article className="oneTag tagOnly">Self</article>
                <article className="oneTag tagOnly">Relationships</article>
                <article className="oneTag tagOnly">Data Science</article>
                <article className="oneTag tagOnly">Programming</article>
                <article className="oneTag tagOnly">Productivity</article>
                <article className="oneTag tagOnly">Javascript</article>
                <article className="oneTag tagOnly">Machine Learning</article>
                <article className="oneTag tagOnly">Politics</article>
                <article className="oneTag tagOnly">Health</article>
            </div>
            <footer className="footer">
                <article className="oneTag">Help</article>
                <article className="oneTag">Status</article>
                <article className="oneTag">Writers</article>
                <article className="oneTag">Blog</article>
                <article className="oneTag">Careers</article>
                <article className="oneTag">Privacy</article>
                <article className="oneTag">Terms</article>
                <article className="oneTag">About</article>
                <article className="oneTag">Knowable</article>
                
            </footer>
        </div>
    )
}
export default Tags;