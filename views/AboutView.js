import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Section from '../components/Section';
import sizes from '../assets/sizes/sizes';

const AboutView = (props) => (
  <View>
    <Section>
      Sobre
    </Section>

    <Text>
      Este aplicativo foi desenhado e desenvolvido por mim, Gustavo Santos. É inteiramente sem fins lucrativos e a única razão deste existir é pela péssima forma com qual os horários dos ônibus institucionais da UFPel são divulgados.
    </Text>

    <Text>
      Qualquer melhoria na performance, atualização de informações ou feedback qualquer, é bem vinda através do repositório oficial do aplicativo no GitHub: 
    </Text>

  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: sizes.marginLeft,
    marginRight: sizes.marginRight,
  }
});

export default AboutView;