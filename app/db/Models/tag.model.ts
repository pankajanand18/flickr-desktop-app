import { BaseEntity, Column, Entity, ManyToMany, PrimaryColumn } from 'typeorm'
// eslint-disable-next-line import/no-cycle
import Image from './models'

@Entity({ name: 'tag' })
export default class Tag extends BaseEntity {
  @PrimaryColumn('varchar', {
    length: 500,
    unique: true,
  })
  name!: string

  @Column({ type: 'boolean', default: true })
  isPublished!: boolean

  @Column({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
    update: false,
  })
  created!: Date

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  modified!: Date

  @ManyToMany(
    type => Image,
    image => image.tags,
  )
  images!: Image[]
}
