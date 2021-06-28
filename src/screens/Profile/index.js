import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'
import { Auth } from 'aws-amplify'

const ProfileScreen = () => {

    const logout = () => {
        Auth.signOut()
    }
    
    return (
        <View style={styles.btnContainer}>
            <Pressable onPress={logout} style={styles.logoutBtn}>
                <Text>Log Out</Text>
            </Pressable>
        </View>
    )
}

export default ProfileScreen
