import { MovieDBMovieResponse } from "@/infraestructure/interfaces/moviedb-movie.response";
import { movieApi } from "../api/movie-api";
import { MovieMapper } from "@/infraestructure/mappers/movie.mapper";
import { CompleteMovie } from "@/infraestructure/interfaces/movie.interface";


export const getMovieByIdAction = async (id: number | string): Promise<CompleteMovie> => {
  try {
    const { data } = await movieApi.get<MovieDBMovieResponse>(`/${id}`);
    return MovieMapper.fromTheMovieDBToCompleteMovie(data);
  } catch (error) {
    console.log(error);
    throw 'Cannot load now playing movies';
  }
};