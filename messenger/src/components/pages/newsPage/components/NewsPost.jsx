import React from "react";

export default function NewsPost({ user, date, text, img }) {
  return (
    <div className="news__post">
      <div className="news__post-header">
        <div className="post-header--user">{user}</div>
        <div className="post-header--date">{date}</div>
      </div>
      <div className="news__post-content">
        <div className="post-content-img">
          <img className="news-img" src={img} alt="" />
        </div>
        <div className="post-content-text">{text}</div>
      </div>
    </div>
  );
}
