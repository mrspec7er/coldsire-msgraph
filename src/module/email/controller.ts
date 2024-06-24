import * as service from "./service";
import { Request, Response } from "express";

export const getEmails = async (req: Request, res: Response) => {
  try {
    const mails = await service.getInboxMail();
    res.status(200).json(mails);
  } catch (err) {
    console.log(err);
  }
};

export const sendEmails = async (req: Request, res: Response) => {
  try {
    const { body, recipient, subject } = req.body;
    await service.sendMail(subject, body, recipient);
    res.status(200).json("successfully send email");
  } catch (err) {
    console.log(err);
  }
};
