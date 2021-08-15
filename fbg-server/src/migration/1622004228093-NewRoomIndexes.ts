import {MigrationInterface, QueryRunner, TableIndex} from "typeorm";

export class NewRoomIndexes1622004228093 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createIndex('room_entity', new TableIndex({
            name: 'IDX_IS_PUBLIC',
            columnNames: ['isPublic']
        }));
        await queryRunner.createIndex('room_membership_entity', new TableIndex({
            name: 'IDX_LAST_SEEN',
            columnNames: ['lastSeen']
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex("room_entity", "IDX_IS_PUBLIC");
        await queryRunner.dropIndex("room_membership_entity", "IDX_LAST_SEEN");
    }
}
