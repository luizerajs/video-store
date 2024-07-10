import { AppDataSource } from "@config/datasource";
import Folder from "@entities/folder.entity";

export const folderRepository = AppDataSource.getRepository(Folder);
