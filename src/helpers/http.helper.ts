import axios from 'axios'
import { getConfig } from '../configs'

const config = getConfig()

export const readApiClient = axios.create({
  baseURL: config.inshorts.readApiBaseUrl,
})

export const searchApiClient = axios.create({
  baseURL: config.inshorts.searchApiBaseUrl,
})
