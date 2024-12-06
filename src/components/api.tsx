import axios from 'axios'

export const api = axios.create({
    baseURL: "https://brain-minder-api.vercel.app/api"
  })