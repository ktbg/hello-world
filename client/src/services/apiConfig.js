// this file's purpose is to have a dynamic way to change the URL from dev to production so we don't have to do it manually before we git add and push
import axios from "axios";

let apiUrl;

// you'll want to deploy back end api to heroku to get this information
const apiUrls = {
  production: "https://sei-products-api.herokuapp.com/api",
  development: "http://localhost:3000/",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

// axios library has a method called create that accepts "baseURL" as a key in this syntax
const api = axios.create({
  baseURL: apiUrl,
});

export default api;
