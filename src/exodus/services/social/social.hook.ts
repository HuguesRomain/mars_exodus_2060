import { useState, useEffect, useContext } from "react";
import { AppContext } from "exodus/context";

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1OTM3MjY5MjQsImV4cCI6MTU5Mzc2MjkyNCwicm9sZXMiOlsiUk9MRV9XUklURVIiXSwidXNlcm5hbWUiOiIxMzQ2NTQ3In0.cNmJFszDmBvG_TtdY93M0V093DsYM3w5XqtWjZ-9nlskOq_lWEivzeVw3f0vFUkQVIXoPwlKz5dzzAyeLve_Jw";
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
