import { Query, Resolver } from 'type-graphql'
import { User } from '../../entities/User'

@Resolver()
export class UserResolver {
  // private users = ['test1', 'test2', 'test3']

  @Query(() => [User])
  async getUsers(): Promise<User[]> {
    return await User.find()
  }
}
