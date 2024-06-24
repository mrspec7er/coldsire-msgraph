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

export const createUser = async (req: Request, res: Response) => {
  try {
    const userPayload = { ...req.body };
    await service.createUser(userPayload);
    res.status(200).json("successfully created user");
  } catch (err) {
    console.log(err);
  }
};

export const getOrganizationUsers = async (req: Request, res: Response) => {
  try {
    const users = await service.getOrganizationUsers();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
  }
};

export const updateUserProfile = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const profile = req.file;

    await service.updateUserProfile(id, profile.buffer);
    res.status(200).json("successfully update user profile");
  } catch (err) {
    console.log(err);
  }
};
