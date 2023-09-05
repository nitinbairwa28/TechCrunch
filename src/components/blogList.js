import "./BlogList.css" ;

import { Link } from "react-router-dom";
import React from "react";
import { posts } from "./constants/data";

// import {posts} from "./contacts/data";

const BlogList =()=>{
     return(
        <div className="blog-list">
            <h2>Blog Posts</h2>

            <ul>
                {posts.map((oneObj) => {
                    return(
                    <li className="blog-item">
                     <Link to={`/posts/${oneObj.id}`}>{oneObj.title}</Link>
                     </li>
                    );
                })}
            </ul>
        </div>
     );
};
export default BlogList;