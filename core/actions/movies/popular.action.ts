import { MovieMapper } from "@/infraestructure/mappers/movie.mapper"
import { movieApi } from "../api/movie-api"
import { MovieDBMoviesResponse } from "@/infraestructure/interfaces/moviedb-response"

export const popularMoviesAction = async() => {
    try {
        const { data } = await movieApi.get<MovieDBMoviesResponse>('/popular')
        const response = data.results.map(MovieMapper.fromMoviefromTheMovieDBToMovie)
        return response
    } catch(error) {
        console.log(error)
    }
}