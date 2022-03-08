import { ICategoriesRepository, ICreateCategoryDTO } from './ICategoriesRepository'
import { Category } from '../models/Category'

class CategoryRepository implements ICategoriesRepository {
  private categories: Category[]
  constructor() {
    this.categories = []
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category()
    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
      updated_at: new Date(),
    })
    this.categories.push(category)
  }

  list(): Category[] {
    return this.categories
  }

  findByName(name: string): Category | undefined {
    const category = this.categories.find(category => category.name === name)
    if (!category) throw new Error('Category not found')
    return category
  }
}

export { CategoryRepository }
