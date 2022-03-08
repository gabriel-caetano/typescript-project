import { SpecificationRepository } from '../repositories/implementations/SpecificationRepository'

interface Request {
  name: string
  description: string
}

class CreateSpecificationService {
  constructor(private specificationRepository: SpecificationRepository) {}

  execute({ name, description }: Request): void {
    const specificationExists = this.specificationRepository.findByName(name)
    if (specificationExists) throw new Error('Specification already exists')

    this.specificationRepository.create({ name, description })
  }
}

export { CreateSpecificationService }
