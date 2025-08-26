import { Query, Resolver } from 'type-graphql'

@Resolver()
export class UserResolver {
  private users = ['test1', 'test2', 'test3']

  @Query(() => [String])
  async getUsers(): Promise<string[]> {
    return this.users
  }
  
}
