import {IsNull, MigrationInterface, QueryRunner,Table} from "typeorm";

export class CreateVendas1635088141383 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'vendas',
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
        await queryRunner.dropTable('vendas')
    }

}
