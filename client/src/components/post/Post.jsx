import "./post.css";
import { Link } from "react-router-dom";

import React, { useState } from "react";

const ReadMore = ({ children }) => {
  const post = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="postDesc">
      {isReadMore ? post.desc.slice(0, 100) : post.desc}
      <Link to={"/post/"+ post._id} className="link">
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "..Read More" : post.desc}
      </span>
      </Link>
    </p>
  );
};
 
export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p>
        <ReadMore>
        {post}
        </ReadMore>
      </p>
    </div>
  );
}
