
import axios from 'axios'


export const API_ENDPOINT = process.env.NEXT_PUBLIC_URL

/** global axios intance for data from fetching from server via rest-api on client side */

const axiosInstance = axios.create({
  baseURL: API_ENDPOINT,
  headers: { 'Content-Type': 'application/json' },
})

export { axiosInstance as axios }