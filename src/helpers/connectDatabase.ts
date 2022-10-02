import mongoose from 'mongoose'
import { getConfig } from '../configs'
import { logger } from '../utils/logger'

const config = getConfig()

export const mongoOptions = {
  dbName: config.database.dbName,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
}

export const connectDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(config.database.dbUrl, mongoOptions)
    logger.info('Connected To Database')
  } catch (error) {
    logger.error(error.message)
  }
}
