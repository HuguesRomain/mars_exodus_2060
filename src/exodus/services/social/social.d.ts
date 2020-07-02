type Posts = {
  author: string;
  avatar?: string | undefined;
  comments?: Array<string>;
  content?: string;
  id?: number;
  date?: Date;
  images?: Array<string>;
  published?: Date | number;
  text?: string;
  "@id"?: string;
};

type User = {
  avatar?: string | undefined;
  comment?: Array<string>;
  id?: number;
  name: string;
  posts?: Array<string>;
};

type Login = {
  username: string;
  password: string;
};

type CommentBase = {
  author?: string;
  avatar?: string;
  published?: Date | string;
  content?: string;
};

type PostCommentProps = {
  newComment: string;
  postId?: string;
};
