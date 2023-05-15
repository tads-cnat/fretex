import axios from 'axios';

export const cepApi = axios.create({
  baseURL: 'https://viacep.com.br/ws',
});

export const api = axios.create({
  baseURL: `http://${window.location.host}/api`,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  },
  async (error) => await Promise.reject(error),
);
