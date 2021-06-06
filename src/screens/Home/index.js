import React from 'react'
import { View, Text, ImageBackground, Pressable } from 'react-native'
import styles from './styles'

import Fontisto from 'react-native-vector-icons/Fontisto'

const HomeScreen = (props) => {
    return (
        <View>
            {/* Background */}
            <ImageBackground source={require('../../../assets/images/HomeScreen.jpg')} style={styles.image}>
                {/* Title */}
                <Text style={styles.title}>Jam Near</Text>

                {/* Button */}
                <Pressable style={styles.button} onPress={() => console.warn('Explore datat clicked')}>
                    <Text style={styles.btnText}>Explore nearby studios</Text>
                </Pressable>
            </ImageBackground>

            {/* Search Bar */}
            <Pressable style={styles.searchBtn} onPress={() => console.warn('SearchBtn clicked')}>
                <Fontisto name="search" size={25} color={"#f15454"} />
                <Text style={styles.searchBtnText}>Where are you recording?</Text>
            </Pressable>
        </View>
    )
}

export default HomeScreen
