import {Navigation} from './src/routes/BrowserRoutes'
import {SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {

    return (
    <SafeAreaProvider>
        <Navigation/>
    </SafeAreaProvider>
    )
}




