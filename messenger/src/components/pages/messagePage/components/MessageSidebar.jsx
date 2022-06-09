import React from "react";

export default function MessageSidebar({ img, name }) {
  return (
    <div className="message__sidebar">
      <div className="message__sidebar-avatar">
        <img src={img} alt="" className="sidebar-avatar-img" />
      </div>
      <div className="message__sidebar-name">{name}</div>
    </div>
  );
}
