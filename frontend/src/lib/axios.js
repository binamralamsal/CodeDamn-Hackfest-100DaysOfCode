import { Axios } from "axios";

export const axios = new Axios({
  baseURL: import.meta.env.VITE_APP_API_URL || "",
});
