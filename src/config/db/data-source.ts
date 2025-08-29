import { DataSource } from 'typeorm'
import { Pet } from '../../entities/Pet'
import { User } from '../../entities/User'
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
  entities: [User, Pet],
})

export const AppDataSourceProduction = new DataSource({
  type: 'postgres',
  url: env.URL,
  ssl: true,
  synchronize: false,
  logging: ['query', 'error'],
  entities: [User, Pet],
})
