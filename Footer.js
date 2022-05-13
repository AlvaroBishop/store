import React from 'react'
import { StyleSheet, Button, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.footer}>
        <Button
            title= "Back"
            onPress={() => navigation.goBack()}
            color='#7ef7bd'
         />
        <Button
            title= "Home"
            onPress={() => navigation.navigate("Home")}
            color='#7ef7bd'
        />
    </View>
  )
}



const styles = StyleSheet.create({
    footer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-around',
        backgroundColor: '#2c2e2d',
        position: 'absolute',
        bottom: 0,
        height: 80,
        width: '100%'
    }
})
export default Footer