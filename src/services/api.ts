import axios, { AxiosResponse } from 'axios';

const apiURL = import.meta.env.VITE_API_URL as string;

export const api = axios.create({
  baseURL: apiURL,
});

export default {
  URL,
  getCharacterInfo(route = ''): Promise<AxiosResponse> {
    return api.get(`characters${route}`);
  },
};
