import { Query, Resolver } from 'type-graphql'
import { Pet } from '../../entities/Pet'

@Resolver()
export class PetResolver {
  @Query(() => [Pet])
  async getPets(): Promise<Pet[]> {
    return await Pet.find()
  }
}
