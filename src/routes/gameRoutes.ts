import { Router } from "express";
import RawgController from "../controllers/rawgController";

const router = Router();
const rawgController = new RawgController();

router.get("/", rawgController.fetchGames);
router.get("/search", rawgController.searchGames);

router.param("id", (req, res, next, id) => {
    const num = Number(id);
    if (!Number.isInteger(num)) {
        return res.status(400).send("Invalid ID");
    }
    (req as any).gameId = num;
    next();
});

router.get("/:id", rawgController.fetchGameById);

export default router;