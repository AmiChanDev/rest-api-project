import type { Request, Response } from "express";
import * as userModel from "../models/userModel.js";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await userModel.getUsers();
    res.json(result);
    console.log("User JSON requested");
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await userModel.getUserById(Number(req.params.id));
    if (!user) return res.status(400).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await userModel.createUser(req.body);
    res.status(201).json(user);
    console.log(`User created with id:${user.id}`);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await userModel.updateUser(Number(req.params.id), req.body);
    res.json(user);
    console.log(`User updated with id:${user.id}`);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await userModel.deleteUser(Number(req.params.id));
    res.json({ message: "User deleted" });
    console.log(`User deleted`);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};
