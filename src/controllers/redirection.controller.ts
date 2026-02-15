import { Request, Response, NextFunction } from 'express';
import * as redirectionService from '../services/redirection.service';
import { IRedirection } from '../models/redirection.model';

export const createRedirection = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const redirection = await redirectionService.createRedirection(req.body);
    res.status(201).json(redirection);
  } catch (error) {
    next(error);
  }
};

export const getRedirections = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const redirections = await redirectionService.getRedirections();
    res.json(redirections);
  } catch (error) {
    next(error);
  }
};

export const getRedirectionById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const redirection = await redirectionService.getRedirectionById(req.params.id);
    if (redirection) {
      res.json(redirection);
    } else {
      res.status(404).json({ message: 'Redirection not found' });
    }
  } catch (error) {
    next(error);
  }
};

export const updateRedirection = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const redirection = await redirectionService.updateRedirection(req.params.id, req.body);
    if (redirection) {
      res.json(redirection);
    } else {
      res.status(404).json({ message: 'Redirection not found' });
    }
  } catch (error) {
    next(error);
  }
};

export const deleteRedirection = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const redirection = await redirectionService.deleteRedirection(req.params.id);
    if (redirection) {
      res.json({ message: 'Redirection removed' });
    } else {
      res.status(404).json({ message: 'Redirection not found' });
    }
  } catch (error) {
    next(error);
  }
};
