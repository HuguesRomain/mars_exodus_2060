type Posts = {
  author: string;
  avatar: string;
  date: Date;
  text: string;
  like: number;
  comment: Array<{
    author: string;
    avatar: string;
    date: Date;
    text: string;
  }>;
};

/* fetch("https://symfony-xmt3.frb.io/api/blog_posts", {
  headers: {
    Authorization: `Token ${test}`,
    "Content-Type": "application/json",
  },
})
  .then((resp) => resp.json())
  .catch((err) => console.log(err)); */
