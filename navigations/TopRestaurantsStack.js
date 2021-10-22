import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Search from '../screens/Search'
import TopRestaurants from '../screens/TopRestaurants'

const Stack = createStackNavigator()

export default function TopRestaurantsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="topRestaurants"
                component ={TopRestaurants}
                options={{ title:"Los Mejores Restaurantes" }}
            />
        </Stack.Navigator>
    )
}
