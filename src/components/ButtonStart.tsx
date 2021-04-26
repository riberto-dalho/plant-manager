import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, StyleSheet } from 'react-native';
import colors from '../styles/colors';

import { Feather } from '@expo/vector-icons';

export enum IconTypes {
    RightArrow = 1
}

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    iconType: IconTypes;
}

function IconName(iconType: IconTypes) {
    switch (iconType) {
        case IconTypes.RightArrow: return 'chevron-right'
        default: return 'chevron-right';
    }
}

export function ButtonStart({ title, iconType, ...rest }: ButtonProps) {

    var iconName = IconName(iconType);

    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            {...rest}
        >
            <Text style={styles.buttonText}>
                {title}
                {/* {iconType &&
                    <Feather name={iconName} style={styles.buttonIcon} />
                } */}
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
    buttonIcon: {
        fontSize: 24,
        color: colors.white,

    }
})