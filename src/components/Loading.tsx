import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export const Loading = () => {
    return (
        <View style={ styleSearch.activityContainer }>
            <ActivityIndicator 
                size={ 40 }
                color='#808080'
            />
            <Text style={{ marginTop: 10, alignItems: 'center' }}>Loading...</Text>
        </View>
    )
};

const styleSearch = StyleSheet.create({
    activityContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
