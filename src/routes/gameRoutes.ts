import { Router } from "express";
import RawgController from "../controllers/rawgController";

const router = Router();
const rawgController = new RawgController();

router.get("/", rawgController.fetchGames);
router.get("/:id", rawgController.fetchGameById);
router.get("/search", rawgController.searchGames);

export default router;