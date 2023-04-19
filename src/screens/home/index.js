/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Home = () => {
    return (
        <View style={styles.wraper}>
            <Text style={styles.text}>
                Home
            </Text>
        </View>
    );
}

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

export default Home;
