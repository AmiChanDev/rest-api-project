import type { Request, Response } from "express";
import * as userModel from "../models/userModel.js";
import { json } from "zod";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await userModel.getUsers();
    res.json(result);
    console.log("User JSON requested");
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await userModel.createUser(req.body);
    res.status(201).json(user);
    console.log(`User created with name:${user.id}`);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};
