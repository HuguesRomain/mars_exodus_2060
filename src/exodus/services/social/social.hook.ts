import { useState, useEffect } from "react";
import { TokenStorage } from "exodus/utils/accessStorage";

export const getPosts = () => {
  const date = Date.now();
  return fetch("https://symfony-xmt3.frb.io/api/blog_posts", {
    headers: {
      Authorization: `Bearer ${TokenStorage()}`,
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((json) => ({
      date,
      posts: json["hydra:member"],
    }));
};

export const PostBlog = (contentPost: string, image?: string) => {
  let urlImage = `/api/images/${image}`;
  return fetch("https://symfony-xmt3.frb.io/api/blog_posts", {
    headers: {
      Authorization: `Bearer ${TokenStorage()}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      title: "A new way to live in this place",
      content: contentPost,
      slug: "a-new-day",
      images: image ? [urlImage] : [],
    }),
  });
};

export const GetImage = (url: string | undefined) => {
  return fetch(`https://symfony-xmt3.frb.io${url}`)
    .then((resp) => resp.json())
    .then((json) => `https://symfony-xmt3.frb.io${json.url}`);
};

export const PostImage = (file: any) => {
  return fetch("https://symfony-xmt3.frb.io/api/images", {
    headers: {
      Authorization: `Bearer ${TokenStorage()}`,
    },
    method: "POST",
    body: file,
  }).then((resp) => resp.json());
};

export const GetUser = (url: string | undefined) => {
  return fetch(`https://symfony-xmt3.frb.io${url}`, {
    headers: {
      Authorization: `Bearer ${TokenStorage()}`,
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((resp) => resp)
    .catch((err) => console.log(err));
};

export const GetUserByName = (url: string | null) => {
  return fetch(`https://symfony-xmt3.frb.io/api/users/${url}`, {
    headers: {
      Authorization: `Bearer ${TokenStorage()}`,
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((resp) => resp);
};

export const useGetComment = (url: string) => {
  const [Comment, setComment] = useState<CommentBaseType>();

  useEffect(() => {
    fetch(`https://symfony-xmt3.frb.io${url}`, {
      headers: {
        Authorization: `Bearer ${TokenStorage()}`,
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setComment(resp))
      .catch((err) => console.log(err));
  }, [url]);

  return Comment;
};

export const PostComment = ({ newComment, postId }: PostCommentProps) => {
  return fetch("https://symfony-xmt3.frb.io/api/comments", {
    headers: {
      Authorization: `Bearer ${TokenStorage()}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      content: newComment,
      blogPost: postId,
    }),
  }).then((resp) => resp.json());
};
