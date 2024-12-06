import React from 'react';
import '../App.css';
import { FaArrowUp, FaArrowDown, FaCommentAlt } from 'react-icons/fa';


const Memecard = (data) => {
    console.log(data);

    const {
        title,
        author,
        url,
        ups,
        postLink
    }=data;
    
  return (
    <div className="reddit-meme-card">
      <div className="vote-section">
        <button className="upvote">
          <FaArrowUp />
        </button>
        <span>{ups}</span>
        <button className="downvote">
          <FaArrowDown />
        </button>
      </div>
      <div className="content-section">
        <h3 className="title">{title}</h3>
        <img className="image" src={url}  alt={title} />
        <p className="description">Author Name :{author} </p>
        <p className="description">Original Reddit Post :<a href={postLink}>Click Here</a> </p>
        {/* <div className="comments-section">
          <FaCommentAlt />
          <span>its so funny  Comments</span>
        </div> */}
      </div>
    </div>
  );
};

export default Memecard;
