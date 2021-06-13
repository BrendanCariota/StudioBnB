import React, {useState} from 'react'
import { View, Text, TextInput, FlatList, Pressable } from 'react-native'
import styles from './styles'

import { useNavigation } from '@react-navigation/native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import SuggestionRow from './SuggestionRow'


const DestinationSearchScreen = () => {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            
            <GooglePlacesAutocomplete
                placeholder='Where are you going?'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                    navigation.navigate('Guests')
                }}
                query={{
                    key: 'AIzaSyAUbUopIqlfLDwcacMWZjjLzvxQ0adcSxg',
                    language: 'en',
                    types: '(cities)',
                }}
                fetchDetails
                styles={{
                    textInput: styles.textInput
                }}
                suppressDefaultStyles
                renderRow={(item) => <SuggestionRow item={item} />}
            />
            
        </View>
    )
}

export default DestinationSearchScreen
