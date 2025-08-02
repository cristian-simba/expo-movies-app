import { Movie } from "@/infraestructure/interfaces/movie.interface"
import { useRef } from "react";
import { View, Text, Dimensions, useWindowDimensions } from "react-native"
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import MoviePoster from "./MoviePoster";

interface Props {
  movies: Movie[]
}

export default function MainSlideShow({ movies } : Props) {

  const ref = useRef<ICarouselInstance>(null)
  const width = useWindowDimensions().width

  return (
    <View className='h-[250px] w-full'>
      <Carousel
        ref={ref}
        data={movies}
        renderItem={({item}) => <MoviePoster id={item.id} poster={item.poster}/> }
        width={200}
        height={350}
        style={{
            width: width,
            height: 350,
            justifyContent: 'center',
            alignItems: 'center'
        }}
        mode="parallax"
        modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 50,
        }}
        defaultIndex={1}
      />
    </View>
  )
}
