import { Router } from 'express'
import { UserRepository } from '../repositories/UserRepository'

const usersRoutes = Router()

const usersRepository = new UserRepository()

usersRoutes.post('/', (request, response) => {
  const { name, description } = request.body
  const userExists = usersRepository.findByName(name)
  if (userExists) return response.status(400).json({ error: 'User already exists' })

  usersRepository.create({ name, description })
  return response.status(201).send()
})

usersRoutes.get('/', (request, response) => {
  return response.json(usersRepository.list())
})

export { usersRoutes }
