import { Router } from "express";
import * as UserController from "../controllers/userController.js";

export const userRouter = Router();

userRouter.post("/", UserController.createUser);

