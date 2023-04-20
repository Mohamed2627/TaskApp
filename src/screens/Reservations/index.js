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
import { Divider } from '@rneui/themed';
import { Colors } from '../../common/colors';

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
        <>
            <Previous data={item} />
        </>
    );

    const handleEmpty = () => {
        if (!loading && data.length === 0)
        {
            return (
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Text> No data present!</Text>
                </View>
            );
        }
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
    const listHeaderComponent = () => {
        return (
            <Text style={styles.declareWord}>
                Previous
            </Text>
        );
    };
    const separator = () => {
        return <Divider color={Colors.secondaryColor} />;
    };

    return (
        <View style={styles.screenWraper}>
            <FlatList
                data={[{ key: 'whole-screen' }]}
                renderItem={() => (
                    <View style={styles.container}>
                        <Text style={styles.declareWord}>
                            Upcoming
                        </Text>
                        <Header />
                        <Upcoming />
                        <View style={{
                            flex: 1,
                            width: '100%',
                        }}>
                            <FlatList
                                ListEmptyComponent={handleEmpty}
                                ListHeaderComponent={listHeaderComponent}
                                data={data}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.id}
                                maxToRenderPerBatch={10}
                                ItemSeparatorComponent={separator}
                            />
                        </View>
                    </View>
                )}
                keyExtractor={(item) => item.key}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screenWraper: {
        flex: 1,
        alignItems: 'center',
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
