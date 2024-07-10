import { Request, Response } from "express";
import { folderRepository } from "../repositories/folder.repository";
import { APIError } from "@helpers/error-response.helper";

export class FolderController {
  static async add(request: Request, response: Response) {
    try {
      const { name, slug } = request.body;
      const newFolder = folderRepository.create({ name, slug });
      const output = await folderRepository.save(newFolder);

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
      const output = await folderRepository.find({
        relations: { videos: true },
      });
      return response.status(200).json(output);
    } catch (error) {
      const serverError = APIError.serverError(
        new Error("Internal Server Error")
      );
      return response.status(serverError.statusCode).json(serverError);
    }
  }
}
