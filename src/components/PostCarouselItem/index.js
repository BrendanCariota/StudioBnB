import React from 'react'
import { View, Text, Image, useWindowDimensions, Pressable } from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'

const Post = ({ post }) => {

    const { bed, bedroom, id, title, type, image, description, oldPrice, newPrice, totalPrice, coordinate } = post

    const navigation = useNavigation()

    const width = useWindowDimensions().width

    const goToPostPage = () => {
        navigation.navigate('Listing', {postId: id})
    }

    return (
        <Pressable onPress={goToPostPage} style={styles.container, { width: width - 60 }}>
            <View style={styles.innerContainer}>
                {/* Image */}
                <Image style={styles.image} source={{ uri: image}} />

                <View style={styles.textContainer}>
                    {/* Bed & Bedroom */}
                    <Text style={styles.bedrooms}>{bed} bed {bedroom} bath</Text>

                    {/* Type & Description */}
                    <Text style={styles.description} numberOfLines={2}>{type}. {title}</Text>

                    {/* Old price & New price */}
                    <Text style={styles.prices}>
                        <Text style={styles.newPrice}> ${newPrice} </Text>
                        / night
                    </Text>
                </View>
            </View>
        </Pressable>
    )
}

export default Post