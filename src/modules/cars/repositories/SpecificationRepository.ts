import { Specification } from '../models/Specification'
import { ICreateSpecificationDTO, ISpecificationRepository } from './ISpecificationRepository'

class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[] = []
  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification()
    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
      updated_at: new Date(),
    })
    this.specifications.push(new Specification())
  }

  list(): Specification[] {
    return this.specifications
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(specification => specification.name === name)
    if (!specification) throw new Error('Specification not found')
    return specification
  }
}

export { SpecificationRepository }
