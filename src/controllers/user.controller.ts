import { Request, Response, NextFunction } from 'express';
import * as userService from '../services/user.service';
import { IUser } from '../models/user.model';

interface AuthRequest extends Request {
  user?: IUser;
}

export const registerUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userService.registerUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userService.loginUser(req.body);
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const getUserProfile = async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        const user = await userService.getUserProfile(req.user!._id);
        res.json(user);
    } catch (error) {
        next(error);
    }
};

export const updateUserProfile = async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        const user = await userService.updateUserProfile(req.user!._id, req.body);
        res.json(user);
    } catch (error) {
        next(error);
    }
};
