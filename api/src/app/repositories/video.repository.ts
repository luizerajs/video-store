import { AppDataSource } from "@config/datasource";
import Video from "@entities/video.entity";

export const videoRepository = AppDataSource.getRepository(Video);
