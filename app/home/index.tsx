import { useMovies } from '@/presentation/hooks/useMovies'
import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function Home() {

  const safeArea = useSafeAreaInsets()
  const { nowPlayingQuery } = useMovies()

  if(nowPlayingQuery.isLoading) {
    return (
      <View className='justify-center items-center flex-1'>
        <ActivityIndicator color={'black'} size={40}/>
      </View>
    )
  }

  return (
    <View className='mt-2' style={{ paddingTop: safeArea.top }}>
      <Text className='text-3xl font-semibold mb-2 px-4'>Home</Text>
      
    </View>
  )
}
