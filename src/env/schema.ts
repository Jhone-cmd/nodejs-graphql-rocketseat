import z from 'zod'
import 'dotenv/config'

const schema = z.object({
  PORT: z.coerce.number().default(3333),
  DB_HOST: z.string(),
  DB_PORT: z.coerce.number().default(5432),
  DB_USERNAME: z.string(),
  DB_PASSWORD: z.string(),
  DB_DATABASE: z.string(),
})

export const env = schema.parse(process.env)
