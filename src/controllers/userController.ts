import type { Request, Response } from "express";
import * as userModel from "../models/userModel.js";
import { Prisma } from "@prisma/client";

export const getUser = async (req: Request, res: Response) => {
  try {
    const filters: Prisma.UserWhereInput = {};

    if (req.query.id) {
      filters.id = Number(req.query.id);
    }
    if (req.query.name) {
      filters.name = String(req.query.name);
    }
    if (req.query.email) {
      filters.email = String(req.query.email);
    }
    if (req.query.age) {
      filters.age = Number(req.query.age);
    }
    if (req.query.cityId) {
      filters.cityId = Number(req.query.cityId);
    }

    const result = await userModel.getUser(filters);
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
    console.log(`User deleted with id:${Number(req.params.id)}`);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};
