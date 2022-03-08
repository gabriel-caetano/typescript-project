import { ListSpecificationsUseCase } from './ListSpecificationsUseCase'

class ListSpecificationsController {
  constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) {}
  handle(request, response) {
    const all = this.listSpecificationsUseCase.execute()
    return response.json(all)
  }
}

export { ListSpecificationsController }