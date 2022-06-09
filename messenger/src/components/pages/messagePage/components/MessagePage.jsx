import React from "react";
import MessageContent from "./MessageContent";
import MessageSidebar from "./MessageSidebar";

const messages = [
  {
    name: "Pavel Qwe",
    img: "https://sun2.velcom-by-minsk.userapi.com/s/v1/ig2/ndzhT6nLoA_i9VXWq1hhLe019zRC4VCS96iug__GJco5GzFyBTppvZ_XxV1vXMXCN8V0VjdKJcmCCZvwhn4dKJvx.jpg?size=50x50&quality=96&crop=83,83,662,662&ava=1",
  },
  {
    name: "Pavel Qwe",
    img: "https://sun2.velcom-by-minsk.userapi.com/s/v1/ig2/ndzhT6nLoA_i9VXWq1hhLe019zRC4VCS96iug__GJco5GzFyBTppvZ_XxV1vXMXCN8V0VjdKJcmCCZvwhn4dKJvx.jpg?size=50x50&quality=96&crop=83,83,662,662&ava=1",
  },
  {
    name: "Pavel Qwe",
    img: "https://sun2.velcom-by-minsk.userapi.com/s/v1/ig2/ndzhT6nLoA_i9VXWq1hhLe019zRC4VCS96iug__GJco5GzFyBTppvZ_XxV1vXMXCN8V0VjdKJcmCCZvwhn4dKJvx.jpg?size=50x50&quality=96&crop=83,83,662,662&ava=1",
  },
];

export default function MessagePage() {
  return (
    <div className="message__page">
      <div className="message__sidebar-content">
        {messages.map((message) => {
          return <MessageSidebar img={message.img} name={message.name} />;
        })}
      </div>

      <div className="message__page-content">
        <MessageContent />
      </div>
    </div>
  );
}
