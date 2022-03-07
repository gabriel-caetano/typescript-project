import { User } from '../model/User'

interface ICreateUserDTO {
  name: string
  description: string
}
class UserRepository {
  private users: User[]
  constructor() {
    this.users = []
  }

  create(data: ICreateUserDTO): void {
    this.users.push(new User(data))
  }

  list(): User[] {
    return this.users
  }

  findByName(name: string): User | undefined {
    return this.users.find((user) => user.name === name)
  }
}

export { UserRepository }
