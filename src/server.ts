import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";
import cors from "cors";
import dotenv from "dotenv";

import { userRouter } from "./routes/userRouter.js";
import { cityRouter } from "./routes/cityRouter.js";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/user", userRouter);
app.use("/api/city", cityRouter);

// Health check
app.get("/test", (req, res) => {
  console.log("REST API called!");
  res.status(200).json("API Working");
});

// Error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});
