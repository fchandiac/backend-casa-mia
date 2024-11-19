// product.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Category } from './category.entity'; // Importamos la entidad Category

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string; // UUID como clave primaria

  @Column()
  name: string;

  @Column('decimal')
  price: number;

  @Column({ nullable: true })
  description: string;

  @Column()
  imageUrl: string;

  @ManyToOne(() => Category, category => category.products)
  category: Category; // Relación muchos a uno con Category
}




