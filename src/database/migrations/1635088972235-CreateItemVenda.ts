import {IsNull, MigrationInterface, QueryRunner,Table} from "typeorm";

export class CreateItemVenda1635088972235 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'item_venda',
                columns: [
                    {
                        name:'id',
                        type:'varchar',
                        isPrimary:true,
                        generationStrategy:"uuid",
                        default:'uuid_generate_v4()'
                    },
                    {
                        name:'cliente',
                        type:'varchar',
                        isNullable:false
                    },
                    {
                        name:'produto',
                        type:'varchar',
                        isNullable:false
                    },
                    {
                        name:'quantidade',
                        type:'integer',
                        isNullable:false
                    },
                    {
                        name:'valor_unitario',
                        type:'decimal',
                        isNullable:false
                    },
                    {
                        name:'valor_total',
                        type:'decimal',
                        isNullable:false
                    },
                    {
                        //quando criado
                        name:'created_at',
                        type:'timestamp',
                        default:'now()'
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('item_venda')
    }

}
