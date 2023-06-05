import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Enviroment = ({ sorce }) => {
    return (
        <View>
            <Text style={styles.text}>环境：{sorce}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        lineHeight: 40,
        marginLeft:150
    }
});
export default Enviroment;