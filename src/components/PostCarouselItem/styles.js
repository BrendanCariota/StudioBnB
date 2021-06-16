import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        margin: 20,
        height: 110,
        padding: 5,
    },

    innerContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
        height: 110,
        marginHorizontal: 10,
    },

    textContainer: {
        flex: 1,
        marginHorizontal: 10,
    },

    image: {
        height: '100%',
        aspectRatio: 1,
        resizeMode: 'cover',
    },

    bedrooms: {
        marginVertical: 5,
        color: '#5b5b5b'
    },

    description: {
        fontSize: 14,
        lineHeight: 24,

    },

    prices: {
        fontSize: 14,
        marginVertical: 5,
    },

    oldPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'line-through',
    },

    newPrice: {
        fontWeight: 'bold',
    },

    rate: {

    },

    totalPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'underline',
    },
})

export default styles
