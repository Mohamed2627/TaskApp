/* eslint-disable prettier/prettier */
import React from 'react';
import { Images } from '../common/images';
import { styles } from './headerStyle';
import {
    View,
    Text,
    Image,
} from 'react-native';


const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <Image
                resizeMode="contain"
                style={styles.backgroundImage}
                source={Images.backGround}
            />
            <View style={styles.heartIconWraper}>
                <Image
                    resizeMode="contain"
                    style={styles.heartIcon}
                    source={Images.heartIcon}
                />
            </View>
            <View style={styles.textWraper}>
                <Text style={styles.text}>10 km</Text>
            </View>
        </View>
    );
};


export default Header;
