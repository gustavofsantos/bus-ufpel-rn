import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Section from '../components/Section';
import sizes from '../assets/sizes/sizes';

const AboutView = (props) => (
  <View style={styles.container}>
    <View>
      <Section>
        Sobre
      </Section>

      <Text style={styles.paragraph}>
        Este aplicativo foi desenhado e desenvolvido por mim, Gustavo Santos. É inteiramente sem fins lucrativos e a única razão deste existir é pela péssima forma com qual os horários dos ônibus institucionais da UFPel são divulgados.
      </Text>

      <Text style={styles.paragraph}>
        Qualquer melhoria na performance, atualização de informações ou 
        feedback qualquer, é bem vinda através do repositório oficial do 
        aplicativo no 
        <Text style={{color: 'blue'}}
        onPress={() => Linking.openURL('https://github.com/gustavofsantos/bus-ufpel-rn')}>
          GitHub: https://github.com/gustavofsantos/bus-ufpel-rn
        </Text>
        .
      </Text>
    </View>

    <View style={styles.containerBottom}>
      <Text style={styles.paragraph}>
        Desenvolvido com ❤ por Gustavo Santos
      </Text>
    </View>
  </View>
);

AboutView.navigationOptions = {
  title: 'Sobre'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  paragraph: {
    marginLeft: sizes.marginLeft,
    marginRight: sizes.marginRight,
    marginBottom: sizes.marginBottom,
  },
  containerBottom: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

export default AboutView;