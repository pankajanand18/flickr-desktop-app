import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
// eslint-disable-next-line import/no-cycle
import Tag from './tag.model';

@Entity({ name: 'image' })
export default class Image extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('varchar')
  name!: string;

  @Column('varchar', {
    length: 500,
    unique: true
  })
  path!: string;

  @Column('varchar', {
    nullable: true,
    default: null
  })
  description!: string;

  @Column({ type: 'boolean', default: false })
  isPublished!: boolean;

  @Column({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
    update: false
  })
  created!: Date;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  modified!: Date;

  @ManyToMany(
    type => Tag,
    tags => tags.images,
    {
      cascade: true
    }
  )
  tags!: Tag[];
}
