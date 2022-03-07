import { Router } from 'express'
import { AdminRepository } from '../repositories/AdminRepository'
import bcrypt from 'bcrypt'

const adminsRoutes = Router()

const adminsRepository = new AdminRepository({
  name: 'Admin',
  username: 'admin',
  password: 'admin',
})

// adminsRoutes.post('/', (request, response) => {
//   const { name, description } = request.body
//   const adminExists = adminsRepository.findByName(name)
//   if (adminExists) return response.status(400).json({ error: 'Admin already exists' })

//   adminsRepository.create({ name, description })
//   return response.status(201).send()
// })

adminsRoutes.get('/', (request, response) => {
  return response.json(adminsRepository.show())
})

adminsRoutes.post('/session', (request, response) => {
  const { username, password } = request.body
  const admin = adminsRepository.show()
  const validUsername = admin.username === username
  const validPassword = bcrypt.compareSync(password, admin.password)
  if (!validUsername || !validPassword)
    return response.status(400).json({ error: 'Falha de autenticação.' })
  return response.status(200).json(admin)
})

export { adminsRoutes }
