import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import { adminsRoutes } from './routes/admin.routes'

const app = express()

const port = process.env.PORT || 3333

app.use(express.json())
app.use('/admin', adminsRoutes)

app.listen(port, () => console.log(`running server on port ${port}...`))
