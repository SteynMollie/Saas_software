import React from 'react';
import {StyleSheet, View, Text, Button, TextInput} from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';


export default function WelcomeScreen({ navigation }) {
    const [showFields, setShowFields] = React.useState(false);
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const buttonHeight = useSharedValue(60);
    const fieldsOpacity = useSharedValue(0);

    const buttonAnimatedStyle = useAnimatedStyle(() => {
        return {
            height: buttonHeight.value,
        };
    });

    const fieldsAnimatedStyle = useAnimatedStyle(() => {
        return {
            opacity: fieldsOpacity.value,
        };
    });

    const handleLoginPress = () => {
        buttonHeight.value = withTiming(0, { duration: 500 });
        fieldsOpacity.value = withTiming(1, { duration: 500 });
        setShowFields(true);
    };



    return (
        <View style={styles.mainContainer}>
            <View style={styles.title}>
                <Text style={styles.text}>Welcome to the SJ-solutions Webshop Builder App!</Text>
            </View>
            <View style={styles.contentContainer}>
                {showFields? (
                <Animated.View style={[styles.fieldsConatiner, fieldsAnimatedStyle]}>
                    <TextInput
                        style={{ backgroundColor: 'white', color: 'black', width: 200, padding: 10, marginBottom: 10, borderRadius:8 }}
                        placeholder="Username"
                        placeholderTextColor={'lightgray'}
                        value={username}
                        onChangeText={setUsername}
                    />
                    <TextInput
                        style={{ backgroundColor: 'white', color: 'black', width: 200, padding: 10, marginBottom: 10, borderRadius:8 }}
                        placeholderTextColor={'lightgray'}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                    <Animated.View style={[styles.buttonContainer, buttonAnimatedStyle]}>
                        <Button
                            title="Submit"
                            onPress={() => navigation.navigate('Main')} //redirect to main screen
                        />
                    </Animated.View>
                </Animated.View>
            ) : (
                <Button
                    title="Login"
                    onPress={handleLoginPress}
                />
            )}
            </View>
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
        fontSize: 70,
        fontWeight: 'bold',
        marginBottom: 40,
    },
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#faf0e6'
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20
    }
});

