/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Image, Text } from 'react-native';
import Title from '../../../utils/Title';
import { styles } from './previousStlye';
import ReReserveButton from '../../../utils/ReReserveButton';
import { Images } from '../../../common/images';

const Previous = ({ data }) => {
    return (
        <View style={styles.componentWraper}>
            <Title brand="The Globe" place="International" />
            <View style={styles.iconTextWraper}>
                <Image
                    resizeMode="contain"
                    style={styles.icon}
                    source={Images.locationIcon}
                />
                <Text style={styles.text}>
                    {data.id}
                </Text>
            </View>
            <View style={styles.iconTextWraper}>
                <Image
                    resizeMode="contain"
                    style={styles.icon}
                    source={Images.profileIcon}
                />
                <Text style={styles.text}>
                    {data.title}
                </Text>
            </View>
            <View style={styles.iconTextWraper}>
                <Image
                    resizeMode="contain"
                    style={styles.icon}
                    source={Images.phoneIcon}
                />
                <Text style={styles.text}>
                    Mode Al Faisalih-Riaydh
                </Text>
            </View>
            <View style={styles.iconTextWraper}>
                <Image
                    resizeMode="contain"
                    style={styles.icon}
                    source={Images.calenderIcon}
                />
                <Text style={styles.dateText}>
                    Mode Al Faisalih-Riaydh
                </Text>
            </View>
            <View style={styles.buttonWraper}>
                <ReReserveButton />
            </View>
        </View>
    );
};

export default Previous;
