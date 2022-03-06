import {IsNull, MigrationInterface, QueryRunner,Table} from "typeorm";

export class CreateProdutos1635088125078 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'produtos',
                columns: [
                    {
                        name:'id',
                        type:'varchar',
                        isPrimary:true,
                        generationStrategy:"uuid",
                        default:'uuid_generate_v4()'
                    },
                    {
                        name:'nome',
                        type:'varchar',
                        isNullable:false
                    },
                    {
                        name:'valor',
                        type:'decimal',
                        isNullable:false
                    },
                    {
                        name:'estoque',
                        type:'integer',
                        isNullable:false
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('produtos')
    }

}
