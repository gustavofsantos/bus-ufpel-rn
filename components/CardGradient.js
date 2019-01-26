import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from "expo";
import colors from '../assets/colors/colors';
import sizes from '../assets/sizes/sizes';
import prettyLinha from '../libs/prettyLinha';

/**
 * Return the right pair of colors
 * @param {string} linha 
 * @returns {object} colors
 */
function rightGradients(linha) {
  switch (linha) {
    case 'anglo-ru':
      return colors.gradients[0];
    case 'anglo-med':
      return colors.gradients[1];
    case 'anglo-esef':
      return colors.gradients[2];
    case 'anglo-capao':
      return colors.gradients[3];
    case 'capao-anglo':
      return colors.gradients[4];
    default:
      return {
        color1: '#000',
        color2: '#000'
      }
  }
}

const CardGradient = (props) => {

  const linha = prettyLinha(props.linha);
  const { color1, color2 } = rightGradients(props.linha);

  return (
    <View style={styles.viewContainer}>
      <LinearGradient
        colors={[color1, color2]}
        start={[0.1, 0.1]}
        end={[1, 1]}
        style={styles.gradientContainer} >
        <View style={styles.headerContainer}>
          <Text style={styles.headerLinha}>
            {linha}
          </Text>
          {
            props.observacao ? 
              <Text style={styles.headerTag}>
                CEU
              </Text>
            :
              <Text></Text>
          }
          
        </View>
        <Text style={styles.hour}>
          {props.horario}
        </Text>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  viewContainer: {
    height: sizes.gradientCard.height,
    width: sizes.gradientCard.width,
    marginRight: sizes.marginRight,
    marginLeft: sizes.marginLeft,
    marginBottom: sizes.marginBottom,
  },
  gradientContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: sizes.gradientCard.height,
    width: sizes.gradientCard.width,
    borderWidth: 0,
    borderRadius: sizes.gradientCard.borderRadius,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 1,
    padding: sizes.gradientCard.padding,
  },
  hour: {
    color: colors.foregroundSecondary,
    fontWeight: 'bold',
    fontSize: 60,
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerLinha: {
    color: colors.foregroundSecondary,
    fontWeight: 'bold'
  },
  headerTag: {
    color: colors.foregroundSecondary,
    fontWeight: 'bold'
  }
});

export default CardGradient;