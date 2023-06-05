import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Service = ({ sorce }) => {
    return (
        <View>
            <Text style={styles.text}>服务：{sorce}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        lineHeight: 40,
        marginLeft:150,
        marginBottom:20,
    }
});
export default Service;
