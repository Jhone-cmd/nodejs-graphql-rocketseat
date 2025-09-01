import 'reflect-metadata'
import { ApolloServer } from '@apollo/server'
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} from '@apollo/server/plugin/landingPage/default'
import { expressMiddleware } from '@as-integrations/express5'
import cors from 'cors'
import express from 'express'
import { buildSchema } from 'type-graphql'
import { AppDataSource, AppDataSourceProduction } from './config/db/data-source'
import { env } from './env/schema'
import { PetResolver } from './graphql/resolvers/pet-resolver'
import { UserResolver } from './graphql/resolvers/user-resolver'

export const app = express()
const isProduction = env.NODE_ENV === 'production'

async function init() {
  //await AppDataSource.initialize()
  await AppDataSourceProduction.initialize()

  const schema = await buildSchema({
    resolvers: [UserResolver, PetResolver],
  })

  const apollo = new ApolloServer({
    schema,
    plugins: [
      isProduction
        ? ApolloServerPluginLandingPageProductionDefault({ footer: false })
        : ApolloServerPluginLandingPageLocalDefault({ footer: false }),
    ],
  })
  await apollo.start()

  app.use(cors())
  app.use('/graphql', express.json(), expressMiddleware(apollo))
}

init()
