import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Image extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('varchar')
  name!: string;

  @Column('varchar', {
    length: 500
  })
  path!: string;

  @Column('varchar', {
    nullable: true,
    default: 'description'
  })
  description!: string;

  @Column('boolean')
  isPublished!: boolean;
}
