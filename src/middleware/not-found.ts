import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const notFound = (req: Request, res: Response): void => {
    res.status(StatusCodes.NOT_FOUND).send('Route does not exist');
};

export default notFound;
