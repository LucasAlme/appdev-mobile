import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Main from "../pages/main";
import { Telas } from "../utils/enums/telas";

const Stack = createStackNavigator();

function App() {

    function MainStack() {
        return (
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name={Telas.main} component={Main} />
            </Stack.Navigator>
        )
    }

    return (
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    )
}

export default App;