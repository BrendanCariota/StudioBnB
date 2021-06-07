import React from 'react'
import { View, Text, ImageBackground, Pressable } from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'

import Fontisto from 'react-native-vector-icons/Fontisto'

const HomeScreen = (props) => {
    const navigation = useNavigation()

    return (
        <View>
            {/* Background */}
            <ImageBackground source={require('../../../assets/images/HomeScreen.jpg')} style={styles.image}>
                {/* Title */}
                <Text style={styles.title}>Go Play</Text>

                {/* Button */}
                <Pressable style={styles.button} onPress={() => navigation.navigate('Destination Search')}>
                    <Text style={styles.btnText}>Explore nearby studios</Text>
                </Pressable>
            </ImageBackground>

            {/* Search Bar */}
            <Pressable style={styles.searchBtn} onPress={() => navigation.navigate('Destination Search')}>
                <Fontisto name="search" size={25} color={"#f15454"} />
                <Text style={styles.searchBtnText}>Where are you recording?</Text>
            </Pressable>
        </View>
    )
}

export default HomeScreen
