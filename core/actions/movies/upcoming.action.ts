import axios from "axios";
import { MovieDBMoviesResponse } from "@/infraestructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infraestructure/mappers/movie.mapper";
import { movieApi } from "../api/movie-api";

export const upcomingAction = async () => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>('/upcoming')
    const response = data.results.map(MovieMapper.fromMoviefromTheMovieDBToMovie)
    return response
  } catch (error) {
    console.log(error);
  }
};