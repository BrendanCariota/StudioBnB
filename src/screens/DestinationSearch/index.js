import React, {useState} from 'react'
import { View, Text, TextInput, FlatList, Pressable } from 'react-native'
import styles from './styles'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'

import searchData from '../../../assets/data/search'

const DestinationSearchScreen = () => {

    const navigation = useNavigation()

    // State
    const [input, setInput] = useState('')

    return (
        <View style={styles.container}>
            {/* Input Component */}
            <TextInput 
                style={styles.textInput}
                placeholder='Where are you going?'
                value={input}
                onChangeText={setInput}
            />

            {/* List of destinations */}
            <FlatList
                data={searchData}
                renderItem={({item}) => 
                    <Pressable style={styles.row} onPress={() => navigation.navigate('Guest Screen')}>
                        <View style={styles.iconContainer}>
                            <Entypo name={'location-pin'} size={25} color={'#161616'}/>
                        </View>
                        <Text style={styles.locationText}>{item.description}</Text>
                    </Pressable>
                }
            />
        </View>
    )
}

export default DestinationSearchScreen
