import { useState, useEffect, useContext } from "react";
import { AppContext } from "exodus/context";

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1OTM3MDUxNTMsImV4cCI6MTU5MzcwODc1Mywicm9sZXMiOlsiUk9MRV9XUklURVIiXSwidXNlcm5hbWUiOiIxMzQ2NTQ3In0.H9_13iH0xDxge02K7qx7aqK4ex2dvCQUlkKXsyzWlDr8he_KmChLkxkmTt2aF1j0zB6Tk486XE0e6jZVIbOp9Q";
export const useGetPosts = () => {
  const [Posts, setPosts] = useState<Posts[]>([]);
  /* const Context = useContext(AppContext);
  const Token = Context.tokenContext; */

  useEffect(() => {
    fetch("https://symfony-xmt3.frb.io/api/blog_posts", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setPosts(resp))
      .catch((err) => console.log(err));
  }, []);

  return Posts;
};

export const PostBlog = (contentPost: string) => {
  fetch("https://symfony-xmt3.frb.io/api/blog_posts", {
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
  }).catch((err) => console.log(err));
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

export const useGetComment = (url?: string | CommentBase) => {
  const [Comment, setComment] = useState<CommentBase>();
  const Context = useContext(AppContext);
  const Token = Context.tokenContext;

  useEffect(() => {
    if (typeof url === "object") {
      setComment(url);
      return;
    }
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
  fetch("https://symfony-xmt3.frb.io/api/comments", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      content: newComment,
      blogPost: postId,
    }),
  })
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
};
