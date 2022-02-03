import React, { useEffect, useRef, useState } from 'react';
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';

import ImageColors from 'react-native-image-colors';

import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

interface Props {
    pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {

    const [bgColor, setBgColor] = useState('#808080');

    const navigation = useNavigation()

    const isMounted = useRef(true);

    useEffect(() => {
        // iOS: background
        // Android: dominant

        ImageColors.getColors(pokemon.picture, { fallback: '#808080' })
            .then( colors => {

                if(!isMounted.current) return;

                if(colors.platform === 'android'){
                    setBgColor(colors.dominant || '#808080')
                    
                }else if(colors.platform === 'ios'){
                    setBgColor(colors.background || '#808080')
                }
            });
        
        // When dismount component    
        return () => {
            isMounted.current = false;
        }
      
    }, []);
    

    return (
        <TouchableOpacity 
            activeOpacity={0.4}
            onPress={() => 
                navigation.navigate('PokemonScreen' as never, 
                { simplePokemon: pokemon, color: bgColor } as never)}
        >
            <View 
                style={{
                    ...style.cardContainer, 
                    width: windowWidth * 0.4,
                    backgroundColor: bgColor 
                }}
            >
                {/* Nombre del pokemon y el ID */}
                <View>
                    <Text style={ style.name }>
                        { pokemon.name }
                        { '\n#' + pokemon.id}
                    </Text>
                </View>

                <View style={ style.pokebolaContainer }>
                    <Image 
                        source={ require('../assets/pokebola-blanca.png')} 
                        style={style.pokebola}
                    />
                </View>
            
                <FadeInImage
                    uri={ pokemon.picture }
                    style={ style.pokemonImage }
                />
            </View>
        </TouchableOpacity>
    )
};


const style =  StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        height: 120,
        width: 160,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    name: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10
    },
    pokebola:{
        width: 100,
        height: 100,
        position: 'absolute',
        right: -25,
        bottom: -25
       
    },
    pokemonImage: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: -5,
        right: -8
    },
    pokebolaContainer: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: 0,
        right: 0,
        opacity: 0.5
    
    }
});