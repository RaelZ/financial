import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialTables1714116188357 implements MigrationInterface {
  name = 'InitialTables1714116188357';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users_info" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" uuid NOT NULL, "social_name" character varying NOT NULL, "full_name" character varying NOT NULL, "phone" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_9bcc2add2d98c69cbb75a0cba27" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."roles_status_enum" AS ENUM('actived', 'deactived', 'pending')`,
    );
    await queryRunner.query(
      `CREATE TABLE "roles" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "status" "public"."roles_status_enum" NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "UQ_648e3f5447f725579d7d4ffdfb7" UNIQUE ("name"), CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "users_role" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" uuid NOT NULL, "role_id" uuid NOT NULL, CONSTRAINT "PK_a2cecd1a3531c0b041e29ba46e1" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."users_status_enum" AS ENUM('actived', 'deactived', 'pending')`,
    );
    await queryRunner.query(
      `CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "status" "public"."users_status_enum" NOT NULL DEFAULT 'pending', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "expanses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "origin" character varying NOT NULL, "value" numeric NOT NULL, "recurrence" integer NOT NULL, "user_id" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_b2e2a8864b10f3aab71b546edaa" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "incomes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "origin" character varying NOT NULL, "value" numeric NOT NULL, "recurrence" integer NOT NULL, "user_id" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_d737b3d0314c1f0da5461a55e5e" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "users_info" ADD CONSTRAINT "FK_2b5b8e1d6faf78bf586b062f5d0" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "users_role" ADD CONSTRAINT "FK_dff1fd3973cc325e58d8b1f5007" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "users_role" ADD CONSTRAINT "FK_e3a658640780bef5ec4319c8a0f" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "expanses" ADD CONSTRAINT "FK_a5138f82c8d8e7ab2b667e643ca" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "incomes" ADD CONSTRAINT "FK_400664fad260d8fa50ecb78ffe6" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "incomes" DROP CONSTRAINT "FK_400664fad260d8fa50ecb78ffe6"`,
    );
    await queryRunner.query(
      `ALTER TABLE "expanses" DROP CONSTRAINT "FK_a5138f82c8d8e7ab2b667e643ca"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users_role" DROP CONSTRAINT "FK_e3a658640780bef5ec4319c8a0f"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users_role" DROP CONSTRAINT "FK_dff1fd3973cc325e58d8b1f5007"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users_info" DROP CONSTRAINT "FK_2b5b8e1d6faf78bf586b062f5d0"`,
    );
    await queryRunner.query(`DROP TABLE "incomes"`);
    await queryRunner.query(`DROP TABLE "expanses"`);
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TYPE "public"."users_status_enum"`);
    await queryRunner.query(`DROP TABLE "users_role"`);
    await queryRunner.query(`DROP TABLE "roles"`);
    await queryRunner.query(`DROP TYPE "public"."roles_status_enum"`);
    await queryRunner.query(`DROP TABLE "users_info"`);
  }
}
