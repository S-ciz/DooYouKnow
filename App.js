import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
//screens
import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';
import Home from './Screens/Home';
import Folders from './Screens/Folders';
import Folder from './Screens/Folder';
import Chats from "./Screens/Chats"
import ChatField from "./Screens/ChatField"

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{
          headerShown: false, // Hides the header for all screens
        }}
         initialRouteName='SignIn'>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Folders" component={Folders} />
        <Stack.Screen name="Folder" component={Folder} />
        <Stack.Screen name="Chats" component={Chats} />
        <Stack.Screen name="ChatField" component={ChatField} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

