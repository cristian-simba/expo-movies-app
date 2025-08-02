import MovieCast from '@/presentation/components/movie/MovieCast';
import MovieDescription from '@/presentation/components/movie/MovieDescription';
import MovieHeader from '@/presentation/components/movie/MovieHeader';
import { useMovie } from '@/presentation/hooks/useMovie';
import { useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';

export default function Movie() {
  const { id } = useLocalSearchParams();
  const { movieQuery, castQuery } = useMovie(+id)

  if( movieQuery.isLoading || !movieQuery.data ){
    return(
      <View className="flex flex-1 justify-center items-center">
        <ActivityIndicator color="purple" size={30} />
        <Text className="mb-4">Espere por favor</Text>
      </View>
    )
  }

  return (
    <ScrollView>
      <MovieHeader 
        poster={movieQuery.data.poster} 
        originalTitle={movieQuery.data.originalTitle} 
        title={movieQuery.data.title} 
      />

      <MovieDescription
        movie={movieQuery.data}
      />

      <MovieCast cast={castQuery.data ?? []} />

    </ScrollView>
  )
}
