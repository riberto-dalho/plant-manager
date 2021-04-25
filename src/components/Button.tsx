import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../styles/colors';

interface ButtonProps {
    title: string;
}

export function Button({ title }: ButtonProps) {
    return (
        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        /*width: 56,*/
        paddingHorizontal: 10
    },
    buttonText: {
        fontSize: 24,
        color: colors.white

    },
})