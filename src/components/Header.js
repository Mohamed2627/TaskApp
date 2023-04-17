/* eslint-disable prettier/prettier */
import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
} from 'react-native';

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <Image
                resizeMode="contain"
                style={styles.backgroundImage}
                source={require('../assets/background_image.jpg')}
            />
            <View style={styles.heartIconWraper}>
                <Image
                    resizeMode="contain"
                    style={styles.heartIcon}
                    source={require('../assets/Vector3xcopy6.png')}
                />
            </View>
            <View style={styles.textWraper}>
                <Text style={styles.text}>10 km</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 150,
        position: 'relative',
    },
    backgroundImage: {
        width: '100%',
        height: '80%',
        borderRadius: 20,
    },
    heartIconWraper: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 25,
        right: 20,
        width: 30,
        height: 30,
        backgroundColor: 'white',
        borderRadius: 30,
    },
    heartIcon: {
        width: 20,
        height: 20,
    },
    textWraper: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 25,
        right: 20,
        width: 60,
        height: 20,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    text: {
        fontWeight: 'bold',
        color: 'black',
    },
});

export default Header;
