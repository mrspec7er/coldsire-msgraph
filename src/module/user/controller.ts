import * as service from "./service";
import { Request, Response } from "express";

export const getCurrentUsers = async (req: Request, res: Response) => {
  try {
    const user = await service.getUser();
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
};
