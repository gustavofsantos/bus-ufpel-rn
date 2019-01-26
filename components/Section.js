import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../assets/colors/colors';
import sizes from '../assets/sizes/sizes';

const Section = (props) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      {props.children}
    </Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 12,
    marginBottom: 12,
    marginLeft: sizes.marginLeft,
    marginRight: sizes.marginRight,
  },
  text: {
    fontWeight: 'bold',
    fontSize: sizes.section.fontSize,
    color: colors.foregrounPrimary,
  }
});

export default Section;