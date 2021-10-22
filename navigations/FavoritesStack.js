import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Favorites from '../screens/Favorites'

const Stack = createStackNavigator()

export default function FavoritesStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="restaurants"
                component ={Favorites}
                options={{ title:"Favoritos" }}
            />
        </Stack.Navigator>
    )
}
