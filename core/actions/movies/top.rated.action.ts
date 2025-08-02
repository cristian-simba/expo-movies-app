import axios from "axios";
import { MovieDBMoviesResponse } from "@/infraestructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infraestructure/mappers/movie.mapper";
import { movieApi } from "../api/movie-api";

interface Options {
    page?: number
}

export const topRatedAction = async ({ page = 1 }: Options) => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>('/top_rated', {
      params: { page }
    });
    const response = data.results.filter((r): r is NonNullable<typeof r> => !!r).map(MovieMapper.fromMoviefromTheMovieDBToMovie);
    return response;
  } catch (error) {
    console.log(error);
    return [];
  }
}
