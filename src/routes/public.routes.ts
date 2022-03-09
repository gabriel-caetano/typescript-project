import { Router } from 'express'

const publicRoutes = Router()

publicRoutes.post('/graphql', (request, response) => {
  const { name } = request.body
  console.log(name)
})

export { publicRoutes }
