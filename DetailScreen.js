import React from 'react';
import {StyleSheet, Button, View, Text, Image} from 'react-native';
import Footer from './Footer';
import styles from './styles';
function DetailScreen({navigation, route}) {

    const {title ,description, stock, url } = route.params;

    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center',}}>
            <Image 
                style={{width: 100, height: 100, padding: 10}}
                source={{uri: url}}
            />
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.text}>{description}</Text>
            <Text >Stock {stock}</Text>

         
            

            <Footer />
        </View>
    );
}


export default DetailScreen;