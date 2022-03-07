import { v4 as uuidV4 } from 'uuid'
import { ICreateSpecificationDTO } from '../repositories/ISpecificationRepository'

class Specification {
  id: string
  name: string
  description: string | undefined
  created_at: Date
  constructor({ name, description }: ICreateSpecificationDTO) {
    if (!this.id) {
      this.id = uuidV4()
      this.created_at = new Date()
    }
    this.name = name
    this.description = description
  }
}

export { Specification }
