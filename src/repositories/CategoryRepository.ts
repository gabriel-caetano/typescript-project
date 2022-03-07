import { ICategoriesRepository, ICreateCategoryDTO } from '../repositories/ICategoriesRepository'
import { Category } from '../models/Category'

class CategoryRepository implements ICategoriesRepository {
  private categories: Category[]
  constructor() {
    this.categories = []
  }

  create(data: ICreateCategoryDTO): void {
    this.categories.push(new Category(data))
  }

  list(): Category[] {
    return this.categories
  }

  findByName(name: string): Category | undefined {
    return this.categories.find((category) => category.name === name)
  }
}

export { CategoryRepository }
