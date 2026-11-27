import { useFonts } from 'expo-font'; 
import { PlusJakartaSans_400Regular, PlusJakartaSans_600SemiBold, PlusJakartaSans_700Bold } from '@expo-google-fonts/plus-jakarta-sans';
import * as SplashScreen from 'expo-splash-screen'; 
import {useEffect} from 'react';
import { Inter_600SemiBold } from '@expo-google-fonts/inter';


SplashScreen.preventAutoHideAsync();


export default function useLoadFonts() {
  const [loaded, error] = useFonts({
    PlusJakartaSans_700Bold,
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_400Regular,
    Inter_600SemiBold
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  return loaded || error
}
