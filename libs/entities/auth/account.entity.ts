import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, DeleteDateColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('accounts')
export class Account {
  @PrimaryGeneratedColumn('uuid')
  id: string; // ID único para cada cuenta

  @Column({ type: 'varchar', length: 50, unique: true })
  username: string; // Nombre de usuario único

  @Column({ type: 'varchar', length: 100 })
  name: string; // Nombre del usuario

  @OneToOne(() => User, (user) => user.account, { onDelete: 'CASCADE' })
  @JoinColumn()
  user: User; // Relación uno a uno con User

  @DeleteDateColumn()
  deletedAt: Date; // Columna que almacena la fecha de eliminación lógica
}
