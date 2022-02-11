import React from 'react';
import { ActivityIndicator, Platform, View, StyleSheet, Text, FlatList, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Loading } from '../components/Loading';
import { PokemonCard } from '../components/PokemonCard';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { style } from '../theme/appTheme';

export const SearchScreen = () => {

    const screenWidth = Dimensions.get('window').width;

    const { top } = useSafeAreaInsets();

    const { simplePokemonList, isFetching } = usePokemonSearch();

    if(isFetching){
        return <Loading />
    }

    return (
        <View 
            style={{ 
                flex: 1, 
                // marginTop: (Platform.OS === 'ios') ? top : top + 10
            }}
        >
            <View style={{ marginHorizontal: 20 }}>
                <SearchInput 
                    style={{
                        position: 'absolute',
                        zIndex: 999,
                        width: screenWidth - 40,
                        marginTop: (Platform.OS === 'ios') ? top : top + 20
                    }}
                />
            </View>

            <View style={{ alignItems: 'center' }}>
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
                                paddingBottom: 10,
                                marginTop: (Platform.OS === 'ios') ? top + 65 : top + 65
                            }}
                        >
                            PokeDex
                        </Text>
                    )}
                    renderItem={ ({ item }) => 
                        <PokemonCard pokemon={ item }/>
                    }
                    showsVerticalScrollIndicator={ false }
                />
            </View>            
             
        </View>
    )
};
