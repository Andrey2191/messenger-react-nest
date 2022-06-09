import React from "react";

const user = {
  name: "Andrey Dashko",
  country: "Belarus",
  city: "Minsk",
  age: "21",
  phone: "+375447140218",
  img: "https://sun2.velcom-by-minsk.userapi.com/s/v1/ig2/ndzhT6nLoA_i9VXWq1hhLe019zRC4VCS96iug__GJco5GzFyBTppvZ_XxV1vXMXCN8V0VjdKJcmCCZvwhn4dKJvx.jpg?size=50x50&quality=96&crop=83,83,662,662&ava=1",
};

export default function ProfilePage() {
  return (
    <div className="profile__page">
      <div className="profile__page-header">
        <div className="profile__page-avatar">
          <img src={user.img} alt="" />
        </div>
        <div className="profile__page-name">{user.name}</div>
      </div>
      <div className="profile__page-subtitle">
        <ul className="profile__page-subtitle-info">
          <li>Age:{user.age}</li>
          <li>Country:{user.country}</li>
          <li>City:{user.city}</li>
          <li>Phone number:{user.phone}</li>
        </ul>
      </div>
    </div>
  );
}
