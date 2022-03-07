import { Router } from 'express'
import { Category } from '../model/Category'
import { CategoryRepository } from '../repositories/CategoryRepository'

const categoriesRoutes = Router()

const categoriesRepository = new CategoryRepository()

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body
  categoriesRepository.create({ name, description })
  return response.status(201).send()
})

categoriesRoutes.get('/', (request, response) => {
  return response.json(categoriesRepository.list())
})

export { categoriesRoutes }
