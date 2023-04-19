/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import { Colors } from '../../../common/colors';

export const styles = StyleSheet.create({
    componentWraper: {
        position: 'relative',
        width: '100%',
    },
    firstRowWraper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconTextWraper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 6,
    },
    icon: {
        width: 12,
        height: 12,
    },
    text: {
        color: '#180732',
        paddingLeft: 4,
        fontSize: 12,
    },
    dateText: {
        fontSize: 12,
        color: Colors.secondaryColor,
        paddingLeft: 4,
    },
    cancelButton: {
        backgroundColor: 'white',
        borderColor: '#f13939c1',
        borderWidth: 2,
        width: 70,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        position: 'absolute',
        bottom: '12%',
        right: 0,
    },
});
