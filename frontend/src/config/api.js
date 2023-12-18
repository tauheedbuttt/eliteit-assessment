import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000/api",
    //   baseURL: "https://hrm-backend.ismmartindustries.com",
});

// import Cookies from "js-cookie";
// api.interceptors.request.use(
//   async (config) => {
//     const token = Cookies.get("AdminToken")
//     if (token) {
//       config.headers.authorization = token;
//     }
//     return config;
//   },
//   (err) => Promise.reject(err)
// );

export default api;
