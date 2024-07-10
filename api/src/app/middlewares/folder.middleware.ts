import { APIError } from "@helpers/error-response.helper";
import { NextFunction, Request, Response } from "express";
import * as Joi from "joi";

export class FolderMiddleware {
  static createValidate(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const schema = Joi.object({
      name: Joi.string().required(),
      slug: Joi.string().required(),
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
