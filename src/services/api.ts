import axios from 'axios'

const { EXPO_PUBLIC_API_TASK_URL } = process.env

export const ms = axios.create({
  baseURL: `${EXPO_PUBLIC_API_TASK_URL}/api`,
})
