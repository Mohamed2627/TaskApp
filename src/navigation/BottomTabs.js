/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
// Importing the navigation libs
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importing our main screens
import Home from './screens/Home';
import Reservation from './screens/Reservation';
import Favourite from './screens/Favourite';
import Profile from './screens/Profile';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopRightRadius: 17,
          borderTopLeftRadius: 17,
          height: 70,
        },
      })}
    >
      {/* The screens */}
      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarIcon: ({ focused }) => (<View style={styles.labelIconContainer}>
            <Image
              source={require('../assets/Vector3xcopy2.png')}
              resizeMode="contain"
              style={focused ? styles.focusedIcon : styles.unfocusedIcon}
            />
            <View style={styles.labelContainer}>
              <Text style={focused ? styles.focusedLabel : styles.unfocusedLabel}> Home </Text>
              <View style={focused ? { backgroundColor: '#ff8223', width: 20, height: 2 } : {}} />
            </View>
          </View>),

        }}
      />
      <Tab.Screen name="Reservation" component={Reservation}
        options={{
          title: 'Your Reservation',
          tabBarIcon: ({ focused }) => (<View style={styles.labelIconContainer}>
            <Image
              source={require('../assets/Vector3xcopy3.png')}
              resizeMode="contain"
              style={focused ? styles.focusedIcon : styles.unfocusedIcon}
            />
            <View style={styles.labelContainer}>
              <Text style={focused ? styles.focusedLabel : styles.unfocusedLabel}> Reservation </Text>
              <View style={focused ? { backgroundColor: '#ff8223', width: 20, height: 2 } : {}} />
            </View>
          </View>),

        }}
      />
      <Tab.Screen name="Favourite" component={Favourite}
        options={{
          // title: 'Welcome',
          tabBarIcon: ({ focused }) => (<View style={styles.labelIconContainer}>
            <Image
              source={require('../assets/Vector3xcopy4.png')}
              resizeMode="contain"
              style={focused ? styles.focusedIcon : styles.unfocusedIcon}
            />
            <View style={styles.labelContainer}>
              <Text style={focused ? styles.focusedLabel : styles.unfocusedLabel}> Favourite </Text>
              <View style={focused ? { backgroundColor: '#ff8223', width: 20, height: 2 } : {}} />
            </View>
          </View>),

        }}
      />
      <Tab.Screen name="Profile" component={Profile}
        options={{
          // title: 'Welcome',
          tabBarIcon: ({ focused }) => (<View style={styles.labelIconContainer}>
            <Image
              source={require('../assets/Vector3xcopy5.png')}
              resizeMode="contain"
              style={focused ? styles.focusedIcon : styles.unfocusedIcon}
            />
            <View style={styles.labelContainer}>
              <Text style={focused ? styles.focusedLabel : styles.unfocusedLabel}> Profile </Text>
              <View style={focused ? { backgroundColor: '#f9a915', width: 20, height: 2 } : { width: 0 }} />
            </View>
          </View>),

        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
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
    fontSize: 15,
    color: '#553586',
  },
  focusedLabel: {
    color: '#ff8223',
    fontWeight: 'bold',
  },
  focusedIcon: {
    width: 25,
    height: 25,
    tintColor: '#ff8223',
  },
  unfocusedIcon: {
    width: 20,
    height: 20,
    tintColor: '#553586',
  },
});

export default BottomTabs;
