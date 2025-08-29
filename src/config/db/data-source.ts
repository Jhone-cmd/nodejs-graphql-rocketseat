import { DataSource } from 'typeorm'
import { env } from '../../env/schema'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: env.DB_HOST,
  port: env.DB_PORT,
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  database: env.DB_DATABASE,
  synchronize: true,
  logging: true,
  entities: ['src/entities/**/*.ts'],
})
