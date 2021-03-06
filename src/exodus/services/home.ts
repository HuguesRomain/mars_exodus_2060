type GetArticlesType = {
  ["@context"]: string;
  ["@id"]: string;
  ["@type"]: string;
  ["hydra:member"]: ArticleType[];
  ["hydra:totalItems"]: number;
};

type GetSectionType = {
  ["@context"]: string;
  ["@id"]: string;
  ["@type"]: string;
  ["hydra:member"]: SectionType[];
  ["hydra:totalItems"]: number;
};

type GetPlacesType = {
  ["@context"]: string;
  ["@id"]: string;
  ["@type"]: string;
  ["hydra:member"]: PlaceType[];
  ["hydra:totalItems"]: number;
};

type GetTimeEventType = {
  ["@context"]: string;
  ["@id"]: string;
  ["@type"]: string;
  ["hydra:member"]: TimeEventType[];
  ["hydra:totalItems"]: number;
};

export type ArticleType = {
  ["@id"]: string;
  ["@type"]: string;
  coverImage: string;
  id: number;
  intro: string;
  sections: string[];
  timeToRead: string;
  title: string;
};

export type PlaceType = {
  ["@id"]: string;
  ["@type"]: string;
  Category: string;
  CoverImage: string;
  DoubleMedia: string[];
  PlaceName: string;
  Text: string[];
  id: number;
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

export type TimeEventType = {
  ["@context"]: string;
  ["@id"]: string;
  ["@type"]: string;
  id: number;
  title: string;
  text: string;
  picture: string;
  buttonLabel: string;
  buttonUrl: string;
  Date: string;
};

export const getArticles = (): Promise<GetArticlesType> => {
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

export const getArticlesSection = (
  id: number | null
): Promise<GetSectionType> => {
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

export const getPlaces = (): Promise<GetPlacesType> => {
  return fetch("https://symfony-xmt3.frb.io/api/lieus", {
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

export const getTimeEvent = (): Promise<GetTimeEventType> => {
  return fetch(`https://symfony-xmt3.frb.io/api/time_events`, {
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

export const getMarsWeather = (): Promise<any> => {
  return fetch("https://symfony-xmt3.frb.io/api/weather", {
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

export const getDailyImage = (): Promise<any> => {
  return fetch("https://symfony-xmt3.frb.io/api/picture-day", {
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
