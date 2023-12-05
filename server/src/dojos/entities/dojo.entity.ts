import { Ninja } from 'src/ninjas/entities/ninja.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Dojo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => User, (user) => user.dojos)
  user: User;

  @OneToMany(() => Ninja, (ninja) => ninja.dojo)
  ninjas: Ninja[];
}
