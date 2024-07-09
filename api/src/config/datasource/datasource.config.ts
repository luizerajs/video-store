import "reflect-metadata";

import { join } from "path";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  entities: [join(__dirname, "/../../../**/entities/*.{ts,js}")],
  migrations: [join(__dirname, "/../../../**/migrations/*.{ts,js}")],
});
