import { v4 as uuidV4 } from 'uuid'
import { ICreateCategoryDTO } from '../repositories/ICategoryRepository'

class Category {
  id?: string
  name: string
  description: string | undefined
  created_at: Date
  updated_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }

  create({ name, description }: ICreateCategoryDTO) {
    this.name = name
    this.description = description
    this.created_at = new Date()
    this.updated_at = new Date()
  }
}

export { Category }
