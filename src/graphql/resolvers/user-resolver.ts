import {
  Arg,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from 'type-graphql'
import { Pet } from '../../entities/Pet'
import { User } from '../../entities/User'

@Resolver(User)
export class UserResolver {
  // private users = ['test1', 'test2', 'test3']

  @Query(() => [User])
  async getUsers(): Promise<User[]> {
    return await User.find()
  }

  @Mutation(() => User)
  async createUser(
    @Arg('firstname') firstname: string,
    @Arg('lastname') lastname: string,
    @Arg('email') email: string,
    @Arg('password') password: string
  ): Promise<User> {
    const user = Object.assign(new User(), {
      firstname,
      lastname,
      email,
      password,
    })
    await User.save(user)
    return user
  }

  @FieldResolver(() => [Pet])
  async pets(@Root() root: User): Promise<Pet[]> {
    return await Pet.find({ where: { userId: root.id } })
  }
}
