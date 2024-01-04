import { config } from 'dotenv'
config()
import express from 'express'
import routes from './routes/router.js'

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '127.0.0.1'

routes.forEach(_ => app.use(_))

app.listen(PORT, () => {
  console.log(`Server is running at ${HOST}:${PORT}`);
});