import { ErrorRequestHandler } from 'express';
import StatusCodes from '../enums/statusCode';

const errorMiddleware: ErrorRequestHandler = (err, _req, res, _next) => {
  if (err.statusCode) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: err.message });
};

export default errorMiddleware;
