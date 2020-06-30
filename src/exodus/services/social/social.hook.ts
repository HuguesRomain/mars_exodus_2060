import { useState, useEffect, useContext } from "react";
import { AppContext } from "exodus/context";

export const useBlogPost = () => {
  const [BlogPost, setBlogPost] = useState<Posts[]>([]);
  const Context = useContext(AppContext);
  const Token = Context.tokenContext;

  useEffect(() => {
    fetch("https://symfony-xmt3.frb.io/api/blog_posts", {
      headers: {
        Authorization: `Bearer ${Token}`,
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setBlogPost(resp))
      .catch((err) => console.log(err));
  });

  return BlogPost;
};

type CommentProps = {
  url: string;
};

export const useComment = ({ url }: CommentProps) => {
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
  comment: CommentProps;
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
