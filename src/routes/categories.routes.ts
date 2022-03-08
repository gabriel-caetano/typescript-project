import { Router } from 'express'
import { CategoryRepository } from '../modules/cars/repositories/CategoryRepository'
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService'

const categoriesRoutes = Router()

const categoriesRepository = new CategoryRepository()

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body

  const createCategoryService = new CreateCategoryService(categoriesRepository)
  try {
    createCategoryService.execute({ name, description })
    return response.status(201).send()
  } catch (e) {
    return response.status(400).json({ error: e.message })
  }
})

categoriesRoutes.get('/', (request, response) => {
  return response.json(categoriesRepository.list())
})

export { categoriesRoutes }
