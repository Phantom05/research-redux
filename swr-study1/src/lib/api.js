import { useRequest } from "./utils";
import axiosCancel from "axios-cancel";
import axios from "axios";
export const http = axios.create({ baseURL: "http://localhost:9999" });

export const API = {
  project: {
    list: ({ params, body }) => http.get("/hello", { params }),
    detail: ({ params, body }) => http.post("/hello", { ...body }),
  },
};
