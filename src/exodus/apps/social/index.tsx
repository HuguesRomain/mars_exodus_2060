import React, { useState } from "react";
import { PostItem } from "./organismes/PostItem";

const postes = [
  {
    author: "Ada Lovelace",
    avatar:
      "https://vignette.wikia.nocookie.net/fallout/images/c/c0/VaultBoyFO3.png/revision/latest?cb=20110809182235",
    date: new Date("2020-06-23T00:00:00"),
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ligula nunc nunc massa nibh eu.",
    like: 3,
    comment: [
      {
        author: "Eddy Saturn",
        date: new Date("2020-06-23T00:00:00"),
        text: "ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  },
];

const SocialApp = () => {
  const [posts, setposts] = useState<Posts[]>(postes);
  return (
    <main>
      <ul>
        {posts &&
          posts.map((value) => {
            return <PostItem key={value.like} posts={value} />;
          })}
      </ul>
    </main>
  );
};

export default SocialApp;
