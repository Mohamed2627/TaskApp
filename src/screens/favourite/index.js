/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Favourite = () => {
    return (
        <View style={styles.wraper}>
            <Text style={styles.text}>
                favourite
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    wraper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
    },
});

export default Favourite;
