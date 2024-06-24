import * as service from "./service";
import { Request, Response } from "express";

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await service.getUser();
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
};

export const getUserToken = async (req: Request, res: Response) => {
  try {
    const user = await service.getUserToken();
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
};
