import { Slot } from 'expo-router';
import './global.css'
import { nowPlayingAction } from '@/core/actions/movies/now-playing.action';

export default function RootLayout() {
  return (
    <Slot/>
  );
}