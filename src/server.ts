import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import { publicRoutes } from './routes/public.routes'

const app = express()

const port = process.env.PORT || 3333

app.use(express.json())
app.use('/', publicRoutes)

app.listen(port, () => console.log(`running server on port ${port}...`))
