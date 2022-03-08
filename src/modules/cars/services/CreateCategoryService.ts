import { CategoryRepository } from '../repositories/CategoryRepository'

interface Request {
  name: string
  description: string
}

class CreateCategoryService {
  constructor(private categoryRepository: CategoryRepository) {}

  execute({ name, description }: Request): void {
    const categoryExists = this.categoryRepository.findByName(name)
    if (categoryExists) throw new Error('Category already exists')

    this.categoryRepository.create({ name, description })
  }
}

export { CreateCategoryService }
