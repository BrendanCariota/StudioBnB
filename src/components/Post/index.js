import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

const Post = ({ post }) => {

    const { bed, bedroom, id, title, type, image, description, oldPrice, newPrice, totalPrice, coordinate } = post

    return (
        <View style={styles.container}>
            {/* Image */}
            <Image style={styles.image} source={{ uri: 'https://images.unsplash.com/photo-1610716632424-4d45990bcd48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=926&q=80'}} />

            {/* Bed & Bedroom */}
            <Text style={styles.bedrooms}>{bed} bed {bedroom} bath</Text>

            {/* Type & Description */}
            <Text style={styles.description} numberOfLines={2}>{type} {title}</Text>

            {/* Old price & New price */}
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>${oldPrice} </Text>
                <Text style={styles.newPrice}> ${newPrice}</Text>
                <Text style={styles.rate}> / night</Text>
            </Text>

            {/* Total Price */}
            <Text style={styles.totalPrice}>${totalPrice} total</Text>
        </View>
    )
}

export default Post
