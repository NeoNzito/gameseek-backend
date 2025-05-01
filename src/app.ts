import express from "express";
import cors from "cors";
import gameRouter from "./routes/gameRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/games", gameRouter);

export default app;