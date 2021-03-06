import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'space-between',
        height: '100%',
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 25,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey'
    },

    title: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#121212'
    },

    subTitle: {
        color: '#8d8d8d',
        
    },

    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    }, 

    button: {
        borderWidth: 1,
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#676767'
    },

    count: {
        marginHorizontal: 20,
        fontSize: 18,
        color: '#646464'
    },

    plusMinus: {
        fontSize: 24,
        color: '#646464'
    },

    searchBtn: {
        marginBottom: 20,
        backgroundColor: '#f15454',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        marginHorizontal: 20,
        borderRadius: 10,
    },
})

export default styles