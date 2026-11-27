import {useNavigation} from '@react-navigation/native'
import {View, Text, Pressable} from 'react-native'
import { styles } from './LoginStyles';
import { probarClienteHTTP } from '../../services/testApi';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/common/Button';
import DefaultTextField from '../../components/common/TextField';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function LoginScreen(){
    const navigation = useNavigation()
    const hola = () => console.log('hola')
    return (
          //Contenedor blanco
          <View style={styles.container}>
            {/* Contenedor rojo superior */}
            <SafeAreaView style={styles.heroMarca}>
                {/* Frame para separar el renglón superior */}
                <View style={styles.frameBadge}>
                  <View style={styles.utrBadge}>
                    <Text style={styles.badgeText}>UTR</Text>
                  </View>
                  <Text style={styles.sideBadgeText}>UTR/Laboratorios</Text>
                </View>
                {/* Iniciar sesión */}
                <View style={styles.login}>
                  <Text style={styles.loginTitle}>Inicia sesión</Text>
                  <Text style={styles.loginBody}>Ingresa con tu correo institucional y contraseña</Text>
                </View>
             </SafeAreaView>

             <View style={styles.bodyContainer}>
                <DefaultTextField 
                placeholder='Escribe aquí tu correo electrónico...' 
                upTitle='Correo Electrónico *' 
                icono={<MaterialCommunityIcons name='email-outline' size={20} color={'#525260'}/>}
                />

                <DefaultTextField 
                placeholder='Escribe aquí tu contraseña...' 
                upTitle='Contraseña *' 
                icono={<MaterialCommunityIcons name='lock-outline' size={20} color={'#525260'}/>}
                isPassword={true}
                />

                

                <Button title='Iniciar sesión' onPress={probarClienteHTTP}/>   
             </View>

                
          </View>
    );
}


