import * as React from 'react';
import {Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/components/Home';
import Banner from './src/components/Banner';
import Profile from './src/components/Profile';
import Detail from './src/components/Detail';
import Map from './src/components/Map';

const Tab = createBottomTabNavigator();

function MyTabs() {

  return (
    
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('./src/components/image/home.png')}
              style={{width: 26, height: 30, }}
            />
          ),
        headerShown: false,
        }}
      />
      <Tab.Screen
        name="Banner"
        component={Banner}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('./src/components/image/notificaion.png')}
              style={{width: 26, height: 30, }}
            />
          ),
        headerShown: false,
        }}
      />
      <Tab.Screen
        name="Plus"
        component={Profile}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('./src/components/image/plus.png')}
              style={{width: 26, height: 30, }}
            />
          ),
        headerShown: false,
        }}
      />
       <Tab.Screen
        name="maps"
        component={Map}
        options={{
          tabBarLabel: 'map',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('./src/components/image/box.png')}
              style={{width: 26, height: 30, }}
            />
          ),
        headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('./src/components/image/profile.png')}
              style={{width: 26, height: 30, }}
            />
          ),
        headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}