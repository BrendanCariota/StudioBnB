import React, { useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'
import styles from './styles'
import Post from '../../components/Post'
import { API, graphqlOperation } from 'aws-amplify'
import { listPosts } from '../../graphql/queries'
import { useRoute } from '@react-navigation/native'

const SearchResultsScreen = (props) => {

    const { guests } = props

    const [posts, setPosts] = useState([])
    console.log(props)

    

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postsResult = await API.graphql(
                    graphqlOperation(listPosts, {
                        filter: {
                            maxGuests: {
                                ge: guests
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
        <View>
            <FlatList data={posts} renderItem={({item}) => <Post post={item} />}/>
        </View>
    )
}

export default SearchResultsScreen
