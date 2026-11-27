import { useState } from 'react';
import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native';

export default function TextField({upTitle='Titulo de la cosa', placeholder='Lo que debe de escribir', icono, isPassword=false}){
    const [text, setText] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    return(
        <View style={styles.container}>
            <Text style={styles.upperText}>{upTitle}</Text>
            <View style={styles.inputContainer}>
                {icono}
                <TextInput 
                onChangeText={setText} 
                value={text} 
                placeholder={placeholder} 
                secureTextEntry={isPassword && !showPassword}
                style={styles.textInput}
                />

                {isPassword && (
                    <Pressable onPress={() => setShowPassword(!showPassword)}>
                        <Text style={styles.showText}>
                            {showPassword ? 'Ocultar' : 'Mostrar'}
                            </Text>
                    </Pressable>
                )}
                
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 5,

    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height:48,
        borderRadius:14,
        paddingHorizontal:14,
        borderWidth:1,
        borderColor: '#E6E6EC',
        backgroundColor: '#F6F6F8',
        gap:10,
    },
    textInput: {
        flex:1,
    },
    showText: {
        fontFamily: 'Inter_600SemiBold',
        fontSize:12,
        lineHeight:16,
        color:'#3460DB'
    },  
    upperText: {
        fontFamily: 'Inter_600SemiBold',
        fontSize: 12,
        lineHeight: 16,
        color: '#525260'
    },
})