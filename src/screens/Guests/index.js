import React, {useState} from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'

const GuestScreen = () => {

    const navigation = useNavigation()

    const [adults, setAdults] = useState(0)
    const [children, setChildren] = useState(0)
    const [infants, setInfants] = useState(0)

    return (
        <View style={styles.screen}>
            {/* People selection */}
            <View styles={styles.rowContainer}>
                {/* Row 1: Adults */}
                <View style={styles.row}>
                {/* Titles */}
                <View>
                    <Text style={styles.title}>Adults</Text>
                    <Text style={styles.subTitle}>Ages 13 or above</Text>
                </View>
                {/* Buttons with value */}
                <View style={styles.buttonContainer}>
                    {/* - */}
                    <Pressable onPress={() => setAdults(Math.max(0, adults - 1))} style={styles.button}>
                        <Text style={styles.plusMinus}>--</Text>
                    </Pressable>
                    {/* value */}
                    <Text style={styles.count}>{adults}</Text>
                    {/* + */}
                    <Pressable onPress={() => setAdults(adults + 1)} style={styles.button}>
                        <Text style={styles.plusMinus}t>+</Text>
                    </Pressable>
                </View>
            </View>
                {/* Row 1: Adults */}

                {/* Row 1: Children */}
                <View style={styles.row}>
                {/* Titles */}
                <View>
                    <Text style={styles.title}>Children</Text>
                    <Text style={styles.subTitle}>Ages 12 - 2</Text>
                </View>
                {/* Buttons with value */}
                <View style={styles.buttonContainer}>
                    {/* - */}
                    <Pressable onPress={() => setChildren(Math.max(0, children - 1))} style={styles.button}>
                        <Text style={styles.plusMinus}>--</Text>
                    </Pressable>
                    {/* value */}
                    <Text style={styles.count}>{children}</Text>
                    {/* + */}
                    <Pressable onPress={() => setChildren(children + 1)} style={styles.button}>
                        <Text style={styles.plusMinus}t>+</Text>
                    </Pressable>
                </View>
            </View>
                {/* Row 1: Children */}

                {/* Row 1: Infants */}
                <View style={styles.row}>
                {/* Titles */}
                <View>
                    <Text style={styles.title}>Infants</Text>
                    <Text style={styles.subTitle}>2 and under</Text>
                </View>
                {/* Buttons with value */}
                <View style={styles.buttonContainer}>
                    {/* - */}
                    <Pressable onPress={() => setInfants(Math.max(0, infants - 1))} style={styles.button}>
                        <Text style={styles.plusMinus}>--</Text>
                    </Pressable>
                    {/* value */}
                    <Text style={styles.count}>{infants}</Text>
                    {/* + */}
                    <Pressable onPress={() => setInfants(infants + 1)} style={styles.button}>
                        <Text style={styles.plusMinus}t>+</Text>
                    </Pressable>
                </View>
            </View>
                {/* Row 1: Infants */}
            </View>
            
            
            <Pressable style={styles.searchBtn} onPress={() => navigation.navigate('Home', {
                screen: 'Explore',
                params: {
                    screen: 'SearchResults',
                }
            })}>
                <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>Search</Text>
            </Pressable>
            
            
        </View>
    )
}

export default GuestScreen
