import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddIndex1709216121269 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Adicionando índices
    await queryRunner.query(
      `CREATE INDEX idx_user_id ON users_role (user_id);`,
    );
    await queryRunner.query(`CREATE INDEX idx_email ON users (email);`);
    await queryRunner.query(`CREATE INDEX idx_name ON roles (name);`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Removendo índices se a migration for revertida
    await queryRunner.query(`DROP INDEX idx_user_id;`);
    await queryRunner.query(`DROP INDEX idx_email;`);
    await queryRunner.query(`DROP INDEX idx_name;`);
  }
}
