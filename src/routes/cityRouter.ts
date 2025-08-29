import { Router } from "express";
import * as cityController from "../controllers/cityController.js";

export const cityRouter = Router();

cityRouter.get("/", cityController.getCity);
cityRouter.post("/", cityController.createCity);
cityRouter.put("/:id", cityController.updateCity);
cityRouter.delete("/:id", cityController.deleteCity);
