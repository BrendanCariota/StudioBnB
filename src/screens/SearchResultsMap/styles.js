import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%', 
        height: '100%',
    },

    map: {
        width: '100%', 
        height: '100%',
    },

    markerContainer: {
        backgroundColor: 'white',
        padding: 4,
        borderRadius: 20,
        borderColor: 'grey',
        borderWidth: 1,
    },
    markerText: {
        fontWeight: 'bold',
    },

    carouselContainer: {
        position: 'absolute',
        bottom: 10,
    },
})

export default styles