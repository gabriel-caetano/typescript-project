import { v4 as uuidV4 } from 'uuid'
import { ICreateSpecificationDTO } from '../repositories/ISpecificationRepository'

class Specification {
  id: string
  name: string
  description: string | undefined
  created_at: Date
  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}

export { Specification }
