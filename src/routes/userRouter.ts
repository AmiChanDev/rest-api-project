import { Router } from "express";
import * as UserController from "../controllers/userController.js";

export const userRouter = Router();

userRouter.get("/", UserController.getUsers);
userRouter.get("/:id", UserController.getUser);
userRouter.post("/", UserController.createUser);
userRouter.put("/:id", UserController.updateUser);
userRouter.delete("/:id", UserController.deleteUser);
