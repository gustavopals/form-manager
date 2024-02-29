import { Response } from 'express';

export class ErrorHelper {
  static handleError(error: Error, res: Response): void {
    const errorContent = {
      code: 500,
      message: error.message,
      detailedMessage: error.stack,
    };
    res.status(500).json(errorContent);
  }
}
