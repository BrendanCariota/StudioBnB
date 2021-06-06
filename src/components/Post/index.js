import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

const Post = () => {
    return (
        <View style={styles.container}>
            {/* Image */}
            <Image style={styles.image} source={{ uri: 'https://images.unsplash.com/photo-1610716632424-4d45990bcd48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=926&q=80'}} />

            {/* Bed & Bedroom */}
            <Text style={styles.bedrooms}>1 bed 1 bath</Text>

            {/* Type & Description */}
            <Text style={styles.description} numberOfLines={2}>Small recording studio complete with all the equipment you need to record and mix a small 4 person band</Text>

            {/* Old price & New price */}
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>$36 </Text>
                <Text style={styles.newPrice}> $30</Text>
                <Text style={styles.rate}> / night</Text>
            </Text>

            {/* Total Price */}
            <Text style={styles.totalPrice}>$230 total</Text>
        </View>
    )
}

export default Post
