import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
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


