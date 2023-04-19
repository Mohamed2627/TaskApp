/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable curly */
/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList, ActivityIndicator, Dimensions } from 'react-native';
import Header from './Header/Header';
import Upcoming from './upcoming/Upcoming';
import Previous from './previous/Previous';
import { fetchPosts } from '../../state/postsSlice';
import { useDispatch, useSelector } from 'react-redux';


const deviceWidth = Dimensions.get('window').width;

const Reservation = () => {

    const dispatch = useDispatch();

    const { loading } = useSelector((state) => state.posts);

    const [data, setData] = useState([]);

    useEffect(() => {
        dispatch(fetchPosts())
            .then(
                (data) => {
                    let newData = [...data.payload.posts];
                    setData(newData);
                }
            )
            .catch(err => console.log(err));
    }, [dispatch]);

    const renderItem = ({ item }) => (
        <Previous data={item} />
    );

    const renderFooter = () => {
        if (!loading) return null;
        return (
            <View style={{
                flex: 1,
                width: '100%',
            }}>
                <ActivityIndicator size="large" />
            </View>
        );
    };

    return (
        <View style={styles.screenWraper}>
            <View style={styles.container}>
                <Text style={styles.declareWord}>
                    Upcoming
                </Text>
                <Header />
                <Upcoming />
                <Text style={styles.declareWord}>
                    Previous
                </Text>
                <View style={{
                    flex: 1,
                    width: '100%',
                }}>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        ListFooterComponent={renderFooter}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screenWraper: {
        flex: 1,
        alignItems: 'center',
        // backgroundColor: 'red',
    },
    container: {
        flex: 1,
        width: deviceWidth * 0.9,
        alignItems: 'center',
    },
    declareWord: {
        fontSize: 15,
        fontWeight: 'normal',
        width: '100%',
        marginTop: '3%',
        color: 'black',
        backgroundColor: '#f9f4f4ff',
        paddingVertical: 10,
    },
});

export default Reservation;
