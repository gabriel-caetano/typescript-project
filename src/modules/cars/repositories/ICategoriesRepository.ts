import { Category } from '../models/Category'
interface ICreateCategoryDTO {
  name: string
  description: string
}

interface ICategoriesRepository {
  create(data: ICreateCategoryDTO): void
  list(): Category[]
  findByName(name: string): Category | undefined
}

export { ICategoriesRepository, ICreateCategoryDTO }
