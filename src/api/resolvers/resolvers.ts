import { Database } from '../../config/Database'

const resolvers = {
  Query: {
    getAllUsers: async () => {
      const users = await Database.table('users').select()
      return users
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      const { external_id, name, email, image_url, phone, bio } = args
      const user = await Database.table('users').insert({
        external_id,
        name,
        email,
        image_url,
        phone,
        bio,
      })
      return user
    },
  },
}

export { resolvers }
