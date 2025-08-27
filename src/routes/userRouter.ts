import { Router } from "express";
import * as UserController from "../controllers/userController.js";

export const userRouter = Router();

userRouter.get("/", UserController.getUsers);
userRouter.post("/", UserController.createUser);
