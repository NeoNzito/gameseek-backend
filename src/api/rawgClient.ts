import axios, { AxiosInstance } from "axios";
import dotenv from "dotenv";

dotenv.config();

const RAWG_API_KEY = process.env.RAWG_API_KEY;
if (!RAWG_API_KEY) {
    throw new Error("Missing RAWG_API_KEY in enviroment variables");
}

const rawgClient: AxiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: RAWG_API_KEY,
    },
    timeout: 5000,
});

export interface GameSummary {
    id: number;
    name: string;
    released: string;
    background_image: string;
    rating: string;
}

export interface PagedResult<T> {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
}

export default rawgClient;