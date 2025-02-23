import React from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';

export default function Main({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Main Screen</Text>
            <Image
                source={require('../../assets/carl-cool.png')}
                style={styles.logo}
            />
            <Button
                title="Go to Welcome Screen"
                onPress={() => navigation.navigate('Welcome')} //Navigate to welcome screen
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
});