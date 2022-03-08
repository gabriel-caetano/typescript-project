import { Router } from 'express'
import { SpecificationRepository } from '../modules/cars/repositories/SpecificationRepository'
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService'

const specificationsRoutes = Router()

const specificationsRepository = new SpecificationRepository()

specificationsRoutes.post('/', (request, response) => {
  const { name, description } = request.body

  const createSpecificationService = new CreateSpecificationService(specificationsRepository)
  try {
    createSpecificationService.execute({ name, description })
    return response.status(201).send()
  } catch (e) {
    return response.status(400).json({ error: e.message })
  }
})

specificationsRoutes.get('/', (request, response) => {
  return response.json(specificationsRepository.list())
})

export { specificationsRoutes }
