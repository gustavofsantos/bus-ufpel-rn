import React from 'react';
import { ScrollView, View, StyleSheet, StatusBar, Picker } from 'react-native';
import Section from '../components/Section';
import strings from '../assets/strings/strings_ptBR';
import fetchHorarios from "../libs/fetchHorarios";
import proximoHorario from '../libs/proximoHorario';
import HorizontalListGradientCards from '../components/HorizontalListGradientCards';
import ListHorarios from '../components/ListHorarios';
import prettyLinha from '../libs/prettyLinha';
import sizes from '../assets/sizes/sizes';

export default class MainView extends React.Component {
  linhas = [
    'anglo-ru',
    'anglo-med',
    'anglo-esef',
    'anglo-capao',
    'capao-anglo'
  ];

  state = {
    linha: this.linhas[0],
    horarios: [],
    proximosHorarios: [],
    todosHorarios: []
  }

  onLinhaChange = async linha => {
    try {
      // get horarios

      const res = await fetchHorarios();
      const horarios = res[linha];

      if (this.state.todosHorarios.length > 0) {
        // already populed
        this.setState({
          linha,
          horarios
        });
      } else {
          this.setState({
            linha,
            horarios,
            todosHorarios: res
          });
      }
    } catch (e) {
      console.error(e);
    }
  }

  computProximosHorarios = () => {
    const { todosHorarios } = this.state;
    const linhas = Object.keys(todosHorarios);

    const horarios = linhas.map(linha => {
      const prox = proximoHorario(todosHorarios[linha]);

      if (typeof prox === 'object') {
        return ({
          linha,
          proximoHorario: prox ? prox.horario : '',
          observacao: prox ? prox.ceu ? 'CEU' : '' : ''
        })
      } else {
        return null;
      }
    })
    .filter(horario => horario.proximoHorario ? true : false);

    this.setState({
      proximosHorarios: horarios
    });
  }

  async componentWillMount() {
    await this.onLinhaChange(this.state.linha);
    this.computProximosHorarios();
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <StatusBar
          hidden={false}
          barStyle="dark-content"
          backgroundColor="#EEEEEE"
          translucent={false}
          networkActivityIndicatorVisible={false}
        />

        <View>
          <View />

          {
            this.state.proximosHorarios.length > 0 ?
              <View>
                <Section>
                  {strings.sectionProximosHorarios}
                </Section>

                <HorizontalListGradientCards
                  horarios={this.state.proximosHorarios}
                />
              </View>
            :
              <View></View>
          }

        </View>

        <View>
          <View style={styles.column}>
            <Section>
              {strings.sectionTodosHorarios}
            </Section>

            <Picker 
              selectedValue={this.state.linha}
              style={styles.picker}
              onValueChange={this.onLinhaChange}
            >
              {
                this.linhas.map((linha, index) => (
                  <Picker.Item key={index} label={prettyLinha(linha)} value={linha} />
                ))
              }
            </Picker>
          </View>

          <ListHorarios
            horarios={this.state.horarios}
          />
        </View>
      </ScrollView>
    )
  }
}

MainView.navigationOptions = {
  title: 'Main view'
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  picker: {
    marginLeft: sizes.marginLeft,
    marginRight: sizes.marginRight,
    marginBottom: sizes.marginBottom,
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  icon: {
    width: 24,
    height: 24,
  },
});