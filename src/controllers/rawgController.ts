import { Request, Response } from "express";
import { fetchGames, fetchGameById, searchGames } from "../services/rawgService";

export default class RawgController {
    fetchGames = async (req: Request, res: Response) => {
        const page = Number(req.query.page) || 1;
        const data = await fetchGames(page, 20);
        res.json(data);
    }

    fetchGameById = async(req: Request, res: Response) => {
        const game = await fetchGameById(+req.params.id);
        res.json(game);
    }

    searchGames = async(req: Request, res: Response) => {
        const results = await searchGames(req.query.q as string);
        res.json(results);
    }
}
