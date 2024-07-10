import Video from "@entities/video.entity";
import { APIError } from "@helpers/error-response.helper";
import { videoRepository } from "@repositories/video.repository";
import { NextFunction, Request, Response } from "express";
import * as Joi from "joi";

export class VideoMiddleware {
  static async createValidate(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const schema = Joi.object<Video>({
      description: Joi.string(),
      url: Joi.string().uri(),
    });

    const result: Joi.ValidationResult = schema.validate(request.body, {
      abortEarly: false,
    });

    if (result.error) {
      const errors = result.error.details.map((err) => err.message);
      const apiResponseError = APIError.unprocessableEntity(errors);
      return response.status(apiResponseError.code).json(apiResponseError);
    }

    next();
  }
}
