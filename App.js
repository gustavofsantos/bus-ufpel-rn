import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { createDrawerNavigator } from 'react-navigation';
import MainView from './views/MainView';
import AboutView from './views/AboutView';

const DrawerNavigator = createDrawerNavigator({
  Home: MainView,
  About: AboutView
});

export default createAppContainer(DrawerNavigator);