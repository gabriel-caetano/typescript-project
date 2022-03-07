import express from 'express'
import { adminsRoutes } from './routes/admin.routes'
const app = express()

app.use(express.json())
app.use('/admin', adminsRoutes)

app.listen(3000, () => console.log('running...'))
