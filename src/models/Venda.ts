import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('vendas')
class Venda{

    //primary key gerado automaticamente
    @PrimaryGeneratedColumn('uuid')// podreia ser increment
    id:string;
    //coluna tradicional
    @Column()// ja é varchar
    cliente:string;
    
    @Column()// ja é varchar
    valor_total:number;

    @CreateDateColumn()
    created_at:Date;
    
}

export default Venda
