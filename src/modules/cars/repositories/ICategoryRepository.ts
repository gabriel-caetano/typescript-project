import { Category } from '../models/Category'
interface ICreateCategoryDTO {
  name: string
  description: string
}

interface ICategoryRepository {
  create(data: ICreateCategoryDTO): void
  list(): Category[]
  findByName(name: string): Category | undefined
}

export { ICategoryRepository, ICreateCategoryDTO }
