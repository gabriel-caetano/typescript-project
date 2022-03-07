import { Router } from 'express'
import { CategoryRepository } from '../repositories/CategoryRepository'

const categoriesRoutes = Router()

const categoriesRepository = new CategoryRepository()

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body
  const categoryExists = categoriesRepository.findByName(name)
  if (categoryExists) return response.status(400).json({ error: 'Category already exists' })

  categoriesRepository.create({ name, description })
  return response.status(201).send()
})

categoriesRoutes.get('/', (request, response) => {
  return response.json(categoriesRepository.list())
})

export { categoriesRoutes }
