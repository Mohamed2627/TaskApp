/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../common/colors';

const ReReserveButton = () => {
    return (
        <TouchableOpacity
            style={styles.rereservButton}
        >
            <Text style={styles.text}>Re-Reserve</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    rereservButton: {
        backgroundColor: Colors.primaryColor,
        width: 80,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    text: {
        color: 'white',
        fontSize: 12,
    },
});

export default ReReserveButton;
