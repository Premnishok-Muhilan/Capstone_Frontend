// Import the `axios` library for making HTTP requests.
// Axios is a popular HTTP client that allows you to make requests and handle responses.
import axios from "axios";

// Define the base URL for the API.
// This URL will be used as the base for all requests made with this Axios instance.
// const baseURL = "http://localhost:3001/api/v1";
const baseURL = import.meta.env.VITE_DEPLOYED_BACKEND_URL;
console.log("baseURL of backend", baseURL);

// Create an Axios instance with custom configuration settings.
// This instance will be used to make HTTP requests to the API with predefined settings.
const instance = axios.create({
  // Set the base URL for the Axios instance.
  // This base URL will be prefixed to all endpoints used in requests.
  baseURL,

  // Set the request timeout in milliseconds.
  // If a request takes longer than this duration, it will be aborted.
  timeout: 5000,

  // Define the default headers for all requests made with this instance.
  // Here, the `Content-Type` header is set to `application/json` to indicate JSON payloads.
  headers: {
    "Content-Type": "application/json",
  },

  // Include credentials (such as cookies) with cross-origin requests.
  // This allows requests to include cookies and other credentials when making requests to different origins.
  withCredentials: true,
});

// Export the configured Axios instance as the default export from this module.
// This allows other parts of the application to import and use this instance for making API requests.
export default instance;
