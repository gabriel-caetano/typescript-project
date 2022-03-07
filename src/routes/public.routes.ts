import { Router } from 'express'
import { AdminRepository } from '../repositories/AdminRepository'

const publicRoutes = Router()

publicRoutes.post('/session', (request, response) => {
  const { username, password } = request.body
  const adminExists = .findByUsername(username)
})
