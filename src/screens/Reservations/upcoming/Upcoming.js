/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { styles } from './upcomingStyle';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Images } from '../../../common/images';
import Title from '../../../utils/Title';

const Upcoming = () => {
    return (
        <View style={styles.componentWraper}>
            <View style={styles.firstRowWraper}>
                <Title brand="Meraki" place="Greek" />
                <View style={styles.iconTextWraper}>
                    <Image
                        resizeMode="contain"
                        style={styles.icon}
                        source={Images.locationIcon}
                    />
                    <Text style={styles.text}>
                        Mode Al Faisalih-Riaydh
                    </Text>
                </View>
            </View>
            <View style={styles.iconTextWraper}>
                <Image
                    resizeMode="contain"
                    style={styles.icon}
                    source={Images.phoneIcon}
                />
                <Text style={styles.text}>
                    +966 11 481 0569
                </Text>
            </View>
            <View style={styles.iconTextWraper}>
                <Image
                    resizeMode="contain"
                    style={styles.icon}
                    source={Images.profileIcon}
                />
                <Text style={styles.text}>
                    Reservation for 3 people
                </Text>
            </View>
            <View style={styles.iconTextWraper}>
                <Image
                    resizeMode="contain"
                    style={styles.icon}
                    source={Images.calenderIcon}
                />
                <Text style={styles.dateText}>
                    Wed, Aug 28, 9.11 pm
                </Text>
            </View>
            <TouchableOpacity
                style={styles.cancelButton}
            >
                <Text style={{ color: '#f13939c1', fontSize: 12 }}>Cancel</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Upcoming;
