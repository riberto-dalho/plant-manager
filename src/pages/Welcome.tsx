import React from 'react';
import { SafeAreaView, Text, Image, StyleSheet, Platform, Dimensions, View } from 'react-native';

import wateringImg from '../assets/watering.png'
import { ButtonStart, IconTypes } from '../components/ButtonStart';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Welcome() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                    Gerencie {'\n'}
                suas plantas de {'\n'}
                forma fácil
            </Text>

                <Image source={wateringImg}
                    style={styles.image}
                    resizeMode='contain'
                />

                <Text style={styles.subtitle} >
                    Não esqueça mais de regar suas plantas.
            </Text>

                <ButtonStart title="Avançar" iconType={IconTypes.RightArrow} />

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        paddingTop: Platform.OS === 'android' ? 35 : 0
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
        fontFamily: fonts.heading
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.text
    },
    image: {
        height: Dimensions.get("window").width * 0.7
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    }
})