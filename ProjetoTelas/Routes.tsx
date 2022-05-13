import * as React from 'react';
import {NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';


// componente, sempre returna algo
// este componente trata da navegação entre as telas
export default function Routes() {

// criar uma constante para guardar a função de create navigation para utuliar o stack

    const Stack = createStackNavigator();
    return (
        // o app teve estar todo em um container

        <NavigationContainer>
            {/* criar um stack para poder navegar por telas */}
            <Stack.Navigator>
                {/* stack.screen é para criar a tela que sera a navegação */}
                <Stack.Screen  name='Login' component={Login}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

