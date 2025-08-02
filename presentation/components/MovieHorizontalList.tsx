import { useEffect, useRef } from 'react';
import { Movie } from '@/infraestructure/interfaces/movie.interface';
import { View, Text, FlatList, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import MoviePoster from './MoviePoster';

interface Props {
  title?: string
  movies: Movie[]
  loadNextPage?: () => void
}

export default function MovieHorizontalList({ title, movies, loadNextPage }: Props ) {

  const isLoading = useRef(false)

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false
    }, 200)
  }, [movies])

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if(isLoading.current) return

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent
    const isEndReached = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width
    
    if(!isEndReached) return
    
    isLoading.current = true

    loadNextPage && loadNextPage()

  }

  return (
    <View>
      {title && <Text className='text-3xl font-semibold px-4 mt-10 mb-6'>{title}</Text>}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, i) => `${item.id}-${i}`}
        data={movies}
        renderItem={({item}) => <MoviePoster id={item.id} poster={item.poster} smallPoster />}
        onScroll={onScroll}
      />
    </View>
  )
}
