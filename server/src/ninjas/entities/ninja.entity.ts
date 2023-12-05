import { Dojo } from 'src/dojos/entities/dojo.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Ninja {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  belt!: string;

  @ManyToOne(() => Dojo, (dojo) => dojo.ninjas)
  dojo: Dojo;
}
