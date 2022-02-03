import React from 'react';
import { Image, FlatList, ActivityIndicator, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { style } from '../theme/appTheme';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { PokemonCard } from '../components/PokemonCard';

export const HomeScreen = () => {

    const { top } =  useSafeAreaInsets();

    const { simplePokemonList, loadPokemons } = usePokemonPaginated();

    return (
        <>
            <Image 
                source={ require('../assets/pokebola.png')} 
                style={ style.pokebolaBG }
            />

            <View 
                style={{ alignItems: 'center' }}>
                <FlatList 
                    data={ simplePokemonList }
                    keyExtractor={ (pokemon) => pokemon.id }
                    numColumns={2}

                    // Header
                    ListHeaderComponent={(
                        <Text 
                            style={{
                                ...style.title,
                                ...style.globalMargin,
                                top: top + 20,
                                marginBottom: top + 20,
                                paddingBottom: 10
                            }}
                        >
                            PokeDex
                        </Text>
                    )}
                    renderItem={ ({ item }) => 
                        <PokemonCard pokemon={ item }/>
                    }
                    showsVerticalScrollIndicator={ false }

                    // Infinite scroll
                    onEndReached={ loadPokemons }
                    onEndReachedThreshold={ 0.4 }

                    ListFooterComponent={ 
                        <ActivityIndicator 
                            style={{ height:100 }}
                            size={ 20 }
                            color='grey'
                        />
                    }
                />  
            </View>
            
        </>
    );
};
