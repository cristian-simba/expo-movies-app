import { MovieMapper } from "@/infraestructure/mappers/movie.mapper"
import { movieApi } from "../api/movie-api"
import { MovieDBMoviesResponse } from "@/infraestructure/interfaces/moviedb-response"

export const nowPlayingAction = async() => {
    try {
        const { data } = await movieApi.get<MovieDBMoviesResponse>('/now_playing')
        const response = data.results.map(MovieMapper.fromMoviefromTheMovieDBToMovie)
        console.log(response)
        return response
    } catch(error) {
        console.log(error)
    }
}