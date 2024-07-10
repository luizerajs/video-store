import { FolderController } from "@controlers/folder.controller";
import { Router } from "express";

const FolderRouter = Router();

FolderRouter.get("/", FolderController.listAll);
FolderRouter.post("/", FolderController.add);

export { FolderRouter };
