import {useNavigation} from '@react-navigation/native'
import {View, Text, Pressable} from 'react-native'
import { styles } from './LoginStyles';
import { StatusBar } from 'expo-status-bar';
import { probarClienteHTTP } from '../../services/testApi';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen(){
    const navigation = useNavigation()

    return (
          <View style={styles.container}>
            <SafeAreaView style={styles.heroMarca}>
                <View style={styles.frameBadge}>
                  <View style={styles.utrBadge}>
                    <Text style={styles.badgeText}>UTR</Text>
                  </View>
                </View>
             </SafeAreaView>

            <Pressable onPress={probarClienteHTTP} style={styles.button}>
              <Text style={styles.buttonText}>Probar</Text>
            </Pressable>
           
          </View>
    );
}


