import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, Platform, StatusBar } from "react-native";

function Counter() {
    const [count, setCount] = useState(0)
    const [newCount, setNewCount] = useState(0)

    useEffect(() => {
        console.log('count changed')
        return () => {
            console.log('isEffect cleanup')
        }
    }, [count])

    return (
        <View style={styles.container}>
            <Text>{count} </Text>
            <Button color={'red'} title={'Increase the count'} onPress={() => { setCount(count + 1) }} />
            <Button color={'green'} title={'Decrease the count'} onPress={() => { setCount(count - 1)}} />
            <Button color={'red'} title={'Increase the count'} onPress={() => { setNewCount(count + 1) }} />
            <Button color={'green'} title={'Decrease the count'} onPress={() => { setNewCount(count - 1)}} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
})
export default Counter