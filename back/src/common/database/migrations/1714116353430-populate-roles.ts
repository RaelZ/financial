import { MigrationInterface, QueryRunner } from 'typeorm';

export class PopulateRoles1714116353430 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO roles (name, description, status) VALUES ('ADMIN', 'administrator', 'actived')`,
    );
    await queryRunner.query(
      `INSERT INTO roles (name, description, status) VALUES ('PRO', 'pro user', 'actived')`,
    );
    await queryRunner.query(
      `INSERT INTO roles (name, description, status) VALUES ('DEFAULT', 'default', 'actived')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM roles WHERE name = 'ADMIN'`);
    await queryRunner.query(`DELETE FROM roles WHERE name = 'PRO'`);
    await queryRunner.query(`DELETE FROM roles WHERE name = 'DEFAULT'`);
  }
}
