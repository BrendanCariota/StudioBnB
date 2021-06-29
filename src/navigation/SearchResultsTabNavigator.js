import React, { useEffect, useState} from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SearchResults from '../screens/SearchResults'
import SearchResultsMap from '../screens/SearchResultsMap'
import { useRoute } from '@react-navigation/native'
import { API, graphqlOperation } from 'aws-amplify'
import { listPosts } from '../graphql/queries'


const Tab = createMaterialTopTabNavigator()

const SearchResultsTabNavigator = () => {

    const route = useRoute()
    const guests = route.params.guests
    const viewport = route.params.viewport

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postsResult = await API.graphql(
                    graphqlOperation(listPosts, {
                        filter: {
                            and: {
                                maxGuests: {
                                    ge: guests
                                },
                                latitude: {
                                    between: [viewport.southwest.lat, viewport.northeast.lat],
                                },
                                longitude: {
                                    between: [viewport.southwest.lng, viewport.northeast.lng],
                                }
                            }
                        }
                    })
                )
                
                setPosts(postsResult.data.listPosts.items)
            } catch(e) {
                console.log(e)
            }
        }

        fetchPosts()
    }, [])
    

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
                        <SearchResults posts={posts} />    
                    )
                }
                
            </Tab.Screen>
            <Tab.Screen name={'map'}>
                {
                    () => (
                       <SearchResultsMap posts={posts} /> 
                    )
                }
                
            </Tab.Screen>
       </Tab.Navigator> 
    )
}

export default SearchResultsTabNavigator
