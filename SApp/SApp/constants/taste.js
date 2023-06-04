import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Taste = ({ sorce }) => {
    return (
        <View>
            <Text style={styles.text}>口味：{sorce}</Text>
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
export default Taste;
