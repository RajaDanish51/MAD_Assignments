import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/homeScreen';
import ProfileScreen from './screens/profileScreen';
import SettingsScreen from './screens/settings';

const Tab = createBottomTabNavigator();

export default function App() {
  const [userName, setUserName] = useState("Profile");

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name={userName}>
          {() => <ProfileScreen userName={userName} setUserName={setUserName} />}
        </Tab.Screen>
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
