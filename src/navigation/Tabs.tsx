import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SearchScreen } from '../screens/SearchScreen';
import { StackNavigation } from './StackNavigation';
import { Platform } from 'react-native';
import { style } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
    return (
        <Tab.Navigator 
            screenOptions={{ 
                headerShown: false,
                tabBarActiveTintColor: '#5856D6',
                tabBarLabelStyle: {
                    marginBottom: (Platform.OS === 'android') ? 5 : 0,
                },
                tabBarStyle:{
                    position: 'absolute',
                    backgroundColor: 'rgba(255, 255, 255, 0.90)',
                    borderWidth: 0,
                    elevation: 0,
                    height: (Platform.OS === 'android') ? 55 : 75
                }              
            }}
            sceneContainerStyle={{ backgroundColor: '#FFF' }}
        >
            <Tab.Screen 
                name="HomeScreen" 
                component={StackNavigation}
                options={{
                    tabBarLabel: 'List',
                    tabBarIcon: ({ color }) => (
                        <Icon 
                            name='list-outline' 
                            color={color} 
                            size={ 25 } 
                        />
                    )
                }} 
            />
            <Tab.Screen 
                name="SearchScreen" 
                component={SearchScreen}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name='search-outline'
                            color={color}
                            size={ 25 }
                        />
                    )
                }} 
            />
        </Tab.Navigator>
    );
}