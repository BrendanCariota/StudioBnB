import React from 'react'
import { View, Text, Image, useWindowDimensions } from 'react-native'
import styles from './styles'

const Post = ({ post }) => {

    const { bed, bedroom, id, title, type, image, description, oldPrice, newPrice, totalPrice, coordinate } = post

    const width = useWindowDimensions().width

    return (
        <View style={styles.container, { width: width - 60 }}>
            <View style={styles.innerContainer}>
                {/* Image */}
                <Image style={styles.image} source={{ uri: image}} />

                <View>
                    {/* Bed & Bedroom */}
                    <Text style={styles.bedrooms}>{bed} bed {bedroom} bath</Text>

                    {/* Type & Description */}
                    <Text style={styles.description} numberOfLines={2}>{type}. {title}</Text>

                    {/* Old price & New price */}
                    <Text style={styles.prices}></Text>
                    <Text style={styles.oldPrice}>${oldPrice} </Text>
                    <Text style={styles.newPrice}> ${newPrice}</Text>
                    <Text style={styles.rate}> / night</Text>
        

                    {/* Total Price */}
                    <Text style={styles.totalPrice}>${totalPrice} total</Text>
                </View>
            </View>
        </View>
    )
}

export default Post