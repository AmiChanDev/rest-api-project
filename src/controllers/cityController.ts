import type { Request, Response } from "express";
import * as cityModel from "../models/cityModel.js";

export const getCities = async (req: Request, res: Response) => {
  try {
    const result = await cityModel.getCities();
    res.json(result);
    console.log("City JSON requested");
  } catch (error) {
    res.status(400).json({ message: error as Error });
  }
};

export const getCity = async (req: Request, res: Response) => {
  try {
    const result = await cityModel.getCity(Number(req.params.id));
    if (!result) return res.status(400).json({ message: "City not found" });
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error as Error });
  }
};

export const createCity = async (req: Request, res: Response) => {
  try {
    const result = await cityModel.createCity(req.body);
    res.status(201).json(result);
    console.log(`City created with id:${result.id}`);
  } catch (error) {
    res.status(400).json({ message: error as Error });
  }
};

export const updateCity = async (req: Request, res: Response) => {
  try {
    const result = await cityModel.updateCity(Number(req.params.id), req.body);
    res.json(result);
    console.log(`City updated with id:${result.id}`);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await cityModel.deleteCity(Number(req.params.id));
    res.json({ message: "City deleted" });
    console.log(`City deleted`);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};
