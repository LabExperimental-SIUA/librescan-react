import { Observable } from 'rxjs';
const BASE_URL = "/api";
const SERVER_URL = "http://localhost:8080";

const getJson = (method, url, body = {}) => {
  const requestSettings = {
    url:`${SERVER_URL}${BASE_URL}${url}`,
    crossDomain: true,
    responseType:'json',
    method,
    body,
  };

  return Observable.ajax(requestSettings);
};


export const projects = () => {
  return getJson("GET", "/projects");
};
