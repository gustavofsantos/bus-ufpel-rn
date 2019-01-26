import storage from './storage';

const url = 'https://raw.githubusercontent.com/gustavofsantos/horarios-onibus-institucional-ufpel/master/horarios.json';

async function fetchHorarios() {
  try {
    const horarios = await storage.loadData('horarios');
    if (!horarios) {
      const response = await fetch(url);
      const content = await response.json();

      await storage.saveData('horarios', JSON.stringify(content));

      return content;
    } else {
      return JSON.parse(horarios);
    }
  } catch (err) {
    console.error(err);
  }
}

export default fetchHorarios;