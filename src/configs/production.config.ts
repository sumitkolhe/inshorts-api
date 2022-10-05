import type { Config } from '../interfaces/config.interface'

export const productionConfig: Config = {
  env: 'production',
  server: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 80,
  },
  cors: {
    origin: true,
    credentials: true,
  },
  log: {
    format: 'tiny',
    level: 'info',
  },
  inshorts: {
    readApiBaseUrl: 'https://read-api.newsinshorts.com',
    searchApiBaseUrl: 'https://search-api.newsinshorts.com',
  },
}
