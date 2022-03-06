import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('item_venda')
class ItemVenda{

    //primary key gerado automaticamente
    @PrimaryGeneratedColumn('uuid')// podreia ser increment
    id:string;
    //coluna tradicional
    @Column()// ja é varchar
    cliente:string;
    
    @Column()// ja é varchar
    produto:string;
    
    @Column()// ja é varchar
    quantidade:number;

    @Column()// ja é varchar
    valor_unitario:number;

    @Column()// ja é varchar
    valor_total:number;

    @CreateDateColumn()
    created_at:Date;

    
}

export default ItemVenda
