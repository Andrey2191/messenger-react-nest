import React from "react";
import NewsPost from "./NewsPost";

const posts = [
  {
    user: "Andrey Dashko",
    date: "07.06.2022",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: "https://klike.net/uploads/posts/2019-05/1556945364_1.jpg",
  },
  {
    user: "Andrey Dashko",
    date: "07.06.2022",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: "https://i.pinimg.com/originals/b9/59/f1/b959f1670d2631589643575de5a782b7.jpg",
  },
  {
    user: "Andrey Dashko",
    date: "07.06.2022",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlpnx7sR693zHP7UeuKWFKVyWzOfu6eK6hHw&usqp=CAU",
  },
  {
    user: "Andrey Dashko",
    date: "07.06.2022",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: "https://klike.net/uploads/posts/2019-05/1556945364_1.jpg",
  },
];

export default function NewsPage() {
  return (
    <div className="news__page">
      {posts.map((post) => {
        return (
          <NewsPost
            user={post.user}
            date={post.date}
            text={post.text}
            img={post.img}
          />
        );
      })}
    </div>
  );
}
