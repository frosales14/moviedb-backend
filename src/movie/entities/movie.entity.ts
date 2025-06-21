
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column('text')
  description: string;

  @Column('bool', { default: 0 })
  isActive?: boolean;

  @Column('text', { default: 'https://placehold.co/308x360' })
  imgUrl?: string;

}
