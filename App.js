import React from 'react';
import { ScrollView, View, StyleSheet, Platform } from 'react-native';
import { Constants } from 'expo';
import MainView from './views/MainView';
import colors from './assets/colors/colors';

export default class App extends React.Component {

  render() {
    return (
      <ScrollView>
        {/* <View style={styles.statusBar} /> */}
        <MainView />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: Platform.OS === 'android' ? colors.backgroundSecondary : colors.backgroundPrimary,
    height: Constants.statusBarHeight,
  },
});