import axios from 'axios'
import { BASE_API_URL } from '@env'

export const ms = axios.create({
  baseURL: `${BASE_API_URL}/api`,
})
