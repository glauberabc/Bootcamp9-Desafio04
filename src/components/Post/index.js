import React from "react";
import "./styles.css";

function Header({ author, date }) {
  return (
    <div className="post-header">
      <img className="avatar" src={author.avatar} />
      <div className="post-details">
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

function Comments({ comments }) {
  console.log("comments", comments);
  return (
    <div className="post-comments">
      <div className="divider" />
      {comments.map(comment => {
        return (
          <div key={comment.id} className="comment">
            <img className="avatar" src={comment.author.avatar} />
            <p>
              <span>{comment.author.name}</span>
              {comment.content}
            </p>
          </div>
        );
      })}
    </div>
  );
}

function Post({ author, date, content, comments }) {
  return (
    <div className="post">
      <Header author={author} date={date} />
      <div className="content">{content}</div>
      <Comments comments={comments} />
    </div>
  );
}

export default Post;