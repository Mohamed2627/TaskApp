/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Colors } from '../common/colors';

const Title = ({ brand, place }) => {
    // console.log(props)
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.brand}>
                {brand}
            </Text>
            <Text style={styles.place}>
                {place}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    brand: {
        color: Colors.primaryColor,
        fontSize: 17,
        fontWeight: 'bold',
    },
    place: {
        fontSize: 11,
        marginLeft: 6,
        color: '#180732',
    },

});

export default Title;
