/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { styles } from './bottomTabStyle';
import { Image, Text, View } from 'react-native';
// Importing the navigation libs
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Images } from '../../common/images';
import { Colors } from '../../common/colors';

// Importing our main screens
import Home from '../../screens/home/index';
import Reservation from '../../screens/Reservations/index';
import Favourite from '../../screens/favourite/index';
import Profile from '../../screens/profile/index';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarContainer,
      })}
    >
      {/* The screens */}
      <Tab.Screen name="Home" component={Home}
        options={{
          headerTitleAlign: 'right',
          tabBarIcon: ({ focused }) => (<View style={styles.labelIconContainer}>
            <Image
              source={Images.homeIcon}
              resizeMode="contain"
              style={focused ? styles.focusedIcon : styles.unfocusedIcon}
            />
            <View style={styles.labelContainer}>
              <Text style={focused ? styles.focusedLabel : styles.unfocusedLabel}> Home </Text>
              <View style={focused ? { backgroundColor: Colors.secondaryColor, width: 20, height: 2 } : {}} />
            </View>
          </View>),
        }}
      />
      <Tab.Screen name="Reservation" component={Reservation}
        options={{
          title: 'Your Reservation',
          headerTitleAlign: 'right',
          headerStyle: {
            backgroundColor: '#ededef',
          },
          tabBarIcon: ({ focused }) => (<View style={styles.labelIconContainer}>
            <Image
              source={Images.reservationIcon}
              resizeMode="contain"
              style={focused ? styles.focusedIcon : styles.unfocusedIcon}
            />
            <View style={styles.labelContainer}>
              <Text style={focused ? styles.focusedLabel : styles.unfocusedLabel}> Reservation </Text>
              <View style={focused ? { backgroundColor: Colors.secondaryColor, width: 20, height: 2 } : {}} />
            </View>
          </View>),

        }}
      />
      <Tab.Screen name="Favourite" component={Favourite}
        options={{
          headerTitleAlign: 'right',
          tabBarIcon: ({ focused }) => (<View style={styles.labelIconContainer}>
            <Image
              source={Images.favouriteIcon}
              resizeMode="contain"
              style={focused ? styles.focusedIcon : styles.unfocusedIcon}
            />
            <View style={styles.labelContainer}>
              <Text style={focused ? styles.focusedLabel : styles.unfocusedLabel}> Favourite </Text>
              <View style={focused ? { backgroundColor: Colors.secondaryColor, width: 20, height: 2 } : {}} />
            </View>
          </View>),

        }}
      />
      <Tab.Screen name="Profile" component={Profile}
        options={{
          headerTitleAlign: 'right',
          tabBarIcon: ({ focused }) => (<View style={styles.labelIconContainer}>
            <Image
              source={Images.profileIcon}
              resizeMode="contain"
              style={focused ? styles.focusedIcon : styles.unfocusedIcon}
            />
            <View style={styles.labelContainer}>
              <Text style={focused ? styles.focusedLabel : styles.unfocusedLabel}> Profile </Text>
              <View style={focused ? { backgroundColor: Colors.secondaryColor, width: 20, height: 2 } : { width: 0 }} />
            </View>
          </View>),
        }}
      />
    </Tab.Navigator>
  );
};


export default BottomTabs;
