import { Specification } from '../models/Specification'

class SpecificationRepository {
  private _specifications: Specification[] = []

  public get specifications(): Specification[] {
    return this._specifications
  }

  public add(specification: Specification) {
    this._specifications.push(specification)
  }
}

export { SpecificationRepository }
