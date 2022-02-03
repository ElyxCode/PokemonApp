import { NavigationContainer, StackActions } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { StackNavigation } from './src/navigation/StackNavigation';

const App = () => {
    return (
        <NavigationContainer>
            <StackNavigation />
        </NavigationContainer>
      
    )
}

export default App;
