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
    text: stiring;
  }>;
};
