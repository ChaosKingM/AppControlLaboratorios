import AsyncStorage from '@react-native-async-storage/async-storage';
import api from './api';

export const probarClienteHTTP = async () => {
  try {
    // JWT Doble que viaja en el camino
    await AsyncStorage.setItem('user_token', 'jwt_usuario_falso_777');
    const resHeaders = await api.get('/headers');
    console.log('Headers recibidos por el servidor:', resHeaders.data.headers);
    // "X-Api-Token" y "Authorization: Bearer jwt_usuario_falso_999"

    // 403 Forbidden simulado con alert. alert
    await api.get('/status/403');
  } catch (error) {
    console.log('Error de 403:', error.response?.status);
  }

  try {
    // PRUEBA 3: Simular un 401 Unauthorized (debe borrar user_token de AsyncStorage)
    await api.get('/status/401');
  } catch (error) {
    const tokenRestante = await AsyncStorage.getItem('user_token');
    console.log('Token después del 401 (debe ser null):', tokenRestante);
  }
};