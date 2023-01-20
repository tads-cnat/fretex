import axios from "axios"

export const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api'
})

export const cepApi = axios.create({
    baseURL: 'https://viacep.com.br/ws'
})
