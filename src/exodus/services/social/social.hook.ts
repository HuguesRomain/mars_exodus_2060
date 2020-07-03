import { useState, useEffect, useContext } from "react";
import { AppContext } from "exodus/context";

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1OTM3Njc2NzMsImV4cCI6MTU5MzgwMzY3Mywicm9sZXMiOlsiUk9MRV9XUklURVIiXSwidXNlcm5hbWUiOiIxMzQ2NTQ3In0.Igj0ni4-EOj8Za9IGeaNiP6tXTbhUutucwJ2shBrB_LFTqfN9PrEQr6J0t-bzqRY746EIH8gqB8ZIlNTUcEq_w";

export const getPosts = () => {
  const date = Date.now();
  return fetch("https://symfony-xmt3.frb.io/api/blog_posts", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((json) => ({
      date,
      posts: json["hydra:member"],
    }));
};

export const PostBlog = (contentPost: string) => {
  return fetch("https://symfony-xmt3.frb.io/api/blog_posts", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      title: "A new way to live in this place",
      content: contentPost,
      slug: "a-new-day",
    }),
  });
};

export const useGetUser = (url: string) => {
  const [User, setUser] = useState<User>();
  const Context = useContext(AppContext);
  const Token = Context.tokenContext;

  useEffect(() => {
    fetch(`https://symfony-xmt3.frb.io${url}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setUser(resp))
      .catch((err) => console.log(err));
  }, [url, Token]);

  return User;
};

export const useGetComment = (url: string) => {
  const [Comment, setComment] = useState<CommentBase>();
  const Context = useContext(AppContext);
  const Token = Context.tokenContext;

  useEffect(() => {
    fetch(`https://symfony-xmt3.frb.io${url}`, {
      headers: {
        Authorization: `Bearer ${Token}`,
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setComment(resp))
      .catch((err) => console.log(err));
  }, [url, Token]);

  return Comment;
};

export const PostComment = ({ newComment, postId }: PostCommentProps) => {
  return fetch("https://symfony-xmt3.frb.io/api/comments", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      content: newComment,
      blogPost: postId,
    }),
  }).then((resp) => resp.json());
};
