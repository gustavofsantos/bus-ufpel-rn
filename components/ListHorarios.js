import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import sizes from '../assets/sizes/sizes';
import Horario from './Horario';

const ListHorarios = props => {
  const horarios = props.horarios.map((horario, index) => (
    <Horario
      key={index}
      horario={horario.horario}
      ceu={horario.ceu}
    />
  ));

  return (
    <ScrollView style={styles.container}>
      { horarios }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginLeft: sizes.marginLeft,
    marginRight: sizes.marginRight,
    marginBottom: sizes.marginBottom,
  }
});

export default ListHorarios;