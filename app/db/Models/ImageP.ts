import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
