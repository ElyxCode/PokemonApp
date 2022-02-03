import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

export const SearchInput = () => {
    return (
        <View style={ style.container }>
            <View style={ style.textBackground }>
                <TextInput 
                    placeholder='Search Pokemon'
                    style={ style.textInput }
                    autoCapitalize='none'
                    autoCorrect={ false } 
                />

                <Icon 
                    name='search-outline'
                    color='#808080'
                    size={ 25 }
                />
            </View>
        </View>
    )
};

const style = StyleSheet.create({
    container: {
        marginTop: 10
        // backgroundColor: '#F00'
    },
    textBackground: {
        backgroundColor: '#F3F1F3',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    textInput: {
        flex: 1,
        fontSize: 16
    }
})