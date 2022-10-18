import type { Config } from '../interfaces/config.interface'

export const devConfig: Config = {
  env: 'development',
  server: {
    host: 'localhost',
    port: 5000,
  },
  cors: {
    origin: true,
    credentials: true,
  },
  log: {
    format: 'dev',
    level: 'debug',
  },
  inshorts: {
    readApiBaseUrl: 'https://read-api.newsinshorts.com',
    searchApiBaseUrl: 'https://news-search.newsinshorts.com',
  },
}
