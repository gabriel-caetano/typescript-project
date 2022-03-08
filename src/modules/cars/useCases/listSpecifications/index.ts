import { ListSpecificationsController } from './ListSpecificationsController'
import { ListSpecificationsUseCase } from './ListSpecificationsUseCase'
import { SpecificationRepository } from '../../repositories/implementations/SpecificationRepository'

const specificationsRepository = SpecificationRepository.getInstance()
const listSpecificationsUseCase = new ListSpecificationsUseCase(specificationsRepository)
const listSpecificationsController = new ListSpecificationsController(listSpecificationsUseCase)

export { listSpecificationsController }