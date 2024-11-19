import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Mission {
  @PrimaryGeneratedColumn('uuid')
  id: string; // ID único para cada misión

  @Column({ type: 'varchar', length: 255 })
  title: string; // Título de la misión

  @Column({ type: 'text' })
  description: string; // Descripción detallada de la misión

  @Column({ type: 'varchar', length: 255 })
  userId: string; // ID del usuario al que se le asigna la misión

  @Column({ type: 'boolean', default: false })
  isCompleted: boolean; // Estado de la misión (completada o no)

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date; // Fecha de creación automática
}
