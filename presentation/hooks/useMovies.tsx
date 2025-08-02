import { nowPlayingAction } from "@/core/actions/movies/now-playing.action"
import { popularMoviesAction } from "@/core/actions/movies/popular.action"
import { topRatedAction } from "@/core/actions/movies/top.rated.action"
import { upcomingAction } from "@/core/actions/movies/upcoming.action"
import { useQuery } from "@tanstack/react-query"

export const useMovies = () => {
    
    const nowPlayingQuery = useQuery({ 
        queryKey: ['movies', 'nowPlaying'], 
        queryFn: nowPlayingAction,
        staleTime: 1000 * 60 * 60 * 24
    })

    const popularQuery = useQuery({ 
        queryKey: ['movies', 'popular'], 
        queryFn: popularMoviesAction,
        staleTime: 1000 * 60 * 60 * 24
    })

    const topRatedQuery = useQuery({ 
        queryKey: ['movies', 'top-rated'], 
        queryFn: topRatedAction,
        staleTime: 1000 * 60 * 60 * 24
    })

    const upcomingQuery = useQuery({ 
        queryKey: ['movies', 'upcoming'], 
        queryFn: upcomingAction,
        staleTime: 1000 * 60 * 60 * 24
    })

    return {
        nowPlayingQuery,
        popularQuery,
        topRatedQuery,
        upcomingQuery
    }


}