import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    markerContainer: {
        backgroundColor: 'white',
        padding: 4,
        borderRadius: 20,
        borderColor: 'grey',
        borderWidth: 1,
    },
    selectedMarkerContainer: {
        backgroundColor: 'black',
        padding: 4,
        borderRadius: 20,
        borderColor: 'grey',
        borderWidth: 1,
    },

    markerText: {
        fontWeight: 'bold',
        color: 'black',
    },
    selectedMarkerText: {
        fontWeight: 'bold',
        color: 'white',
    },
})

export default styles