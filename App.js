/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import type {Node} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Button, useColorScheme, View} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Button
        onPress={() => navigation.navigate('ALERT')}
        title="Go to login page"
      />
    </View>
  );
};

const LoginScreen = ({navigation}) => {
  return (
    <View>
      <Button onPress={() => navigation.goBack()} title="Go to ALERT" />
    </View>
  );
};
const Drawer = createDrawerNavigator();

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      {/* <SafeAreaView style={backgroundStyle}> */}
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="ALERT" component={HomeScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
      </Drawer.Navigator>
      {/* </SafeAreaView> */}
    </NavigationContainer>
  );
};

export default App;
