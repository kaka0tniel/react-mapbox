import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken('pk.eyJ1Ijoib3RuaWVsdHVybmlwIiwiYSI6ImNrMWJneWlwMDAzMnYzaXBtN3AzOXlxOWsifQ.Sal3nZuZKw41lPRIyiIiEw');

const GetLatLong = () => {
    
    const renderBuble = () => {
        return (
            <View style={styles.bubleContainer}>
                <Text> Lat : {latitude}</Text>
                <Text>Long : {longitude}</Text>
            </View>
        )
    }

    const onPress = (event) => {
        const { geometry } = event;

        setLatitude(geometry.coordinates[1]);
        setLongitude(geometry.coordinates[0]);
    }

    let [latitude, setLatitude] = useState("");
    let [longitude, setLongitude] = useState("");

    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <MapboxGL.MapView
                    style={styles.map}
                    onPress={(e) => onPress(e)}
                >
                    <MapboxGL.Camera zoomLevel={11}
                        centerCoordinate={[119.952193, -9.690647]}>
                    </MapboxGL.Camera>
                </MapboxGL.MapView>
            </View>
            {renderBuble()}
        </View>
    )
}




const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    container: {
        height: '100%',
        width: '100%',
    }, map: {
        flex: 1,
    },
    bubleContainer: {
        borderRadius: 30,
        position: 'absolute',
        bottom: 10,
        left: 40,
        right: 40,
        paddingVertical: 16,
        minHeight: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
});


export default GetLatLong;