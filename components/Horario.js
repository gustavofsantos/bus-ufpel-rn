import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import sizes from '../assets/sizes/sizes';
import colors from '../assets/colors/colors';

const Horario = ({ horario, ceu, index }) => (
  <View style={ index % 2 == 0 ? styles.container : styles.containerAlt}>
    <Text style={styles.horario}>
      { horario }
    </Text>
    {
      ceu ? 
      <Text style={styles.observacao}>
        CEU
      </Text>
      :
      <Text></Text>
    }
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: sizes.padding,
    borderBottomWidth: 1,
    borderBottomColor: '#cdcdcd',
  },
  containerAlt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#EEEEEE',
    borderBottomWidth: 1,
    borderBottomColor: '#cdcdcd',
    padding: sizes.padding,
  },
  horario: {
    color: colors.foregrounPrimary,
    fontWeight: '600',
    fontSize: 20,
  },
  observacao: {
    color: colors.accent,
    fontWeight: '600',
    fontSize: 20,
  }
});

Horario.propTypes = {
  horario: PropTypes.string,
  ceu: PropTypes.bool,
  index: PropTypes.number
};

Horario.defaultProps = {
  horario: '',
  ceu: false,
  index: 0
};

export default Horario;