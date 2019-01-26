import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import CardGradient from "./CardGradient";

const HorizontalListGradientCards = (props) => {

  const horarios = props.horarios.map((horario, index) => (
    <CardGradient
      key={index}
      linha={horario.linha}
      observacao={horario.observacao}
      horario={horario.proximoHorario}
    />  
  ));

  return (
    <ScrollView horizontal style={styles.container}>
      {
        horarios
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 'auto',
  }
});

export default HorizontalListGradientCards;