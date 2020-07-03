export const getArticles = (): Promise<any> => {
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
