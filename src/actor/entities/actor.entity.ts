import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Actor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { default: 'Actor Name' })
  name?: string;

  @Column('boolean', {
    default: true,
  })
  isActive?: boolean;
}
