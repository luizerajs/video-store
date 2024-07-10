export class APIError {
  static unprocessableEntity(errors: string[]) {
    return {
      name: "UNPROCESSABLE ENTITY",
      code: 422,
      message: "Invalid request data",
      errors,
    };
  }

  static notFound(error: Error) {
    return {
      code: 404,
      body: {
        error: error.message,
      },
    };
  }

  static badRequest(error: Error) {
    return {
      code: 400,
      body: {
        error: error.message,
      },
    };
  }

  static unauthorizedError(error: Error) {
    return {
      statusCode: 401,
      body: {
        error: error.message,
      },
    };
  }

  static serverError(error: Error) {
    return {
      statusCode: 500,
      body: {
        error: error.message,
      },
    };
  }
}
