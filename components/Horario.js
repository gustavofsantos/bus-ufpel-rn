import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import sizes from '../assets/sizes/sizes';
import colors from '../assets/colors/colors';

const Horario = ({ horario, ceu }) => (
  <View style={styles.container}>
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
    // marginRight: sizes.marginRight,
    // marginLeft: sizes.marginLeft,
    // marginBottom: sizes.marginBottom,
    // backgroundColor: colors.backgroundSecondary,
    padding: sizes.padding,
    // borderWidth: 0,
    // borderRadius: sizes.horarioCard.borderRadius,
    borderBottomWidth: 1,
    borderBottomColor: '#cdcdcd',
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 12 },
    // shadowOpacity: 0.6,
    // shadowRadius: 4,
    // elevation: 1,
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
};

Horario.defaultProps = {
  horario: '',
  ceu: false
};

export default Horario;