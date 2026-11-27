import {Text, Pressable, StyleSheet} from 'react-native';


export default function Button({title = 'Botón', onPress, style}) {
    return (
        <Pressable style={[styles.button, style]} onPress={onPress}>
            <Text style={[styles.text]}>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#8A151B',
        height: 50,
        gap: 8,
        alignSelf: 'stretch',
        paddingHorizontal: 20,
        borderRadius: 9999,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
    color: '#FFFFFF',
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
  },
})