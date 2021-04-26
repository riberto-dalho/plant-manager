import React, { useState } from 'react';
import { KeyboardAvoidingView, SafeAreaView, Text, TextInput, Platform, StyleSheet, View } from 'react-native';

import { Button } from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Confirmation() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoticon}>
                    😄
                </Text>

                <Text style={styles.title}>
                    Prontinho!
                </Text>

                <Text style={styles.subtitle}>
                    Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
                </Text>
            </View>

            <View style={styles.footer}>
                <Button />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', justifyContent: 'center'
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 30
    },
    title: {
        fontSize: 22,
        fontFamily: fonts.heading,
        textAlign: 'center',
        color: colors.heading,
        lineHeight: 38,
        marginTop: 15
    },
    subtitle: {
        fontFamily: fonts.text,
        fontSize: 17,
        textAlign: 'center',
        paddingVertical: 20,
        color: colors.heading
    },
    emoticon: {
        fontSize: 20
    },
    footer: {
        width: '100%',
        paddingHorizontal: 75
    }
})