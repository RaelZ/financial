import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateColumns1714117600363 implements MigrationInterface {
    name = 'UpdateColumns1714117600363'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_info" DROP CONSTRAINT "FK_2b5b8e1d6faf78bf586b062f5d0"`);
        await queryRunner.query(`ALTER TABLE "users_info" ADD CONSTRAINT "UQ_2b5b8e1d6faf78bf586b062f5d0" UNIQUE ("user_id")`);
        await queryRunner.query(`ALTER TABLE "users_info" ALTER COLUMN "social_name" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users_info" ALTER COLUMN "full_name" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users_info" ALTER COLUMN "phone" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users_role" DROP CONSTRAINT "FK_e3a658640780bef5ec4319c8a0f"`);
        await queryRunner.query(`ALTER TABLE "users_role" ALTER COLUMN "role_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users_info" ADD CONSTRAINT "FK_2b5b8e1d6faf78bf586b062f5d0" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_role" ADD CONSTRAINT "FK_e3a658640780bef5ec4319c8a0f" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_role" DROP CONSTRAINT "FK_e3a658640780bef5ec4319c8a0f"`);
        await queryRunner.query(`ALTER TABLE "users_info" DROP CONSTRAINT "FK_2b5b8e1d6faf78bf586b062f5d0"`);
        await queryRunner.query(`ALTER TABLE "users_role" ALTER COLUMN "role_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users_role" ADD CONSTRAINT "FK_e3a658640780bef5ec4319c8a0f" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_info" ALTER COLUMN "phone" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users_info" ALTER COLUMN "full_name" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users_info" ALTER COLUMN "social_name" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users_info" DROP CONSTRAINT "UQ_2b5b8e1d6faf78bf586b062f5d0"`);
        await queryRunner.query(`ALTER TABLE "users_info" ADD CONSTRAINT "FK_2b5b8e1d6faf78bf586b062f5d0" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
