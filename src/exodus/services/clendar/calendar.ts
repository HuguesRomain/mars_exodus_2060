export const GetCalendar = () => {
  return fetch("https://symfony-xmt3.frb.io/api/calendars").then((resp) =>
    resp.json().then((resp) => resp["hydra:member"]),
  );
};
