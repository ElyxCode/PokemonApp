import React from 'react';
import { ActivityIndicator, Platform, View, StyleSheet, Text, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PokemonCard } from '../components/PokemonCard';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { style } from '../theme/appTheme';

export const SearchScreen = () => {

    const { top } = useSafeAreaInsets();

    const { simplePokemonList, isFetching } = usePokemonSearch();

    if(isFetching){
        return (
            <View style={ styleSearch.activityContainer }>
                <ActivityIndicator 
                    size={ 40 }
                    color='#808080'
                />
                <Text style={{ marginTop: 10, alignItems: 'center' }}>Loading...</Text>
            </View>
        )
    }

    return (
        <View 
            style={{ 
                flex: 1, 
                marginTop: (Platform.OS === 'ios') ? top : top + 10
            }}
        >
            <View style={{ marginHorizontal: 20 }}>
                <SearchInput />
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
                />
            </View>            
             
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