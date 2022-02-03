
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Text, View, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';

import { RootStackParams } from '../navigation/StackNavigation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonDetails } from '../components/PokemonDetails';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'>{};

export const PokemonScreen = ({ navigation, route }: Props) => {

    const { top } = useSafeAreaInsets();
    const { simplePokemon, color } = route.params;
    const { id, name, picture } = simplePokemon;

    const { pokemon, isLoading } = usePokemon(id);

    return (
        <View style={{ flex: 1 }}>
            {/* Header Container */}
            <View 
                style={{ 
                    ...style.headerContainer,
                    backgroundColor: color, 
                }}
            >
                {/* BackButton */}
                <TouchableOpacity
                    onPress={() => navigation.pop()} 
                    activeOpacity={0.5}
                    style={{
                        ...style.backButton,
                        top: top + 10
                    }}
                >
                    <Icon 
                        name='arrow-back-outline' 
                        color='#FFF' 
                        size={ 35 } />
                </TouchableOpacity>
            
                {/* Pokemon Name */}
                <Text
                    style={{
                        ...style.pokemonName,
                        top: top + 40
                    }}
                >
                    { name + '\n' }#{ id }
                </Text>
                <Image
                    source={ require('../assets/pokebola-blanca.png')}
                    style={ style.pokeball }
                />

                <FadeInImage
                    uri={ picture }
                    style={ style.pokemonImage }
                />

            </View>
            
            {/* Details and loading */}

            {
                isLoading ?

                (
                    <View 
                        style={ 
                            style.loadingIndicator 
                        }
                    >
                        <ActivityIndicator 
                            color={ color } 
                            size={ 50 }
                        /> 
                    </View> 
                )
                
                : <PokemonDetails pokemon={ pokemon }/>

            }
            
        </View>
       
    );
};

const style =  StyleSheet.create({
    headerContainer:{
        height: 370, 
        zIndex: 999,
        alignItems: 'center',
        borderBottomLeftRadius: 1000,
        borderBottomRightRadius: 1000
    }, 
    backButton: {
        position: 'absolute',
        left: 10
    },
    pokemonName: {
        color: '#FFF',
        fontSize: 40,
        alignSelf: 'flex-start',
        left: 10
    },
    pokeball: {
       width: 250,
       height: 250,
       bottom: -20,
       opacity: 0.7 
    },
    pokemonImage: {
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -20
    },
    loadingIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});