import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn, 
  CreateDateColumn, 
  UpdateDateColumn, 
  DeleteDateColumn, 
  OneToOne 
} from 'typeorm';
import { Account } from './account.entity'; // Importamos la entidad Account

@Entity('users') // Nombre explícito para la tabla
export class User {
  @PrimaryGeneratedColumn('uuid') // ID generado automáticamente como UUID
  id: string;

  @Column({ unique: true })
  email: string; // Email único

  @Column()
  password: string; // Contraseña encriptada

  @Column({ default: 'user' })
  role: string; // Rol del usuario

  @CreateDateColumn()
  createdAt: Date; // Fecha de creación

  @UpdateDateColumn()
  updatedAt: Date; // Fecha de la última actualización

  @DeleteDateColumn()
  deletedAt: Date; // Fecha de eliminación lógica

  @OneToOne(() => Account, (account) => account.user, { cascade: true }) // Relación uno a uno con Account
  account: Account; // Cuenta asociada al usuario
}
