import { useState, useEffect, useContext } from "react";
import { AppContext } from "exodus/context";

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1OTM1NTcyNjcsImV4cCI6MTU5MzU2MDg2Nywicm9sZXMiOlsiUk9MRV9XUklURVIiXSwidXNlcm5hbWUiOiIxMzQ2NTQ3In0.Rj2a5rUMLOzaA4e7EBDKLZ42qEYTfKf_2i1NWRvBraGvTgb60bZYL86ttS_vsSWB-I7_FcD4Idjqv85FHjRFKQ";

export const useGetPosts = () => {
  const [Posts, setPosts] = useState<Posts[]>([]);
  const Context = useContext(AppContext);
  const Token = Context.tokenContext;

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

/* type BlogPost = {
  blogPost: Object;
}; */

export const usePostBlog = (blogPost: string) => {
  const Context = useContext(AppContext);
  const Token = Context.tokenContext;

  useEffect(() => {
    fetch("https://symfony-xmt3.frb.io/api/blog_posts", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(blogPost),
    }).catch((err) => console.log(err));
  }, []);
};

export const useGetUser = (url: string) => {
  const [User, setUser] = useState<Posts[]>([]);
  const Context = useContext(AppContext);
  const Token = Context.tokenContext;

  useEffect(() => {
    fetch(`https://symfony-xmt3.frb.io/api${url}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setUser(resp))
      .catch((err) => console.log(err));
  }, []);

  return User;
};

export const useGetComment = (url: string) => {
  const [Comment, setComment] = useState<Comment[]>([]);
  const Context = useContext(AppContext);
  const Token = Context.tokenContext;

  useEffect(() => {
    fetch(`https://symfony-xmt3.frb.io/${url}`, {
      headers: {
        Authorization: `Bearer ${Token}`,
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setComment(resp))
      .catch((err) => console.log(err));
  });

  return Comment;
};

type PostCommentProps = {
  comment: Comment;
};

export const usePostComment = ({ comment }: PostCommentProps) => {
  const Context = useContext(AppContext);
  const Token = Context.tokenContext;

  useEffect(() => {
    fetch("https://symfony-xmt3.frb.io/api/comments", {
      headers: {
        Authorization: `Bearer ${Token}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(comment),
    })
      .then((resp) => resp.json())
      .then((resp) => (Context.tokenContext = resp))
      .catch((err) => console.log(err));
  });
};
