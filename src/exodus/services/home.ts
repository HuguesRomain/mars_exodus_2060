type GetArticleType = {
  ["@context"]: string;
  ["@id"]: string;
  ["@type"]: string;
  ["hydra:member"]: ArticleType[];
  ["hydra:totalItems"]: number;
};

export type ArticleType = {
  ["@id"]: string;
  ["@type"]: string;
  coverImage: string;
  id: number;
  intro: string;
  sections: [];
  timeToRead: string;
  title: string;
};

type getSectionType = {
  ["@context"]: string;
  ["@id"]: string;
  ["@type"]: string;
  ["hydra:member"]: SectionType[];
  ["hydra:totalItems"]: number;
};

export type SectionType = {
  ["@id"]: string;
  ["@type"]: string;
  article: string;
  doubleMedia: [];
  id: number;
  image: [];
  name: string;
  text: string[];
  title: string;
};

export const getArticles = (): Promise<GetArticleType> => {
  return fetch("https://symfony-xmt3.frb.io/api/articles", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  })
    .then((resp) => {
      return resp.json();
    })
    .catch((err) => {
      return err;
    });
};

export const getArticlesImage = (fetchedImage: any) => {
  return fetch(`https://symfony-xmt3.frb.io${fetchedImage}`, {
    headers: {
      "Content-Type": "application/image/jpeg",
    },
    method: "GET",
  })
    .then((resp) => {
      return resp.blob();
    })
    .catch((err) => {
      return err;
    });
};

export const getArticlesSection = (
  id: number | null
): Promise<getSectionType> => {
  return fetch(`https://symfony-xmt3.frb.io/api/articles/${id}/sections`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  })
    .then((resp) => {
      return resp.json();
    })
    .catch((err) => {
      return err;
    });
};
