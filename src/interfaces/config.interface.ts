export interface Config {
  env: string
  server: {
    host: string
    port: number
  }
  database: {
    dbName: string
    dbUrl: string
  }
  cors: {
    origin: string | boolean
    credentials: boolean
  }
  log: {
    format: 'combined' | 'common' | 'dev' | 'short' | 'tiny'
    level: 'error' | 'warn' | 'info' | 'http' | 'debug'
  }
}
