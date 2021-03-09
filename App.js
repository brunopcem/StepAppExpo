import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, View} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";


// Screens
import { Home, ItemDetail, checkin } from "./screens/";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    boder: "transparent",
  }
};

const Stack = createStackNavigator();

const App = () =>{
  return (
    <View style={{flex: 1, backgroundColor: '#070D2D'}}>
      <NavigationContainer theme={theme}>
            <Stack.Navigator
              screenOptions={{
                headerShown: false
              }}
              initialRouteName={'Home'}
            >
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="ItemDetail" component={ItemDetail} />
              <Stack.Screen name="checkin" component={checkin} />

            </Stack.Navigator>
      </NavigationContainer>
     </View>
  )
}

export default () => {
  return <App />;
}