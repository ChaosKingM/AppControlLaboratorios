import {Navigation} from './src/routes/BrowserRoutes'
import {SafeAreaProvider } from 'react-native-safe-area-context';
import useLoadFonts from './src/hooks/useLoadFonts';

export default function App() {

    const isAppReady = useLoadFonts();
    if (!isAppReady) return null;
    
    return (
    <SafeAreaProvider>
        <Navigation/>
    </SafeAreaProvider>
    )
}




