import { hash } from 'bcryptjs'
import { Field, ID, ObjectType } from 'type-graphql'
import {
  BaseEntity,
  BeforeInsert,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity('users')
@ObjectType()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string

  @Column()
  @Field()
  first_name: string

  @Column()
  @Field()
  last_name: string

  @Column({ unique: true })
  @Field()
  email: string

  password: string

  @Column()
  @Field()
  password_hash: string

  @BeforeInsert()
  private async hashPassword() {
    this.password_hash = await hash(this.password, 8)
  }
}
