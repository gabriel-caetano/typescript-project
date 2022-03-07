import { v4 as uuidV4 } from 'uuid'
import bcrypt from 'bcrypt'
import { ICreateAdminDTO } from '../repositories/IAdminRepository'

class Admin {
  id?: string
  name: string
  username: string
  password: string
  created_at: Date
  updated_at: Date
  s
  constructor({ name, username, password }: ICreateAdminDTO) {
    if (!this.id) {
      this.id = uuidV4()
      this.created_at = new Date()
    }
    this.name = name
    this.username = username
    this.password = bcrypt.hashSync(password, 8)
    this.updated_at = new Date()
  }
}

export { Admin }
