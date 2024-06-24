import * as service from "./service";
import { Request, Response } from "express";

export const getDomains = async (req: Request, res: Response) => {
  try {
    const domains = await service.getAllDomains();
    res.status(200).json(domains);
  } catch (err) {
    console.log(err);
  }
};

export const createDomain = async (req: Request, res: Response) => {
  try {
    const { domain } = req.body;
    await service.createDomain(domain);
    res.status(200).json("successfully send email");
  } catch (err) {
    console.log(err);
  }
};
