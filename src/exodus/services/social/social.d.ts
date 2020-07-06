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

type UserType = {
  avatar?: string | undefined;
  comment?: Array<string>;
  id?: number;
  name: string;
  posts?: Array<string>;
  profilePicture?: string;
};

type UserInfoType = {
  age?: string;
  birthDate?: string;
  birthPlace?: string;
  firstName?: string;
  username: string;
  name?: string;
  height?: string;
  profilePicture?: string;
  ticketUrl?: string;
  work?: string;
  weight?: string;
  hairColor?: string;
  eyeColor?: string;
};

type Login = {
  username: string;
  password: string;
};

type CommentBaseType = {
  author?: string;
  avatar?: string;
  published?: Date | string;
  content?: string;
};

type PostCommentProps = {
  newComment: string;
  postId?: string;
};
