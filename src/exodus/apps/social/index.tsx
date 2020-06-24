import React, { useState } from "react";
import { PostItem } from "./organismes/PostItem";
import { SendComment } from "./organismes/SendComment";

const postes = [
  {
    author: "Julien Verite",
    avatar: "https://pbs.twimg.com/media/EapZFw1XgAA1LEW?format=jpg&name=small",
    date: new Date("2020-06-23T00:00:00"),
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ligula nunc nunc massa nibh eu.",
    like: 3,
    comment: [
      {
        author: "Sezer Celik",
        avatar:
          "https://media-exp1.licdn.com/dms/image/C5603AQHhfdZN6P5jBA/profile-displayphoto-shrink_200_200/0?e=1597276800&v=beta&t=A6ymlRiTyS0ieUQ3Dvbzi5oOf4l-0Jiw3CBeqqPoo_w",
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
      <SendComment setposts={setposts} posts={posts} />
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
