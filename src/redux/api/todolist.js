import http from "helpers/http";
const baseUrl = process.env.REACT_APP_BASEURL_API;

export const List = async () => {
  const fetch = await http.get(baseUrl + "hanabyan/todo/1.0.0/to-do-list");
  return fetch.data;
};
