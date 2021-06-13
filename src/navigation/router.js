import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeTabNavigator from './HomeTabNavigator'

// Screens
import DesinationSearchScreen from '../screens/DestinationSearch'
import GuestScreen from '../screens/Guests'

const Stack = createStackNavigator()

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name={'Home'} 
                    component={HomeTabNavigator} 
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name={'Destination Search'} 
                    component={DesinationSearchScreen} 
                    options={{
                        title: 'Search your Destination'
                    }}
                />
                <Stack.Screen 
                    name={'Guests'} 
                    component={GuestScreen} 
                    options={{
                        title: 'How many people'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router
