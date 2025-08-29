import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { Pet } from '../../entities/Pet'

@Resolver()
export class PetResolver {
  @Query(() => [Pet])
  async getPets(): Promise<Pet[]> {
    return await Pet.find()
  }

  @Mutation(() => Pet)
  async createPet(
    @Arg('name', () => String) name: string,
    @Arg('userId', () => String) userId: string
  ): Promise<Pet> {
    const pet = Object.assign(new Pet(), {
      name,
      userId,
    })
    await Pet.save(pet)
    return pet
  }
}
