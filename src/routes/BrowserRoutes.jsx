import { createStaticNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/Login/Login'

const RootStack = createNativeStackNavigator({
    screens: {
        Login: {
            screen: LoginScreen,
            options: {
                headerShown: false
            }
        },
    },
});

export const Navigation = createStaticNavigation(RootStack);