import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import strings from '../assets/strings/strings_ptBR';
import colors from '../assets/colors/colors';
import sizes from '../assets/sizes/sizes';

const NenhumHorario = props => (
  <View style={styles.container}>
    <Text style={styles.text}>
      { strings.nenhumOnibusMsg }
    </Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundSecondary,
    marginLeft: sizes.marginLeft,
    marginRight: sizes.marginRight,
    borderWidth: 0,
    borderRadius: sizes.gradientCard.borderRadius,
  },
  text: {
    color: '#444'
  }
});

export default NenhumHorario;