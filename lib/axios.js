import axios from "axios";

const baseUrl = "http://localhost:4000/";

export const publicInstance = axios.create({ baseURL: baseUrl });

export const privateInstance = axios.create({ baseURL: baseUrl });

privateInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer &{token}`;
    }
    return config;
  },
  (error) => {
    // It is highly recommended to include an error handler for request interceptors
    return Promise.reject(error);
  },
);

privateInstance.interceptors.response.use(
  (response) => {
    // This runs on successful status codes (2xx)
    // console.log("From the response interceptor (Success):", response);

    return response;
  },
  (error) => {
    if (error.response.status == 401) {
      alert("You are not Authorized, Logging you out.........");
      window.location.href = "/login";
    }
    // This runs on failure status codes (4xx, 5xx)
    console.log(
      "From the response interceptor (Error):",
      error.response || error.message,
    );
    return Promise.reject(error); // Critical: allows your catch blocks to catch the error
  },
);
