import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Double } from 'typeorm';

@Entity('produtos')
class Produto{

    //primary key gerado automaticamente
    @PrimaryGeneratedColumn('uuid')// podreia ser increment
    id:string;
    //coluna tradicional
    @Column()// ja é varchar
    nome:string;

    @Column()// ja é varchar
    valor:number;

    @Column()// ja é varchar
    estoque:number;
    
}

export default Produto
