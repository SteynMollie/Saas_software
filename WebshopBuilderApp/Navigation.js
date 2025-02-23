import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, Text, View } from 'react-native';
import WelcomeScreen from './src/screens/WelcomeScreen';
import Main from './src/screens/Main';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={({ route }) => ({
                    headerStyle: {
                        backgroundColor: '#1B4054',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerTitle: () => (
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <Image
                            source={require('./assets/SJ-solutions_logo.png')}
                            style={{ width: 45, height: 45 }}
                          />
                          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginLeft: 45 }}>
                            {route.name} {/* Display the screen name */}
                          </Text>
                        </View>
                    ),
                })}
            >
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Main" component={Main} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}