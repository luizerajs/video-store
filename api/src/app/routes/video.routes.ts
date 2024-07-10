import { VideoController } from "@controlers/video.controller";
import { Router } from "express";

const VideoRouter = Router();

VideoRouter.post("/", VideoController.add);
VideoRouter.get("/", VideoController.listAll);

export { VideoRouter };
