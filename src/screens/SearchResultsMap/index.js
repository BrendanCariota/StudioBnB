import React, {useState} from 'react'
import { View, Text } from 'react-native'
import MapView from 'react-native-maps';
import styles from './styles'
import CustomMarker from '../../components/CustomMarker';

import places from '../../../assets/data/feed'

const SearchResultsMaps = () => {

    const [selectedPriceId, setSelectedPriceId] = useState(null)

    return (
        <View style={styles.mainContainer}>
            <MapView
            style={styles.map}
                initialRegion={{
                latitude: 28.3279,
                longitude: -16.5124,
                latitudeDelta: 0.8,
                longitudeDelta: 0.8,
            }}
            >
            {
                places.map(place => (
                    <CustomMarker 
                        coordinate={place.coordinate} 
                        price={place.newPrice} 
                        isSelected={place.id === selectedPriceId}
                        onPress={() => setSelectedPriceId(place.id)}
                    />
                ))
            }
            </MapView>
        </View>
    )
}

export default SearchResultsMaps
