import { Admin } from '../model/Admin'
import {
  ICreateAdminDTO,
  IUpdateAdminDTO,
  IAdminRepository,
} from '../repositories/IAdminRepository'

class AdminRepository implements IAdminRepository {
  private admin: Admin
  constructor(data: ICreateAdminDTO) {
    this.admin = new Admin(data)
  }

  public show(): Admin {
    return this.admin
  }

  public update({ name, username }: IUpdateAdminDTO): Admin {
    this.admin = { name, username, ...this.admin }
    return this.admin
  }
}

export { AdminRepository }
