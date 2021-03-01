import axios from "axios";

const API = axios.create({ baseURL: "http://192.168.0.108:3001" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("tasksToken")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("tasksToken")).token
    }`;
  }

  return req;
});
export const fetch = () => API.get("/tasks/fetch");
export const create = (formData) => API.post("/tasks/create", formData);
export const strike = (formData) => API.patch("/tasks/strike", formData);
export const deltask = (formData) => {
  API.delete("/tasks/delete", { data: formData });
};
export const signin = (formData) => API.post("/user/signin", formData);
export const signup = (formData) => API.post("/user/signup", formData);
