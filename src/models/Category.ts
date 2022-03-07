import { v4 as uuidV4 } from 'uuid'
import { ICreateCategoryDTO } from '../repositories/ICategoriesRepository'

class Category {
  id?: string
  name: string
  description: string | undefined
  created_at: Date
  updated_at: Date

  constructor({ name, description }: ICreateCategoryDTO) {
    if (!this.id) {
      this.id = uuidV4()
      this.created_at = new Date()
    }
    this.name = name
    this.description = description
    this.updated_at = new Date()
  }
}

export { Category }
