import {QueryClient,QueryClientProvider,} from '@tanstack/react-query'
import { Slot } from 'expo-router';
import './global.css'

export default function RootLayout() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Slot/>
    </QueryClientProvider>
  );
}