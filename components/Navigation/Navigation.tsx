import { useWindowDimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FeedScreen from '../../screens/FeedScreen/FeedScreen';
import Menu from '../Menu/Menu';
import PostScreen from '../../screens/PostScreen/PostScreen';
import IntroScreen from '../../screens/IntroScreen/IntroScreen';
import SignInScreen from '../../screens/SignInScreen/SignInScreen';
import SignUpScreen from '../../screens/SignUpScreen/SignUpScreen';
import SchoolScreen from '../../screens/SchoolScreen/SchoolScreen';
import EntertainmentScreen from '../../screens/EntertainmentsScreen/EntertainmentsScreen';
import CoursesScreen from '../../screens/CoursesScreen/CoursesScreen';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';
import AchievementsScreen from '../../screens/AchievementsScreen/AchievementsScreen';
import OneAchieveScreen from '../../screens/OneAchieveScreen/OneAchieveScreen';
import TaskScreen from '../../screens/TaskScreen/TaskScreen';
import TestScreen from '../../screens/TestScreen/TestScreen';
import React from 'react';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Main: undefined,
  News: undefined,
}

export default function Navigation() {
  const dimensions = useWindowDimensions();

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Интро">
          <Stack.Screen name="Интро" component={IntroScreen} options={{headerShown: false}} />
          <Stack.Screen name="Приложение" component={TabBar} options={{headerShown: false}} />

          <Stack.Screen name="Пост" component={PostScreen} options={{headerShown: false}} />
          <Stack.Screen name="Развлечения" component={EntertainmentScreen} options={{headerShown: false}} />
          <Stack.Screen name="Задание" component={TaskScreen} options={{headerShown: false}} />
          <Stack.Screen name="Тест" component={TestScreen} options={{headerShown: false}} />
          <Stack.Screen name="Курсы" component={CoursesScreen} options={{headerShown: false}} />
          <Stack.Screen name="Школы" component={SchoolScreen} options={{headerShown: false}} />

          <Stack.Screen name="Авторизация" component={SignInScreen} options={{headerShown: false}} />
          <Stack.Screen name="Регистрация" component={SignUpScreen} options={{headerShown: false}} />
          <Stack.Screen name="Профиль" component={ProfileScreen} options={{headerShown: false}} />
          <Stack.Screen name="Достижения" component={AchievementsScreen} options={{headerShown: false}} />
          <Stack.Screen name="Достижение" component={OneAchieveScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const TabBar = () => {
  return(
    <Tab.Navigator initialRouteName="Лента" backBehavior="history" tabBar={(props) => <Menu {...props} />} >
      <Tab.Screen name="Лента" component={FeedScreen} options={{headerShown: false}}/>
      <Tab.Screen name="Развлечения" component={EntertainmentScreen} options={{headerShown: false}} />
      <Tab.Screen name="Задание" component={TaskScreen} options={{headerShown: false}} />
      <Tab.Screen name="Курсы" component={CoursesScreen} options={{headerShown: false}} />
      <Tab.Screen name="Школы" component={SchoolScreen} options={{headerShown: false}} />
      <Tab.Screen name="Профиль" component={ProfileScreen} options={{headerShown: false}} />
      <Tab.Screen name="Достижения" component={AchievementsScreen} options={{headerShown: false}} />
    </Tab.Navigator>
  );
}