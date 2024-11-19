import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
  } from 'typeorm';

  
  @Entity()
  export class Coupon { // La clase se sigue llamando CouponEntity
    @PrimaryGeneratedColumn('uuid')
    id!: string;
  
    @Column({ nullable: true, default: null })
    isUsed!: boolean;
  
    @Column({ nullable: true, default: null })
    userId!: string | null;
  
    @Column({ nullable: true, default: null })
    validationUserId!: string | null;
  
    @Column({ type: 'date' })
    expire!: Date;
  
    // rules
    @Column({ nullable: true })
    rules?: string;
  
    @Column({ type: 'int', default: 0 })
    discount!: number;
  
  
    @CreateDateColumn({ type: 'timestamp' })
    createdAt!: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt!: Date;
  
    @DeleteDateColumn({ type: 'timestamp', nullable: true })
    deletedAt?: Date;
  }
  