import React, {useEffect, useState, useRef} from 'react'
import { View, Text, FlatList, useWindowDimensions } from 'react-native'
import MapView from 'react-native-maps';
import styles from './styles'
import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from '../../components/PostCarouselItem'

import places from '../../../assets/data/feed'

const SearchResultsMaps = () => {

    const [selectedPriceId, setSelectedPriceId] = useState(null)

    // Used to reference flatlist and scroll to correct index when the corressponding marker is clicked
    const flatList = useRef()

    const width = useWindowDimensions().width

    useEffect(() => {
        if (!selectedPriceId || !flatList) {
            return;
        }
        const index = places.findIndex(place => place.id === selectedPriceId)
        // expects an object
        flatList.current.scrollToIndex({index})
        console.warn('Scroll to ' + selectedPriceId)
    }, [selectedPriceId])

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

            <View style={styles.carouselContainer}>
                <FlatList 
                    ref={flatList}
                    data={places}
                    renderItem={({item}) => <PostCarouselItem post={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={width - 60}
                    snapToAlignment={"center"}
                    decelerationRate={"fast"}
                    onViewableItemsChanged={({viewableItems}) => {
                        console.log(viewableItems)
                    }}
                />
            </View>
        </View>
    )
}

export default SearchResultsMaps
