import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default function WelcomeScreen({ navigation }) { // Get navigation prop
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to SJ-solutions Webshop Builder App!</Text>
            <Button
                title="Login"
                onPress={() => navigation.navigate('Main')} //Navigate to main screen
            />
        </View>
    );
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
});

