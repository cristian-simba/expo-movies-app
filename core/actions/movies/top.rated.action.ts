import axios from "axios";
import { MovieDBMoviesResponse } from "@/infraestructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infraestructure/mappers/movie.mapper";
import { movieApi } from "../api/movie-api";

interface Options {
    page?: number
}

export const topRatedAction = async({ page = 1 }: Options) =>{
    try{
        const { data } = await movieApi.get<MovieDBMoviesResponse>('/top_rated', {
            params: {
                page: page
            }
        })
        const response = data.results.map(MovieMapper.fromMoviefromTheMovieDBToMovie)
        return response
    } catch (error){
        console.log(error)
    }
}