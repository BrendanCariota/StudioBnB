import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SearchResults from '../screens/SearchResults'
import SearchResultsMap from '../screens/SearchResultsMap'
import { useRoute } from '@react-navigation/native'

const Tab = createMaterialTopTabNavigator()

const SearchResultsTabNavigator = () => {

    const route = useRoute()
    const guests = route.params.guests
    

    return (
       <Tab.Navigator tabBarOptions={{
           activeTintColor: '#f15454',
           indicatorStyle: {
            backgroundColor: '#f15454'
           }
       }}>
           {/* Sending the component in a function instead of as a parameter itself allows us to pass params down */}
            <Tab.Screen name={'list'}>
                {
                    () => (
                        <SearchResults guests={guests} />    
                    )
                }
                
            </Tab.Screen>
            <Tab.Screen name={'map'}>
                {
                    () => (
                       <SearchResultsMap guests={guests} /> 
                    )
                }
                
            </Tab.Screen>
       </Tab.Navigator> 
    )
}

export default SearchResultsTabNavigator
