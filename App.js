import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { probarClienteHTTP } from './src/services/testApi';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Pressable onPress={probarClienteHTTP} style={styles.button}>
        <Text style={styles.buttonText}>Probar</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
  backgroundColor: '#000',
  paddingVertical: 12,
  paddingHorizontal: 20,
  borderRadius: 8,
  marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
