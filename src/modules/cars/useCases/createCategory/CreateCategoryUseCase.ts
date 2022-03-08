import { ICategoryRepository } from '../../repositories/ICategoryRepository'

interface Request {
  name: string
  description: string
}

class CreateCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  execute({ name, description }: Request): void {
    const categoryExists = this.categoryRepository.findByName(name)
    if (categoryExists) throw new Error('Category already exists')

    this.categoryRepository.create({ name, description })
  }
}

export { CreateCategoryUseCase }
