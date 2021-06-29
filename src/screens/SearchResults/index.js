import React, { useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'
import styles from './styles'
import Post from '../../components/Post'
import { API, graphqlOperation } from 'aws-amplify'
import { listPosts } from '../../graphql/queries'
import { useRoute } from '@react-navigation/native'

const SearchResultsScreen = (props) => {

    const { posts } = props

    return (
        <View>
            <FlatList data={posts} renderItem={({item}) => <Post post={item} />}/>
        </View>
    )
}

export default SearchResultsScreen
