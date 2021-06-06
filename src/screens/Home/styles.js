import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 500,
        resizeMode: 'cover',
        justifyContent: 'center',
    },

    title: {
        fontSize: 80,
        fontWeight: 'bold',
        color: 'white',
        width: '65%',
        marginLeft: 25,
        lineHeight: 80,
    },

    button: {
        backgroundColor: '#fff',
        width: 200,
        height: 40,
        borderRadius: 10,
        marginTop: 25,
        marginLeft: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#323232',
    },

    searchBtn: {
        backgroundColor: '#fff',
        height: 60,
        width: Dimensions.get('screen').width - 50,
        marginHorizontal: 25,
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 20,
        zIndex: 100,
        elevation: 100,
    },

    searchBtnText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 15,
        color: '#323232'
    },
})

export default styles
