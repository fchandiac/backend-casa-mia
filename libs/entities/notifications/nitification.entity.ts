import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Notification {
  @PrimaryGeneratedColumn('uuid')
  id: string; // ID único para cada notificación

  @Column({ type: 'varchar', length: 255 })
  title: string; // Título de la notificación

  @Column({ type: 'text', nullable: true })
  message: string; // Mensaje detallado de la notificación

  @Column({ type: 'varchar', length: 255 })
  userId: string; // ID del usuario al que se le envía la notificación

  @Column({ type: 'boolean', default: false })
  isRead: boolean; // Estado de la notificación (leída o no)

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date; // Fecha de creación automática
}
