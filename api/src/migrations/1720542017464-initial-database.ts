import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialDatabase1720542017464 implements MigrationInterface {
    name = 'InitialDatabase1720542017464'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "folders" ("id" varchar PRIMARY KEY NOT NULL, "name" text NOT NULL, "slug" text NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "videos" ("id" varchar PRIMARY KEY NOT NULL, "url" text NOT NULL, "folder_id" varchar)`);
        await queryRunner.query(`CREATE TABLE "temporary_videos" ("id" varchar PRIMARY KEY NOT NULL, "url" text NOT NULL, "folder_id" varchar, CONSTRAINT "FK_e2636c9f513ca0bf5b88e6227cd" FOREIGN KEY ("folder_id") REFERENCES "folders" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_videos"("id", "url", "folder_id") SELECT "id", "url", "folder_id" FROM "videos"`);
        await queryRunner.query(`DROP TABLE "videos"`);
        await queryRunner.query(`ALTER TABLE "temporary_videos" RENAME TO "videos"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "videos" RENAME TO "temporary_videos"`);
        await queryRunner.query(`CREATE TABLE "videos" ("id" varchar PRIMARY KEY NOT NULL, "url" text NOT NULL, "folder_id" varchar)`);
        await queryRunner.query(`INSERT INTO "videos"("id", "url", "folder_id") SELECT "id", "url", "folder_id" FROM "temporary_videos"`);
        await queryRunner.query(`DROP TABLE "temporary_videos"`);
        await queryRunner.query(`DROP TABLE "videos"`);
        await queryRunner.query(`DROP TABLE "folders"`);
    }

}
