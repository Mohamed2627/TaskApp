/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import { Colors } from '../../common/colors';

export const styles = StyleSheet.create({
    tabBarContainer: {
        backgroundColor: 'white',
        borderTopRightRadius: 17,
        borderTopLeftRadius: 17,
        height: 100,
    },
    labelIconContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 90,
        height: 50,
    },
    labelContainer: {
        alignItems: 'center',
    },
    unfocusedLabel: {
        fontSize: 12,
        color: Colors.primaryColor,
    },
    focusedLabel: {
        color: Colors.secondaryColor,
        fontWeight: 'bold',
    },
    focusedIcon: {
        width: 16,
        height: 15,
        tintColor: Colors.secondaryColor,
    },
    unfocusedIcon: {
        width: 15,
        height: 15,
        tintColor: Colors.primaryColor,
    },
});
