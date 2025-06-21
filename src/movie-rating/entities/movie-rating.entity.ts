import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MovieRating {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('int', {
    default: 0,
  })
  rating: number;

  @Column('text')
  review: string;
}
