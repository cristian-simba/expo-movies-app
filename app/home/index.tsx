import MainSlideShow from '@/presentation/components/movies/MainSlideShow'
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList'
import { useMovies } from '@/presentation/hooks/useMovies'
import React from 'react'
import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function Home() {

  const safeArea = useSafeAreaInsets()
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } = useMovies()

  if(nowPlayingQuery.isLoading) {
    return (
      <View className='justify-center items-center flex-1'>
        <ActivityIndicator color={'black'} size={30}/>
      </View>
    )
  }

  return (
    <ScrollView>
      <View className='mt-2 pb-16' style={{ paddingTop: safeArea.top }}>
        <Text className='text-3xl font-semibold px-4'>Home</Text>
        <MainSlideShow movies={nowPlayingQuery.data ?? []}/>

        <MovieHorizontalList 
          title='Popular' 
          movies={popularQuery.data ?? []}
          />
        
        <MovieHorizontalList 
          title='Top Rated' 
          movies={topRatedQuery.data?.pages.flat() ?? []}
          loadNextPage={topRatedQuery.fetchNextPage}
        />

        <MovieHorizontalList 
          title='Upcoming' 
          movies={upcomingQuery.data ?? []}
        />

      </View>
    </ScrollView>
  )
}
