// scripts/generate-migration.ts
import { execSync } from "child_process";

const migrationName = process.argv[2];
if (!migrationName) {
  console.error("Migration name is required.");
  process.exit(1);
}

const command = `yarn run typeorm -d ./src/config/datasource/datasource.config.ts migration:generate ./src/migrations/${migrationName}`;
execSync(command, { stdio: "inherit" });
