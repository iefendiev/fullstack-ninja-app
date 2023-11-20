import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Ninja {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  belt!: string;
}
