import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

console.log(axios.isCancel('something'))

//Create a global instance for all the project, we use the url from .env and a default content-type application/json header, a timeout to indicate how much time it will take to execute
const api = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    }
})

//This is an interceptor, this is made to intercept the request before is sent to the backend, in this case the interceptor injects in the header the 2 JWT verification, the one for expo en the one from the backend
api.interceptors.request.use(
    async (config) => {
        config.headers['x-api-token'] = process.env.EXPO_PUBLIC_API_APP_TOKEN;

        
        const userToken = await AsyncStorage.getItem(`user_token`)
        if(userToken) {
            config.headers.Authorization = `Bearer ${userToken}`
        }

        return config
    },
    (error) => Promise.reject(error)
)

//This is similar to the previous one, only it intercepts before the response reaches the frontend, in this case it manages the status errors
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const status = error.response?.status;

        if(status === 401) {
            await AsyncStorage.removeItem('user_token');
            console.log('Redirigir al login')
        };

        if(status === 403) {
            Alert.alert(
                'Acceso Restringido.',
                'No tienes permitido continuar.',
                [{ text: 'OK', onPress: () => console.log('Accepted'), style: 'cancel' }],
                {cancelable: false}
            );
        };
        return Promise.reject(error
        )
    }
)

export default api;