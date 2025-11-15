const BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:5050"
    : "";

export default BASE_URL;