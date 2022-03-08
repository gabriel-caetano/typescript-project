import { ListCategoriesUseCase } from './ListCategoriesUseCase'

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}
  handle(request, response) {
    const all = this.listCategoriesUseCase.execute()
    return response.json(all)
  }
}

export { ListCategoriesController }