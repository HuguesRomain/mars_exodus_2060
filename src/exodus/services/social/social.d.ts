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
