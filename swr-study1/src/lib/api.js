import { useRequest } from "./utils";
import axiosCancel from "axios-cancel";

import axios from "axios";

export const http = axios.create({
  baseURL: "http://localhost:9999",
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

// axiosCancel(http, {
//   debug: false, // process.env.NODE_ENV === 'development'
// });

export const API = {
  world: {
    async hello(params) {
      const { data } = await http.get(params).then((item) => item);
      console.log(data, "data");
      return data;
    },
  },
};

// export const http = () => {};
