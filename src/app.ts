import express from 'express'
import { AppDataSource } from './config/db/data-source'

export const app = express()

async function init() {
  await AppDataSource.initialize()
}

init()
