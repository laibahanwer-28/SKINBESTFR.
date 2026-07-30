import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
export const saveAssessment = (data) => {
  const token = localStorage.getItem("token");

  return API.post("/assessment", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getLatestAssessment = () => {
  const token = localStorage.getItem("token");

  return API.get("/assessment/latest", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};


