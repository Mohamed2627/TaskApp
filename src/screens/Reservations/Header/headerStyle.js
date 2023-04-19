/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: deviceWidth * 0.9,
        height: 200,
        position: 'relative',
    },
    backgroundImage: {
        width: deviceWidth * 0.9,
        height: '80%',
        borderRadius: 20,
    },
    heartIconWraper: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '15%',
        right: '3%',
        width: 35,
        height: 35,
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
        bottom: '15%',
        right: '3%',
        width: 50,
        height: 20,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    text: {
        fontSize: 11,
        fontWeight: 'bold',
        color: 'black',
    },
});
