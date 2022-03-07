import { Admin } from '../model/Admin'

interface ICreateAdminDTO {
  name: string
  username: string
  password: string
}

interface IUpdateAdminDTO {
  name: string
  username: string
}

interface IUpdatePassword {
  password: string
  confirmPassword: string
}

interface IAdminRepository {
  show(): Admin
  update(data: IUpdateAdminDTO): Admin
}

export { ICreateAdminDTO, IUpdateAdminDTO, IUpdatePassword, IAdminRepository }
