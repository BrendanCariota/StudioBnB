import React from 'react'
import { View, Text } from 'react-native'
import { Marker } from 'react-native-maps';
import styles from './styles'

import places from '../../../assets/data/feed'

const CustomMarker = ({coordinate, price, onPress, isSelected}) => {

    return (
        <Marker coordinate={coordinate} onPress={onPress}>
            <View style={isSelected ? styles.selectedMarkerContainer : styles.markerContainer}>
                <Text style={isSelected ? styles.selectedMarkerText : styles.markerText}>${price}</Text>
            </View>
        </Marker>
    )
}

export default CustomMarker