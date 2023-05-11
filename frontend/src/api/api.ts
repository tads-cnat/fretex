import axios from "axios"

export const cepApi = axios.create({
    baseURL: 'https://viacep.com.br/ws'
})

export const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    headers:{
        'Content-Type': 'multipart/form-data',
    }
})


api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('authToken');
      if (token) {
        config.headers.Authorization = `Token ${token}`;
      }else{
        delete config.headers.Authorization;
      }
      return config;
    },
    (error) => Promise.reject(error),
);
