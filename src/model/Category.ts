import { v4 as uuidV4 } from 'uuid'

class Category {
  id?: string
  name: string
  description: string
  created_at: Date
  updated_at: Date

  constructor({ name, description }: { name: string; description: string }) {
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
