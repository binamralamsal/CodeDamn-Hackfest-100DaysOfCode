import { Axios } from "axios";

export const axios = new Axios({
  baseURL: import.meta.env.API_URL || "",
});
