import express from 'express'
import { usersRoutes } from './routes/admin.routes'
const app = express()

app.use(express.json())
app.use('/users', usersRoutes)

app.listen(3000, () => console.log('running...'))
