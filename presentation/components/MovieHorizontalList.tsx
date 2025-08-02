import { Movie } from '@/infraestructure/interfaces/movie.interface';
import { View, Text, FlatList } from 'react-native';
import MoviePoster from './MoviePoster';

interface Props {
  title?: string
  movies: Movie[]
}

export default function MovieHorizontalList({ title, movies }: Props ) {

  return (
    <View>
      {title && <Text className='text-3xl font-semibold px-4 mt-10 mb-6'>{title}</Text>}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        data={movies}
        renderItem={({item}) => <MoviePoster id={item.id} poster={item.poster} smallPoster />}
      />
    </View>
  )
}
