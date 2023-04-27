import axios from "axios";

const userApi = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "text/plain",
  },
  withCredentials: true,
});



export const getAllUsers = async (value: string) => {
  return await userApi.get(
    `http://localhost:3000/allUsers?searchedValue=${value}`
  );
};


