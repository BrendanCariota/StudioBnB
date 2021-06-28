import React, {useEffect, useState, useRef} from 'react'
import { View, Text, FlatList, useWindowDimensions } from 'react-native'
import MapView from 'react-native-maps';
import styles from './styles'
import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from '../../components/PostCarouselItem'

import { API, graphqlOperation } from 'aws-amplify'
import { listPosts } from '../../graphql/queries'

const SearchResultsMaps = (props) => {

    const { guests } = props

    const [selectedPriceId, setSelectedPriceId] = useState(null)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postsResult = await API.graphql(
                    graphqlOperation(listPosts, {
                        filter: {
                            maxGuests: {
                                ge: guests
                            }
                        }
                    })
                )
                
                setPosts(postsResult.data.listPosts.items)
            } catch(e) {
                console.log(e)
            }
        }

        fetchPosts()
    }, [])


    // Used to reference flatlist and scroll to correct index when the corressponding marker is clicked
    const flatList = useRef()
    const map = useRef()

    const viewConfig = useRef({itemVisiblePercentThreshold: 70})
    const onViewChanged = useRef(({viewableItems}) => {
        if(viewableItems.length > 0) {
            const selectedPlace = viewableItems[0].item
            setSelectedPriceId(selectedPlace.id)
        }
    })

    const width = useWindowDimensions().width

    useEffect(() => {
        if (!selectedPriceId || !flatList) {
            return;
        }
        const index = posts.findIndex(place => place.id === selectedPriceId)
        // expects an object
        flatList.current.scrollToIndex({index})

        // Centers map on selected location
        const selectedPlace = posts[index]
        const region = {
            latitude: selectedPlace.latitude,
            longitude: selectedPlace.longitude,
            latitudeDelta: 0.8,
            longitudeDelta: 0.8,
        }
        map.current.animateToRegion(region)
    }, [selectedPriceId])

    return (
        <View style={styles.mainContainer}>
            <MapView
            ref={map}
            style={styles.map}
                initialRegion={{
                latitude: 28.3279,
                longitude: -16.5124,
                latitudeDelta: 0.8,
                longitudeDelta: 0.8,
            }}
            >
            {
                posts.map(place => (
                    <CustomMarker 
                        coordinate={{ latitude: place.latitude, longitude: place.longitude }} 
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
                    data={posts}
                    renderItem={({item}) => <PostCarouselItem post={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={width - 60}
                    snapToAlignment={"center"}
                    decelerationRate={"fast"}
                    viewabilityConfig={viewConfig.current}
                    onViewableItemsChanged={onViewChanged.current}
                />
            </View>
        </View>
    )
}

export default SearchResultsMaps
