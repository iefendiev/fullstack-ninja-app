import { Dojo } from 'src/dojos/entities/dojo.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  password!: string;

  @OneToMany(() => Dojo, (dojo) => dojo.user)
  dojos: Dojo[];
}
