import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
// import { StackNavigation } from './src/navigation/StackNavigation';
import { Tabs } from "./src/navigation/Tabs";

const App = () => {
    return (
        <NavigationContainer>
            {/* <StackNavigation /> */}
            <Tabs />
        </NavigationContainer>
      
    )
}

export default App;
