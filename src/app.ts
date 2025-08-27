import 'reflect-metadata'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@as-integrations/express5'
import cors from 'cors'
import express from 'express'
import { buildSchema } from 'type-graphql'
import { AppDataSource } from './config/db/data-source'
import { PetResolver } from './graphql/resolvers/pet-resolver'
import { UserResolver } from './graphql/resolvers/user-resolver'

export const app = express()

async function init() {
  await AppDataSource.initialize()

  const schema = await buildSchema({
    resolvers: [UserResolver, PetResolver],
  })

  const apollo = new ApolloServer({ schema })
  await apollo.start()

  app.use(cors())
  app.use('/graphql', express.json(), expressMiddleware(apollo))
}

init()
