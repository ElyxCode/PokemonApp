import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';


interface Props {
    pokemon: PokemonFull;
}

export const PokemonDetails = ({ pokemon }: Props) => {
    
    return (
        <ScrollView
            style={{...StyleSheet.absoluteFillObject }}
            showsVerticalScrollIndicator={false}
        >
            
            {/* Types */}
            <View
                style={{
                    ...style.container,
                    marginTop: 370
                }}
            >
                
                <Text style={ style.title}>Types</Text>

                <View style={{ flexDirection: 'row' }}>                
                {
                    pokemon.types.map(({ type }) => (
                        <Text 
                            key={ type.name }
                            style={{
                                ...style.regularText,
                                marginRight: 10
                            }}
                        >
                            { type.name }
                        </Text>
                    ))
                }
                </View>

                {/* Weight */}
                <Text style={{ ...style.title }}>Weight</Text>
                <Text style={{ ...style.regularText}}>{ pokemon.weight } Kg</Text>

            </View>

            {/* Sprites */}
            <View
                style={{ 
                    ...style.container
                }}
            >
                <Text style={ style.title }>Sprites</Text>
                <ScrollView
                    // style={ style}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <FadeInImage 
                        uri={ pokemon.sprites.front_default } 
                        style={ style.basicSprites } 
                    />

                    <FadeInImage 
                        uri={ pokemon.sprites.back_default } 
                        style={ style.basicSprites } 
                    />

                    <FadeInImage 
                        uri={ pokemon.sprites.front_shiny } 
                        style={ style.basicSprites } 
                    />

                    <FadeInImage 
                        uri={ pokemon.sprites.back_shiny } 
                        style={ style.basicSprites } 
                    />
                </ScrollView>
            </View>

            {/* Ability */}
            <View
                style={{
                    ...style.container
                }}
            >
                
                <Text style={ style.title}>Base Abilities</Text>
                <View style={{ flexDirection: 'row' }}>                
                {
                    pokemon.abilities.map(({ ability }) => (
                        <Text 
                            key={ ability.name }
                            style={{
                                ...style.regularText,
                                marginRight: 10
                            }}
                        >
                            { ability.name }
                        </Text>
                    ))
                }
                </View>

            </View>

            {/* Moves */}
            <View
                style={{
                    ...style.container
                }}
            >
                
                <Text style={ style.title}>Moves</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>                
                {
                    pokemon.moves.map(({ move }) => (
                        <Text 
                            key={ move.name }
                            style={{
                                ...style.regularText,
                                marginRight: 10
                            }}
                        >
                            { move.name }
                        </Text>
                    ))
                }
                </View>

            </View>

            {/* Stats */}
            <View
                style={{
                    ...style.container
                }}
            >
                
                <Text style={ style.title}>Stats</Text>
                <View>                
                {
                    pokemon.stats.map(( stat, index ) => (
                        <View 
                            key={ stat.stat.name + index } 
                            style={{ flexDirection: 'row' }}
                        >
                            <Text 
                                key={ stat.stat.name }
                                style={{
                                    ...style.regularText,
                                    marginRight: 10,
                                    width: 150
                                }}
                            >
                            { stat.stat.name }
                            </Text>

                            <Text 
                                style={{
                                    ...style.regularText,
                                    fontWeight: 'bold'
                                }}
                            >
                            { stat.base_stat }
                            </Text>
                        </View>
                    ))
                }
                </View>

                {/* final sprite */}
                <View
                    style={{
                        marginBottom: 20,
                        alignItems: 'center'
                    }}
                >
                    <FadeInImage 
                        uri={ pokemon.sprites.front_default } 
                        style={ style.basicSprites } 
                    />
                </View>
                
            </View>
           
        </ScrollView>
    );
};

const style = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20
    },
    regularText: {
      fontSize: 19  
    },
    basicSprites: {
        height: 100,
        width: 100
    }
});