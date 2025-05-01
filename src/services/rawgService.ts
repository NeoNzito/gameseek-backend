import { AxiosResponse } from "axios";
import rawgClient, { GameSummary, PagedResult } from "../api/rawgClient";

export const fetchGames = async(
    page: number = 1,
    pageSize: number = 20,
    filters: Record<string, string | number> = {}
): Promise<PagedResult<GameSummary>> => {
    const params = { page, page_size: pageSize, ...filters };
    const response: AxiosResponse<PagedResult<GameSummary>> =
        await rawgClient.get('/games', { params });
    return response.data;
}

export const fetchGameById = async(id: number) => {
    const response: AxiosResponse = await rawgClient.get(`/games/${id}`);
    return response.data;
}

export const searchGames = async(
    query: string,
    page: number = 1,
    pageSize: number = 20
): Promise<PagedResult<GameSummary>> => {
    const params = { search: query, page, page_size: pageSize };
    const response: AxiosResponse<PagedResult<GameSummary>> = 
        await rawgClient.get("/games", { params });
    return response.data;
}