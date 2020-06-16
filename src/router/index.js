import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {
    GetStarted, Splash, Register, Login, UploadFoto, Home, Pesan,
    Sekolah, PilihGuru, Chatting
} from '../pages'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../component';


const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

const forFade = ({ current }) => ({
    cardStyle: {
        opacity: current.progress,
    },
})

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name='Beranda' component={Home} />
            <Tab.Screen name='Pesan' component={Pesan} />
            <Tab.Screen name='Sekolah' component={Sekolah} />
        </Tab.Navigator>
    )
}


const Router = () => {
    return (
        <Stack.Navigator
            initialRouteName='MainApp'
            screenOptions={{
                headerShown: false,
                cardStyleInterpolator: forFade
            }}
        >
            <Stack.Screen
                name='Splash'
                component={Splash} />

            <Stack.Screen
                name='GetStarted'
                component={GetStarted} />

            <Stack.Screen
                name='Register'
                component={Register} />

            <Stack.Screen
                name='Login'
                component={Login} />

            <Stack.Screen
                name='UploadFoto'
                component={UploadFoto} />

            <Stack.Screen
                name='MainApp'
                component={MainApp} />

            <Stack.Screen
                name='PilihGuru'
                component={PilihGuru} />

            <Stack.Screen
                name='Chatting'
                component={Chatting} />

        </Stack.Navigator>
    )
}

export default Router;