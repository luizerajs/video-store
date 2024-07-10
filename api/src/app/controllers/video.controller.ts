import { Request, Response } from "express";
import { videoRepository } from "../repositories/video.repository";
import { APIError } from "@helpers/error-response.helper";
import { folderRepository } from "@repositories/folder.repository";

export class VideoController {
  static async add(request: Request, response: Response) {
    try {
      const { url, description } = request.body;

      const { folderId } = request.params;

      const folder = await folderRepository.findOneBy({ id: folderId });

      if (!folder) {
        const apiResponseError = APIError.notFound(
          new Error("Folder is not found")
        );
        return response.status(apiResponseError.code).json(apiResponseError);
      }

      const newVideo = videoRepository.create({ description, folder, url });
      const output = await videoRepository.save(newVideo);

      return response.status(200).json(output);
    } catch (err) {
      const serverError = APIError.serverError(
        new Error("Internal Server Error")
      );
      return response.status(serverError.statusCode).json(serverError);
    }
  }

  static async listAll(_request: Request, response: Response) {
    try {
      const output = await videoRepository.find();
      return response.status(200).json(output);
    } catch (error) {
      const serverError = APIError.serverError(
        new Error("Internal Server Error")
      );
      return response.status(serverError.statusCode).json(serverError);
    }
  }
}
