import { Router } from "express";
import * as APIRoutes from "./@index";
import { FolderMiddleware } from "@middlewares/folder.middleware";
import { VideoMiddleware } from "@middlewares/video.middleware";

const routes = Router();

routes.use("/folder", FolderMiddleware.createValidate, APIRoutes.FolderRouter);
routes.use(
  "/video/:folderId",
  VideoMiddleware.createValidate,
  APIRoutes.VideoRouter
);

export { routes };
