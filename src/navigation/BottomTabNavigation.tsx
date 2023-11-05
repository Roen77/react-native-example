import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {MainTabParamList} from '../types/navigation';
const Tab = createMaterialBottomTabNavigator<MainTabParamList>();
function BottomTabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#ce396a"
      barStyle={{backgroundColor: 'tomato'}}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigation;
