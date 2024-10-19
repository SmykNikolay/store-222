/* eslint-disable no-console */
import { Request, Response, NextFunction } from 'express';

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  // eslint-disable-next-line no-unused-vars
  _next: NextFunction,
): void => {
  if (err.name === 'ValidationError') {
    res.status(400).json({ error: 'Invalid data' });
  } else if (err.name === 'NotFoundError') {
    res.status(404).json({ error: 'Resource not found' });
  } else {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default errorHandler;
