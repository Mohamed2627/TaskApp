/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import { Colors } from '../../../common/colors';

export const styles = StyleSheet.create({
    componentWraper: {
        position: 'relative',
        width: '100%',
        marginTop: '7%',
        backgroundColor: '#fdfdfd',
        paddingHorizontal: '2%',
        paddingVertical: '4%',
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
        color: Colors.secondaryColor,
        paddingLeft: 4,
        fontSize: 12,
    },
    buttonWraper: {
        position: 'absolute',
        bottom: '13%',
        right: 0,
    },
});
