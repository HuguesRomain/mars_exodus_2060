type Posts = {
  author: string;
  avatar?: string | undefined;
  comment?: Array<string>;
  content?: string;
  id?: number;
  date?: Date;
  images?: Array<string>;
  published?: Date;
  text?: string;
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

type Comment = {
  author?: string;
  blogPost?: string;
  content?: string;
  id?: number;
  published?: Date;
};
