import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'categoria' })
export class CategoriaEntity {
  @PrimaryGeneratedColumn('uuid')
  idcategoria: string;

  @Column({ name: 'nome', length: 100, nullable: false })
  nome: string;
}
