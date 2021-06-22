import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import styles from './styles'

const DetailedPost = ({ post }) => {

    const { bed, bedroom, id, title, type, image, description, oldPrice, newPrice, totalPrice, coordinate } = post

    return (
        <ScrollView style={styles.container}>
            {/* Image */}
            <Image style={styles.image} source={{ uri: image}} />

            {/* Bed & Bedroom */}
            <Text style={styles.bedrooms}>{bed} bed {bedroom} bath</Text>

            {/* Type & Description */}
            <Text style={styles.description} numberOfLines={2}>{type}. {title}</Text>

            {/* Old price & New price */}
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>${oldPrice} </Text>
                <Text style={styles.newPrice}> ${newPrice}</Text>
                <Text style={styles.rate}> / night</Text>
            </Text>

            {/* Total Price */}
            <Text style={styles.totalPrice}>${totalPrice} total</Text>

            <Text style={styles.longDescription}>
                {post.description}
            </Text>
        </ScrollView>
    )
}

export default DetailedPost
