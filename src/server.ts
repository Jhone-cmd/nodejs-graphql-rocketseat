import { app } from './app'
import { env } from './env/schema'

app.listen(env.PORT, () => {
  console.log(`Server is running in port ${env.PORT} 🚀`)
})
