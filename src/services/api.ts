import axios from 'axios'

export const ms = axios.create({
  baseURL: `${process.env.APP_BACKEND_API_LOCAL}:3333/api`,
})
